// Defines the database schema using Drizzle ORM.
// drizzle-kit reads this file to generate and apply SQL migrations.
import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

// Stores each shortened link — one row per unique slug.
export const links = pgTable("links", {
  id: uuid("id").primaryKey().defaultRandom(),
  owner_user_id: text("owner_user_id").notNull(),
  slug: varchar("slug", { length: 20 }).unique().notNull(), // unique constraint prevents duplicate slugs
  original_url: text("original_url").notNull(),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// Stores each click event for analytics — one row per visit to /r/:slug.
export const clicks = pgTable("clicks", {
  id: uuid("id").primaryKey().defaultRandom(),
  link_id: uuid("link_id").notNull().references(() => links.id), // foreign key to links
  clicked_at: timestamp("clicked_at", { withTimezone: true }).defaultNow().notNull(),
  ip_address: varchar("ip_address", { length: 45 }), // nullable — IPv6 max is 45 chars
  user_agent: text("user_agent"),                     // nullable — not always sent by clients
  referer: text("referer"),                           // nullable — not always present
});

// Inferred TypeScript types — Drizzle generates these from the table definitions above.
export type Link = typeof links.$inferSelect;
export type NewLink = typeof links.$inferInsert;

export type Click = typeof clicks.$inferSelect;
export type NewClick = typeof clicks.$inferInsert;
