import { getCardForUser, updateCard } from "../db/queries/cards";
import { json } from "../utils/json";
import { requireRequestUserId } from "../utils/requestUser";
import { updateCardSchema } from "../utils/validate";

export async function handleUpdateCard(req: Request, cardId: string): Promise<Response> {
  let ownerUserId: string;
  try {
    ownerUserId = requireRequestUserId(req);
  } catch {
    return json({ error: "Missing user identity" }, 401);
  }

  const card = await getCardForUser(cardId, ownerUserId);
  if (!card) {
    return json({ error: "Card not found" }, 404);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const parsed = updateCardSchema.safeParse(body);
  if (!parsed.success) {
    return json({ errors: parsed.error.flatten() }, 400);
  }

  const updates: Record<string, unknown> = {};
  if (parsed.data.title !== undefined) updates.title = parsed.data.title;
  if (parsed.data.description !== undefined) updates.description = parsed.data.description;
  if (parsed.data.assigneeUserId !== undefined) updates.assignee_user_id = parsed.data.assigneeUserId;
  if (parsed.data.priority !== undefined) updates.priority = parsed.data.priority;
  if (parsed.data.storyPoints !== undefined) updates.story_points = parsed.data.storyPoints;
  if (parsed.data.dueAt !== undefined) updates.due_at = parsed.data.dueAt ? new Date(parsed.data.dueAt) : null;

  const updated = await updateCard(cardId, updates);
  return json(updated);
}
