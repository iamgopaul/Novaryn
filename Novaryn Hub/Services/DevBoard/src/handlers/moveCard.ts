import { getCardForUser, getBoardForCard, lastCardPositionInColumn, updateCard, verifyColumnOnBoard } from "../db/queries/cards";
import { json } from "../utils/json";
import { requireRequestUserId } from "../utils/requestUser";
import { moveCardSchema } from "../utils/validate";

export async function handleMoveCard(req: Request, cardId: string): Promise<Response> {
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

  const parsed = moveCardSchema.safeParse(body);
  if (!parsed.success) {
    return json({ errors: parsed.error.flatten() }, 400);
  }

  const boardId = await getBoardForCard(cardId);
  if (!boardId) {
    return json({ error: "Card board not found" }, 404);
  }

  const targetColumn = await verifyColumnOnBoard(boardId, parsed.data.columnId);
  if (!targetColumn) {
    return json({ error: "Target column does not belong to this board" }, 400);
  }

  const fallbackPosition = (await lastCardPositionInColumn(targetColumn.id)) + 1;
  const updated = await updateCard(cardId, {
    column_id: targetColumn.id,
    position: parsed.data.position ?? fallbackPosition,
  });

  return json(updated);
}
