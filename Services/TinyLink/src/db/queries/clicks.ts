// All database operations for the `clicks` table.
import { db } from "../index";
import { clicks } from "../schema";
import { eq, count, max } from "drizzle-orm";

// Metadata captured from request headers on each redirect.
// All fields are optional since headers aren't guaranteed to be present.
export interface ClickMeta {
  ipAddress?: string;
  userAgent?: string;
  referer?: string;
}

// Inserts a click event row. Called fire-and-forget during redirects
// so the user isn't kept waiting for the DB write to complete.
export async function logClick(linkId: string, meta: ClickMeta) {
  await db.insert(clicks).values({
    link_id: linkId,
    ip_address: meta.ipAddress,
    user_agent: meta.userAgent,
    referer: meta.referer,
  });
}

// Returns the total number of clicks for a given link.
// count() returns a string in Drizzle, so we wrap with Number().
export async function getClickCount(linkId: string): Promise<number> {
  const [{ value }] = await db
    .select({ value: count() })
    .from(clicks)
    .where(eq(clicks.link_id, linkId));
  return Number(value);
}

// Returns the most recent clicked_at timestamp for a link,
// or null if the link has never been clicked.
export async function getLastClick(linkId: string): Promise<Date | null> {
  const [{ value }] = await db
    .select({ value: max(clicks.clicked_at) })
    .from(clicks)
    .where(eq(clicks.link_id, linkId));
  return value ?? null;
}
