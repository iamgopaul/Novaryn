import { useEffect, useState } from "react";
import { api, type Flag, type FlagRule } from "../api";
import { useEnv } from "../contexts/EnvContext";
import PageGuide from "../components/PageGuide";

const FLAGS_STEPS = [
  {
    step: "1",
    title: "Select a project & environment",
    desc: "Use the dropdowns in the header to pick a project and the environment (e.g. prod, staging) you want to manage flags in.",
  },
  {
    step: "2",
    title: "Create a flag",
    desc: 'Click "+ New Flag", give it a lowercase key like new_checkout, choose a value type (boolean, string, number), and save.',
  },
  {
    step: "3",
    title: "Add targeting rules",
    desc: 'Click a flag to open the side panel, then add a Rollout (% of users) or Allowlist (specific user IDs) rule to control who sees it.',
  },
  {
    step: "4",
    title: "Toggle the flag on/off",
    desc: "Use the toggle on each flag card to enable or disable it instantly — no deploys needed.",
  },
  {
    step: "5",
    title: "Test evaluation",
    desc: 'Open the \u26a1 Test tab in the side panel, enter a user ID, and see exactly what value that user would receive and why.',
  },
  {
    step: "6",
    title: "Evaluate in your app",
    desc: "Call GET /evaluate?env=prod&userId=user_123&keys=your_flag with your SDK key in the Authorization header to get flag values at runtime.",
  },
];

