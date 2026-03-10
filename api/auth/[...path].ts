import { handleAuth } from "../../src/routes/auth";

export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any): Promise<void> {
  try {
    const method = req?.method ?? "GET";
    const proto = req?.headers?.["x-forwarded-proto"] ?? "https";
    const host = req?.headers?.host ?? "localhost";
    const rawPath = req?.url ?? "/";
    const parsed = new URL(`${proto}://${host}${rawPath}`);
    const normalizedPath = parsed.pathname.replace(/^\/api\/auth\/?/, "");
    const segments = normalizedPath.split("/").filter(Boolean);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req?.headers ?? {})) {
      if (Array.isArray(value)) headers.set(key, value.join(", "));
      else if (typeof value === "string") headers.set(key, value);
    }

    const body = await new Promise<Buffer>((resolve) => {
      const chunks: Buffer[] = [];
      req.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
      req.on("end", () => resolve(Buffer.concat(chunks)));
      req.on("error", () => resolve(Buffer.alloc(0)));
    });

    const request = new Request(`${proto}://${host}/auth/${segments.join("/")}${parsed.search}`, {
      method,
      headers,
      body: method === "GET" || method === "HEAD" ? undefined : body,
    });

    const response = await handleAuth(request, segments);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    const payload = Buffer.from(await response.arrayBuffer());
    res.end(payload);
  } catch (error) {
    console.error("Auth route error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Auth route failure", message: (error as Error)?.message ?? "unknown" }));
  }
}
