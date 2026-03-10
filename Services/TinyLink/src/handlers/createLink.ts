// Handles POST /links — creates a new short link with an optional custom slug.
import { createLinkSchema } from "../utils/validate";
import { generateSlug } from "../utils/slug";
import { createLink, slugExists } from "../db/queries/links";
import { requireRequestUserId } from "../utils/requestUser";

// Sends a JSON response — avoids repeating Content-Type headers in every return.
function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function handleCreateLink(req: Request): Promise<Response> {
  let ownerUserId: string;
  try {
    ownerUserId = requireRequestUserId(req);
  } catch {
    return json({ error: "Missing user identity" }, 401);
  }

  // Parse the request body — req.json() throws if the body isn't valid JSON.
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // Validate the body against the schema — returns structured errors on failure.
  const result = createLinkSchema.safeParse(body);
  if (!result.success) {
    return json({ errors: result.error.flatten() }, 400);
  }

  const { url, slug: customSlug } = result.data;

  let slug = customSlug;
  if (slug) {
    // Custom slug provided — reject immediately if already taken.
    if (await slugExists(slug)) {
      return json({ error: "Slug already taken" }, 409);
    }
  } else {
    // No slug provided — generate a random one, retrying on the rare collision.
    do {
      slug = generateSlug();
    } while (await slugExists(slug));
  }

  const link = await createLink(slug, url, ownerUserId);
  const shortUrl = `${process.env.BASE_URL}/r/${slug}`;

  return json(
    {
      slug,
      shortUrl,
      originalUrl: link.original_url,
      createdAt: link.created_at,
    },
    201
  );
}
