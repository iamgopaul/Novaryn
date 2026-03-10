import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Use postgres-js for TCP connections (works in Vercel serverless)
// Neon HTTP driver has fetch restrictions in serverless environment
const connectionString = process.env.DATABASE_URL;

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
		console.log("[DB] Creating postgres-js client with connection pooling...");
		// Serverless-optimized connection pool
		queryClient = postgres(connectionString, {
			max: 5,  // Limit connections in serverless
			connect_timeout: 10,
			idle_timeout: 30,
			application_name: 'controltower',
		});
		console.log("[DB] postgres-js client created");
	} catch (error) {
		console.error("[DB] Failed to create postgres client:", (error as Error)?.message);
		queryClient = null;
	}
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
