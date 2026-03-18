import { runNodeAdapter } from "../NovarynHub/Services/Novaryn Control Tower/api/adapter.mjs";

export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any): Promise<void> {
  await runNodeAdapter(req, res);
}
