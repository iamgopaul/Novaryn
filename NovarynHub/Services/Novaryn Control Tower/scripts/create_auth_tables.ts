import { db } from "../src/db/client";
import { sql } from "drizzle-orm";

const tables = [
  `CREATE TABLE IF NOT EXISTS "users" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "email" text NOT NULL,
    "name" text NOT NULL,
    "password_hash" text NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    "updated_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "users_email_unique" UNIQUE("email")
  )`,
  `CREATE TABLE IF NOT EXISTS "sessions" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "token" text NOT NULL,
    "expires_at" timestamptz NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "sessions_token_unique" UNIQUE("token")
  )`,
  `CREATE TABLE IF NOT EXISTS "org_members" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "org_id" uuid NOT NULL REFERENCES "orgs"("id") ON DELETE CASCADE,
    "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "role" text DEFAULT 'member' NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "org_members_org_user_unique" UNIQUE("org_id", "user_id")
  )`,
  `CREATE TABLE IF NOT EXISTS "invites" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "org_id" uuid NOT NULL REFERENCES "orgs"("id") ON DELETE CASCADE,
    "email" text NOT NULL,
    "role" text DEFAULT 'member' NOT NULL,
    "token" text NOT NULL,
    "expires_at" timestamptz NOT NULL,
    "accepted_at" timestamptz,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "invites_token_unique" UNIQUE("token")
  )`,
  `CREATE TABLE IF NOT EXISTS "password_resets" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "token" text NOT NULL,
    "expires_at" timestamptz NOT NULL,
    "used_at" timestamptz,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "password_resets_token_unique" UNIQUE("token")
  )`,
];

for (const ddl of tables) {
  await db.execute(sql.raw(ddl));
  console.log("✓", ddl.split("\n")[0]!.trim());
}

console.log("\nAll auth tables created!");
process.exit(0);
