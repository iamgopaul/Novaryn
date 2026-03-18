import { db } from "../db/client";
import { sdkKeys, projects, orgMembers } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";
import { jsonResponse, errorResponse } from "../middleware/errorHandler";
import { z } from "zod";

const CreateSdkKeySchema = z.object({
  projectId: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
  name: z.string().min(1).max(100),
});

function generateKey(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return "ct_" + Array.from(bytes).map((b) => chars[b % chars.length]).join("");
}

async function hashKey(key: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(key));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function handleSdkKeys(req: Request, segments: string[]): Promise<Response> {
  const minRole = req.method === "GET" ? "member" as const : "admin" as const;
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response) return auth;
  const { user } = auth;

  // GET /admin/sdk-keys
  if (req.method === "GET" && segments.length === 0) {
    const keys = await db.select({
      id: sdkKeys.id,
      name: sdkKeys.name,
      prefix: sdkKeys.prefix,
      keyPlain: sdkKeys.keyPlain,
      projectId: sdkKeys.projectId,
      createdAt: sdkKeys.createdAt,
    })
      .from(sdkKeys)
      .innerJoin(projects, eq(sdkKeys.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(eq(orgMembers.userId, user.id));
    return jsonResponse(keys);
  }

  // POST /admin/sdk-keys
  if (req.method === "POST" && segments.length === 0) {
    const body = await req.json().catch(() => null);
    const parsed = CreateSdkKeySchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.message);

    const [project] = await db
      .select({ id: projects.id })
      .from(projects)
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(projects.id, parsed.data.projectId), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!project) return errorResponse("Project not found", 404);

    const plainKey = generateKey();
    const keyHash = await hashKey(plainKey);
    const prefix = plainKey.slice(0, 12);

    const [record] = await db.insert(sdkKeys).values({
      projectId: parsed.data.projectId,
      name: parsed.data.name,
      keyHash,
      keyPlain: plainKey,
      prefix,
    }).returning();

    return jsonResponse({ ...record, key: plainKey }, 201);
  }

  // DELETE /admin/sdk-keys/:id
  if (req.method === "DELETE" && segments.length === 1) {
    const id = segments[0]!;
    const [record] = await db
      .select({ id: sdkKeys.id })
      .from(sdkKeys)
      .innerJoin(projects, eq(sdkKeys.projectId, projects.id))
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(sdkKeys.id, id), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!record) return errorResponse("SDK key not found", 404);

    const [deleted] = await db.delete(sdkKeys).where(eq(sdkKeys.id, record.id)).returning();
    if (!deleted) return errorResponse("SDK key not found", 404);
    return jsonResponse({ deleted: true });
  }

  return errorResponse("Not found", 404);
}

// Exported for use in evaluate/stream auth
export async function resolveSdkKey(rawKey: string): Promise<{ projectId: string } | null> {
  const keyHash = await hashKey(rawKey);
  const [record] = await db.select({ projectId: sdkKeys.projectId })
    .from(sdkKeys).where(eq(sdkKeys.keyHash, keyHash)).limit(1);
  return record ?? null;
}
