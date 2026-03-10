import { useEffect, useRef, useState } from "react";
import { api, type AuditEntry } from "../api";
import PageGuide from "../components/PageGuide";

const AUDIT_STEPS = [
  {
    step: "1",
    title: "What is logged",
    desc: "Every create, update, and delete action on flags, experiments, SDK keys, projects, and environments is recorded here automatically.",
  },
  {
    step: "2",
    title: "Live mode",
    desc: "When Live is active (green), the log refreshes automatically via a server-sent event stream. Toggle it off to pause updates.",
  },
  {
    step: "3",
    title: "Filter by action",
    desc: "Use the action dropdown to narrow down to create, update, or delete events. Useful when investigating a specific change.",
  },
  {
    step: "4",
    title: "Search by resource",
    desc: "Type a flag key, experiment key, or resource name in the search box to find specific entries across all action types.",
  },
  {
    step: "5",
    title: "Read an entry",
    desc: "Each row shows the action performed, the resource affected, who triggered it (actor), and a timestamp relative to now.",
  },
];

export default function AuditPage() {
  const [entries, setEntries] = useState<AuditEntry[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "create" | "update" | "delete">("all");
  const [live, setLive] = useState(true);
  const [now, setNow] = useState(() => Date.now());
  const [error, setError] = useState("");
  const [streamParams, setStreamParams] = useState<{ project: string; env: string } | null>(null);
  const esRef = useRef<EventSource | null>(null);

  function loadAudit() {
    api.audit.list().then(setEntries).catch((e) => setError(e.message));
  }

  useEffect(() => {
    loadAudit();
    const tick = setInterval(() => setNow(Date.now()), 30_000);
    // Dynamically resolve project+env for SSE from the API
    Promise.all([api.environments.list(), api.projects.list()]).then(([envs, projs]) => {
      const proj = projs[0];
      const env = envs[0];
      if (proj && env) setStreamParams({ project: proj.name, env: env.name });
    });
    return () => clearInterval(tick);
  }, []);

  // SSE live refresh
  useEffect(() => {
    if (!live || !streamParams) { esRef.current?.close(); esRef.current = null; return; }
    const es = new EventSource(`/stream?project=${encodeURIComponent(streamParams.project)}&env=${encodeURIComponent(streamParams.env)}`);
    esRef.current = es;
    es.onmessage = (e) => {
      try {
        const msg = JSON.parse(e.data);
        if (msg.type !== "connected") loadAudit();
      } catch { /* ignore */ }
    };
    return () => { es.close(); esRef.current = null; };
  }, [live, streamParams]);

  const filtered = entries.filter((e) => {
    if (filter !== "all" && !e.action.startsWith(filter)) return false;
    if (search && !e.resource.includes(search) && !e.action.includes(search)) return false;
    return true;
  });

  return (
    <div>
      <PageGuide
        id="audit"
        title="How to use the Audit Log"
        subtitle="step-by-step"
        steps={AUDIT_STEPS}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-xl font-semibold">Audit Log</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLive((v) => !v)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border font-medium transition-colors ${
              live ? "border-green-700 bg-green-900/30 text-green-400" : "border-gray-700 text-gray-500 hover:text-gray-300"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${live ? "bg-green-400 animate-pulse" : "bg-gray-600"}`} />
            {live ? "Live" : "Paused"}
          </button>
          <button onClick={loadAudit} className="text-xs px-3 py-1.5 rounded border border-gray-700 text-gray-400 hover:text-gray-200 hover:bg-gray-800">
            Refresh
          </button>
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Search resource or action…"
          className="input flex-1 text-sm"
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value as typeof filter)} className="input w-full sm:w-36 text-sm">
          <option value="all">All actions</option>
          <option value="create">Creates</option>
          <option value="update">Updates</option>
          <option value="delete">Deletes</option>
        </select>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && <p className="text-gray-500 text-sm">No entries match.</p>}
        {filtered.map((entry) => (
          <div key={entry.id} className="border border-gray-800 bg-gray-900 rounded-lg px-4 py-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`shrink-0 text-xs font-mono px-1.5 py-0.5 rounded ${actionColor(entry.action)}`}>
                  {entry.action}
                </span>
                <span className="text-gray-300 font-mono truncate">{entry.resource}</span>
              </div>
              <div className="shrink-0 text-left sm:text-right" title={new Date(entry.createdAt).toISOString()}>
                <span className="text-gray-400 text-xs">{relativeTime(entry.createdAt, now)}</span>
                <div className="text-gray-600 text-xs">{formatFull(entry.createdAt)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatFull(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = d.toDateString() === yesterday.toDateString();
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
  if (isToday) return `today at ${time}`;
  if (isYesterday) return `yesterday at ${time}`;
  return d.toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true });
}

function relativeTime(iso: string, now: number): string {
  const diff = now - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function actionColor(action: string) {
  if (action.startsWith("create")) return "bg-green-900/50 text-green-400";
  if (action.startsWith("update")) return "bg-yellow-900/50 text-yellow-400";
  if (action.startsWith("delete")) return "bg-red-900/50 text-red-400";
  return "bg-gray-800 text-gray-400";
}
