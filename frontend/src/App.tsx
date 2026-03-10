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
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InviteAcceptPage from "./pages/InviteAcceptPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

type HubTab = "home" | "services" | "products" | "tools" | "settings";
type ControlTowerTab = "flags" | "experiments" | "audit" | "keys" | "settings";

const HUB_TABS: { id: HubTab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "tools", label: "Tools" },
  { id: "settings", label: "Settings" },
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
  const [segment, subSegment] = clean.split("/");

  if (segment === "controltower") {
    const controlTowerTab = (CONTROLTOWER_TABS.find((t) => t.id === subSegment)?.id ?? "flags") as ControlTowerTab;
    return { hubTab: "services", showControlTower: true, controlTowerTab };
  }

  if (segment === "services") return { hubTab: "services", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "products") return { hubTab: "products", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "tools") return { hubTab: "tools", showControlTower: false, controlTowerTab: "flags" };
  if (segment === "settings") return { hubTab: "settings", showControlTower: false, controlTowerTab: "flags" };

  return { hubTab: "home", showControlTower: false, controlTowerTab: "flags" };
}

function AppInner() {
  const initialState = parseAppPath(window.location.pathname);
  const [hubTab, setHubTabState] = useState<HubTab>(initialState.hubTab);
  const [showControlTower, setShowControlTower] = useState(initialState.showControlTower);
  const [controlTowerTab, setControlTowerTabState] = useState<ControlTowerTab>(initialState.controlTowerTab);
  const { projects, selectedProject, setSelectedProject, envsForProject, selectedEnv, setSelectedEnv } = useEnv();

  const setHubTab = (next: HubTab) => {
    const path = next === "home" ? "/" : `/${next}`;
    window.history.pushState({ hubTab: next, showControlTower: false }, "", path);
    setHubTabState(next);
    setShowControlTower(false);
  };

  const openControlTower = (next: ControlTowerTab = "flags") => {
    const path = next === "flags" ? "/controltower" : `/controltower/${next}`;
    window.history.pushState({ hubTab: "services", showControlTower: true, controlTowerTab: next }, "", path);
    setHubTabState("services");
    setShowControlTower(true);
    setControlTowerTabState(next);
  };

  const setControlTowerTab = (next: ControlTowerTab) => {
    const path = next === "flags" ? "/controltower" : `/controltower/${next}`;
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

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 px-3 sm:px-6 py-2 sm:py-0 flex flex-wrap items-center gap-2 sm:gap-0">
        {/* Logo — clicking goes home */}
        <button
          onClick={() => setHubTab("home")}
          className="font-bold text-base tracking-tight py-2 sm:py-4 shrink-0 hover:text-indigo-400 transition-colors"
        >
          Novaryn
        </button>

        {/* Project + Env selectors (shown for ControlTower service) */}
        {showControlTower && (
        <div className="order-3 sm:order-none w-full sm:w-auto flex items-center gap-2 py-2 sm:py-4 sm:mr-6 sm:pr-6 sm:border-r border-gray-800 overflow-x-auto">
          <select
            value={selectedProject?.id ?? ""}
            onChange={(e) => {
              const p = projects.find((p) => p.id === e.target.value);
              if (p) setSelectedProject(p);
            }}
            className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer min-w-0"
          >
            {projects.length === 0 && <option value="">No projects</option>}
            {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>

          <span className="text-gray-600">/</span>

          <select
            value={selectedEnv?.id ?? ""}
            onChange={(e) => {
              const env = envsForProject.find((ev) => ev.id === e.target.value);
              if (env) setSelectedEnv(env);
            }}
            className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-500 cursor-pointer min-w-0"
            style={{ colorScheme: "dark" }}
          >
            {envsForProject.length === 0 && <option value="">No environments</option>}
            {envsForProject.map((e) => (
              <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>

          {selectedEnv && (
            <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${envColor(selectedEnv.name)}`}>
              {selectedEnv.name}
            </span>
          )}
        </div>
        )}

        {/* Hub nav */}
        <nav className="order-4 sm:order-none w-full sm:w-auto flex overflow-x-auto">
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
        <UserMenu />
      </header>

      {showControlTower && (
        <div className="border-b border-gray-800 px-3 sm:px-6">
          <div className="max-w-6xl mx-auto flex items-center gap-3 py-2 overflow-x-auto">
            <span className="text-xs text-purple-300 border border-purple-800 bg-purple-900/20 rounded px-2 py-1 whitespace-nowrap">
              Service: Novaryn ControlTower
            </span>
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
                  <span className="font-medium text-sm">Novaryn ControlTower</span>
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
            {controlTowerTab === "settings" && <SettingsPage />}
          </>
        )}

        {hubTab === "products" && (
          <div className="max-w-3xl border border-gray-800 bg-gray-900 rounded-lg p-4">
            <h1 className="text-xl font-semibold mb-2">Products</h1>
            <p className="text-sm text-gray-400">This hub section is ready for your product-level dashboards.</p>
          </div>
        )}

        {hubTab === "tools" && (
          <div className="max-w-3xl border border-gray-800 bg-gray-900 rounded-lg p-4">
            <h1 className="text-xl font-semibold mb-2">Tools</h1>
            <p className="text-sm text-gray-400">This hub section is ready for utility dashboards and internal tooling.</p>
          </div>
        )}

        {hubTab === "settings" && <SettingsPage />}
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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 px-3 sm:px-6 py-2 sm:py-0 flex items-center gap-2">
        <span className="font-bold text-base tracking-tight py-4 mr-auto">Novaryn</span>
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
function UserMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="ml-auto pl-4 relative shrink-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 transition-colors text-sm"
      >
        <span className="w-6 h-6 rounded-full bg-indigo-700 flex items-center justify-center text-xs font-bold text-white uppercase shrink-0">
          {user.name[0]}
        </span>
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
              onClick={async () => { setOpen(false); await logout(); window.location.href = "/login"; }}
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
