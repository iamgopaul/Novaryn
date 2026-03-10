import { useEffect, useState } from "react";
import { api, type Experiment } from "../api";
import { useEnv } from "../contexts/EnvContext";
import PageGuide from "../components/PageGuide";

const EXPERIMENTS_STEPS = [
  {
    step: "1",
    title: "Select an environment",
    desc: "Pick the project and environment from the header dropdowns. Experiments are scoped to an environment so results don't mix between prod and staging.",
  },
  {
    step: "2",
    title: "Create an experiment",
    desc: 'Click "+ New Experiment", give it a unique key (e.g. checkout_cta_test), and define at least two variants with their traffic weights.',
  },
  {
    step: "3",
    title: "Define variants & weights",
    desc: "Each variant gets a key (e.g. control, treatment) and a weight (0–100). Weights should sum to 100 so all traffic is assigned.",
  },
  {
    step: "4",
    title: "Start the experiment",
    desc: 'Click "Start" to move the experiment from draft → running. Traffic is now split deterministically based on user ID.',
  },
  {
    step: "5",
    title: "Read variant in your app",
    desc: "Call GET /evaluate?env=prod&userId=user_123&keys=checkout_cta_test. The response includes the assigned variant key and bucket number.",
  },
  {
    step: "6",
    title: "Complete or pause",
    desc: "Pause an experiment to freeze assignments without ending it. Mark it Complete when you have a winner — this locks results for auditing.",
  },
];

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-gray-700 text-gray-300",
  running: "bg-green-900/50 text-green-400",
  paused: "bg-yellow-900/50 text-yellow-400",
  completed: "bg-blue-900/50 text-blue-400",
};

const NEXT_STATUS: Record<string, string> = {
  draft: "running",
  running: "paused",
  paused: "running",
};

