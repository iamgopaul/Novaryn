export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any): Promise<void> {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      ok: true,
      runtime: "vercel-node",
      method: req?.method ?? "GET",
      path: req?.url ?? "/api/health",
      timestamp: new Date().toISOString(),
    }),
  );
}
