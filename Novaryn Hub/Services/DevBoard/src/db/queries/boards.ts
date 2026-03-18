import { and, asc, eq } from "drizzle-orm";
import { db } from "../index";
import { boards, cards, columns, projects } from "../schema";

export async function getBoardForUser(boardId: string, ownerUserId: string) {
  const [boardRow] = await db
    .select({
      id: boards.id,
      name: boards.name,
      project_id: boards.project_id,
      project_name: projects.name,
      project_key: projects.key,
    })
    .from(boards)
    .innerJoin(projects, eq(projects.id, boards.project_id))
    .where(and(eq(boards.id, boardId), eq(projects.owner_user_id, ownerUserId)));

  if (!boardRow) return null;

  const boardColumns = await db
    .select()
    .from(columns)
    .where(eq(columns.board_id, boardId))
    .orderBy(asc(columns.position));

  const boardCards = await db
    .select()
    .from(cards)
    .where(eq(cards.board_id, boardId))
    .orderBy(asc(cards.position), asc(cards.created_at));

  return {
    board: {
      id: boardRow.id,
      name: boardRow.name,
      project: {
        id: boardRow.project_id,
        name: boardRow.project_name,
        key: boardRow.project_key,
      },
    },
    columns: boardColumns.map((column) => ({
      ...column,
      cards: boardCards.filter((card) => card.column_id === column.id),
    })),
  };
}

export async function getFirstColumnForBoard(boardId: string) {
  const [column] = await db
    .select()
    .from(columns)
    .where(eq(columns.board_id, boardId))
    .orderBy(asc(columns.position));
  return column;
}

export async function getColumnForBoard(boardId: string, columnId: string) {
  const [column] = await db
    .select()
    .from(columns)
    .where(and(eq(columns.id, columnId), eq(columns.board_id, boardId)));
  return column;
}
