import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Use postgres-js with DIRECT (unpooled) connection for serverless
// TCP to pooler has latency issues in serverless environments
const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!connectionString) {
	console.error("[DB] Neither DATABASE_URL_UNPOOLED nor DATABASE_URL is set");
} else {
	const isUnpooled = !connectionString.includes("-pooler.");
	console.log(`[DB] Using ${isUnpooled ? "direct (unpooled)" : "pooler"} connection`);
}

const dbUnavailable = new Proxy({}, {
	get() {
		throw new Error("DATABASE_URL is not configured");
	},
});

let queryClient: ReturnType<typeof postgres> | null = null;

if (connectionString) {
	try {
		console.log("[DB] Creating postgres-js client for serverless (pooler mode)...");
		// Serverless-optimized configuration for pooled connections
		queryClient = postgres(connectionString, {
			max: 1,  // Single connection in serverless
			idle_timeout: false,  // No idle timeout
			max_lifetime: false,  // No max lifetime
			connect_timeout: 10,
			prepare: false,  // Disable prepared statements for pooling
		});
		console.log("[DB] postgres-js client configured for serverless pooler");
	} catch (error) {
		console.error("[DB] Failed to create postgres client:", (error as Error)?.message);
		queryClient = null;
	}
}

export const db = queryClient
	? drizzle(queryClient, { schema })
	: (dbUnavailable as any);
