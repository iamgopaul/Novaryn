export async function runNodeAdapter(req: any, res: any): Promise<void> {
  try {
    const { handleRequest } = await import("../app");
    const method = req?.method ?? "GET";

    if (typeof req?.headers?.get === "function" && typeof req?.text === "function") {
      const response = await handleRequest(req as Request);
      if (!res) return;
      res.statusCode = response.status;
      response.headers.forEach((value, key) => res.setHeader(key, value));
      const payload = Buffer.from(await response.arrayBuffer());
      res.end(payload);
      return;
    }

    const proto = req?.headers?.["x-forwarded-proto"] ?? "https";
    const host = req?.headers?.host ?? "localhost";
    const rawPath = req?.url ?? "/";
    const parsed = rawPath.startsWith("http://") || rawPath.startsWith("https://")
      ? new URL(rawPath)
      : new URL(`${proto}://${host}${rawPath}`);

    const normalizedPath = parsed.pathname.startsWith("/api/")
      ? parsed.pathname.replace(/^\/api/, "")
      : parsed.pathname === "/api"
        ? "/"
        : parsed.pathname;
    const url = `${proto}://${host}${normalizedPath}${parsed.search}`;

    const headers = new Headers();
    for (const [key, value] of Object.entries(req?.headers ?? {})) {
      if (Array.isArray(value)) headers.set(key, value.join(", "));
      else if (typeof value === "string") headers.set(key, value);
    }

    const body = await new Promise<Buffer>((resolve) => {
      if (typeof req?.on !== "function") {
        resolve(Buffer.alloc(0));
        return;
      }
      const chunks: Buffer[] = [];
      req.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
      req.on("end", () => resolve(Buffer.concat(chunks)));
      req.on("error", () => resolve(Buffer.alloc(0)));
    });

    const request = new Request(url, {
      method,
      headers,
      body: method === "GET" || method === "HEAD" ? undefined : body,
    });

    const response = await handleRequest(request);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    const payload = Buffer.from(await response.arrayBuffer());
    res.end(payload);
  } catch (error) {
    console.error("Vercel adapter error:", error);
    if (!res) return;
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Function adapter failure", message: (error as Error)?.message ?? "unknown" }));
  }
}
