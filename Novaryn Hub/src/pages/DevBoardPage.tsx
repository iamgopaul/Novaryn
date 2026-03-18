import { useEffect, useMemo, useState } from "react";
import { apiUrl } from "../http";

type DevBoardProject = {
  id: string;
  name: string;
  key: string;
  description: string | null;
  board_id: string | null;
  board_name: string | null;
};

type DevBoardSummary = {
  totalCards: number;
  statusBreakdown: Array<{ code: string; name: string; total: number }>;
};

type DevBoardColumn = {
  id: string;
  name: string;
  cards: Array<{
    id: string;
    title: string;
    priority: string;
    assignee_user_id: string | null;
  }>;
};

type DevBoardData = {
  board: { id: string; name: string; project: { id: string; name: string; key: string } };
  columns: DevBoardColumn[];
};

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(apiUrl(path), {
    credentials: "include",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error((data as { error?: string })?.error ?? "Request failed");
  }
  return data as T;
}

export default function DevBoardPage() {
  const [projects, setProjects] = useState<DevBoardProject[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [board, setBoard] = useState<DevBoardData | null>(null);
  const [summary, setSummary] = useState<DevBoardSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [createName, setCreateName] = useState("");
  const [createKey, setCreateKey] = useState("");
  const [createDescription, setCreateDescription] = useState("");
  const [creating, setCreating] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId],
  );

  async function loadProjects(nextSelectedId?: string) {
    setLoading(true);
    setError("");
    try {
      const rows = await requestJson<DevBoardProject[]>("/services/devboard/projects");
      setProjects(rows);
      const selectedId = nextSelectedId ?? selectedProjectId ?? rows[0]?.id ?? "";
      setSelectedProjectId(selectedId);
    } catch (err) {
      setError((err as Error).message || "Failed to load DevBoard projects");
      setProjects([]);
      setSelectedProjectId("");
    } finally {
      setLoading(false);
    }
  }

  async function loadBoardAndSummary(project: DevBoardProject | null) {
    if (!project?.board_id) {
      setBoard(null);
      setSummary(null);
      return;
    }
    try {
      const [boardData, summaryData] = await Promise.all([
        requestJson<DevBoardData>(`/services/devboard/boards/${project.board_id}`),
        requestJson<DevBoardSummary>(`/services/devboard/projects/${project.id}/summary`),
      ]);
      setBoard(boardData);
      setSummary(summaryData);
    } catch (err) {
      setError((err as Error).message || "Failed to load selected board");
      setBoard(null);
      setSummary(null);
    }
  }

  useEffect(() => {
    loadProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadBoardAndSummary(selectedProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProjectId]);

  async function createProject(event: React.FormEvent) {
    event.preventDefault();
    if (!createName.trim() || !createKey.trim()) {
      setError("Project name and key are required.");
      return;
    }

    setCreating(true);
    setError("");
    try {
      const result = await requestJson<{ project: { id: string } }>("/services/devboard/projects", {
        method: "POST",
        body: JSON.stringify({
          name: createName.trim(),
          key: createKey.trim().toUpperCase(),
          description: createDescription.trim() || undefined,
        }),
      });
      setCreateName("");
      setCreateKey("");
      setCreateDescription("");
      await loadProjects(result.project.id);
    } catch (err) {
      setError((err as Error).message || "Failed to create project");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Developer Board</h1>
        <button
          onClick={() => loadProjects()}
          className="text-xs px-2.5 py-1 rounded border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <form onSubmit={createProject} className="border border-gray-800 bg-gray-900 rounded-lg p-4 space-y-3">
          <h2 className="text-sm font-medium text-gray-100">Create Project</h2>
          <input
            value={createName}
            onChange={(event) => setCreateName(event.target.value)}
            placeholder="Project name"
            className="input"
          />
          <input
            value={createKey}
            onChange={(event) => setCreateKey(event.target.value)}
            placeholder="Project key (e.g. PAY)"
            className="input"
          />
          <textarea
            value={createDescription}
            onChange={(event) => setCreateDescription(event.target.value)}
            placeholder="Description (optional)"
            className="input min-h-[84px]"
          />
          <button
            type="submit"
            disabled={creating}
            className="text-xs bg-indigo-700 hover:bg-indigo-600 disabled:opacity-50 text-white px-3 py-2 rounded font-medium"
          >
            {creating ? "Creating..." : "Create Project"}
          </button>
        </form>

        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4 lg:col-span-2">
          <h2 className="text-sm font-medium text-gray-100 mb-3">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                  selectedProjectId === project.id
                    ? "border-indigo-700 bg-indigo-900/30 text-indigo-300"
                    : "border-gray-700 text-gray-400 hover:text-gray-200"
                }`}
              >
                {project.key} - {project.name}
              </button>
            ))}
            {projects.length === 0 && !loading && <p className="text-xs text-gray-500">No projects yet.</p>}
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-4 border border-red-800 bg-red-950/30 rounded px-3 py-2 text-xs text-red-300">
          {error}
        </div>
      )}

      {summary && (
        <div className="mb-4 border border-gray-800 bg-gray-900 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-100 mb-2">Project Summary</h2>
          <p className="text-xs text-gray-400 mb-3">Total cards: {summary.totalCards}</p>
          <div className="flex flex-wrap gap-2">
            {summary.statusBreakdown.map((item) => (
              <span key={item.code} className="text-xs border border-gray-700 rounded px-2 py-1 text-gray-300">
                {item.name}: {item.total}
              </span>
            ))}
          </div>
        </div>
      )}

      {board && (
        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-100 mb-3">
            {board.board.project.key} - {board.board.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
            {board.columns.map((column) => (
              <div key={column.id} className="border border-gray-800 bg-gray-950/60 rounded p-3">
                <p className="text-xs font-semibold text-gray-200 mb-2">
                  {column.name} ({column.cards.length})
                </p>
                <div className="space-y-2">
                  {column.cards.map((card) => (
                    <div key={card.id} className="border border-gray-800 bg-gray-900 rounded p-2">
                      <p className="text-xs text-gray-200">{card.title}</p>
                      <p className="text-[11px] text-gray-500 mt-1">
                        {card.priority}
                        {card.assignee_user_id ? ` - ${card.assignee_user_id}` : ""}
                      </p>
                    </div>
                  ))}
                  {column.cards.length === 0 && <p className="text-[11px] text-gray-600">No cards</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
