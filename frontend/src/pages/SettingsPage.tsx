import { useEffect, useState } from "react";
import { api, type TeamMember, type ReceivedProjectInvite } from "../api";
import { useEnv, envColor } from "../contexts/EnvContext";
import { useAuth } from "../contexts/AuthContext";
import PageGuide from "../components/PageGuide";

const SETTINGS_STEPS = [
  {
    step: "1",
    title: "Create a project",
    desc: 'Click "+ New Project" and give it a name (e.g. My App). A project groups your flags and experiments together.',
  },
  {
    step: "2",
    title: "Add environments",
    desc: 'Click "+ Environment" inside a project to add environments like prod, staging, or dev. Each environment holds its own set of flag values.',
  },
  {
    step: "3",
    title: "Select in the header",
    desc: "Use the project and environment dropdowns in the top nav to switch context. All flag and experiment pages filter to the selected env.",
  },
  {
    step: "4",
    title: "Admin API key",
    desc: "The admin key (set via ADMIN_API_KEY in .env) is required to create/update flags, experiments, and keys. Keep it secret — never ship it to a client.",
  },
];

export default function SettingsPage() {
  const { projects, environments, reload, selectedProject } = useEnv();
  const { user: currentUser } = useAuth();
  const [showNewProject, setShowNewProject] = useState(false);
  const [showNewEnv, setShowNewEnv] = useState<string | null>(null); // projectId
  const [error, setError] = useState("");
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [showProjectInvite, setShowProjectInvite] = useState(false);
  const [showEmailInvite, setShowEmailInvite] = useState(false);
  const [receivedInvites, setReceivedInvites] = useState<ReceivedProjectInvite[]>([]);
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [savingSecurity, setSavingSecurity] = useState(false);

  const isAdmin = currentUser?.role === "admin" || currentUser?.role === "owner";

  useEffect(() => {
    api.team.list().then(setTeam).catch(() => {});
    api.projectInvites.received().then(setReceivedInvites).catch(() => {});
  }, []);

  useEffect(() => {
    setTwoFactorEnabled(currentUser?.twoFactorEnabled ?? false);
  }, [currentUser]);

  async function saveSecuritySettings() {
    setSavingSecurity(true);
    setError("");
    try {
      await api.profile.update({ twoFactorEnabled, twoFactorMethod: "email" });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSavingSecurity(false);
    }
  }

  async function respondToInvite(id: string, action: "accept" | "decline") {
    try {
      if (action === "accept") await api.projectInvites.accept(id);
      else await api.projectInvites.decline(id);
      setReceivedInvites((prev) => prev.filter((i) => i.id !== id));
      await reload();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function removeTeamMember(id: string) {
    if (!confirm("Remove this team member? They will lose access immediately.")) return;
    try {
      await api.team.remove(id);
      setTeam((prev) => prev.filter((m) => m.id !== id));
    } catch (err) { setError((err as Error).message); }
  }

  async function changeRole(id: string, role: "admin" | "member") {
    try {
      await api.team.updateRole(id, role);
      setTeam((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
    } catch (err) { setError((err as Error).message); }
  }

  return (
    <div className="max-w-2xl">
      <PageGuide
        id="settings"
        title="How to configure Novaryn"
        subtitle="step-by-step"
        steps={SETTINGS_STEPS}
      />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {/* Projects + Environments */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-medium text-gray-300">Projects & Environments</h2>
          <button
            onClick={() => setShowNewProject(true)}
            className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded font-medium"
          >
            + New Project
          </button>
        </div>

        <div className="space-y-3">
          {projects.map((project) => {
            const envs = environments.filter((e) => e.projectId === project.id);
            return (
              <div key={project.id} className="border border-gray-800 bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-medium text-sm">{project.name}</span>
                    <span className="ml-2 text-xs text-gray-600 font-mono">{project.id.slice(0, 8)}…</span>
                  </div>
                  <button
                    onClick={() => setShowNewEnv(project.id)}
                    className="text-xs border border-gray-700 hover:bg-gray-800 text-gray-400 px-2 py-1 rounded"
                  >
                    + Environment
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {envs.length === 0 && <p className="text-xs text-gray-600">No environments yet.</p>}
                  {envs.map((env) => (
                    <div key={env.id} className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border ${envColor(env.name)}`}>
                      <span className="font-mono font-medium">{env.name}</span>
                      <span className="text-xs opacity-50">{env.id.slice(0, 6)}…</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {projects.length === 0 && (
            <p className="text-gray-500 text-sm">No projects yet. Create one to get started.</p>
          )}
        </div>
      </section>

      {/* Admin key info */}
      <section className="mt-8 border border-gray-800 bg-gray-900 rounded-lg p-4">
        <h2 className="text-sm font-medium text-gray-300 mb-3">Admin Access</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Admin API Key</p>
            <code className="text-xs text-gray-500 font-mono">Set via ADMIN_API_KEY in .env</code>
          </div>
          <span className="text-xs bg-green-900/30 border border-green-800 text-green-400 px-2 py-1 rounded">Active</span>
        </div>
      </section>

      {/* Account security */}
      <section className="mt-8 border border-gray-800 bg-gray-900 rounded-lg p-4">
        <h2 className="text-sm font-medium text-gray-300 mb-3">Account security</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              id="twoFactorEnabled"
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
            />
            <label htmlFor="twoFactorEnabled" className="text-sm text-gray-300">Enable two-factor authentication</label>
          </div>
          <p className="text-xs text-gray-600">Verification and recovery codes are currently sent by email only.</p>
          <button
            onClick={saveSecuritySettings}
            disabled={savingSecurity}
            className="text-xs bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-1.5 rounded font-medium"
          >
            {savingSecurity ? "Saving…" : "Save security settings"}
          </button>
        </div>
      </section>

      {/* Team management */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-medium text-gray-300">Team Members</h2>
          {isAdmin && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowProjectInvite(true)}
                className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded font-medium"
              >
                + Invite to project
              </button>
              <button
                onClick={() => { setShowEmailInvite(true); setInviteLink(null); }}
                className="text-xs border border-gray-700 hover:bg-gray-800 text-gray-300 px-3 py-1.5 rounded font-medium"
              >
                + Invite by email
              </button>
            </div>
          )}
        </div>

        {inviteLink && (
          <div className="mb-4 border border-green-700 bg-green-900/20 rounded-lg p-3">
            <p className="text-xs text-green-400 font-medium mb-1">Invite link created — share this:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-xs bg-gray-900 border border-gray-700 rounded px-2 py-1.5 text-green-300 break-all">
                {window.location.origin}{inviteLink}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.origin + inviteLink)}
                className="shrink-0 text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 px-2 py-1.5 rounded text-gray-300"
              >Copy</button>
            </div>
            <p className="text-xs text-gray-600 mt-1">Expires in 7 days.</p>
          </div>
        )}

        {receivedInvites.length > 0 && (
          <div className="mb-4 border border-indigo-800 bg-indigo-950/20 rounded-lg p-3 space-y-2">
            <p className="text-xs text-indigo-300 font-medium">Pending project invites</p>
            {receivedInvites.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between gap-3 border border-indigo-900/70 rounded px-3 py-2">
                <p className="text-xs text-gray-300">
                  <span className="text-indigo-300">@{inv.fromUsername ?? "unknown"}</span> invited you to <span className="font-medium">{inv.projectName}</span>
                </p>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => respondToInvite(inv.id, "accept")} className="text-xs bg-green-700 hover:bg-green-600 text-white px-2 py-1 rounded">Accept</button>
                  <button onClick={() => respondToInvite(inv.id, "decline")} className="text-xs border border-gray-700 hover:bg-gray-800 text-gray-300 px-2 py-1 rounded">Decline</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border border-gray-800 bg-gray-900 rounded-lg divide-y divide-gray-800">
          {team.length === 0 && <p className="text-xs text-gray-600 p-4">No team members yet.</p>}
          {team.map((m) => (
            <div key={m.id} className="flex items-center justify-between px-4 py-3 gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-6 h-6 rounded-full bg-indigo-800 flex items-center justify-center text-xs font-bold text-white uppercase shrink-0">
                  {m.name[0]}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{m.name}</p>
                  <p className="text-xs text-gray-500 truncate">{m.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {isAdmin && m.role !== "owner" && m.id !== currentUser?.id ? (
                  <select
                    value={m.role}
                    onChange={(e) => changeRole(m.id, e.target.value as "admin" | "member")}
                    className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none"
                  >
                    <option value="member">member</option>
                    <option value="admin">admin</option>
                  </select>
                ) : (
                  <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${
                    m.role === "owner" ? "border-yellow-800 text-yellow-400 bg-yellow-900/20" :
                    m.role === "admin" ? "border-indigo-800 text-indigo-400 bg-indigo-900/20" :
                    "border-gray-700 text-gray-500"
                  }`}>{m.role}</span>
                )}
                {isAdmin && m.role !== "owner" && m.id !== currentUser?.id && (
                  <button
                    onClick={() => removeTeamMember(m.id)}
                    className="text-xs text-red-500 hover:text-red-400 px-2 py-1 rounded hover:bg-red-900/20 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modals */}
      {showNewProject && (
        <NewProjectModal
          onClose={() => setShowNewProject(false)}
          onCreated={() => { reload(); setShowNewProject(false); }}
          setError={setError}
        />
      )}
      {showNewEnv && (
        <NewEnvModal
          projectId={showNewEnv}
          onClose={() => setShowNewEnv(null)}
          onCreated={() => { reload(); setShowNewEnv(null); }}
          setError={setError}
        />
      )}
      {showProjectInvite && projects.length > 0 && (
        <ProjectInviteModal
          projects={projects}
          selectedProjectId={selectedProject?.id ?? projects[0]!.id}
          onClose={() => setShowProjectInvite(false)}
          onInvited={() => setShowProjectInvite(false)}
        />
      )}
      {showEmailInvite && projects.length > 0 && (
        <EmailInviteModal
          orgId={projects[0]!.orgId}
          onClose={() => setShowEmailInvite(false)}
          onInvited={(url) => { setInviteLink(url); setShowEmailInvite(false); }}
        />
      )}
    </div>
  );
}

function NewProjectModal({ onClose, onCreated, setError }: {
  onClose: () => void;
  onCreated: () => void;
  setError: (e: string) => void;
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await api.projects.create({ name });
      onCreated();
    } catch (err) { setError((err as Error).message); }
    finally { setLoading(false); }
  }

  return (
    <Modal title="New Project" onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Project name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required
            className="input" placeholder="Core Platform" autoFocus />
        </div>
        <ModalButtons onClose={onClose} loading={loading} label="Create Project" />
      </form>
    </Modal>
  );
}

function NewEnvModal({ projectId, onClose, onCreated, setError }: {
  projectId: string;
  onClose: () => void;
  onCreated: () => void;
  setError: (e: string) => void;
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await api.environments.create({ projectId, name });
      onCreated();
    } catch (err) { setError((err as Error).message); }
    finally { setLoading(false); }
  }

  return (
    <Modal title="New Environment" onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Environment name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required
            className="input" placeholder="production / staging / development" autoFocus />
          <p className="text-xs text-gray-600 mt-1">Use short names like dev, staging, prod.</p>
        </div>
        <ModalButtons onClose={onClose} loading={loading} label="Create Environment" />
      </form>
    </Modal>
  );
}

function ProjectInviteModal({ projects, selectedProjectId, onClose, onInvited }: {
  projects: { id: string; name: string }[];
  selectedProjectId: string;
  onClose: () => void;
  onInvited: () => void;
}) {
  const [projectId, setProjectId] = useState(selectedProjectId);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ id: string; username: string; name: string }[]>([]);
  const [targetUsername, setTargetUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchUsers() {
    setError("");
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    try {
      const users = await api.users.search(query.trim());
      setResults(users);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!targetUsername) {
      setError("Select a user to invite");
      return;
    }
    setLoading(true);
    try {
      await api.projectInvites.send({ projectId, username: targetUsername });
      onInvited();
    } catch (err) { setError((err as Error).message); }
    finally { setLoading(false); }
  }

  return (
    <Modal title="Invite user to project" onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Project</label>
          <select value={projectId} onChange={(e) => setProjectId(e.target.value)} className="input w-full">
            {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Find user by username</label>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className="input flex-1"
              placeholder="Search by username"
              autoFocus
            />
            <button type="button" onClick={searchUsers} className="text-xs border border-gray-700 hover:bg-gray-800 px-3 rounded">
              Search
            </button>
          </div>
          {results.length > 0 && (
            <div className="mt-2 border border-gray-800 rounded max-h-40 overflow-y-auto divide-y divide-gray-800">
              {results.map((u) => (
                <button
                  type="button"
                  key={u.id}
                  onClick={() => setTargetUsername(u.username)}
                  className={`w-full text-left px-2 py-2 text-xs hover:bg-gray-800 ${targetUsername === u.username ? "bg-indigo-950/50" : ""}`}
                >
                  <span className="text-indigo-300">@{u.username}</span> <span className="text-gray-500">· {u.name}</span>
                </button>
              ))}
            </div>
          )}
          {targetUsername && <p className="text-xs text-green-400 mt-1">Selected: @{targetUsername}</p>}
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <ModalButtons onClose={onClose} loading={loading} label="Send invite" />
      </form>
    </Modal>
  );
}

function EmailInviteModal({ orgId, onClose, onInvited }: {
  orgId: string;
  onClose: () => void;
  onInvited: (inviteUrl: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "member">("member");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.team.invite({ email, role, orgId });
      onInvited(res.inviteUrl);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal title="Invite potential user" onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
            placeholder="person@example.com"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Role after joining</label>
          <select value={role} onChange={(e) => setRole(e.target.value as "admin" | "member")} className="input w-full">
            <option value="member">member</option>
            <option value="admin">admin</option>
          </select>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <ModalButtons onClose={onClose} loading={loading} label="Create invite link" />
      </form>
    </Modal>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ModalButtons({ onClose, loading, label }: { onClose: () => void; loading: boolean; label: string }) {
  return (
    <div className="flex gap-2 pt-1">
      <button type="button" onClick={onClose}
        className="flex-1 border border-gray-700 hover:bg-gray-800 text-sm py-2 rounded font-medium">
        Cancel
      </button>
      <button type="submit" disabled={loading}
        className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm py-2 rounded font-medium">
        {loading ? "Creating…" : label}
      </button>
    </div>
  );
}
