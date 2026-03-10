import { runNodeAdapter } from "../lib/vercel/nodeAdapter";

export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any): Promise<void> {
  await runNodeAdapter(req, res);
}
