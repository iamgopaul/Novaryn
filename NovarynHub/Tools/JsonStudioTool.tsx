import { useEffect, useState } from "react";
import { listToolRuns, saveToolRun, type ToolRun } from "./toolRuns";

export default function JsonStudioTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState<ToolRun[]>([]);

  useEffect(() => {
    listToolRuns("json-studio", 5).then(setHistory).catch(() => undefined);
  }, []);

  function formatJson(pretty: boolean) {
    setError("");
    try {
      const parsed = JSON.parse(input);
      const nextOutput = JSON.stringify(parsed, null, pretty ? 2 : 0);
      setOutput(nextOutput);
      saveToolRun("json-studio", input, nextOutput)
        .then(() => listToolRuns("json-studio", 5).then(setHistory))
        .catch(() => undefined);
    } catch (err) {
      setOutput("");
      setError((err as Error).message || "Invalid JSON");
    }
  }

  function copyOutput() {
    if (!output) return;
    navigator.clipboard.writeText(output).catch(() => undefined);
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-semibold mb-2">JSON Studio</h1>
      <p className="text-sm text-gray-400 mb-4">Validate, pretty-print, and minify JSON payloads quickly.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-2">Input</p>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder='{"hello":"world"}'
            className="input min-h-[300px] font-mono text-xs"
          />
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={() => formatJson(true)}
              className="text-xs bg-indigo-700 hover:bg-indigo-600 text-white px-3 py-2 rounded font-medium"
            >
              Format
            </button>
            <button
              onClick={() => formatJson(false)}
              className="text-xs border border-gray-700 hover:border-gray-500 text-gray-300 px-3 py-2 rounded font-medium"
            >
              Minify
            </button>
          </div>
          {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
        </div>

        <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500">Output</p>
            <button
              onClick={copyOutput}
              className="text-[11px] border border-gray-700 hover:border-gray-500 px-2 py-1 rounded text-gray-300"
            >
              Copy
            </button>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Formatted JSON appears here"
            className="input min-h-[300px] font-mono text-xs text-gray-300"
          />
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
                setInput(run.inputText);
                setOutput(run.outputText);
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
