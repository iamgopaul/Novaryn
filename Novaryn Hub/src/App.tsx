import { useEffect, useState } from "react";
import { useEnv, envColor } from "./contexts/EnvContext";
import AuthProvider from "./contexts/AuthProvider";
import EnvProvider from "./contexts/EnvProvider";
import { useAuth } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import FlagsPage from "./pages/FlagsPage";
import AuditPage from "./pages/AuditPage";
import ExperimentsPage from "./pages/ExperimentsPage";
import KeysPage from "./pages/KeysPage";
import ControlTowerSettingsPage from "./pages/SettingsPage";
import HubSettingsPage from "./pages/HubSettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InviteAcceptPage from "./pages/InviteAcceptPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { getProfileCustomization, subscribeProfileCustomization, type ThemeId } from "./utils/profileCustomization";
import PageErrorBoundary from "./components/PageErrorBoundary";

type HubTab = "home" | "services" | "tools" | "projects" | "team-collab" | "community" | "about-us" | "settings";
type ControlTowerTab = "flags" | "experiments" | "audit" | "keys" | "settings";

const HUB_TABS: { id: HubTab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "tools", label: "Tools" },
  { id: "projects", label: "Projects" },
  { id: "team-collab", label: "Team Collab" },
  { id: "community", label: "Community" },
  { id: "about-us", label: "About Us" },
];

const CONTROLTOWER_TABS: { id: ControlTowerTab; label: string }[] = [
  { id: "flags", label: "Flags" },
  { id: "experiments", label: "Experiments" },
  { id: "audit", label: "Audit" },
  { id: "keys", label: "SDK Keys" },
  { id: "settings", label: "Settings" },
];

