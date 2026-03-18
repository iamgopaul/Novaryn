import { apiUrl } from "../../http";

export type ToolKey = "json-studio" | "url-workbench" | "hash-generator";

export type ToolRun = {
  id: string;
  toolKey: ToolKey;
  inputText: string;
  outputText: string;
  createdAt: string;
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
  let data: unknown = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { error: text };
    }
  }

  if (!response.ok) {
    throw new Error((data as { error?: string })?.error ?? `Request failed (${response.status})`);
  }
  return data as T;
}

export async function listToolRuns(toolKey: ToolKey, limit = 10): Promise<ToolRun[]> {
  return requestJson<ToolRun[]>(`/api/tools/runs?toolKey=${encodeURIComponent(toolKey)}&limit=${limit}`);
}

export async function saveToolRun(toolKey: ToolKey, inputText: string, outputText: string): Promise<ToolRun> {
  return requestJson<ToolRun>("/api/tools/runs", {
    method: "POST",
    body: JSON.stringify({ toolKey, inputText, outputText }),
  });
}
