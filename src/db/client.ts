import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
	console.error("DATABASE_URL is not set");
}

const dbUnavailable = new Proxy({}, {
	get() {
		throw new Error("DATABASE_URL is not set");
	},
});

const queryClient = connectionString ? postgres(connectionString) : null;
export const db = queryClient ? drizzle(queryClient, { schema }) : (dbUnavailable as any);
