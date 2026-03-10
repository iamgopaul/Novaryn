import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
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

let queryClient: ReturnType<typeof neon> | ReturnType<typeof postgres> | null = null;
if (connectionString) {
	try {
		const isPoolerUrl = connectionString.includes("-pooler.");
		// Neon HTTP driver is for pooler URLs (serverless)
		// postgres-js is for direct connections (traditional TCP)
		queryClient = isPoolerUrl
			? neon(connectionString, {
				fetchOptions: {
					cache: 'no-store',
				},
			})
			: postgres(connectionString, {
				max: 5,
				connect_timeout: 5,
				idle_timeout: 20,
			});
	} catch (error) {
		console.error("DATABASE_URL failed to initialize postgres client", error);
		queryClient = null;
	}
}

export const db = queryClient
	? (connectionString?.includes("-pooler.")
		? drizzle(queryClient as ReturnType<typeof neon>, { schema })
		: drizzlePostgres(queryClient as ReturnType<typeof postgres>, { schema }))
	: (dbUnavailable as any);
