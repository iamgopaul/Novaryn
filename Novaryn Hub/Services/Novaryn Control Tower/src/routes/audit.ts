import { db } from "../db/client";
import { auditLog } from "../db/schema";
import { desc } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";
import { jsonResponse } from "../middleware/errorHandler";

export async function handleAudit(req: Request): Promise<Response> {
  const auth = await requireAuth(req, "member");
  if (auth instanceof Response) return auth;

  const url = new URL(req.url);
  const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "50"), 200);

  const logs = await db
    .select()
    .from(auditLog)
    .orderBy(desc(auditLog.createdAt))
    .limit(limit);

  return jsonResponse(logs);
}
