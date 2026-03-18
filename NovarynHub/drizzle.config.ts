import { defineConfig } from "drizzle-kit";

const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!url) {
  throw new Error("DATABASE_URL or DATABASE_URL_UNPOOLED is required");
}

export default defineConfig({
  dialect: "postgresql",
  schema: [
    "./src/services/NovarynControlTower/db/schema.ts",
    "./src/services/DeveloperBoard/db/schema.ts",
  ],
  out: "./drizzle/merged",
  dbCredentials: {
    url,
  },
});
