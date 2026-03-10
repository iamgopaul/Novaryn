// Creates and exports the single shared Drizzle database client.
// All query files import `db` from here — never create a second connection.
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

config();

// Fail fast if DATABASE_URL is missing — prevents silent misconfiguration.
const DATABASE_URL = process.env.DATABASE_URL || process.env.DATABASE_URL_UNPOOLED;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL or DATABASE_URL_UNPOOLED environment variable is not set");
}

const client = postgres(DATABASE_URL, {
  max: 1,
  prepare: false,
  connect_timeout: 10,
  idle_timeout: 20,
  max_lifetime: 60 * 5,
});

// Pass the schema so Drizzle has full type awareness for queries.
export const db = drizzle(client, { schema });

// Re-export inferred types for convenience.
export type Link = typeof schema.links.$inferSelect;
export type NewLink = typeof schema.links.$inferInsert;

export type Click = typeof schema.clicks.$inferSelect;
export type NewClick = typeof schema.clicks.$inferInsert;
