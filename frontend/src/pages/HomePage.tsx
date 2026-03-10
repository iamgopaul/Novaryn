import { useAuth } from "../contexts/AuthContext";

type Tab = "flags" | "experiments" | "audit" | "keys" | "settings";

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

      {/* Workspace options */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Workspace</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              tab: "home" as Tab,
              title: "Products",
              icon: "📦",
              desc: "Organize your product portfolio and group related capabilities by product line.",
              action: "Coming soon",
              disabled: true,
              color: "border-gray-800",
            },
            {
              tab: "flags" as Tab,
              title: "Services",
              icon: "🧩",
              desc: "Manage service applications in your workspace and launch into each service dashboard.",
              action: "View services ↓",
              color: "border-indigo-800 hover:border-indigo-600",
            },
            {
              tab: "home" as Tab,
              title: "Features",
              icon: "✨",
              desc: "Track and structure features across services for planning, rollout, and ownership.",
              action: "Coming soon",
              disabled: true,
              color: "border-gray-800",
            },
            {
              tab: "home" as Tab,
              title: "Tools",
              icon: "🛠",
              desc: "Access workspace tools and automation utilities that support your teams.",
              action: "Coming soon",
              disabled: true,
              color: "border-gray-800",
            },
            {
              tab: "flags" as Tab,
              title: "Novaryn ControlTower",
              icon: "🏁",
              desc: "Service: feature flags, experiments, audit logs, SDK keys, and environment controls.",
              action: "Open service →",
              color: "border-purple-800 hover:border-purple-600",
            },
            {
              tab: "keys" as Tab,
              title: "SDK Keys",
              icon: "⚿",
              desc: "Generate project-scoped keys for your apps. Each key can only read flags — never write them.",
              action: "Manage keys →",
              color: "border-yellow-800 hover:border-yellow-600",
            },
            {
              tab: "settings" as Tab,
              title: "Settings",
              icon: "⚙",
              desc: "Create projects and environments (dev, staging, prod). Invite team members and manage roles.",
              action: "Open settings →",
              color: "border-gray-700 hover:border-gray-500",
            },
          ].map((card) => (
            <button
              key={card.title}
              onClick={() => !card.disabled && onNavigate(card.tab)}
              disabled={card.disabled}
              className={`border ${card.color} bg-gray-900 rounded-lg p-4 text-left transition-colors group disabled:opacity-70 disabled:cursor-default`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{card.icon}</span>
                <span className="font-medium text-sm">{card.title}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{card.desc}</p>
              <span className="text-xs text-indigo-400 group-hover:text-indigo-300">{card.action}</span>
            </button>
          ))}
        </div>
      </section>

      {/* How it works — condensed */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">How it works</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Create a flag",
              desc: "Define a feature flag with a key like new_checkout. Set its default value and environment.",
            },
            {
              step: "2",
              title: "Add targeting rules",
              desc: "Roll out to 10% of users, allowlist specific user IDs, or turn it on for everyone.",
            },
            {
              step: "3",
              title: "Evaluate in your app",
              desc: "Call /evaluate with a user ID. Get back the flag value instantly — zero redeploys.",
            },
          ].map((s) => (
            <div key={s.step} className="border border-gray-800 bg-gray-900 rounded-lg p-4">
              <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mb-3">
                {s.step}
              </div>
              <h3 className="font-medium text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audit */}
      <section>
        <button
          onClick={() => onNavigate("audit")}
          className="w-full border border-gray-800 hover:border-gray-700 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">📋</span>
                <span className="font-medium text-sm">Audit Log</span>
                <span className="text-xs bg-green-900/30 text-green-400 border border-green-800 px-1.5 py-0.5 rounded animate-pulse">Live</span>
              </div>
              <p className="text-xs text-gray-500">
                Every flag change, rule update, and key creation is logged with who made it and when. Streams in real time.
              </p>
            </div>
            <span className="text-xs text-indigo-400 group-hover:text-indigo-300 shrink-0 ml-4">View log →</span>
          </div>
        </button>
      </section>
    </div>
  );
}
