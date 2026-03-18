function stripTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function normalizeForwardedPrefix(prefix: string | null): string {
  if (!prefix) return "";
  const trimmed = prefix.trim();
  if (!trimmed) return "";
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

/**
 * Resolves the public base URL used in API responses.
 * Priority:
 * 1) BASE_URL env var (supports full host or host + path)
 * 2) Proxy-forwarded host/proto (+ optional forwarded prefix)
 * 3) Request URL origin (+ optional forwarded prefix)
 */
export function resolvePublicBaseUrl(req: Request): string {
  const configured = process.env.BASE_URL?.trim();
  if (configured) return stripTrailingSlash(configured);

  const reqUrl = new URL(req.url);
  const forwardedProto = req.headers.get("x-forwarded-proto")?.trim();
  const forwardedHost = req.headers.get("x-forwarded-host")?.trim();
  const forwardedPrefix = normalizeForwardedPrefix(req.headers.get("x-forwarded-prefix"));

  const protocol = forwardedProto || reqUrl.protocol.replace(":", "");
  const host = forwardedHost || reqUrl.host;
  const origin = `${protocol}://${host}`;

  return stripTrailingSlash(`${origin}${forwardedPrefix}`);
}
