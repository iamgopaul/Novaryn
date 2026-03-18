import { integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  owner_user_id: text("owner_user_id").notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  key: varchar("key", { length: 10 }).notNull().unique(),
  description: text("description"),
  created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const boards = pgTable("boards", {
  id: uuid("id").primaryKey().defaultRandom(),
  project_id: uuid("project_id")
    .notNull()
    .references(() => projects.id),
  name: varchar("name", { length: 100 }).notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const columns = pgTable("columns", {
  id: uuid("id").primaryKey().defaultRandom(),
  board_id: uuid("board_id")
    .notNull()
    .references(() => boards.id),
  name: varchar("name", { length: 100 }).notNull(),
  code: varchar("code", { length: 32 }).notNull(),
  position: integer("position").notNull().default(0),
  created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const cards = pgTable("cards", {
  id: uuid("id").primaryKey().defaultRandom(),
  board_id: uuid("board_id")
    .notNull()
    .references(() => boards.id),
  column_id: uuid("column_id")
    .notNull()
    .references(() => columns.id),
  title: varchar("title", { length: 200 }).notNull(),
  description: text("description"),
  assignee_user_id: text("assignee_user_id"),
  priority: varchar("priority", { length: 16 }).notNull().default("medium"),
  story_points: integer("story_points"),
  due_at: timestamp("due_at", { withTimezone: true }),
  position: integer("position").notNull().default(0),
  created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type Board = typeof boards.$inferSelect;
export type Column = typeof columns.$inferSelect;
export type Card = typeof cards.$inferSelect;
