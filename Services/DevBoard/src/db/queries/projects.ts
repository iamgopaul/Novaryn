import { and, count, eq } from "drizzle-orm";
import { db } from "../index";
import { boards, cards, columns, projects } from "../schema";

const defaultColumns = [
  { name: "Backlog", code: "backlog" },
  { name: "Ready", code: "ready" },
  { name: "In Development", code: "in_dev" },
  { name: "In Review", code: "in_review" },
  { name: "Done", code: "done" },
];

export async function createProjectWithDefaultBoard(input: {
  name: string;
  key: string;
  description?: string;
  ownerUserId: string;
}) {
  return db.transaction(async (tx) => {
    const [project] = await tx
      .insert(projects)
      .values({
        owner_user_id: input.ownerUserId,
        name: input.name,
        key: input.key,
        description: input.description,
      })
      .returning();

    const [board] = await tx
      .insert(boards)
      .values({
        project_id: project.id,
        name: `${project.name} Board`,
      })
      .returning();

    await tx.insert(columns).values(
      defaultColumns.map((column, index) => ({
        board_id: board.id,
        name: column.name,
        code: column.code,
        position: index,
      }))
    );

    return { project, board };
  });
}

export async function listProjectsForUser(ownerUserId: string) {
  const rows = await db.select().from(projects).where(eq(projects.owner_user_id, ownerUserId));
  return rows;
}

export async function getProjectSummary(projectId: string, ownerUserId: string) {
  const [project] = await db
    .select()
    .from(projects)
    .where(and(eq(projects.id, projectId), eq(projects.owner_user_id, ownerUserId)));
  if (!project) return null;

  const [total] = await db
    .select({ value: count() })
    .from(cards)
    .innerJoin(boards, eq(boards.id, cards.board_id))
    .where(eq(boards.project_id, project.id));

  const statusRows = await db
    .select({ code: columns.code, name: columns.name, value: count() })
    .from(columns)
    .leftJoin(cards, eq(cards.column_id, columns.id))
    .innerJoin(boards, eq(boards.id, columns.board_id))
    .where(eq(boards.project_id, project.id))
    .groupBy(columns.code, columns.name, columns.position)
    .orderBy(columns.position);

  return {
    project,
    totalCards: Number(total.value),
    statusBreakdown: statusRows.map((row) => ({
      code: row.code,
      name: row.name,
      total: Number(row.value),
    })),
  };
}
