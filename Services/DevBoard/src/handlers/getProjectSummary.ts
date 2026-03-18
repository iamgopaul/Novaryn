import { getProjectSummary } from "../db/queries/projects";
import { json } from "../utils/json";
import { requireRequestUserId } from "../utils/requestUser";

export async function handleGetProjectSummary(req: Request, projectId: string): Promise<Response> {
  let ownerUserId: string;
  try {
    ownerUserId = requireRequestUserId(req);
  } catch {
    return json({ error: "Missing user identity" }, 401);
  }

  const summary = await getProjectSummary(projectId, ownerUserId);
  if (!summary) {
    return json({ error: "Project not found" }, 404);
  }

  return json(summary);
}
