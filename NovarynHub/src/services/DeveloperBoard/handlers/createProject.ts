import { createProjectWithDefaultBoard } from "../db/queries/projects";
import { json } from "../utils/json";
import { requireRequestUserId } from "../utils/requestUser";
import { createProjectSchema } from "../utils/validate";

export async function handleCreateProject(req: Request): Promise<Response> {
  let ownerUserId: string;
  try {
    ownerUserId = requireRequestUserId(req);
  } catch {
    return json({ error: "Missing user identity" }, 401);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const parsed = createProjectSchema.safeParse(body);
  if (!parsed.success) {
    return json({ errors: parsed.error.flatten() }, 400);
  }

  try {
    const { project, board } = await createProjectWithDefaultBoard({
      ...parsed.data,
      ownerUserId,
    });
    return json({ project, board }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    if (message.includes("unique")) {
      return json({ error: "Project key already exists" }, 409);
    }
    return json({ error: "Failed to create project" }, 500);
  }
}
