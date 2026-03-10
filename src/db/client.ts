import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Use direct connection (unpooled) for Neon HTTP driver in serverless
// Pooled connections have network restrictions in serverless environments
const connUrlUnpooled = process.env.DATABASE_URL_UNPOOLED;
const connUrlPooled = process.env.DATABASE_URL;
const connectionString = connUrlUnpooled || connUrlPooled;

console.log("[DB] Environment check:");
console.log(`[DB] DATABASE_URL_UNPOOLED set: ${!!connUrlUnpooled}`);
console.log(`[DB] DATABASE_URL set: ${!!connUrlPooled}`);
console.log(`[DB] Using: ${connUrlUnpooled ? "unpooled" : "pooled"}`);

if (!connectionString) {
	console.error("[DB] CRITICAL: No connection string available!");
} else {
	try {
		const url = new URL(connectionString);
		console.log(`[DB] Connection host: ${url.hostname}`);
		console.log(`[DB] Connection database: ${url.pathname}`);
	} catch (e) {
		console.error("[DB] Failed to parse connection string:", (e as Error).message);
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
		console.log("[DB] Initializing Neon HTTP client...");
		// Direct connection is required for serverless - pooler has network restrictions
		queryClient = neon(connectionString);
		console.log("[DB] Neon HTTP client initialized successfully");
	} catch (error) {
		console.error("[DB] Failed to initialize Neon client:", error);
		queryClient = null;
	}
} else {
	console.error("[DB] CONNECTION STRING IS EMPTY");
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
