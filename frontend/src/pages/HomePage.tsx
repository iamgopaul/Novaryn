import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

type Tab = "flags" | "experiments" | "audit" | "keys" | "settings";
type SubDashboard = "products" | "services" | "features" | "tools";

export default function HomePage({ onNavigate }: { onNavigate?: (tab: Tab) => void }) {
  const { user } = useAuth();
  return user ? <Dashboard user={user} onNavigate={onNavigate!} /> : <Landing />;
}

// ── Public landing ─────────────────────────────────────────────────────────

function Landing() {
  function go(authView: "login" | "register") {
    const path = authView === "login" ? "/login" : "/register";
    window.history.pushState({ authView }, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <div className="text-center py-16 px-4">
        <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800 text-indigo-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Self-hosted · Open source · No vendor lock-in
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight">
          Ship fearlessly with
          <br />
          <span className="text-indigo-400">Novaryn</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          A self-hosted feature flag and A/B testing platform. Control what your users see, roll out gradually,
          and run experiments — all without redeploying your app.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => go("register")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Create account →
          </button>
          <button
            onClick={() => go("login")}
            className="border border-gray-700 hover:border-gray-500 hover:bg-gray-800 text-gray-300 font-medium px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Sign in
          </button>
        </div>
      </div>

      {/* What is Novaryn */}
      <section className="mb-16 px-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 text-center">
          What is Novaryn?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "⚑",
              colorBorder: "border-indigo-900 bg-indigo-950/30",
              iconColor: "text-indigo-400",
              title: "Feature Flags",
              desc: "Toggle any feature in production without a deploy. Ship hidden code, enable it when ready, and kill-switch anything that breaks — instantly.",
            },
            {
              icon: "⚗",
              colorBorder: "border-purple-900 bg-purple-950/30",
              iconColor: "text-purple-400",
              title: "A/B Experiments",
              desc: "Split traffic between variants with configurable weights. Assign users deterministically so they always get the same experience.",
            },
            {
              icon: "⚙",
              colorBorder: "border-teal-900 bg-teal-950/30",
              iconColor: "text-teal-400",
              title: "Multi-Environment",
              desc: "Separate flag values across dev, staging, and prod. Each environment is fully isolated — a flag enabled in staging won't touch production.",
            },
          ].map((f) => (
            <div key={f.title} className={`border ${f.colorBorder} rounded-xl p-5`}>
              <div className={`text-2xl mb-3 ${f.iconColor}`}>{f.icon}</div>
              <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16 px-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 text-center">
          How it works
        </h2>
        <div className="flex flex-col gap-3">
          {[
            {
              step: "1",
              title: "Create a project & environment",
              desc: "Organize your flags by product. Add environments like prod, staging, and dev under each project.",
            },
            {
              step: "2",
              title: "Define a feature flag",
              desc: "Give it a key like new_checkout. Choose its type (boolean, string, number), set a default value, and add targeting rules — rollout % or allowlist.",
            },
            {
              step: "3",
              title: "Evaluate at runtime",
              desc: "Your app calls /evaluate with a user ID and flag key. Novaryn returns the right value instantly, no caching or SDK bloat needed.",
            },
            {
              step: "4",
              title: "Toggle from the dashboard",
              desc: "Enable or disable flags instantly. Change rollout percentages. Add allowlists. Everything takes effect on the next evaluation — zero deploys.",
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start p-4 border border-gray-800 bg-gray-900/60 rounded-lg">
              <div className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {s.step}
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code preview */}
      <section className="mb-16 px-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 text-center">
          One API call in your app
        </h2>
        <div className="border border-gray-800 bg-gray-900 rounded-xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800 bg-gray-900">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-xs text-gray-600 ml-2">your-app.ts</span>
          </div>
          <pre className="text-xs text-gray-300 leading-relaxed overflow-x-auto p-5">{`// Pass your SDK key + current user ID
const res = await fetch(
  "https://novaryn.yourdomain.com/evaluate?env=prod&userId=user_123&keys=dark_mode,new_checkout",
  { headers: { Authorization: "Bearer ct_your_sdk_key" } }
);

const { flags } = await res.json();
// flags = [
//   { key: "dark_mode",    value: true,  reason: "rollout",  bucket: 42 },
//   { key: "new_checkout", value: false, reason: "default" }
// ]

if (flags.find(f => f.key === "dark_mode")?.value) {
  showDarkTheme(); // only 10% of users see this
}`}</pre>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center pb-20 px-4">
        <div className="border border-indigo-900 bg-indigo-950/30 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto">
            Create your account to set up your own workspace, project, environment, and feature flags.
            The whole thing takes about two minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => go("register")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Create account →
            </button>
            <button
              onClick={() => go("login")}
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              Already have an account? Sign in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Authenticated dashboard ────────────────────────────────────────────────

function Dashboard({ user, onNavigate }: { user: { name: string; role: string }; onNavigate: (tab: Tab) => void }) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const [subDashboard, setSubDashboard] = useState<SubDashboard>("services");

  return (
    <div className="max-w-3xl">
      {/* Greeting */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          {greeting}, <span className="text-indigo-400">{user.name.split(" ")[0]}</span>
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Welcome back to Novaryn. Ship features confidently — flip flags, run experiments, and watch the audit log in real time.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Workspace</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {([
            { id: "products", label: "Products" },
            { id: "services", label: "Services" },
            { id: "features", label: "Features" },
            { id: "tools", label: "Tools" },
          ] as Array<{ id: SubDashboard; label: string }>).map((item) => (
            <button
              key={item.id}
              onClick={() => setSubDashboard(item.id)}
              className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                subDashboard === item.id
                  ? "bg-indigo-900/40 border-indigo-700 text-indigo-300"
                  : "bg-gray-900 border-gray-700 text-gray-400 hover:text-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {subDashboard === "products" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📦</span>
                <span className="font-medium text-sm">Product Portfolio</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Organize product lines and map services, features, and tools to each product.
              </p>
              <span className="text-xs text-gray-500">Coming soon</span>
            </div>
          </div>
        )}

        {subDashboard === "services" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() => onNavigate("flags")}
              className="border border-purple-800 hover:border-purple-600 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏁</span>
                <span className="font-medium text-sm">Novaryn ControlTower</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Feature flags, experiments, audit logs, SDK keys, and environment controls.
              </p>
              <span className="text-xs text-indigo-400 group-hover:text-indigo-300">Open service →</span>
            </button>

            <div className="border border-gray-800 bg-gray-900 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🧩</span>
                <span className="font-medium text-sm">Service Catalog</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Add more Novaryn services here as your platform evolves.
              </p>
              <span className="text-xs text-gray-500">Coming soon</span>
            </div>
          </div>
        )}

        {subDashboard === "features" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() => onNavigate("flags")}
              className="border border-indigo-800 hover:border-indigo-600 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚑</span>
                <span className="font-medium text-sm">Feature Flags</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Create and target runtime flags for controlled rollouts.</p>
              <span className="text-xs text-indigo-400 group-hover:text-indigo-300">Manage flags →</span>
            </button>

            <button
              onClick={() => onNavigate("experiments")}
              className="border border-purple-800 hover:border-purple-600 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚗</span>
                <span className="font-medium text-sm">Experiments</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Run A/B tests with weighted variants and deterministic assignment.</p>
              <span className="text-xs text-indigo-400 group-hover:text-indigo-300">Open experiments →</span>
            </button>
          </div>
        )}

        {subDashboard === "tools" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() => onNavigate("keys")}
              className="border border-yellow-800 hover:border-yellow-600 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚿</span>
                <span className="font-medium text-sm">SDK Keys</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Create project-scoped keys for client and server evaluation calls.</p>
              <span className="text-xs text-indigo-400 group-hover:text-indigo-300">Manage keys →</span>
            </button>

            <button
              onClick={() => onNavigate("settings")}
              className="border border-gray-700 hover:border-gray-500 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚙</span>
                <span className="font-medium text-sm">Settings</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">Manage projects, environments, users, invitations, and security options.</p>
              <span className="text-xs text-indigo-400 group-hover:text-indigo-300">Open settings →</span>
            </button>

            <button
              onClick={() => onNavigate("audit")}
              className="sm:col-span-2 border border-gray-800 hover:border-gray-700 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📋</span>
                    <span className="font-medium text-sm">Audit Log</span>
                    <span className="text-xs bg-green-900/30 text-green-400 border border-green-800 px-1.5 py-0.5 rounded">Live</span>
                  </div>
                  <p className="text-xs text-gray-500">Track all sensitive changes across flags, rules, experiments, keys, and team actions.</p>
                </div>
                <span className="text-xs text-indigo-400 group-hover:text-indigo-300 shrink-0 ml-4">View log →</span>
              </div>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
