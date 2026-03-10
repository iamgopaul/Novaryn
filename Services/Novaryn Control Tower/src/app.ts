import { errorResponse, jsonResponse } from "./middleware/errorHandler";

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

  if ((process.env.NODE_ENV ?? "development") !== "production") {
    try {
      const parsed = new URL(origin);
      if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
        return origin;
      }
    } catch {
      // Ignore malformed origin and continue with explicit allowlist checks.
    }
  }

  const allowedOrigins = getAllowedOrigins();
  if (allowedOrigins.length === 0) {
    return (process.env.NODE_ENV ?? "development") === "production" ? null : origin;
  }

  return allowedOrigins.includes(origin) ? origin : null;
}

function applyCors(req: Request, response: Response): Response {
  const corsOrigin = resolveCorsOrigin(req);
  if (!corsOrigin) return response;

  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", corsOrigin);
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  headers.set("Vary", "Origin");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
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
