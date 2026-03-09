import { db } from "../db/client";
import { orgs, projects, environments, orgMembers } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";
import { jsonResponse, errorResponse } from "../middleware/errorHandler";
import { CreateOrgSchema, CreateProjectSchema, CreateEnvironmentSchema } from "../types";

export async function handleAdmin(req: Request, segments: string[]): Promise<Response> {
  const minRole = req.method === "GET" ? "member" as const : "admin" as const;
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response) return auth;
  const { user } = auth;

  const resource = segments[0]; // "orgs" | "projects" | "environments"

  // --- Orgs ---
  if (resource === "orgs") {
    if (req.method === "GET") {
      const rows = await db
        .select({ id: orgs.id, name: orgs.name, createdAt: orgs.createdAt })
        .from(orgs)
        .innerJoin(orgMembers, eq(orgMembers.orgId, orgs.id))
        .where(eq(orgMembers.userId, user.id));
      return jsonResponse(rows);
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => null);
      const parsed = CreateOrgSchema.safeParse(body);
      if (!parsed.success) return errorResponse(parsed.error.message);
      const [org] = await db.insert(orgs).values({ name: parsed.data.name }).returning();
      await db.insert(orgMembers).values({ orgId: org!.id, userId: user.id, role: "owner" });
      return jsonResponse(org!, 201);
    }
  }

  // --- Projects ---
  if (resource === "projects") {
    if (req.method === "GET") {
      const rows = await db
        .select({ id: projects.id, orgId: projects.orgId, name: projects.name, createdAt: projects.createdAt })
        .from(projects)
        .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
        .where(eq(orgMembers.userId, user.id));
      return jsonResponse(rows);
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => null);
      const parsed = CreateProjectSchema.safeParse(body);
      if (!parsed.success) return errorResponse(parsed.error.message);

      const desiredOrgId = parsed.data.orgId;

      if (!desiredOrgId) {
        const [membership] = await db
          .select({ orgId: orgMembers.orgId })
          .from(orgMembers)
          .where(eq(orgMembers.userId, user.id))
          .limit(1);
        if (!membership) return errorResponse("Org not found", 404);

        const [project] = await db.insert(projects).values({
          orgId: membership.orgId,
          name: parsed.data.name,
        }).returning();
        return jsonResponse(project!, 201);
      }

      const [org] = await db
        .select({ id: orgs.id })
        .from(orgs)
        .innerJoin(orgMembers, eq(orgMembers.orgId, orgs.id))
        .where(and(eq(orgs.id, desiredOrgId), eq(orgMembers.userId, user.id)))
        .limit(1);
      if (!org) return errorResponse("Org not found", 404);

      const [project] = await db.insert(projects).values({
        orgId: desiredOrgId,
        name: parsed.data.name,
      }).returning();
      return jsonResponse(project!, 201);
    }
  }

  // --- Environments ---
  if (resource === "environments") {
    if (req.method === "GET") {
      const rows = await db
        .select({ id: environments.id, projectId: environments.projectId, name: environments.name, createdAt: environments.createdAt })
        .from(environments)
        .innerJoin(projects, eq(environments.projectId, projects.id))
        .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
        .where(eq(orgMembers.userId, user.id));
      return jsonResponse(rows);
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => null);
      const parsed = CreateEnvironmentSchema.safeParse(body);
      if (!parsed.success) return errorResponse(parsed.error.message);

      const [project] = await db
        .select({ id: projects.id })
        .from(projects)
        .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
        .where(and(eq(projects.id, parsed.data.projectId), eq(orgMembers.userId, user.id)))
        .limit(1);
      if (!project) return errorResponse("Project not found", 404);

      const [env] = await db.insert(environments).values({
        projectId: parsed.data.projectId,
        name: parsed.data.name,
      }).returning();
      return jsonResponse(env!, 201);
    }
  }

  return errorResponse("Not found", 404);
}
