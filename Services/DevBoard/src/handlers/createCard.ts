import { getBoardForUser, getColumnForBoard, getFirstColumnForBoard } from "../db/queries/boards";
import { createCardOnBoard } from "../db/queries/cards";
import { json } from "../utils/json";
import { requireRequestUserId } from "../utils/requestUser";
import { createCardSchema } from "../utils/validate";

export async function handleCreateCard(req: Request, boardId: string): Promise<Response> {
  let ownerUserId: string;
  try {
    ownerUserId = requireRequestUserId(req);
  } catch {
    return json({ error: "Missing user identity" }, 401);
  }

  const board = await getBoardForUser(boardId, ownerUserId);
  if (!board) {
    return json({ error: "Board not found" }, 404);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const parsed = createCardSchema.safeParse(body);
  if (!parsed.success) {
    return json({ errors: parsed.error.flatten() }, 400);
  }

  const requestedColumnId = parsed.data.columnId;
  let targetColumnId: string;

  if (requestedColumnId) {
    const column = await getColumnForBoard(boardId, requestedColumnId);
    if (!column) return json({ error: "Column not found on board" }, 400);
    targetColumnId = column.id;
  } else {
    const firstColumn = await getFirstColumnForBoard(boardId);
    if (!firstColumn) return json({ error: "Board has no columns" }, 400);
    targetColumnId = firstColumn.id;
  }

  const card = await createCardOnBoard({
    boardId,
    columnId: targetColumnId,
    title: parsed.data.title,
    description: parsed.data.description,
    assigneeUserId: parsed.data.assigneeUserId,
    priority: parsed.data.priority,
    storyPoints: parsed.data.storyPoints,
    dueAt: parsed.data.dueAt ? new Date(parsed.data.dueAt) : undefined,
  });

  return json(card, 201);
}