export default function FlagsPage() {
  const { selectedEnv, selectedProject } = useEnv();
  const [flags, setFlags] = useState<Flag[]>([]);
  const [selected, setSelected] = useState<Flag | null>(null);
  const [rules, setRules] = useState<FlagRule[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.flags.list().then(setFlags).catch((e) => setError(e.message));
  }, []);

  const filtered = flags.filter((f) => {
    if (selectedEnv && f.envId !== selectedEnv.id) return false;
    if (search && !f.key.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const enabledCount = filtered.filter((f) => f.enabled).length;

  async function toggleFlag(flag: Flag) {
    try {
      const updated = await api.flags.update(flag.key, { enabled: !flag.enabled });
      setFlags((prev) => prev.map((f) => (f.id === updated.id ? updated : f)));
      if (selected?.id === updated.id) setSelected(updated);
    } catch (e) { setError((e as Error).message); }
  }

  async function selectFlag(flag: Flag) {
    setSelected(flag);
    setShowTest(false);
    const r = await api.rules.list(flag.key).catch(() => []);
    setRules(r);
  }

  async function deleteRule(ruleId: string) {
    if (!selected) return;
    await api.rules.delete(selected.key, ruleId);
    setRules((prev) => prev.filter((r) => r.id !== ruleId));
  }

  async function deleteFlag(flag: Flag, e: React.MouseEvent) {
    e.stopPropagation();
    if (!confirm(`Delete flag "${flag.key}"? This cannot be undone.`)) return;
    try {
      await api.flags.delete(flag.key);
      setFlags((prev) => prev.filter((f) => f.id !== flag.id));
      if (selected?.id === flag.id) setSelected(null);
    } catch (err) { setError((err as Error).message); }
  }

  return (
    <div>
      <PageGuide
        id="flags"
        title="How to use Feature Flags"
        subtitle="step-by-step"
        steps={FLAGS_STEPS}
      />

      {error && (
        <div className="mb-4 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded px-3 py-2">{error}</div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h1 className="text-xl font-semibold">Feature Flags</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            {selectedEnv
              ? <>{enabledCount} of {filtered.length} enabled in <span className="font-mono">{selectedProject?.name}/{selectedEnv.name}</span></>
              : "Select an environment above"
            }
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          disabled={!selectedEnv}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-sm px-4 py-2 rounded font-medium"
        >
          + New Flag
        </button>
      </div>

      <div className="mb-4">
        <input
          value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Search flags…"
          className="input text-sm w-full sm:max-w-xs"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Flag list */}
        <div className="flex-1 space-y-2 min-w-0">
          {!selectedEnv && (
            <div className="border border-dashed border-gray-700 rounded-lg p-8 text-center">
              <p className="text-gray-500 text-sm">Select a project and environment in the header to view flags.</p>
            </div>
          )}
          {selectedEnv && filtered.length === 0 && (
            <div className="border border-dashed border-gray-700 rounded-lg p-8 text-center">
              <p className="text-gray-500 text-sm">{search ? "No flags match your search." : "No flags yet. Create your first flag."}</p>
            </div>
          )}
          {filtered.map((flag) => (
            <FlagCard
              key={flag.id}
              flag={flag}
              selected={selected?.id === flag.id}
              onClick={() => selectFlag(flag)}
              onToggle={(e) => { e.stopPropagation(); toggleFlag(flag); }}
              onDelete={(e) => deleteFlag(flag, e)}
              onTest={(e) => {
                e.stopPropagation();
                setSelected(flag);
                setShowTest(true);
                api.rules.list(flag.key).then(setRules).catch(() => {});
              }}
            />
          ))}
        </div>

        {/* Side panel */}
        {selected && (
          <div className="w-full lg:w-80 shrink-0">
            <div className="flex border border-gray-800 rounded-t-lg overflow-hidden">
              <button onClick={() => setShowTest(false)}
                className={`flex-1 text-xs py-2 font-medium transition-colors ${!showTest ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-500 hover:text-gray-300"}`}>
                Rules
              </button>
              <button onClick={() => setShowTest(true)}
                className={`flex-1 text-xs py-2 font-medium transition-colors ${showTest ? "bg-gray-800 text-white" : "bg-gray-900 text-gray-500 hover:text-gray-300"}`}>
                ⚡ Test
              </button>
            </div>
            <div className="border border-t-0 border-gray-800 bg-gray-900 rounded-b-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-indigo-400 text-xs truncate">{selected.key}</span>
                <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-gray-300 text-xs shrink-0 ml-2">✕</button>
              </div>
              {!showTest ? (
                <>
                  {rules.length === 0 && <p className="text-gray-500 text-xs mb-4">No rules — flag uses default value.</p>}
                  <div className="space-y-2 mb-4">
                    {rules.map((rule) => (
                      <div key={rule.id} className="border border-gray-700 rounded p-2 text-xs flex items-start justify-between gap-2">
                        <div>
                          <span className="text-indigo-400 font-medium uppercase">{rule.ruleJson.type}</span>
                          <span className="text-gray-400 ml-2">
                            {rule.ruleJson.type === "rollout" && `${rule.ruleJson.percentage}%`}
                            {rule.ruleJson.type === "allowlist" && `${(rule.ruleJson.userIds as string[]).length} users`}
                            {rule.ruleJson.type === "segment" && rule.ruleJson.segmentKey as string}
                          </span>
                          <span className="text-gray-600 ml-1">p{rule.priority}</span>
                        </div>
                        <button onClick={() => deleteRule(rule.id)} className="text-red-500 hover:text-red-400 shrink-0">✕</button>
                      </div>
                    ))}
                  </div>
                  <AddRuleForm flagKey={selected.key} onAdded={(r) => setRules((prev) => [...prev, r])} />
                </>
              ) : (
                <TestPanel flag={selected} />
              )}
            </div>
          </div>
        )}
      </div>

      {showCreate && selectedEnv && (
        <CreateFlagModal
          envId={selectedEnv.id}
          onClose={() => setShowCreate(false)}
          onCreated={(f) => { setFlags((prev) => [...prev, f]); setShowCreate(false); }}
        />
      )}
    </div>
  );
}

function FlagCard({ flag, selected, onClick, onToggle, onDelete, onTest }: {
  flag: Flag;
  selected: boolean;
  onClick: () => void;
  onToggle: (e: React.MouseEvent) => void;
  onDelete: (e: React.MouseEvent) => void;
  onTest: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
        selected ? "border-indigo-500 bg-indigo-950/40" : "border-gray-800 bg-gray-900 hover:border-gray-700"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-sm font-medium truncate">{flag.key}</span>
            <span className="text-xs text-gray-600 bg-gray-800 px-1.5 py-0.5 rounded uppercase shrink-0">{flag.type}</span>
            {!flag.enabled && <span className="text-xs text-gray-600 italic shrink-0">off</span>}
          </div>
          <p className="text-xs text-gray-600 mt-0.5">
            default: <span className="font-mono text-gray-500">{JSON.stringify(flag.defaultValueJson)}</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Toggle enabled={flag.enabled} onToggle={onToggle} />
          <button onClick={onTest} className="text-gray-600 hover:text-indigo-400 transition-colors p-1 text-xs" title="Test">⚡</button>
          <button onClick={onDelete} className="text-gray-600 hover:text-red-400 transition-colors p-1 text-xs" title="Delete">✕</button>
        </div>
      </div>
    </div>
  );
}

function TestPanel({ flag }: { flag: Flag }) {
  const { selectedProject, selectedEnv } = useEnv();
  const [userId, setUserId] = useState("user_alice");
  const [result, setResult] = useState<{ value: unknown; reason: string; bucket?: number } | null>(null);
  const [loading, setLoading] = useState(false);

  async function test() {
    if (!selectedProject || !selectedEnv) return;
    setLoading(true);
    try {
      const res = await fetch(`/evaluate?project=${encodeURIComponent(selectedProject.name)}&env=${encodeURIComponent(selectedEnv.name)}&userId=${encodeURIComponent(userId)}&keys=${flag.key}`);
      const data = await res.json() as { flags: { value: unknown; reason: string; bucket?: number }[] };
      setResult(data.flags[0] ?? null);
    } finally { setLoading(false); }
  }

  const curlCmd = selectedProject && selectedEnv
    ? `curl "http://localhost:3000/evaluate?project=${encodeURIComponent(selectedProject.name)}&env=${encodeURIComponent(selectedEnv.name)}&userId=${userId}&keys=${flag.key}"`
    : "";

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs text-gray-400 mb-1">User ID</label>
        <div className="flex gap-1">
          <input value={userId} onChange={(e) => setUserId(e.target.value)} className="input text-xs flex-1" placeholder="customer_001" />
          <button onClick={test} disabled={loading || !selectedEnv}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs px-3 rounded font-medium">
            {loading ? "…" : "Run"}
          </button>
        </div>
      </div>
      {result && (
        <div className="bg-gray-800 rounded p-3 text-xs space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-400">value</span>
            <span className="font-mono text-white">{JSON.stringify(result.value)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">reason</span>
            <span className={`font-mono ${result.reason === "rollout" ? "text-green-400" : result.reason === "allowlist" ? "text-blue-400" : result.reason === "disabled" ? "text-red-400" : "text-gray-300"}`}>
              {result.reason}
            </span>
          </div>
          {result.bucket !== undefined && (
            <div className="flex justify-between">
              <span className="text-gray-400">bucket</span>
              <span className="font-mono text-gray-300">{result.bucket}/100</span>
            </div>
          )}
        </div>
      )}
      {curlCmd && (
        <div>
          <p className="text-xs text-gray-500 mb-1">curl</p>
          <div className="relative group">
            <pre className="bg-gray-800 rounded p-2 text-xs text-gray-400 overflow-x-auto whitespace-pre-wrap break-all">{curlCmd}</pre>
            <button onClick={() => navigator.clipboard.writeText(curlCmd)}
              className="absolute top-1.5 right-1.5 text-xs text-gray-600 hover:text-gray-300 opacity-0 group-hover:opacity-100 bg-gray-700 px-1.5 py-0.5 rounded">
              copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: (e: React.MouseEvent) => void }) {
  return (
    <button onClick={onToggle}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${enabled ? "bg-indigo-600" : "bg-gray-700"}`}>
      <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${enabled ? "translate-x-4.5" : "translate-x-0.5"}`} />
    </button>
  );
}

function AddRuleForm({ flagKey, onAdded }: { flagKey: string; onAdded: (r: FlagRule) => void }) {
  const [type, setType] = useState<"rollout" | "allowlist">("rollout");
  const [percentage, setPercentage] = useState("50");
  const [userIds, setUserIds] = useState("");
  const [priority, setPriority] = useState("0");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const rule = type === "rollout"
        ? { type: "rollout" as const, percentage: Number(percentage) }
        : { type: "allowlist" as const, userIds: userIds.split(",").map((s) => s.trim()).filter(Boolean) };
      const r = await api.rules.create(flagKey, { priority: Number(priority), rule });
      onAdded(r);
      setUserIds(""); setPercentage("50");
    } finally { setLoading(false); }
  }

  return (
    <form onSubmit={submit} className="space-y-2 pt-3 border-t border-gray-700">
      <p className="text-xs text-gray-400 font-medium">Add rule</p>
      <select value={type} onChange={(e) => setType(e.target.value as "rollout" | "allowlist")}
        className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-100">
        <option value="rollout">Rollout %</option>
        <option value="allowlist">Allowlist</option>
      </select>
      {type === "rollout" && (
        <input type="number" min="0" max="100" value={percentage} onChange={(e) => setPercentage(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-100" placeholder="Percentage (0–100)" />
      )}
      {type === "allowlist" && (
        <input value={userIds} onChange={(e) => setUserIds(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-100" placeholder="customer_001, customer_002" />
      )}
      <input type="number" min="0" value={priority} onChange={(e) => setPriority(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-100" placeholder="Priority (0 = highest)" />
      <button type="submit" disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs py-1.5 rounded font-medium">
        {loading ? "Adding…" : "Add Rule"}
      </button>
    </form>
  );
}

function CreateFlagModal({ envId, onClose, onCreated }: {
  envId: string;
  onClose: () => void;
  onCreated: (f: Flag) => void;
}) {
  const [key, setKey] = useState("");
  const [type, setType] = useState("boolean");
  const [enabled, setEnabled] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const flag = await api.flags.create({ envId, key, type, defaultValue: false, enabled });
      onCreated(flag);
    } catch (err) { setError((err as Error).message); }
    finally { setLoading(false); }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold">Create Flag</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">✕</button>
        </div>
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Key</label>
            <input value={key} onChange={(e) => setKey(e.target.value)} required className="input" placeholder="feature_access_control" autoFocus />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="input">
              <option value="boolean">boolean</option>
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="json">json</option>
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
            <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} className="accent-indigo-500" />
            Enabled on creation
          </label>
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={onClose} className="flex-1 border border-gray-700 hover:bg-gray-800 text-sm py-2 rounded font-medium">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm py-2 rounded font-medium">
              {loading ? "Creating…" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
