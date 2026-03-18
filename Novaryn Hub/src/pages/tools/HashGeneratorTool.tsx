import { useEffect, useMemo, useState } from "react";
import { listToolRuns, saveToolRun, type ToolRun } from "./toolRuns";

function toHex(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function HashGeneratorTool() {
  const [input, setInput] = useState("");
  const [sha256, setSha256] = useState("");
  const [sha1, setSha1] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<ToolRun[]>([]);

  const inputBytes = useMemo(() => new TextEncoder().encode(input), [input]);

  useEffect(() => {
    listToolRuns("hash-generator", 5).then(setHistory).catch(() => undefined);
  }, []);

  async function generate() {
    setError("");
    setLoading(true);
    try {
      const [digest256, digest1] = await Promise.all([
        crypto.subtle.digest("SHA-256", inputBytes),
        crypto.subtle.digest("SHA-1", inputBytes),
      ]);
      const next256 = toHex(digest256);
      const next1 = toHex(digest1);
      setSha256(next256);
      setSha1(next1);
      saveToolRun("hash-generator", input, JSON.stringify({ sha256: next256, sha1: next1 }))
        .then(() => listToolRuns("hash-generator", 5).then(setHistory))
        .catch(() => undefined);
    } catch (err) {
      setError((err as Error).message || "Failed to generate hash");
      setSha256("");
      setSha1("");
    } finally {
      setLoading(false);
    }
  }

  function copy(value: string) {
    if (!value) return;
    navigator.clipboard.writeText(value).catch(() => undefined);
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-semibold mb-2">Hash Generator</h1>
      <p className="text-sm text-gray-400 mb-4">Generate SHA-256 and SHA-1 hashes for strings instantly.</p>

      <div className="border border-gray-800 bg-gray-900 rounded-lg p-4 mb-4">
        <p className="text-xs text-gray-500 mb-2">Input</p>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter text"
          className="input min-h-[140px] font-mono text-xs"
        />
        <button
          onClick={generate}
          disabled={loading}
          className="text-xs mt-3 bg-indigo-700 hover:bg-indigo-600 disabled:opacity-50 text-white px-3 py-2 rounded font-medium"
        >
          {loading ? "Generating..." : "Generate Hashes"}
        </button>
        {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500">SHA-256</p>
            <button onClick={() => copy(sha256)} className="text-[11px] border border-gray-700 rounded px-2 py-1 text-gray-300">Copy</button>
          </div>
          <p className="text-xs text-gray-300 font-mono break-all">{sha256 || "-"}</p>
        </div>
        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500">SHA-1</p>
            <button onClick={() => copy(sha1)} className="text-[11px] border border-gray-700 rounded px-2 py-1 text-gray-300">Copy</button>
          </div>
          <p className="text-xs text-gray-300 font-mono break-all">{sha1 || "-"}</p>
        </div>
      </div>

      <div className="mt-4 border border-gray-800 bg-gray-900 rounded-lg p-4">
        <p className="text-xs text-gray-500 mb-2">Recent saved runs</p>
        {history.length === 0 && <p className="text-xs text-gray-600">No saved runs yet.</p>}
        <div className="space-y-2">
          {history.map((run) => (
            <button
              key={run.id}
              onClick={() => setInput(run.inputText)}
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
