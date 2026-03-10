import { useState, type FormEvent } from "react";
import { AuthShell } from "./LoginPage";
import { apiUrl } from "../http";

/** Shown at /reset-password (request) or /reset-password/:token (confirm) */
export default function ResetPasswordPage({ token }: { token?: string }) {
  return token ? <ConfirmReset token={token} /> : <RequestReset />;
}

function RequestReset() {
  const [identifier, setIdentifier] = useState("");
  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [destination, setDestination] = useState("");
  const [devCode, setDevCode] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(apiUrl("/auth/reset-password"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
      });
      const data = await res.json() as { ok: boolean; recoveryChallengeId?: string; destination?: string; devCode?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Request failed");
      if (!data.recoveryChallengeId) {
        setDone(true);
        return;
      }
      setChallengeId(data.recoveryChallengeId);
      setDestination(data.destination ?? "");
      setDevCode(data.devCode ?? null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function submitRecoveryCode(e: FormEvent) {
    e.preventDefault();
    if (!challengeId) return;
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(apiUrl("/auth/reset-password/confirm"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId, code, password: newPassword }),
      });
      const data = await res.json() as { ok: boolean; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Reset failed");
      setDone(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <AuthShell title="Recovery complete">
        <p className="text-sm text-gray-400 text-center mb-4">
          If an account was found, your recovery request was processed.
        </p>
        <p className="text-center text-xs text-gray-600 mt-4">
          <a href="/login" className="text-indigo-400 hover:underline">Back to login</a>
        </p>
      </AuthShell>
    );
  }

  if (challengeId) {
    return (
      <AuthShell title="Verify recovery code" subtitle={`Code sent to ${destination || "email"}`}>
        <form onSubmit={submitRecoveryCode} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Recovery code</label>
            <input
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="input w-full"
              placeholder="123456"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">New password</label>
            <input
              type="password"
              required
              minLength={8}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input w-full"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Confirm new password</label>
            <input
              type="password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input w-full"
            />
          </div>
          {devCode && <p className="text-xs text-indigo-300">Dev code: {devCode}</p>}
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2 rounded text-sm"
          >
            {loading ? "Updating…" : "Update password"}
          </button>
        </form>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Reset your password">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Username or email</label>
          <input
            type="text"
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="input w-full"
            placeholder="username or work.email@company.com"
            autoFocus
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2 rounded text-sm"
        >
          {loading ? "Sending…" : "Send recovery code"}
        </button>
        <p className="text-center text-xs text-gray-600">
          <a href="/login" className="text-indigo-400 hover:underline">Back to login</a>
        </p>
      </form>
    </AuthShell>
  );
}

function ConfirmReset({ token }: { token: string }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError("Passwords do not match"); return; }
    setLoading(true);
    try {
      const res = await fetch(apiUrl("/auth/reset-password/confirm"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json() as { ok: boolean; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Reset failed");
      setDone(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <AuthShell title="Password updated">
        <p className="text-sm text-gray-400 text-center mb-4">Your password has been changed.</p>
        <a
          href="/login"
          className="block text-center w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded text-sm"
        >
          Sign in
        </a>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Choose a new password">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-xs text-gray-400 mb-1">New password <span className="text-gray-600">(min 8 chars)</span></label>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input w-full"
            autoFocus
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
          {loading ? "Updating…" : "Update password"}
        </button>
      </form>
    </AuthShell>
  );
}
