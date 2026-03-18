import { listProjectsForUser } from "../db/queries/projects";
import { json } from "../utils/json";
import { requireRequestUserId } from "../utils/requestUser";

export async function handleListProjects(req: Request): Promise<Response> {
  let ownerUserId: string;
  try {
    ownerUserId = requireRequestUserId(req);
  } catch {
    return json({ error: "Missing user identity" }, 401);
  }

  const projects = await listProjectsForUser(ownerUserId);
  return json(projects);
}
