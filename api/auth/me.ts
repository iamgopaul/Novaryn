export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any): Promise<void> {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ ok: true, route: "api/auth/me", method: req?.method ?? "GET" }));
}
