import { handleCreateCard } from "./handlers/createCard";
import { handleCreateProject } from "./handlers/createProject";
import { handleGetBoard } from "./handlers/getBoard";
import { handleGetProjectSummary } from "./handlers/getProjectSummary";
import { handleHome } from "./handlers/home";
import { handleListProjects } from "./handlers/listProjects";
import { handleMoveCard } from "./handlers/moveCard";
import { handleUpdateCard } from "./handlers/updateCard";

function withCors(res: Response): Response {
  const headers = new Headers(res.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET,POST,PATCH,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, X-DevBoard-User-Id");
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

export async function router(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (req.method === "OPTIONS") {
    return withCors(new Response(null, { status: 204 }));
  }

  let response: Response;

  if (req.method === "GET" && pathname === "/") {
    response = handleHome();
  } else if (req.method === "POST" && pathname === "/projects") {
    response = await handleCreateProject(req);
  } else if (req.method === "GET" && pathname === "/projects") {
    response = await handleListProjects(req);
  } else if (req.method === "GET" && pathname.match(/^\/boards\/[^/]+$/)) {
    const boardId = pathname.split("/")[2];
    response = await handleGetBoard(req, boardId);
  } else if (req.method === "POST" && pathname.match(/^\/boards\/[^/]+\/cards$/)) {
    const boardId = pathname.split("/")[2];
    response = await handleCreateCard(req, boardId);
  } else if (req.method === "PATCH" && pathname.match(/^\/cards\/[^/]+$/)) {
    const cardId = pathname.split("/")[2];
    response = await handleUpdateCard(req, cardId);
  } else if (req.method === "PATCH" && pathname.match(/^\/cards\/[^/]+\/move$/)) {
    const cardId = pathname.split("/")[2];
    response = await handleMoveCard(req, cardId);
  } else if (req.method === "GET" && pathname.match(/^\/projects\/[^/]+\/summary$/)) {
    const projectId = pathname.split("/")[2];
    response = await handleGetProjectSummary(req, projectId);
  } else {
    response = new Response("Not Found", { status: 404 });
  }

  return withCors(response);
}
