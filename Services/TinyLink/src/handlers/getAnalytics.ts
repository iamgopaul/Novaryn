// Handles GET /links/:slug/analytics — returns aggregated click statistics for a link.
import { getUserLinkBySlug } from "../db/queries/links";
import { getClickCount, getLastClick } from "../db/queries/clicks";
import { getRequestUserId } from "../utils/requestUser";

export async function handleGetAnalytics(req: Request, slug: string): Promise<Response> {
  const ownerUserId = getRequestUserId(req);
  if (!ownerUserId) {
    return new Response(JSON.stringify({ error: "Missing user identity" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const link = await getUserLinkBySlug(slug, ownerUserId);

  if (!link) {
    return new Response("Not Found", { status: 404 });
  }

  // Fetch both analytics values in parallel — they're independent queries,
  // so Promise.all halves the total wait time vs. awaiting them sequentially.
  const [totalClicks, lastClickedAt] = await Promise.all([
    getClickCount(link.id),
    getLastClick(link.id),
  ]);

  return new Response(JSON.stringify({
    slug: link.slug,
    totalClicks,
    lastClickedAt, // null if the link has never been clicked
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
