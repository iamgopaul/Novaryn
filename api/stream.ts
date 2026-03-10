export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any): Promise<void> {
  const { runNodeAdapter } = await import("../src/vercel/nodeAdapter.js");
  await runNodeAdapter(req, res);
}
