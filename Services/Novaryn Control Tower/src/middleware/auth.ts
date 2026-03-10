import { getSessionUser, ROLE_LEVELS, type AuthUser } from "./session";
import { db } from "../db/client";
import { users, orgMembers } from "../db/schema";
import { eq } from "drizzle-orm";

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export type { AuthUser };

/**
 * Resolves the caller identity from either:
 *  1. A valid session cookie / session Bearer token → session user + org role
 *  2. The ADMIN_API_KEY Bearer token → owner/member user from DB
 * Returns null if neither matches.
 */
export async function getAuthUser(req: Request): Promise<AuthUser | null> {
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();

  // Legacy admin key → map to a real DB user so UUID-based queries don't fail.
  if (ADMIN_API_KEY && bearer === ADMIN_API_KEY) {
    try {
      const [owner] = await db
        .select({
          id: users.id,
          email: users.email,
          username: users.username,
          phone: users.phone,
          name: users.name,
          orgId: orgMembers.orgId,
          role: orgMembers.role,
          twoFactorEnabled: users.twoFactorEnabled,
          twoFactorMethod: users.twoFactorMethod,
        })
        .from(users)
        .innerJoin(orgMembers, eq(orgMembers.userId, users.id))
        .where(eq(orgMembers.role, "owner"))
        .limit(1);

      if (owner) {
        return {
          id: owner.id,
          email: owner.email,
          username: owner.username ?? null,
          phone: owner.phone ?? null,
          name: owner.name,
          orgId: owner.orgId,
          role: owner.role,
          twoFactorEnabled: owner.twoFactorEnabled ?? false,
          twoFactorMethod: owner.twoFactorMethod ?? "either",
        };
      }

      const [member] = await db
        .select({
          id: users.id,
          email: users.email,
          username: users.username,
          phone: users.phone,
          name: users.name,
          orgId: orgMembers.orgId,
          role: orgMembers.role,
          twoFactorEnabled: users.twoFactorEnabled,
          twoFactorMethod: users.twoFactorMethod,
        })
        .from(users)
        .innerJoin(orgMembers, eq(orgMembers.userId, users.id))
        .limit(1);

      if (member) {
        return {
          id: member.id,
          email: member.email,
          username: member.username ?? null,
          phone: member.phone ?? null,
          name: member.name,
          orgId: member.orgId,
          role: member.role,
          twoFactorEnabled: member.twoFactorEnabled ?? false,
          twoFactorMethod: member.twoFactorMethod ?? "either",
        };
      }
    } catch (error) {
      console.error("Failed to resolve ADMIN_API_KEY user:", (error as Error)?.message);
    }

    return null;
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
