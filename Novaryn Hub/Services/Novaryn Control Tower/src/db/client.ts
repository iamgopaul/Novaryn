import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Prefer pooled connection in serverless to minimize cold-connect latency.
// Keep unpooled as fallback for local/dev or explicit setups.
const connectionString = process.env.DATABASE_URL || process.env.DATABASE_URL_UNPOOLED;

if (!connectionString) {
	console.error("[DB] DATABASE_URL not set");
}

const dbUnavailable = new Proxy({}, {
	get() {
		throw new Error("DATABASE_URL is not configured");
	},
});

let queryClient: ReturnType<typeof postgres> | null = null;

if (connectionString) {
	try {
		console.log("[DB] Creating postgres-js client for serverless...");
		queryClient = postgres(connectionString, {
			max: 1,
			idle_timeout: false,
			max_lifetime: false,
			connect_timeout: 3,
			prepare: false,
		});
		console.log("[DB] postgres-js client configured");
	} catch (error) {
		console.error("[DB] Failed to create postgres client:", (error as Error)?.message);
		queryClient = null;
	}
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
