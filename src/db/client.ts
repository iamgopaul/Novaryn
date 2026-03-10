import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Try unpooled first (recommended for serverless), fall back to pooled
const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
if (!connectionString) {
	console.error("DATABASE_URL and DATABASE_URL_UNPOOLED are not set");
} else {
	const hostname = new URL(connectionString).hostname;
	const isUnpooled = !connectionString.includes("-pooler.");
	console.log(`[DB] Using ${isUnpooled ? "unpooled" : "pooled"} connection: ${hostname}`);
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
