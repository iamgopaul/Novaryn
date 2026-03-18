import { db } from "../db/client";
import { flags, flagRules, auditLog, environments, projects, orgMembers } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";
import { jsonResponse, errorResponse } from "../middleware/errorHandler";
import { CreateFlagSchema, UpdateFlagSchema, CreateRuleSchema } from "../types";
import { broadcast } from "./stream";

async function getProjectEnvNames(envId: string): Promise<{ project: string; env: string } | null> {
  const [row] = await db
    .select({ project: projects.name, env: environments.name })
    .from(environments)
    .innerJoin(projects, eq(environments.projectId, projects.id))
    .where(eq(environments.id, envId))
    .limit(1);
  return row ?? null;
}

async function canAccessEnvironment(userId: string, envId: string): Promise<boolean> {
  const [row] = await db
    .select({ id: environments.id })
    .from(environments)
    .innerJoin(projects, eq(environments.projectId, projects.id))
    .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
    .where(and(eq(environments.id, envId), eq(orgMembers.userId, userId)))
    .limit(1);
  return !!row;
}

export async function handleFlags(req: Request, segments: string[]): Promise<Response> {
  const minRole = req.method === "GET" ? "member" as const : "admin" as const;
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response) return auth;
  const { user } = auth;

  // POST /admin/flags
  if (req.method === "POST" && segments.length === 0) {
    const body = await req.json().catch(() => null);
    const parsed = CreateFlagSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.message);

    const { envId, key, type, defaultValue, enabled } = parsed.data;

    if (!(await canAccessEnvironment(user.id, envId))) {
      return errorResponse("Environment not found", 404);
    }

    const existing = await db.select().from(flags)
      .where(and(eq(flags.envId, envId), eq(flags.key, key)))
      .limit(1);

    if (existing.length > 0) return errorResponse("Flag key already exists in this environment", 409);

    const [flag] = await db.insert(flags).values({
      envId,
      key,
      type,
      defaultValueJson: defaultValue ?? false,
      enabled,
    }).returning();

    await db.insert(auditLog).values({
      actor: user.name,
      action: "create_flag",
      resource: `flags/${key}`,
      beforeJson: null,
      afterJson: flag,
    });

    const names = await getProjectEnvNames(envId);
    if (names) broadcast(names.project, names.env, { type: "flag_created", flag });

    return jsonResponse(flag!, 201);
  }

  // PUT /admin/flags/:key
  if (req.method === "PUT" && segments.length === 1) {
    const key = segments[0]!;
    const body = await req.json().catch(() => null);
    const parsed = UpdateFlagSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.message);

    const [existing] = await db
      .select({
        id: flags.id,
        envId: flags.envId,
        key: flags.key,
        type: flags.type,
        defaultValueJson: flags.defaultValueJson,
        enabled: flags.enabled,
        version: flags.version,
        updatedAt: flags.updatedAt,
        createdAt: flags.createdAt,
      })
      .from(flags)
      .innerJoin(environments, eq(flags.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(flags.key, key), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!existing) return errorResponse("Flag not found", 404);

    const updates: Partial<typeof existing> = {};
    if (parsed.data.enabled !== undefined) updates.enabled = parsed.data.enabled;
    if (parsed.data.defaultValue !== undefined) updates.defaultValueJson = parsed.data.defaultValue;

    const [updated] = await db.update(flags)
      .set({ ...updates, version: existing.version + 1, updatedAt: new Date() })
      .where(eq(flags.key, key))
      .returning();

    await db.insert(auditLog).values({
      actor: user.name,
      action: "update_flag",
      resource: `flags/${key}`,
      beforeJson: existing,
      afterJson: updated,
    });

    const names = await getProjectEnvNames(existing.envId);
    if (names) broadcast(names.project, names.env, { type: "flag_updated", flag: updated });

    return jsonResponse(updated!);
  }

  // GET /admin/flags
  if (req.method === "GET" && segments.length === 0) {
    const all = await db
      .select({
        id: flags.id,
        envId: flags.envId,
        key: flags.key,
        type: flags.type,
        defaultValueJson: flags.defaultValueJson,
        enabled: flags.enabled,
        version: flags.version,
        updatedAt: flags.updatedAt,
        createdAt: flags.createdAt,
      })
      .from(flags)
      .innerJoin(environments, eq(flags.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(eq(orgMembers.userId, user.id));
    return jsonResponse(all);
  }

  // DELETE /admin/flags/:key
  if (req.method === "DELETE" && segments.length === 1) {
    const key = segments[0]!;
    const [flag] = await db
      .select({
        id: flags.id,
        envId: flags.envId,
        key: flags.key,
        type: flags.type,
        defaultValueJson: flags.defaultValueJson,
        enabled: flags.enabled,
        version: flags.version,
        updatedAt: flags.updatedAt,
        createdAt: flags.createdAt,
      })
      .from(flags)
      .innerJoin(environments, eq(flags.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(flags.key, key), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!flag) return errorResponse("Flag not found", 404);

    await db.delete(flagRules).where(eq(flagRules.flagId, flag.id));
    await db.delete(flags).where(eq(flags.id, flag.id));

    await db.insert(auditLog).values({
      actor: user.name,
      action: "delete_flag",
      resource: `flags/${key}`,
      beforeJson: flag,
      afterJson: null,
    });

    const names = await getProjectEnvNames(flag.envId);
    if (names) broadcast(names.project, names.env, { type: "flag_deleted", flagKey: key });

    return jsonResponse({ deleted: true });
  }

  // POST /admin/flags/:key/rules
  if (req.method === "POST" && segments.length === 2 && segments[1] === "rules") {
    const key = segments[0]!;
    const body = await req.json().catch(() => null);
    const parsed = CreateRuleSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.message);

    const [flag] = await db
      .select({ id: flags.id, envId: flags.envId, key: flags.key })
      .from(flags)
      .innerJoin(environments, eq(flags.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(flags.key, key), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!flag) return errorResponse("Flag not found", 404);

    const [rule] = await db.insert(flagRules).values({
      flagId: flag.id,
      priority: parsed.data.priority,
      ruleJson: parsed.data.rule,
    }).returning();

    if (!rule) return errorResponse("Failed to create rule", 500);

    await db.insert(auditLog).values({
      actor: user.name,
      action: "create_rule",
      resource: `flags/${key}/rules/${rule.id}`,
      beforeJson: null,
      afterJson: rule,
    });

    const names = await getProjectEnvNames(flag.envId);
    if (names) broadcast(names.project, names.env, { type: "flag_rules_updated", flagKey: key });

    return jsonResponse(rule, 201);
  }

  // GET /admin/flags/:key/rules
  if (req.method === "GET" && segments.length === 2 && segments[1] === "rules") {
    const key = segments[0]!;
    const [flag] = await db
      .select({ id: flags.id })
      .from(flags)
      .innerJoin(environments, eq(flags.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(flags.key, key), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!flag) return errorResponse("Flag not found", 404);

    const rules = await db.select().from(flagRules).where(eq(flagRules.flagId, flag.id));
    return jsonResponse(rules);
  }

  // DELETE /admin/flags/:key/rules/:ruleId
  if (req.method === "DELETE" && segments.length === 3 && segments[1] === "rules") {
    const key = segments[0]!;
    const ruleId = segments[2]!;

    const [flag] = await db
      .select({ id: flags.id, envId: flags.envId })
      .from(flags)
      .innerJoin(environments, eq(flags.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(flags.key, key), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!flag) return errorResponse("Flag not found", 404);

    const [deleted] = await db.delete(flagRules)
      .where(and(eq(flagRules.id, ruleId), eq(flagRules.flagId, flag.id)))
      .returning();

    if (!deleted) return errorResponse("Rule not found", 404);

    await db.insert(auditLog).values({
      actor: user.name,
      action: "delete_rule",
      resource: `flags/${key}/rules/${ruleId}`,
      beforeJson: deleted,
      afterJson: null,
    });

    const names = await getProjectEnvNames(flag.envId);
    if (names) broadcast(names.project, names.env, { type: "flag_rules_updated", flagKey: key });

    return jsonResponse({ deleted: true });
  }

  return errorResponse("Not found", 404);
}
