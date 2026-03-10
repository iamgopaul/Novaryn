// GUIDELINE: This file configures drizzle-kit (the CLI tool).
// drizzle-kit reads this to know where your schema is, where to write
// migration files, and how to connect to your database.

import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config();

// GUIDELINE: Read DATABASE_URL from the environment.
// If it's missing, fail fast so you don't accidentally run against nothing.
// Hint: process.env.DATABASE_URL — assert it's defined before passing it in.

export default defineConfig({
  // GUIDELINE: Set dialect to "postgresql" (drizzle-kit also supports mysql/sqlite)
  dialect: "postgresql",

  // GUIDELINE: Point to your schema file — this is where your table definitions live
  schema: "./src/db/schema.ts",

  // GUIDELINE: Folder where drizzle-kit writes generated SQL migration files
  out: "./drizzle/migrations",

  dbCredentials: {
    // GUIDELINE: Pass DATABASE_URL here.
    // Make sure to assert it is defined (throw or use a non-null assertion).
    url: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL!,
  },
});
