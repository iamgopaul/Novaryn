import { errorResponse, jsonResponse } from "./middleware/errorHandler";
import { getAuthUser } from "./middleware/auth";

function getBearerToken(req: Request): string | null {
  return req.headers.get("authorization")?.replace("Bearer ", "").trim() ?? null;
}

function getAllowedOrigins(): string[] {
  const raw = process.env.CORS_ORIGINS ?? process.env.FRONTEND_ORIGIN ?? "";
  return raw
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function resolveCorsOrigin(req: Request): string | null {
  const origin = req.headers.get("origin");
  if (!origin) return null;

  const isProduction = (process.env.NODE_ENV ?? "development") === "production";

  try {
    const parsed = new URL(origin);
    const host = parsed.hostname;
    const isLocalHost = host === "localhost" || host === "127.0.0.1";

    if (!isProduction && isLocalHost) {
      return origin;
    }

    const allowedOrigins = getAllowedOrigins();
    if (allowedOrigins.length > 0) {
      return allowedOrigins.includes(origin) ? origin : null;
    }

    if (!isProduction) {
      return origin;
    }

    const isNovarynWeb = host === "novaryn.dev" || host.endsWith(".novaryn.dev");
    const isPreview = host.endsWith(".vercel.app") && host.includes("novaryn");

    return (isNovarynWeb || isPreview) ? origin : null;
  } catch {
    return null;
  }
}

function applyCors(req: Request, response: Response): Response {
  const corsOrigin = resolveCorsOrigin(req);
  if (!corsOrigin) return response;

  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", corsOrigin);
  headers.set("Access-Control-Allow-Credentials", "true");
  // Must include any custom headers sent by the browser (preflight checks these).
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-TinyLink-User-Id");
  headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  headers.set("Vary", "Origin");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function getTinyLinkHosts(): string[] {
  const configured = process.env.TINYLINK_URL?.trim();
  const isProduction = (process.env.NODE_ENV ?? "development") === "production";
  const candidates = [
    configured,
    ...(!isProduction ? ["http://localhost:3001", "http://localhost:3000"] : []),
  ].filter((value): value is string => Boolean(value && value.length > 0));

  const unique: string[] = [];
  for (const host of candidates) {
    const normalized = host.replace(/\/+$/, "");
    if (!unique.includes(normalized)) unique.push(normalized);
  }
  return unique;
}

function getTinyLinkPublicPrefix(): string {
  const configured = process.env.TINYLINK_PUBLIC_PREFIX?.trim();
  if (!configured) return "";
  const withLeadingSlash = configured.startsWith("/") ? configured : `/${configured}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

function isTinyLinkPublicPath(method: string, tinyLinkPath: string): boolean {
  return method === "GET" && (tinyLinkPath === "/" || tinyLinkPath.startsWith("/r/"));
}

function buildTinyLinkRequest(
  req: Request,
  tinyLinkUrl: string,
  options: {
    forwardedPrefix: string;
    trustedUserId: string | null;
    proxyBody?: ArrayBuffer;
  },
): Request {
  const headers = new Headers(req.headers);
  const sourceUrl = new URL(req.url);
  headers.delete("host");
  // Let fetch recalculate Content-Length if body has been transformed.
  headers.delete("content-length");
  // Never trust client-provided user scoping. Proxy injects the authenticated user id.
  headers.delete("x-tinylink-user-id");
  headers.set("x-forwarded-host", sourceUrl.host);
  headers.set("x-forwarded-proto", sourceUrl.protocol.replace(":", ""));
  headers.set("x-forwarded-prefix", options.forwardedPrefix);
  if (options.trustedUserId) headers.set("x-tinylink-user-id", options.trustedUserId);

  return new Request(tinyLinkUrl, {
    method: req.method,
    headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? options.proxyBody : undefined,
  });
}

async function handleRequestInternal(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  const url = new URL(req.url);
  const path = url.pathname.replace(/\/$/, "");
  const segments = path.split("/").filter(Boolean);

  console.log(`[${new Date().toISOString()}] ${req.method} ${path}`);

  try {
    if (path === "/health") {
      return jsonResponse({ status: "ok", timestamp: new Date().toISOString() });
    }

    if (segments[0] === "auth") {
      const { handleAuth } = await import("./routes/auth");
      return await handleAuth(req, segments.slice(1));
    }

    if (path === "/evaluate" && req.method === "GET") {
      const { handleEvaluate } = await import("./routes/evaluate");
      const { resolveSdkKey } = await import("./routes/sdkKeys");
      const token = getBearerToken(req);
      if (token?.startsWith("ct_")) {
        const sdk = await resolveSdkKey(token);
        if (!sdk) return errorResponse("Invalid SDK key", 401);
        return await handleEvaluate(req, sdk.projectId);
      }
      return await handleEvaluate(req);
    }

    if (path === "/stream" && req.method === "GET") {
      const { handleStream } = await import("./routes/stream");
      const { resolveSdkKey } = await import("./routes/sdkKeys");
      const token = getBearerToken(req);
      if (token?.startsWith("ct_")) {
        const sdk = await resolveSdkKey(token);
        if (!sdk) return errorResponse("Invalid SDK key", 401);
      }
      return await handleStream(req);
    }

    const isTinyLinkToolsRoute = segments[0] === "tools" && segments[1] === "tinylink";
    const isTinyLinkRedirectRoute = req.method === "GET" && segments[0] === "r";
    if (isTinyLinkToolsRoute || isTinyLinkRedirectRoute) {
      const tinyLinkPath = isTinyLinkToolsRoute
        ? "/" + segments.slice(2).join("/")
        : path || "/";
      const tinyLinkHosts = getTinyLinkHosts();
      let lastError: unknown = null;
      const requiresAuthUser = !isTinyLinkPublicPath(req.method, tinyLinkPath);
      const authUser = requiresAuthUser ? await getAuthUser(req) : null;
      const trustedUserId = authUser?.id ?? null;
      const proxyBody = req.method !== "GET" && req.method !== "HEAD" ? await req.arrayBuffer() : undefined;
      const forwardedPrefix = isTinyLinkToolsRoute ? getTinyLinkPublicPrefix() : "";

      if (tinyLinkHosts.length === 0) {
        return errorResponse("TinyLink URL is not configured. Set TINYLINK_URL in production.", 503);
      }

      for (const tinyLinkHost of tinyLinkHosts) {
        const tinyLinkUrl = `${tinyLinkHost}${tinyLinkPath}${url.search}`;
        try {
          console.log(`[TinyLink Proxy] ${req.method} ${tinyLinkUrl}`);
          const tinyLinkRes = await fetch(buildTinyLinkRequest(req, tinyLinkUrl, {
            forwardedPrefix,
            trustedUserId,
            proxyBody,
          }));
          console.log(`[TinyLink Proxy] Response: ${tinyLinkRes.status} from ${tinyLinkHost}`);
          return tinyLinkRes;
        } catch (err) {
          lastError = err;
          console.error(`TinyLink proxy error via ${tinyLinkHost}:`, err);
        }
      }

      console.error("Failed to reach TinyLink on all configured hosts", tinyLinkHosts, lastError);
      return errorResponse("TinyLink service unavailable", 503);
    }

    if (segments[0] === "admin") {
      const { handleFlags } = await import("./routes/flags");
      const { handleExperiments } = await import("./routes/experiments");
      const { handleAudit } = await import("./routes/audit");
      const { handleSdkKeys } = await import("./routes/sdkKeys");
      const { handleAdmin } = await import("./routes/admin");
      const resource = segments[1];
      const rest = segments.slice(2);

      if (resource === "flags") return await handleFlags(req, rest);
      if (resource === "experiments") return await handleExperiments(req, rest);
      if (resource === "audit" && req.method === "GET") return await handleAudit(req);
      if (resource === "sdk-keys") return await handleSdkKeys(req, rest);
      if (resource === "orgs" || resource === "projects" || resource === "environments") {
        return await handleAdmin(req, segments.slice(1));
      }
    }

    return errorResponse("Not found", 404);
  } catch (err) {
    console.error("Unhandled error:", err);
    console.error("Error details:", {
      message: (err as Error)?.message,
      stack: (err as Error)?.stack,
      cause: (err as any)?.cause,
    });
    return errorResponse("Internal server error", 500);
  }
}

export async function handleRequest(req: Request): Promise<Response> {
  const response = await handleRequestInternal(req);
  return applyCors(req, response);
}
