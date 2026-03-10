import { db } from "../db/client";
import { sessions, users, orgMembers } from "../db/schema";
import { eq, and, gt } from "drizzle-orm";

export type AuthUser = {
  id: string;
  email: string;
  username: string | null;
  phone: string | null;
  name: string;
  orgId: string;
  role: "owner" | "admin" | "member";
  twoFactorEnabled: boolean;
  twoFactorMethod: "email" | "phone" | "either";
};

export const ROLE_LEVELS: Record<string, number> = { member: 0, admin: 1, owner: 2 };

/** Extract session token from cookie or Authorization Bearer header. */
function extractToken(req: Request): string | null {
  // Cookie: sid=<token>
  const cookie = req.headers.get("cookie") ?? "";
  const match = cookie.match(/(?:^|;\s*)sid=([^;]+)/);
  if (match?.[1]) return decodeURIComponent(match[1]);

  // Bearer token that is NOT an SDK key or admin key
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();
  if (bearer && !bearer.startsWith("ct_") && bearer !== (process.env.ADMIN_API_KEY ?? "")) {
    return bearer;
  }

  return null;
}

/** Resolve a session token to the authenticated user + org role. */
export async function getSessionUser(req: Request): Promise<AuthUser | null> {
  const token = extractToken(req);
  if (!token) return null;

  const [row] = await db
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
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .innerJoin(orgMembers, eq(orgMembers.userId, users.id))
    .where(and(eq(sessions.token, token), gt(sessions.expiresAt, new Date())))
    .limit(1);

  if (!row) return null;
  return row as AuthUser;
}

/** Create an httpOnly session cookie string. */
export function makeSessionCookie(token: string, expiresAt: Date): string {
  const expires = expiresAt.toUTCString();
  const sameSite = (process.env.COOKIE_SAMESITE ?? "Lax").trim();
  const explicitSecure = process.env.COOKIE_SECURE;
  const secure = explicitSecure
    ? explicitSecure === "true"
    : sameSite.toLowerCase() === "none" || (process.env.NODE_ENV ?? "development") === "production";
  const domain = process.env.COOKIE_DOMAIN?.trim();

  const parts = [
    `sid=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    `SameSite=${sameSite}`,
    `Expires=${expires}`,
  ];
  if (secure) parts.push("Secure");
  if (domain) parts.push(`Domain=${domain}`);

  return parts.join("; ");
}

/** Create a cookie that clears an existing session. */
export function clearSessionCookie(): string {
  const sameSite = (process.env.COOKIE_SAMESITE ?? "Lax").trim();
  const explicitSecure = process.env.COOKIE_SECURE;
  const secure = explicitSecure
    ? explicitSecure === "true"
    : sameSite.toLowerCase() === "none" || (process.env.NODE_ENV ?? "development") === "production";
  const domain = process.env.COOKIE_DOMAIN?.trim();

  const parts = ["sid=", "Path=/", "HttpOnly", `SameSite=${sameSite}`, "Max-Age=0"];
  if (secure) parts.push("Secure");
  if (domain) parts.push(`Domain=${domain}`);
  return parts.join("; ");
}
