import { getSessionUser, ROLE_LEVELS, type AuthUser } from "./session";

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export type { AuthUser };

/**
 * Resolves the caller identity from either:
 *  1. A valid session cookie / session Bearer token → session user + org role
 *  2. The ADMIN_API_KEY Bearer token → synthetic owner user (backward compat)
 * Returns null if neither matches.
 */
export async function getAuthUser(req: Request): Promise<AuthUser | null> {
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();

  // Legacy admin key → synthetic owner (keeps existing API integrations working)
  if (ADMIN_API_KEY && bearer === ADMIN_API_KEY) {
    return {
      id: "admin",
      email: "admin",
      username: null,
      phone: null,
      name: "admin",
      orgId: "admin",
      role: "owner",
      twoFactorEnabled: false,
      twoFactorMethod: "either",
    };
  }

  return getSessionUser(req);
}

/**
 * Resolves auth and enforces a minimum role.
 * Returns `{ user }` on success or a ready-to-return 401/403 Response.
 */
export async function requireAuth(
  req: Request,
  minRole: "member" | "admin" | "owner" = "member",
): Promise<{ user: AuthUser } | Response> {
  const user = await getAuthUser(req);

  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if ((ROLE_LEVELS[user.role] ?? 0) < (ROLE_LEVELS[minRole] ?? 0)) {
    return new Response(JSON.stringify({ error: `Forbidden — requires role: ${minRole}` }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  return { user };
}

/** Synchronous legacy helper — kept for any callers not yet migrated. */
export function requireAdminKey(req: Request): Response | null {
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();

  if (!ADMIN_API_KEY) {
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!bearer || bearer !== ADMIN_API_KEY) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return null;
}
