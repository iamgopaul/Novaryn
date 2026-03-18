import { useEffect, useMemo, useState } from "react";
import { listToolRuns, saveToolRun, type ToolRun } from "./toolRuns";

export default function UrlWorkbenchTool() {
  const [raw, setRaw] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [history, setHistory] = useState<ToolRun[]>([]);

  const encoded = useMemo(() => encodeURIComponent(raw), [raw]);
  const decoded = useMemo(() => {
    try {
      return decodeURIComponent(raw);
    } catch {
      return "Invalid encoded string";
    }
  }, [raw]);

  const queryString = useMemo(() => {
    if (!queryInput.trim()) return "";
    const params = new URLSearchParams();
    for (const line of queryInput.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      const [key, ...rest] = trimmed.split("=");
      if (!key) continue;
      params.append(key.trim(), rest.join("=").trim());
    }
    return params.toString();
  }, [queryInput]);

  useEffect(() => {
    listToolRuns("url-workbench", 5).then(setHistory).catch(() => undefined);
  }, []);

  async function persistRun() {
    const inputText = JSON.stringify({ raw, queryInput });
    const outputText = JSON.stringify({ encoded, decoded, queryString });
    try {
      await saveToolRun("url-workbench", inputText, outputText);
      setHistory(await listToolRuns("url-workbench", 5));
    } catch {
      // no-op in UI; user still gets tool output
    }
  }

  function copy(value: string) {
    if (!value) return;
    navigator.clipboard.writeText(value).catch(() => undefined);
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-semibold mb-2">URL Workbench</h1>
      <p className="text-sm text-gray-400 mb-4">Encode/decode URL strings and build query strings fast.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-2">Raw text</p>
          <textarea
            value={raw}
            onChange={(event) => setRaw(event.target.value)}
            placeholder="Paste URL or text"
            className="input min-h-[180px] font-mono text-xs"
          />
        </div>

        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4 space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-500">Encoded</p>
              <button onClick={() => copy(encoded)} className="text-[11px] text-gray-300 border border-gray-700 rounded px-2 py-0.5">Copy</button>
            </div>
            <p className="text-xs text-gray-300 font-mono break-all">{encoded || "-"}</p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-500">Decoded</p>
              <button onClick={() => copy(decoded)} className="text-[11px] text-gray-300 border border-gray-700 rounded px-2 py-0.5">Copy</button>
            </div>
            <p className="text-xs text-gray-300 font-mono break-all">{decoded || "-"}</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
        <p className="text-xs text-gray-500 mb-2">Query builder (one `key=value` per line)</p>
        <textarea
          value={queryInput}
          onChange={(event) => setQueryInput(event.target.value)}
          placeholder={"env=prod\nuserId=user_123\nkeys=feature_a,feature_b"}
          className="input min-h-[120px] font-mono text-xs mb-3"
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-300 font-mono break-all">{queryString || "-"}</p>
          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={() => copy(queryString)}
              className="text-[11px] text-gray-300 border border-gray-700 rounded px-2 py-1"
            >
              Copy
            </button>
            <button
              onClick={persistRun}
              className="text-[11px] text-gray-300 border border-gray-700 rounded px-2 py-1"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-gray-800 bg-gray-900 rounded-lg p-4">
        <p className="text-xs text-gray-500 mb-2">Recent saved runs</p>
        {history.length === 0 && <p className="text-xs text-gray-600">No saved runs yet.</p>}
        <div className="space-y-2">
          {history.map((run) => (
            <button
              key={run.id}
              onClick={() => {
                try {
                  const parsed = JSON.parse(run.inputText) as { raw?: string; queryInput?: string };
                  setRaw(parsed.raw ?? "");
                  setQueryInput(parsed.queryInput ?? "");
                } catch {
                  setRaw(run.inputText);
                }
              }}
              className="w-full text-left border border-gray-800 hover:border-gray-700 rounded px-2 py-1"
            >
              <p className="text-xs text-gray-300 truncate">{run.inputText || "(empty input)"}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
