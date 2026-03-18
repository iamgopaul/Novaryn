export function getRequestUserId(req: Request): string | null {
  const userId = req.headers.get("x-devboard-user-id")?.trim();
  if (userId) return userId;
  return null;
}

export function requireRequestUserId(req: Request): string {
  const userId = getRequestUserId(req);
  if (!userId) {
    throw new Error("Missing DevBoard user identity");
  }
  return userId;
}
