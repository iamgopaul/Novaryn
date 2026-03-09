import { useEffect, useState } from "react";
import { api, type Project } from "../api";
import PageGuide from "../components/PageGuide";

const KEYS_STEPS = [
  {
    step: "1",
    title: "What are SDK keys?",
    desc: "SDK keys are read-only credentials scoped to a project. Your app uses them to call /evaluate. They cannot create or modify flags.",
  },
  {
    step: "2",
    title: "Create a key",
    desc: 'Click "+ New Key", give it a descriptive name (e.g. iOS Production), and select the project it should be scoped to.',
  },
  {
    step: "3",
    title: "Copy it immediately",
    desc: "The full key is only shown once right after creation. Copy it to your app's environment variables — it cannot be retrieved again.",
  },
  {
    step: "4",
    title: "Use it in your app",
    desc: "Pass the key as a Bearer token: Authorization: Bearer ct_xxxx. The server will scope flag access to the key's project automatically.",
  },
  {
    step: "5",
    title: "Revoke when needed",
    desc: "If a key is compromised or no longer needed, revoke it here. Apps using it will immediately lose access — create a new key first.",
  },
];

type SdkKey = {
  id: string;
  name: string;
  prefix: string;
  keyPlain: string | null;
  projectId: string;
  createdAt: string;
  key?: string; // only present immediately after creation
};

export default function KeysPage() {
  const [keys, setKeys] = useState<SdkKey[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [newKey, setNewKey] = useState<SdkKey | null>(null);
  const [error, setError] = useState("");
  const [peekedId, setPeekedId] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/admin/sdk-keys", { headers: { Authorization: `Bearer ${import.meta.env.VITE_ADMIN_API_KEY ?? "meridiankey"}` } }).then((r) => r.json()) as Promise<SdkKey[]>,
      api.projects.list(),
    ]).then(([k, p]) => { setKeys(k); setProjects(p); }).catch((e) => setError(e.message));
  }, []);

  async function revoke(id: string, name: string) {
    if (!confirm(`Revoke key "${name}"? Apps using it will immediately lose access.`)) return;
    await fetch(`/admin/sdk-keys/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${import.meta.env.VITE_ADMIN_API_KEY ?? "meridiankey"}` },
    });
    setKeys((prev) => prev.filter((k) => k.id !== id));
  }

  const projMap = new Map(projects.map((p) => [p.id, p.name]));

  return (
    <div>
      <PageGuide
        id="keys"
        title="How to use SDK Keys"
        subtitle="step-by-step"
        steps={KEYS_STEPS}
      />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">SDK Keys</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Use these keys to authenticate your app against <code className="text-gray-400">/evaluate</code>
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded font-medium"
        >
          + New Key
        </button>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {/* Newly created key — shown once */}
      {newKey && (
        <div className="mb-6 border border-green-700 bg-green-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-green-400 text-sm font-medium">Key created — copy it now, it won't be shown again.</p>
            <button onClick={() => setNewKey(null)} className="text-gray-500 hover:text-gray-300 text-xs">✕</button>
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm font-mono text-green-300 break-all">
              {newKey.key}
            </code>
            <button
              onClick={() => navigator.clipboard.writeText(newKey.key!)}
              className="shrink-0 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-xs px-3 py-2 rounded text-gray-300"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      {/* Key list */}
      <div className="space-y-2">
        {keys.length === 0 && <p className="text-gray-500 text-sm">No SDK keys yet.</p>}
        {keys.map((k) => {
          const peeked = peekedId === k.id;
          return (
            <div key={k.id} className="border border-gray-800 bg-gray-900 rounded-lg px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{k.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded">
                      {projMap.get(k.projectId) ?? k.projectId}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <code className={`text-xs font-mono ${peeked ? "text-yellow-300" : "text-gray-400"}`}>
                      {peeked
                        ? (k.keyPlain ?? k.prefix)
                        : `${k.prefix.slice(0, 6)}••••••••••••••••••••`}
                    </code>
                    {!peeked && (
                      <span className="text-xs text-gray-600">
                        created {new Date(k.createdAt).toLocaleDateString()}
                      </span>
                    )}
                    {peeked && !k.keyPlain && (
                      <span className="text-xs text-gray-600 italic">created before peek mode — prefix only</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setPeekedId(peeked ? null : k.id)}
                    className={`text-xs px-2.5 py-1.5 rounded border transition-colors ${
                      peeked
                        ? "border-yellow-800 text-yellow-500 bg-yellow-900/20"
                        : "border-gray-700 text-gray-500 hover:text-gray-300 hover:bg-gray-800"
                    }`}
                    title={peeked ? "Hide" : "Peek"}
                  >
                    {peeked ? "🙈 Hide" : "👁 Peek"}
                  </button>
                  {peeked && (
                    <button
                      onClick={() => navigator.clipboard.writeText(k.keyPlain ?? k.prefix)}
                      className="text-xs px-2.5 py-1.5 rounded border border-yellow-800 text-yellow-500 hover:bg-yellow-900/20"
                    >
                      Copy key
                    </button>
                  )}
                  <button
                    onClick={() => revoke(k.id, k.name)}
                    className="text-xs border border-red-900 text-red-500 hover:bg-red-900/20 px-3 py-1.5 rounded transition-colors"
                  >
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SDK usage snippet */}
      {keys.length > 0 && (
        <div className="mt-8 border border-gray-800 bg-gray-900/50 rounded-lg p-4">
          <p className="text-xs text-gray-400 font-medium mb-2">Usage</p>
          <pre className="text-xs text-gray-400 overflow-x-auto">{`import { Novaryn } from "./sdk";

const ct = new Novaryn({
  host: "http://localhost:3000",
  project: "${projMap.get(keys[0]?.projectId ?? "") ?? "my-project"}",
  env: "prod",
});

// With SDK key auth
const flags = await ct.evaluate("user_123", ["dark_mode", "new_onboarding"], {
  apiKey: "${keys[0]?.prefix ?? "ct_..."}••••",
});`}
          </pre>
        </div>
      )}

      {showCreate && (
        <CreateKeyModal
          projects={projects}
          onClose={() => setShowCreate(false)}
          onCreated={(k) => {
            setNewKey(k);
            setKeys((prev) => [...prev, k]);
            setShowCreate(false);
          }}
        />
      )}
    </div>
  );
}

function CreateKeyModal({ projects, onClose, onCreated }: {
  projects: Project[];
  onClose: () => void;
  onCreated: (k: SdkKey) => void;
}) {
  const [name, setName] = useState("");
  const [projectId, setProjectId] = useState(projects[0]?.id ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await fetch("/admin/sdk-keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ADMIN_API_KEY ?? "meridiankey"}`,
        },
        body: JSON.stringify({ name, projectId }),
      });
      const data = await res.json() as SdkKey & { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Failed");
      onCreated(data);
    } catch (err) {
      setError((err as Error).message);
    } finally { setLoading(false); }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold">Create SDK Key</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">✕</button>
        </div>
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required
              className="input" placeholder="Production iOS app" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Project</label>
            <select value={projectId} onChange={(e) => setProjectId(e.target.value)} className="input">
              {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <p className="text-xs text-gray-500">
            The key will be scoped to this project. It can only access environments within it.
          </p>
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={onClose}
              className="flex-1 border border-gray-700 hover:bg-gray-800 text-sm py-2 rounded font-medium">
              Cancel
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm py-2 rounded font-medium">
              {loading ? "Creating…" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
