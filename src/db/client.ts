import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
	console.error("DATABASE_URL is not set");
}

const dbUnavailable = new Proxy({}, {
	get() {
		throw new Error("DATABASE_URL is missing or invalid");
	},
});

let queryClient: ReturnType<typeof postgres> | null = null;
if (connectionString) {
	try {
		// Use postgres-js for pooler URLs (supports all SQL operators)
		// Neon HTTP driver has issues with complex queries (or, ilike, etc.)
		queryClient = postgres(connectionString, {
			max: 5,
			connect_timeout: 10,
			idle_timeout: 30,
		});
	} catch (error) {
		console.error("DATABASE_URL failed to initialize postgres client", error);
		queryClient = null;
	}
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
