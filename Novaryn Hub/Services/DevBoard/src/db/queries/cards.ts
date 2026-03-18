import { and, desc, eq, max } from "drizzle-orm";
import { db } from "../index";
import { boards, cards, columns, projects } from "../schema";

export async function createCardOnBoard(input: {
  boardId: string;
  columnId: string;
  title: string;
  description?: string;
  assigneeUserId?: string;
  priority?: string;
  storyPoints?: number;
  dueAt?: Date;
}) {
  const [positionRow] = await db
    .select({ value: max(cards.position) })
    .from(cards)
    .where(eq(cards.column_id, input.columnId));

  const nextPosition = (positionRow.value ?? -1) + 1;

  const [card] = await db
    .insert(cards)
    .values({
      board_id: input.boardId,
      column_id: input.columnId,
      title: input.title,
      description: input.description,
      assignee_user_id: input.assigneeUserId,
      priority: input.priority ?? "medium",
      story_points: input.storyPoints,
      due_at: input.dueAt,
      position: nextPosition,
    })
    .returning();

  return card;
}

export async function getCardForUser(cardId: string, ownerUserId: string) {
  const [row] = await db
    .select({
      id: cards.id,
      board_id: cards.board_id,
      column_id: cards.column_id,
      title: cards.title,
      description: cards.description,
      assignee_user_id: cards.assignee_user_id,
      priority: cards.priority,
      story_points: cards.story_points,
      due_at: cards.due_at,
      position: cards.position,
      created_at: cards.created_at,
      updated_at: cards.updated_at,
    })
    .from(cards)
    .innerJoin(boards, eq(boards.id, cards.board_id))
    .innerJoin(projects, eq(projects.id, boards.project_id))
    .where(and(eq(cards.id, cardId), eq(projects.owner_user_id, ownerUserId)));

  return row;
}

export async function updateCard(cardId: string, updates: Record<string, unknown>) {
  const [card] = await db
    .update(cards)
    .set({
      ...updates,
      updated_at: new Date(),
    })
    .where(eq(cards.id, cardId))
    .returning();
  return card;
}

export async function getBoardForCard(cardId: string) {
  const [row] = await db
    .select({ board_id: cards.board_id })
    .from(cards)
    .where(eq(cards.id, cardId));
  return row?.board_id ?? null;
}

export async function verifyColumnOnBoard(boardId: string, columnId: string) {
  const [column] = await db
    .select()
    .from(columns)
    .where(and(eq(columns.id, columnId), eq(columns.board_id, boardId)));
  return column;
}

export async function lastCardPositionInColumn(columnId: string) {
  const [row] = await db
    .select({ value: max(cards.position) })
    .from(cards)
    .where(eq(cards.column_id, columnId));
  return row.value ?? -1;
}