function parseAppPath(pathname: string): { hubTab: HubTab; showControlTower: boolean; controlTowerTab: ControlTowerTab } {
  const clean = pathname.replace(/^\//, "");
  const [segment, subSegment, thirdSegment] = clean.split("/");

  if ((segment === "services" && subSegment === "novaryn-control-tower") || segment === "controltower") {
    const tabSegment = segment === "controltower" ? subSegment : thirdSegment;
    const controlTowerTab = (CONTROLTOWER_TABS.find((t) => t.id === tabSegment)?.id ?? "flags") as ControlTowerTab;
    return { hubTab: "services", showControlTower: true, controlTowerTab };
  }

  if (segment === "services") return { hubTab: "services", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "tools") return { hubTab: "tools", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "project") return { hubTab: "projects", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "projects") return { hubTab: "projects", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "products") return { hubTab: "projects", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "team-collab") return { hubTab: "team-collab", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "community") return { hubTab: "community", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "about-us") return { hubTab: "about-us", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "settings") return { hubTab: "settings", showControlTower: false, controlTowerTab: "flags" };

  if (segment === "" || segment === "novaryn") return { hubTab: "home", showControlTower: false, controlTowerTab: "flags" };

  return { hubTab: "home", showControlTower: false, controlTowerTab: "flags" };
}

function AppInner() {
  const { user } = useAuth();
  const initialState = parseAppPath(window.location.pathname);
  const [hubTab, setHubTabState] = useState<HubTab>(initialState.hubTab);
  const [showControlTower, setShowControlTower] = useState(initialState.showControlTower);
  const [controlTowerTab, setControlTowerTabState] = useState<ControlTowerTab>(initialState.controlTowerTab);
  const { projects, selectedProject, setSelectedProject, envsForProject, selectedEnv, setSelectedEnv } = useEnv();
  const [tinyLinkBaseUrl, setTinyLinkBaseUrl] = useState(() => window.localStorage.getItem("tinylinkBaseUrl") ?? "http://localhost:3000");
  const [tinyLinkUrl, setTinyLinkUrl] = useState("");
  const [tinyLinkSlug, setTinyLinkSlug] = useState("");
  const [tinyLinkLoading, setTinyLinkLoading] = useState(false);
  const [tinyLinkError, setTinyLinkError] = useState("");
  const [tinyLinkCreated, setTinyLinkCreated] = useState<{ shortUrl: string; slug: string; originalUrl: string } | null>(null);

  const setHubTab = (next: HubTab) => {
    const path = next === "home" ? "/novaryn" : `/${next}`;
    window.history.pushState({ hubTab: next, showControlTower: false }, "", path);
    setHubTabState(next);
    setShowControlTower(false);
  };

  const openControlTower = (next: ControlTowerTab = "flags") => {
    const path = next === "flags" ? "/services/novaryn-control-tower" : `/services/novaryn-control-tower/${next}`;
    window.history.pushState({ hubTab: "services", showControlTower: true, controlTowerTab: next }, "", path);
    setHubTabState("services");
    setShowControlTower(true);
    setControlTowerTabState(next);
  };

  const setControlTowerTab = (next: ControlTowerTab) => {
    const path = next === "flags" ? "/services/novaryn-control-tower" : `/services/novaryn-control-tower/${next}`;
    window.history.pushState({ hubTab: "services", showControlTower: true, controlTowerTab: next }, "", path);
    setControlTowerTabState(next);
  };

  const onLegacyNavigate = (next: "flags" | "experiments" | "audit" | "keys" | "settings") => {
    if (next === "settings") {
      setHubTab("settings");
      return;
    }
    openControlTower(next);
  };

  useEffect(() => {
    const onPop = () => {
      const parsed = parseAppPath(window.location.pathname);
      setHubTabState(parsed.hubTab);
      setShowControlTower(parsed.showControlTower);
      setControlTowerTabState(parsed.controlTowerTab);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tinylinkBaseUrl", tinyLinkBaseUrl);
  }, [tinyLinkBaseUrl]);

  async function createTinyLink(e: React.FormEvent) {
    e.preventDefault();
    if (!tinyLinkUrl.trim()) {
      setTinyLinkError("Enter a URL to shorten.");
      return;
    }

    if (!user?.id) {
      setTinyLinkError("You must be signed in to create TinyLinks.");
      return;
    }

    setTinyLinkLoading(true);
    setTinyLinkError("");
    setTinyLinkCreated(null);

    const base = tinyLinkBaseUrl.trim().replace(/\/+$/, "");
    try {
      const res = await fetch(`${base}/links`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-TinyLink-User-Id": user?.id ?? "",
        },
        body: JSON.stringify({
          url: tinyLinkUrl.trim(),
          slug: tinyLinkSlug.trim() || undefined,
        }),
      });

      const data = await res.json() as {
        slug?: string;
        shortUrl?: string;
        originalUrl?: string;
        error?: string;
      };

      if (!res.ok) throw new Error(data.error ?? "Failed to create TinyLink");
      if (!data.slug || !data.shortUrl || !data.originalUrl) throw new Error("TinyLink response was incomplete.");

      setTinyLinkCreated({
        slug: data.slug,
        shortUrl: data.shortUrl,
        originalUrl: data.originalUrl,
      });
    } catch (err) {
      setTinyLinkError((err as Error).message || "Failed to reach TinyLink service.");
    } finally {
      setTinyLinkLoading(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="border-b border-gray-800 px-3 sm:px-6 py-2 sm:py-0 flex flex-wrap items-center gap-2 sm:gap-0">
        {/* Logo — clicking goes home */}
        <button
          onClick={() => setHubTab("home")}
          className="font-extrabold text-lg sm:text-2xl tracking-tight py-2 sm:py-4 shrink-0 text-indigo-300 hover:text-indigo-200 drop-shadow-[0_0_10px_rgba(99,102,241,0.45)] transition-colors"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Novaryn
          </span>
        </button>

        {/* Hub nav */}
        <nav className="order-4 sm:order-none w-full sm:w-auto sm:ml-12 sm:mt-1 flex overflow-x-auto">
          {HUB_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setHubTab(t.id)}
              className={`px-3 sm:px-4 py-2 sm:py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                hubTab === t.id
                  ? "border-indigo-500 text-white"
                  : "border-transparent text-gray-400 hover:text-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* User menu */}
        <UserMenu onOpenSettings={() => setHubTab("settings")} />
      </header>

      {showControlTower && (
        <div className="border-b border-gray-800 px-3 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 py-2 overflow-x-auto">
            <span className="text-xs text-purple-300 border border-purple-800 bg-purple-900/20 rounded px-2 py-1 whitespace-nowrap">
              Service: Novaryn Control Tower
            </span>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <select
                value={selectedProject?.id ?? ""}
                onChange={(e) => {
                  const project = projects.find((projectItem) => projectItem.id === e.target.value);
                  if (project) setSelectedProject(project);
                }}
                className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer min-w-0"
              >
                {projects.length === 0 && <option value="">No projects</option>}
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>{project.name}</option>
                ))}
              </select>

              <span className="text-gray-600">/</span>

              <select
                value={selectedEnv?.id ?? ""}
                onChange={(e) => {
                  const env = envsForProject.find((envItem) => envItem.id === e.target.value);
                  if (env) setSelectedEnv(env);
                }}
                className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer min-w-0"
                style={{ colorScheme: "dark" }}
              >
                {envsForProject.length === 0 && <option value="">No environments</option>}
                {envsForProject.map((env) => (
                  <option key={env.id} value={env.id}>{env.name}</option>
                ))}
              </select>

              {selectedEnv && (
                <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${envColor(selectedEnv.name)}`}>
                  {selectedEnv.name}
                </span>
              )}
            </div>

            {CONTROLTOWER_TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setControlTowerTab(t.id)}
                className={`text-xs px-2.5 py-1 rounded border whitespace-nowrap transition-colors ${
                  controlTowerTab === t.id
                    ? "border-indigo-700 bg-indigo-900/30 text-indigo-300"
                    : "border-gray-700 text-gray-400 hover:text-gray-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        <PageErrorBoundary>
        {hubTab === "home" && <HomePage onNavigate={onLegacyNavigate} />}

        {hubTab === "services" && !showControlTower && (
          <div className="max-w-3xl">
            <h1 className="text-xl font-semibold mb-4">Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => openControlTower("flags")}
                className="border border-purple-800 hover:border-purple-600 bg-gray-900 rounded-lg p-4 text-left transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🏁</span>
                  <span className="font-medium text-sm">Novaryn Control Tower</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  Feature flags, experiments, audit logs, SDK keys, and environment controls.
                </p>
                <span className="text-xs text-indigo-400 group-hover:text-indigo-300">Open service →</span>
              </button>
            </div>
          </div>
        )}

        {hubTab === "services" && showControlTower && (
          <>
            {controlTowerTab === "flags" && <FlagsPage />}
            {controlTowerTab === "experiments" && <ExperimentsPage />}
            {controlTowerTab === "audit" && <AuditPage />}
            {controlTowerTab === "keys" && <KeysPage />}
            {controlTowerTab === "settings" && <ControlTowerSettingsPage />}
          </>
        )}

        {hubTab === "projects" && (
          <div className="max-w-3xl border border-gray-800 bg-gray-900 rounded-lg p-4">
            <h1 className="text-xl font-semibold mb-2">Projects</h1>
            <p className="text-sm text-gray-400">This tab is ready for project planning, milestones, and delivery tracking.</p>
          </div>
        )}

        {hubTab === "tools" && (
          <div className="max-w-4xl">
            <h1 className="text-xl font-semibold mb-4">Tools</h1>

            <div className="border border-cyan-800/70 bg-gray-900 rounded-lg p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🔗</span>
                    <h2 className="text-base font-semibold text-cyan-300">TinyLink</h2>
                    <span className="text-[11px] px-2 py-0.5 rounded border border-cyan-800 bg-cyan-900/30 text-cyan-300">Integrated</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Lightweight URL shortener built with Bun + TypeScript, PostgreSQL, and Drizzle ORM.
                  </p>
                </div>
                <span className="text-xs text-gray-500">Project type: Internal Tool</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="border border-gray-800 rounded-md p-3 bg-gray-950/40">
                  <p className="text-xs text-gray-500 mb-1">Core Endpoints</p>
                  <ul className="space-y-1 text-xs text-gray-300 font-mono">
                    <li>POST /links</li>
                    <li>GET /r/:slug</li>
                    <li>GET /links/:slug</li>
                    <li>GET /links/:slug/analytics</li>
                  </ul>
                </div>
                <div className="border border-gray-800 rounded-md p-3 bg-gray-950/40">
                  <p className="text-xs text-gray-500 mb-1">Quick Start</p>
                  <ul className="space-y-1 text-xs text-gray-300 font-mono">
                    <li>cd /Users/iamgopaul/tinylink</li>
                    <li>bun install</li>
                    <li>bun run db:push</li>
                    <li>bun run dev</li>
                  </ul>
                </div>
              </div>

              <form onSubmit={createTinyLink} className="border border-gray-800 rounded-md p-3 bg-gray-950/40 space-y-3">
                <p className="text-xs text-gray-500">Use TinyLink from inside Novaryn</p>
                <p className="text-[11px] text-cyan-300/80">Links created here are scoped to your account only.</p>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">TinyLink Base URL</label>
                  <input
                    value={tinyLinkBaseUrl}
                    onChange={(event) => setTinyLinkBaseUrl(event.target.value)}
                    className="input"
                    placeholder="http://localhost:3000"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">URL to shorten</label>
                  <input
                    value={tinyLinkUrl}
                    onChange={(event) => setTinyLinkUrl(event.target.value)}
                    className="input"
                    placeholder="https://example.com/very/long/url"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">Custom slug (optional)</label>
                  <input
                    value={tinyLinkSlug}
                    onChange={(event) => setTinyLinkSlug(event.target.value)}
                    className="input"
                    placeholder="my-custom-slug"
                  />
                </div>

                {tinyLinkError && <p className="text-xs text-red-400">{tinyLinkError}</p>}

                <div className="flex flex-wrap gap-2">
                  <button
                    type="submit"
                    disabled={tinyLinkLoading}
                    className="text-xs bg-cyan-700 hover:bg-cyan-600 disabled:opacity-50 text-white px-3 py-2 rounded font-medium"
                  >
                    {tinyLinkLoading ? "Creating…" : "Create TinyLink"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const base = tinyLinkBaseUrl.trim().replace(/\/+$/, "");
                      const query = user?.id ? `?userId=${encodeURIComponent(user.id)}` : "";
                      window.open(`${base}/${query}`, "_blank", "noopener,noreferrer");
                    }}
                    className="text-xs border border-gray-700 hover:bg-gray-800 text-gray-300 px-3 py-2 rounded font-medium"
                  >
                    Open TinyLink App
                  </button>
                </div>

                {tinyLinkCreated && (
                  <div className="mt-2 border border-cyan-800/70 bg-cyan-950/20 rounded px-3 py-2">
                    <p className="text-xs text-cyan-300 mb-1">Short link created</p>
                    <a
                      href={tinyLinkCreated.shortUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-cyan-200 underline break-all"
                    >
                      {tinyLinkCreated.shortUrl}
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        {hubTab === "team-collab" && (
          <div className="max-w-3xl border border-gray-800 bg-gray-900 rounded-lg p-4">
            <h1 className="text-xl font-semibold mb-2">Team Collab</h1>
            <p className="text-sm text-gray-400">This tab is ready for team collaboration workflows, updates, and shared activity.</p>
          </div>
        )}

        {hubTab === "community" && (
          <div className="max-w-3xl border border-gray-800 bg-gray-900 rounded-lg p-4">
            <h1 className="text-xl font-semibold mb-2">Community</h1>
            <p className="text-sm text-gray-400">This tab is ready for community discussions, announcements, and shared resources.</p>
          </div>
        )}

        {hubTab === "about-us" && (
          <div className="max-w-3xl border border-gray-800 bg-gray-900 rounded-lg p-4">
            <h1 className="text-xl font-semibold mb-2">About Us</h1>
            <p className="text-sm text-gray-400">This tab is ready for your company overview, mission, and team story.</p>
          </div>
        )}

        {hubTab === "settings" && <HubSettingsPage />}
        </PageErrorBoundary>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
}

/** Handles all routing: auth pages, invite links, password reset, and the main app. */
function AuthGate() {
  const { user, loading } = useAuth();
  const [path, setPath] = useState(window.location.pathname);
  // Always start on the landing — never infer login/register from a stale URL.
  // The only way to reach login/register is by clicking a button in-app.
  const [authView, setAuthView] = useState<"landing" | "login" | "register">("landing");

  useEffect(() => {
    if (!user) {
      document.documentElement.setAttribute("data-theme", "default");
      return;
    }

    const applyTheme = () => {
      const theme = (getProfileCustomization(user.id).theme ?? "default") as ThemeId;
      document.documentElement.setAttribute("data-theme", theme);
    };

    applyTheme();
    return subscribeProfileCustomization(user.id, () => {
      applyTheme();
    });
  }, [user]);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      const s = window.history.state;
      if (s?.authView === "login") setAuthView("login");
      else if (s?.authView === "register") setAuthView("register");
      else setAuthView("landing");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function goLogin() {
    window.history.pushState({ authView: "login" }, "", "/login");
    setPath("/login");
    setAuthView("login");
  }

  function goRegister() {
    window.history.pushState({ authView: "register" }, "", "/register");
    setPath("/register");
    setAuthView("register");
  }

  // Loading splash — always show first before any routing decision
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Invite / password-reset links — always accessible
  if (path.startsWith("/invite/")) return <InviteAcceptPage token={path.replace("/invite/", "")} />;
  if (path.startsWith("/reset-password")) {
    const token = path.replace("/reset-password", "").replace(/^\//, "") || undefined;
    return <ResetPasswordPage token={token} />;
  }

  // Authenticated — full app
  if (user) {
    return (
      <EnvProvider>
        <AppInner />
      </EnvProvider>
    );
  }

  // Not authenticated — login / register views
  if (authView === "login") return <LoginPage />;
  if (authView === "register") return <RegisterPage />;

  // Default for all unauthenticated visitors: public landing
  return (
    <div className="app-shell">
      <header className="border-b border-gray-800 px-3 sm:px-6 py-2 sm:py-0 flex items-center gap-2">
        <span className="font-extrabold text-lg sm:text-2xl tracking-tight py-4 mr-auto text-indigo-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.45)] inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Novaryn
        </span>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button onClick={goRegister} className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
            Create account
          </button>
          <button onClick={goLogin} className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors">
            Sign in
          </button>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        <HomePage />
      </main>
    </div>
  );
}

/** User avatar + dropdown in the header. */
function UserMenu({ onOpenSettings }: { onOpenSettings: () => void }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  if (!user) return null;

  useEffect(() => {
    const updateAvatar = () => {
      // Use avatar from user object (database) first, then fall back to localStorage
      const dbAvatarUrl = (user as any).avatarUrl;
      setAvatarUrl(dbAvatarUrl ?? getProfileCustomization(user.id).avatarUrl ?? "");
    };

    updateAvatar();
    return subscribeProfileCustomization(user.id, (next) => {
      // Still subscribe to localStorage changes as fallback
      const dbAvatarUrl = (user as any).avatarUrl;
      setAvatarUrl(dbAvatarUrl ?? next.avatarUrl ?? "");
    });
  }, [user.id, user]);

  return (
    <div className="ml-auto pl-4 relative shrink-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 transition-colors text-sm"
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`${user.name} avatar`}
            className="w-6 h-6 rounded-lg object-cover border border-indigo-800 shrink-0"
          />
        ) : (
          <span className="w-6 h-6 rounded-lg bg-indigo-700 flex items-center justify-center text-xs font-bold text-white uppercase shrink-0">
            {user.name[0]}
          </span>
        )}
        <span className="text-gray-300 max-w-[120px] truncate hidden sm:block">{user.name}</span>
        <span className={`text-xs px-1 py-0.5 rounded font-mono hidden sm:block ${
          user.role === "owner" ? "bg-yellow-900/50 text-yellow-400 border border-yellow-800" :
          user.role === "admin" ? "bg-indigo-900/50 text-indigo-400 border border-indigo-800" :
          "bg-gray-800 text-gray-500 border border-gray-700"
        }`}>{user.role}</span>
        <span className="text-gray-600 text-xs">▾</span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-20 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-1">
            <div className="px-3 py-2 border-b border-gray-800">
              <p className="text-xs font-medium text-gray-200 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <button
              onClick={() => { setOpen(false); onOpenSettings(); }}
              className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Settings
            </button>
            <button
              onClick={async () => {
                setOpen(false);
                await logout();
                window.history.pushState({ authView: "login" }, "", "/login");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
              className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
