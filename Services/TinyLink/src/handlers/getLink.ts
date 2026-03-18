// Handles GET /links/:slug — returns metadata for a stored link.
// Does NOT redirect and does NOT log a click.
import { getUserLinkBySlug } from "../db/queries/links";
import { getRequestUserId } from "../utils/requestUser";
import { resolvePublicBaseUrl } from "../utils/publicBaseUrl";

export async function handleGetLink(req: Request, slug: string): Promise<Response> {
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

  const shortUrl = `${resolvePublicBaseUrl(req)}/r/${link.slug}`;

  return new Response(JSON.stringify({
    slug: link.slug,
    originalUrl: link.original_url,
    shortUrl,
    createdAt: link.created_at,
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
