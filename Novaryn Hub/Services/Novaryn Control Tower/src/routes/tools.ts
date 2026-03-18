import { and, desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "../db/client";
import { toolRuns } from "../db/schema";
import { requireAuth } from "../middleware/auth";
import { errorResponse, jsonResponse } from "../middleware/errorHandler";

const ToolKeySchema = z.enum(["json-studio", "url-workbench", "hash-generator"]);

const CreateToolRunSchema = z.object({
  toolKey: ToolKeySchema,
  inputText: z.string().max(20000),
  outputText: z.string().max(50000),
});

function parseLimit(url: URL): number {
  const raw = Number(url.searchParams.get("limit") ?? 10);
  if (!Number.isFinite(raw)) return 10;
  return Math.max(1, Math.min(50, Math.floor(raw)));
}

export async function handleTools(req: Request, segments: string[]): Promise<Response> {
  if (segments[0] !== "runs") return errorResponse("Not found", 404);

  const auth = await requireAuth(req, "member");
  if (auth instanceof Response) return auth;

  if (req.method === "GET") {
    const url = new URL(req.url);
    const limit = parseLimit(url);
    const toolKey = url.searchParams.get("toolKey");

    const whereClause = toolKey
      ? and(eq(toolRuns.userId, auth.user.id), eq(toolRuns.toolKey, toolKey))
      : eq(toolRuns.userId, auth.user.id);

    const rows = await db
      .select({
        id: toolRuns.id,
        toolKey: toolRuns.toolKey,
        inputText: toolRuns.inputText,
        outputText: toolRuns.outputText,
        createdAt: toolRuns.createdAt,
      })
      .from(toolRuns)
      .where(whereClause)
      .orderBy(desc(toolRuns.createdAt))
      .limit(limit);

    return jsonResponse(rows);
  }

  if (req.method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = CreateToolRunSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid tool run payload", 400);

    const [row] = await db
      .insert(toolRuns)
      .values({
        userId: auth.user.id,
        toolKey: parsed.data.toolKey,
        inputText: parsed.data.inputText,
        outputText: parsed.data.outputText,
      })
      .returning({
        id: toolRuns.id,
        toolKey: toolRuns.toolKey,
        inputText: toolRuns.inputText,
        outputText: toolRuns.outputText,
        createdAt: toolRuns.createdAt,
      });

    return jsonResponse(row, 201);
  }

  return errorResponse("Method not allowed", 405);
}
