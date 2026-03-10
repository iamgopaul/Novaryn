import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema";

// Neon HTTP driver for Vercel Edge Runtime (works with fetch API)
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	console.error("[DB] DATABASE_URL not set");
}

const dbUnavailable = new Proxy({}, {
	get() {
		throw new Error("DATABASE_URL is not configured");
	},
});

let queryClient: Pool | null = null;

if (connectionString) {
	try {
		console.log("[DB] Creating Neon HTTP client for Edge runtime...");
		// Use WebSocket for non-fetch environments (Edge runtime auto-uses fetch)
		neonConfig.webSocketConstructor = globalThis.WebSocket;
		queryClient = new Pool({ connectionString });
		console.log("[DB] Neon HTTP client configured for Edge runtime");
	} catch (error) {
		console.error("[DB] Failed to create Neon client:", (error as Error)?.message);
		queryClient = null;
	}
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
