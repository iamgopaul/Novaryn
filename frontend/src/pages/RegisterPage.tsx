import { useState, type FormEvent } from "react";
import { useAuth } from "../contexts/AuthContext";
import { AuthShell } from "./LoginPage";

export default function RegisterPage() {
  const { requestRegistration, confirmRegistration } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [destination, setDestination] = useState("");
  const [code, setCode] = useState("");
  const [devCode, setDevCode] = useState<string | undefined>(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError("Passwords do not match"); return; }
    setLoading(true);
    try {
      const result = await requestRegistration(email, username, name, password);
      setChallengeId(result.challengeId);
      setDestination(result.destination);
      setDevCode(result.devCode);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function verifyCode(e: FormEvent) {
    e.preventDefault();
    if (!challengeId) return;
    setError("");
    setLoading(true);
    try {
      await confirmRegistration(challengeId, code);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function resendCode() {
    setError("");
    setLoading(true);
    try {
      const result = await requestRegistration(email, username, name, password);
      setChallengeId(result.challengeId);
      setDestination(result.destination);
      setDevCode(result.devCode);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (challengeId) {
    return (
      <AuthShell
        title="Verify your email"
        subtitle={`We sent a code to ${destination || email}`}
      >
        <form onSubmit={verifyCode} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Verification code</label>
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
          {devCode && <p className="text-xs text-indigo-300">Dev code: {devCode}</p>}
          {error && <p className="text-sm text-red-400">{error}</p>}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={resendCode}
              disabled={loading}
              className="w-1/3 border border-gray-700 hover:bg-gray-800 disabled:opacity-50 text-gray-200 font-medium py-2 rounded text-sm"
            >
              Resend
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-2/3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2 rounded text-sm"
            >
              {loading ? "Verifying…" : "Verify & create account"}
            </button>
          </div>
        </form>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Verify your email before account creation."
    >
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
            placeholder="jane_smith"
            autoFocus
          />
          <p className="text-xs text-gray-600 mt-1">Letters, numbers, underscore (3-32 chars).</p>
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Full name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input w-full"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full"
            placeholder="you@example.com"
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
            placeholder="••••••••"
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
            placeholder="••••••••"
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2 rounded text-sm"
        >
          {loading ? "Sending verification…" : "Continue"}
        </button>
      </form>
    </AuthShell>
  );
}
