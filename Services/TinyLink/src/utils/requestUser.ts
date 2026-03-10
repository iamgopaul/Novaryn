export function getRequestUserId(req: Request): string | null {
  const headerUserId = req.headers.get("x-tinylink-user-id")?.trim();
  if (headerUserId) return headerUserId;

  const url = new URL(req.url);
  const queryUserId = url.searchParams.get("userId")?.trim();
  if (queryUserId) return queryUserId;

  return null;
}

export function requireRequestUserId(req: Request): string {
  const userId = getRequestUserId(req);
  if (!userId) {
    throw new Error("Missing TinyLink user identity");
  }
  return userId;
}