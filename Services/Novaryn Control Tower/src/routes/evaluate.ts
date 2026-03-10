import { db } from "../db/client";
import { flags, flagRules, environments, projects } from "../db/schema";
import { eq, and, inArray } from "drizzle-orm";
import { jsonResponse, errorResponse } from "../middleware/errorHandler";
import { evaluateFlag } from "../engine/evaluator";
import { EvaluateQuerySchema } from "../types";

export async function handleEvaluate(req: Request, scopedProjectId?: string): Promise<Response> {
  const url = new URL(req.url);

  const parsed = EvaluateQuerySchema.safeParse({
    project: url.searchParams.get("project"),
    env: url.searchParams.get("env"),
    userId: url.searchParams.get("userId"),
    keys: url.searchParams.get("keys"),
  });

  if (!parsed.success) return errorResponse(parsed.error.message);

  const { project, env, userId, keys } = parsed.data;

  if (!scopedProjectId && !project) {
    return errorResponse("project is required when not using an SDK key", 400);
  }

  const keyList = keys.split(",").map((k) => k.trim()).filter(Boolean);

  // Resolve env — if SDK key is scoped to a project, enforce that project
  const whereClause = scopedProjectId
    ? and(eq(projects.id, scopedProjectId), eq(environments.name, env))
    : and(eq(projects.name, project!), eq(environments.name, env));

  const [envRecord] = await db
    .select({ id: environments.id })
    .from(environments)
    .innerJoin(projects, eq(environments.projectId, projects.id))
    .where(whereClause)
    .limit(1);

  if (!envRecord) return errorResponse("Project or environment not found", 404);

  // Load matching flags
  const flagRecords = await db
    .select()
    .from(flags)
    .where(and(eq(flags.envId, envRecord.id), inArray(flags.key, keyList)));

  // Load rules for those flags
  const flagIds = flagRecords.map((f: (typeof flagRecords)[number]) => f.id);
  const rules = flagIds.length > 0
    ? await db.select().from(flagRules).where(inArray(flagRules.flagId, flagIds))
    : [];

  // Build rule map
  const rulesByFlagId = new Map<string, typeof rules>();
  for (const rule of rules) {
    if (!rulesByFlagId.has(rule.flagId)) rulesByFlagId.set(rule.flagId, []);
    rulesByFlagId.get(rule.flagId)!.push(rule);
  }

  // Evaluate each flag
  const results = flagRecords.map((flag: (typeof flagRecords)[number]) => {
    const flagWithRules = {
      key: flag.key,
      type: flag.type,
      defaultValueJson: flag.defaultValueJson,
      enabled: flag.enabled,
      version: flag.version,
      rules: rulesByFlagId.get(flag.id) ?? [],
    };
    return evaluateFlag(flagWithRules, userId);
  });

  return jsonResponse({ userId, flags: results });
}
