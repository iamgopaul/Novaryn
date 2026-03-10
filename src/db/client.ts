import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
	console.error("[DB] DATABASE_URL is not set");
} else {
	try {
		const hostname = new URL(connectionString).hostname;
		const isPooled = connectionString.includes("-pooler.");
		console.log(`[DB] Using ${isPooled ? "pooled" : "unpooled"} connection: ${hostname}`);
	} catch (e) {
		console.error("[DB] Failed to parse DATABASE_URL");
	}
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
		console.log("[DB] Neon client initialized successfully");
	} catch (error) {
		console.error("[DB] Failed to initialize neon client:", error);
		console.error("[DB] Error details:", {
			message: (error as Error)?.message,
			stack: (error as Error)?.stack,
		});
		queryClient = null;
	}
} else {
	console.error("[DB] CONNECTION STRING IS EMPTY - USING FALLBACK");
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
