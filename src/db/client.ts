import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Use direct connection (unpooled) for Neon HTTP driver in serverless
// Pooled connections have network restrictions in serverless environments
const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
if (!connectionString) {
	console.error("[DB] DATABASE_URL_UNPOOLED and DATABASE_URL are not set");
} else {
	try {
		const hostname = new URL(connectionString).hostname;
		const isUnpooled = !connectionString.includes("-pooler.");
		console.log(`[DB] Using ${isUnpooled ? "direct" : "pooled"} connection: ${hostname}`);
	} catch (e) {
		console.error("[DB] Failed to parse connection string");
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
