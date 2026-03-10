// All database operations for the `links` table.
import { db } from "../index";
import { links } from "../schema";
import { and, eq } from "drizzle-orm";

// Inserts a new link row and returns the created record.
// .returning() lets PostgreSQL return the row immediately, avoiding a second SELECT.
export async function createLink(slug: string, originalUrl: string, ownerUserId: string) {
  const [row] = await db.insert(links).values({ slug, original_url: originalUrl, owner_user_id: ownerUserId }).returning();
  return row;
}

// Fetches a single link by its slug. Returns undefined if not found.
// Destructuring into [row] gives the first element or undefined — no length check needed.
export async function getLinkBySlug(slug: string) {
  const [row] = await db.select().from(links).where(eq(links.slug, slug));
  return row;
}

export async function getUserLinkBySlug(slug: string, ownerUserId: string) {
  const [row] = await db.select().from(links).where(and(eq(links.slug, slug), eq(links.owner_user_id, ownerUserId)));
  return row;
}

// Returns true if a slug is already in use — used before inserting to catch duplicates.
export async function slugExists(slug: string): Promise<boolean> {
  return (await getLinkBySlug(slug)) !== undefined;
}

// Returns all links ordered by creation date — used by the dev panel.
export async function getAllLinksForUser(ownerUserId: string) {
  return db.select().from(links).where(eq(links.owner_user_id, ownerUserId)).orderBy(links.created_at);
}
