import { getBoardForUser } from "../db/queries/boards";
import { json } from "../utils/json";
import { requireRequestUserId } from "../utils/requestUser";

export async function handleGetBoard(req: Request, boardId: string): Promise<Response> {
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

  return json(board);
}
