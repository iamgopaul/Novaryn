// Central request dispatcher — matches every incoming request to the right handler.
import { handleCreateLink } from "./handlers/createLink";
import { handleRedirect } from "./handlers/redirectLink";
import { handleGetLink } from "./handlers/getLink";
import { handleGetAnalytics } from "./handlers/getAnalytics";
import { handleHome } from "./handlers/home";
import { getAllLinksForUser } from "./db/queries/links";
import { getRequestUserId } from "./utils/requestUser";

function withCors(res: Response): Response {
  const headers = new Headers(res.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, X-TinyLink-User-Id");
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

export async function router(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (req.method === "OPTIONS") {
    return withCors(new Response(null, { status: 204 }));
  }

  let response: Response;

  // Internal API — returns all links as JSON for the dev panel
  if (req.method === "GET" && pathname === "/api/links") {
    const userId = getRequestUserId(req);
    if (!userId) {
      response = new Response(JSON.stringify({ error: "Missing user identity" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const allLinks = await getAllLinksForUser(userId);
      response = new Response(JSON.stringify(allLinks), { headers: { "Content-Type": "application/json" } });
    }

  // Serve the web UI
  } else if (req.method === "GET" && pathname === "/") {
    response = handleHome();

  // Create a new short link
  } else if (req.method === "POST" && pathname === "/links") {
    response = await handleCreateLink(req);

  // Redirect to the original URL — slug is the path segment after /r/
  } else if (req.method === "GET" && pathname.startsWith("/r/")) {
    const slug = pathname.split("/")[2];
    response = await handleRedirect(req, slug);

  // Analytics must be checked before /links/:slug to avoid treating
  // "analytics" as a slug value
  } else if (req.method === "GET" && pathname.match(/^\/links\/[^\/]+\/analytics$/)) {
    const slug = pathname.split("/")[2];
    response = await handleGetAnalytics(req, slug);

  // Return metadata for a stored link
  } else if (req.method === "GET" && pathname.match(/^\/links\/[^\/]+$/)) {
    const slug = pathname.split("/")[2];
    response = await handleGetLink(req, slug);

  } else {
    response = new Response("Not Found", { status: 404 });
  }

  return withCors(response);
}
