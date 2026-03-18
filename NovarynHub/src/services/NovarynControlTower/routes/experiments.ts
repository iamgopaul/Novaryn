import { db } from "../db/client";
import { experiments, auditLog, environments, projects, orgMembers } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";
import { jsonResponse, errorResponse } from "../middleware/errorHandler";
import { CreateExperimentSchema, UpdateExperimentSchema } from "../types";

export async function handleExperiments(req: Request, segments: string[]): Promise<Response> {
  const minRole = req.method === "GET" ? "member" as const : "admin" as const;
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response) return auth;
  const { user } = auth;

  // POST /admin/experiments
  if (req.method === "POST" && segments.length === 0) {
    const body = await req.json().catch(() => null);
    const parsed = CreateExperimentSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.message);

    const totalWeight = parsed.data.variants.reduce((sum, v) => sum + v.weight, 0);
    if (totalWeight !== 100) return errorResponse("Variant weights must sum to 100");

    const [env] = await db
      .select({ id: environments.id })
      .from(environments)
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(environments.id, parsed.data.envId), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!env) return errorResponse("Environment not found", 404);

    const [experiment] = await db.insert(experiments).values({
      envId: parsed.data.envId,
      key: parsed.data.key,
      variantsJson: parsed.data.variants,
      status: "draft",
    }).returning();

    await db.insert(auditLog).values({
      actor: user.name,
      action: "create_experiment",
      resource: `experiments/${parsed.data.key}`,
      beforeJson: null,
      afterJson: experiment,
    });

    return jsonResponse(experiment, 201);
  }

  // PUT /admin/experiments/:key
  if (req.method === "PUT" && segments.length === 1) {
    const key = segments[0]!;
    const body = await req.json().catch(() => null);
    const parsed = UpdateExperimentSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.message);

    const [existing] = await db
      .select({
        id: experiments.id,
        envId: experiments.envId,
        key: experiments.key,
        variantsJson: experiments.variantsJson,
        status: experiments.status,
        version: experiments.version,
        updatedAt: experiments.updatedAt,
        createdAt: experiments.createdAt,
      })
      .from(experiments)
      .innerJoin(environments, eq(experiments.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(experiments.key, key), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!existing) return errorResponse("Experiment not found", 404);

    const updates: Record<string, unknown> = {};
    if (parsed.data.variants) updates.variantsJson = parsed.data.variants;
    if (parsed.data.status) updates.status = parsed.data.status;

    const [updated] = await db.update(experiments)
      .set({ ...updates, version: existing.version + 1, updatedAt: new Date() })
      .where(eq(experiments.key, key))
      .returning();

    await db.insert(auditLog).values({
      actor: user.name,
      action: "update_experiment",
      resource: `experiments/${key}`,
      beforeJson: existing,
      afterJson: updated,
    });

    return jsonResponse(updated);
  }

  // GET /admin/experiments
  if (req.method === "GET" && segments.length === 0) {
    const all = await db
      .select({
        id: experiments.id,
        envId: experiments.envId,
        key: experiments.key,
        variantsJson: experiments.variantsJson,
        status: experiments.status,
        version: experiments.version,
        updatedAt: experiments.updatedAt,
        createdAt: experiments.createdAt,
      })
      .from(experiments)
      .innerJoin(environments, eq(experiments.envId, environments.id))
      .innerJoin(projects, eq(environments.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(eq(orgMembers.userId, user.id));
    return jsonResponse(all);
  }

  return errorResponse("Not found", 404);
}
