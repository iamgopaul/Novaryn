import { handleRequest } from "../src/app";

export async function runNodeAdapter(req: any, res: any): Promise<void> {
  const method = req.method ?? "GET";
  const proto = req.headers["x-forwarded-proto"] ?? "https";
  const host = req.headers.host ?? "localhost";
  const rawPath = req.url ?? "/";
  const parsed = new URL(`${proto}://${host}${rawPath}`);
  const normalizedPath = parsed.pathname.startsWith("/api/")
    ? parsed.pathname.replace(/^\/api/, "")
    : parsed.pathname === "/api"
      ? "/"
      : parsed.pathname;
  const url = `${proto}://${host}${normalizedPath}${parsed.search}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers ?? {})) {
    if (Array.isArray(value)) headers.set(key, value.join(", "));
    else if (typeof value === "string") headers.set(key, value);
  }

  const body = await new Promise<Buffer>((resolve) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
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
}
