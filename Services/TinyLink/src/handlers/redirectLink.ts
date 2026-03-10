// Handles GET /r/:slug — looks up the slug and issues a 302 redirect.
import { getLinkBySlug } from "../db/queries/links";
import { logClick } from "../db/queries/clicks";

export async function handleRedirect(req: Request, slug: string): Promise<Response> {
  const link = await getLinkBySlug(slug);

  if (!link) {
    return new Response("Not Found", { status: 404 });
  }

  // Extract click metadata from request headers — all are optional.
  // x-forwarded-for is set by proxies/load balancers; cf-connecting-ip by Cloudflare.
  const ipAddress = req.headers.get("x-forwarded-for")
                 ?? req.headers.get("cf-connecting-ip")
                 ?? undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;
  const referer   = req.headers.get("referer")    ?? undefined;

  // Fire-and-forget — don't await so the user isn't kept waiting for the DB write.
  // If the insert fails, the redirect still succeeds.
  logClick(link.id, { ipAddress, userAgent, referer });

  // 302 (temporary redirect) prevents browsers from caching the destination,
  // which keeps click tracking accurate on repeat visits.
  return Response.redirect(link.original_url, 302);
}
