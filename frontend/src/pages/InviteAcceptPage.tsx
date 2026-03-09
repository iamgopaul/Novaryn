import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "../contexts/AuthContext";
import { AuthShell } from "./LoginPage";

type InviteInfo = { email: string; role: string; orgName: string };

export default function InviteAcceptPage({ token }: { token: string }) {
  const { refreshUser } = useAuth();
  const [info, setInfo] = useState<InviteInfo | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(`/auth/invite/${token}`, { credentials: "include" })
      .then((r) => {
        if (!r.ok) { setNotFound(true); return null; }
        return r.json() as Promise<InviteInfo>;
      })
      .then((d) => { if (d) setInfo(d); })
      .catch(() => setNotFound(true));
  }, [token]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError("Passwords do not match"); return; }
    setLoading(true);
    try {
      const res = await fetch("/auth/invite/accept", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, username, name, password }),
      });
      const data = await res.json() as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Failed to accept invite");
      await refreshUser();
      setDone(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (notFound) {
    return (
      <AuthShell title="Invite not found">
        <p className="text-sm text-gray-400 text-center">
          This invite link is invalid or has already been used.
        </p>
      </AuthShell>
    );
  }

  if (done) {
    return (
      <AuthShell title="Welcome to Novaryn!">
        <p className="text-sm text-gray-400 text-center">
          Your account is ready.{" "}
          <a href="/" className="text-indigo-400 hover:underline">Go to dashboard →</a>
        </p>
      </AuthShell>
    );
  }

  if (!info) {
    return (
      <AuthShell title="Loading invite…">
        <div className="flex justify-center py-4">
          <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="You've been invited"
      subtitle={`Join ${info.orgName} as ${info.role}`}
    >
      <div className="mb-4 bg-indigo-950/40 border border-indigo-900 rounded-lg px-3 py-2 text-sm text-indigo-300">
        Invited as <span className="font-mono">{info.email}</span>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Username</label>
          <input
            type="text"
            required
            minLength={3}
            maxLength={32}
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
            className="input w-full"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Full name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input w-full"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Password <span className="text-gray-600">(min 8 chars)</span></label>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input w-full"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Confirm password</label>
          <input
            type="password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="input w-full"
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2 rounded text-sm"
        >
          {loading ? "Creating account…" : "Accept invite"}
        </button>
      </form>
    </AuthShell>
  );
}
