import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
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

let queryClient: ReturnType<typeof neon> | null = null;
if (connectionString) {
	try {
		// Use Neon HTTP driver for serverless compatibility
		// Note: Complex queries (or/ilike) must be rewritten as sequential queries
		queryClient = neon(connectionString, {
			fetchOptions: {
				cache: 'no-store',
			},
		});
	} catch (error) {
		console.error("DATABASE_URL failed to initialize neon client", error);
		queryClient = null;
	}
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
