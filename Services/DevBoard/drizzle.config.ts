import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config();

const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL or DATABASE_URL_UNPOOLED is required");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dbCredentials: {
    url,
  },
});
