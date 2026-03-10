import { ROLE_LEVELS, type AuthUser } from "./session";

export type SharedSessionResponse = {
  authenticated: boolean;
  user: AuthUser | null;
  needsSetup: boolean;
};

export type SharedSessionOptions = {
  sessionEndpoint?: string;
  timeoutMs?: number;
};

function resolveSessionEndpoint(override?: string): string {
  return (override ?? process.env.HUB_AUTH_SESSION_URL ?? "http://localhost:3000/auth/session").trim();
}

export async function getSharedSession(
  req: Request,
  options: SharedSessionOptions = {},
): Promise<SharedSessionResponse | null> {
  const endpoint = resolveSessionEndpoint(options.sessionEndpoint);

  const headers = new Headers();
  const cookie = req.headers.get("cookie");
  const authorization = req.headers.get("authorization");

  if (cookie) headers.set("cookie", cookie);
  if (authorization) headers.set("authorization", authorization);

  const controller = new AbortController();
  const timeoutMs = options.timeoutMs ?? Number(process.env.HUB_AUTH_TIMEOUT_MS ?? 5000);
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers,
      signal: controller.signal,
    });

    if (!res.ok) return null;

    const data = (await res.json().catch(() => null)) as SharedSessionResponse | null;
    if (!data || typeof data !== "object") return null;
    if (typeof data.authenticated !== "boolean") return null;
    if (typeof data.needsSetup !== "boolean") return null;

    return data;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function requireSharedSession(
  req: Request,
  minRole: "member" | "admin" | "owner" = "member",
  options: SharedSessionOptions = {},
): Promise<{ user: AuthUser } | Response> {
  const session = await getSharedSession(req, options);

  if (!session || !session.authenticated || !session.user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if ((ROLE_LEVELS[session.user.role] ?? 0) < (ROLE_LEVELS[minRole] ?? 0)) {
    return new Response(JSON.stringify({ error: `Forbidden — requires role: ${minRole}` }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  return { user: session.user };
}