export default function ExperimentsPage() {
  const { selectedEnv } = useEnv();
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api.experiments.list().then(setExperiments).catch((e) => setError(e.message));
  }, []);

  const filtered = experiments.filter((e) => !selectedEnv || e.envId === selectedEnv.id);

  async function updateStatus(exp: Experiment, status: string) {
    try {
      const updated = await api.experiments.update(exp.key, { status });
      setExperiments((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <div>
      <PageGuide
        id="experiments"
        title="How to use Experiments"
        subtitle="step-by-step"
        steps={EXPERIMENTS_STEPS}
      />

      {error && (
        <div className="mb-4 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded px-3 py-2">
          {error}
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-xl font-semibold">Experiments</h1>
        <button
          onClick={() => setShowCreate(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded font-medium"
        >
          + New Experiment
        </button>
      </div>

      <div className="space-y-3">
        {filtered.length === 0 && <p className="text-gray-500 text-sm">No experiments yet.</p>}
        {filtered.map((exp) => (
          <div key={exp.id} className="border border-gray-800 bg-gray-900 rounded-lg px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-sm font-medium">{exp.key}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${STATUS_COLORS[exp.status] ?? STATUS_COLORS.draft}`}>
                    {exp.status}
                  </span>
                  <span className="text-gray-600 text-xs">v{exp.version}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {exp.variantsJson.map((v) => (
                    <div key={v.key} className="flex items-center gap-1.5 bg-gray-800 rounded px-2 py-1 text-xs">
                      <span className="text-gray-300 font-mono">{v.key}</span>
                      <span className="text-gray-500">{v.weight}%</span>
                      <div
                        className="h-1.5 rounded-full bg-indigo-500"
                        style={{ width: `${v.weight * 0.6}px`, minWidth: "4px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                {exp.status !== "completed" && NEXT_STATUS[exp.status] && (
                  <button
                    onClick={() => updateStatus(exp, NEXT_STATUS[exp.status]!)}
                    className="text-xs px-3 py-1.5 rounded border border-gray-700 hover:bg-gray-800 text-gray-300 font-medium"
                  >
                    {exp.status === "running" ? "Pause" : "Start"}
                  </button>
                )}
                {exp.status !== "completed" && (
                  <button
                    onClick={() => updateStatus(exp, "completed")}
                    className="text-xs px-3 py-1.5 rounded border border-gray-700 hover:bg-gray-800 text-gray-400"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCreate && (
        <CreateExperimentModal
          defaultEnvId={selectedEnv?.id}
          onClose={() => setShowCreate(false)}
          onCreated={(exp) => { setExperiments((prev) => [...prev, exp]); setShowCreate(false); }}
        />
      )}
    </div>
  );
}

function CreateExperimentModal({ defaultEnvId, onClose, onCreated }: { defaultEnvId?: string; onClose: () => void; onCreated: (e: Experiment) => void }) {
  const [envId, setEnvId] = useState(defaultEnvId ?? "");
  const [key, setKey] = useState("");
  const [variants, setVariants] = useState([{ key: "control", weight: 50 }, { key: "treatment", weight: 50 }]);
  const [envs, setEnvs] = useState<{ id: string; name: string; projectName: string }[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Promise.all([api.environments.list(), api.projects.list()]).then(([envList, projList]) => {
      const projMap = new Map(projList.map((p) => [p.id, p.name]));
      const merged = envList.map((e) => ({ id: e.id, name: e.name, projectName: projMap.get(e.projectId) ?? e.projectId }));
      setEnvs(merged);
      if (merged.length > 0 && merged[0]) setEnvId(merged[0].id);
    });
  }, []);

  const totalWeight = variants.reduce((s, v) => s + v.weight, 0);

  function setVariantKey(i: number, val: string) {
    setVariants((prev) => prev.map((v, idx) => idx === i ? { ...v, key: val } : v));
  }

  function setVariantWeight(i: number, val: number) {
    setVariants((prev) => prev.map((v, idx) => idx === i ? { ...v, weight: val } : v));
  }

  function addVariant() {
    setVariants((prev) => [...prev, { key: "", weight: 0 }]);
  }

  function removeVariant(i: number) {
    setVariants((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (totalWeight !== 100) { setError("Weights must sum to 100"); return; }
    setLoading(true);
    setError("");
    try {
      const exp = await api.experiments.create({ envId, key, variants });
      onCreated(exp);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold">Create Experiment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">✕</button>
        </div>
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Environment</label>
            <select value={envId} onChange={(e) => setEnvId(e.target.value)} className="input">
              {envs.map((env) => (
                <option key={env.id} value={env.id}>{env.projectName} / {env.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Key</label>
            <input value={key} onChange={(e) => setKey(e.target.value)} required className="input" placeholder="checkout_button_experiment" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-gray-400">Variants</label>
              <span className={`text-xs ${totalWeight === 100 ? "text-green-400" : "text-red-400"}`}>
                {totalWeight}/100
              </span>
            </div>
            <div className="space-y-2">
              {variants.map((v, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input
                    value={v.key} onChange={(e) => setVariantKey(i, e.target.value)} required
                    className="input flex-1" placeholder="variant name (e.g. control)"
                  />
                  <input
                    type="number" min="0" max="100" value={v.weight}
                    onChange={(e) => setVariantWeight(i, Number(e.target.value))}
                    className="input w-20" placeholder="%"
                  />
                  {variants.length > 2 && (
                    <button type="button" onClick={() => removeVariant(i)} className="text-gray-600 hover:text-red-400 text-sm">✕</button>
                  )}
                </div>
              ))}
            </div>
            <button type="button" onClick={addVariant} className="mt-2 text-xs text-indigo-400 hover:text-indigo-300">
              + Add variant
            </button>
          </div>
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={onClose} className="flex-1 border border-gray-700 hover:bg-gray-800 text-sm py-2 rounded font-medium">
              Cancel
            </button>
            <button type="submit" disabled={loading || totalWeight !== 100}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm py-2 rounded font-medium">
              {loading ? "Creating…" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
