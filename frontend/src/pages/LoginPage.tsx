import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login, sendTwoFactorCode, verifyTwoFactor } = useAuth();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [destination, setDestination] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (!challengeId || resendCooldown <= 0) return;
    const timer = window.setTimeout(() => setResendCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [challengeId, resendCooldown]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await login(identifier, password);
      if (result.requiresTwoFactor) {
        setChallengeId(result.challengeId ?? null);
        setDestination(result.destination ?? "");
        setCode("");
        setResendCooldown(30);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function resendCode() {
    if (!challengeId) return;
    setError("");
    setLoading(true);
    try {
      const res = await sendTwoFactorCode(challengeId, "email");
      setDestination(res.destination);
      setResendCooldown(30);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function submitCode(e: FormEvent) {
    e.preventDefault();
    if (!challengeId) return;
    setError("");
    setLoading(true);
    try {
      await verifyTwoFactor(challengeId, code);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  function resetTwoFactorStep() {
    setChallengeId(null);
    setCode("");
    setError("");
    setResendCooldown(0);
  }

  if (challengeId) {
    return (
      <AuthShell title="Two-factor verification" subtitle={`Code sent to ${destination || "email"}`}>
        <form onSubmit={submitCode} className="space-y-4">
          <div>
            <p className="text-xs text-gray-500 mb-2">Enter the 6-digit code from your email.</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={resendCode}
                disabled={loading || resendCooldown > 0}
                className="text-xs bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-100 disabled:opacity-50 px-3 py-2 rounded"
              >
                {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend code"}
              </button>
              <button
                type="button"
                onClick={resetTwoFactorStep}
                disabled={loading}
                className="text-xs bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-100 disabled:opacity-50 px-3 py-2 rounded"
              >
                Use different account
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Verification code</label>
            <input
              type="text"
              required
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                if (error) setError("");
              }}
              className="input w-full"
              placeholder="123456"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading || code.length !== 6}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2 rounded text-sm"
          >
            {loading ? "Verifying…" : "Verify & sign in"}
          </button>
        </form>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Sign in to Novaryn">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Username or email</label>
          <input
            type="text"
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="input w-full"
            placeholder="iamgopaul or you@example.com"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {loading ? "Signing in…" : "Sign in"}
        </button>
        <p className="text-center text-xs text-gray-600">
          Forgot your password?{" "}
          <a href="/reset-password" className="text-indigo-400 hover:underline">Reset it</a>
        </p>
      </form>
    </AuthShell>
  );
}

export function AuthShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-indigo-400 mb-1">Novaryn</h1>
          <p className="text-gray-300 font-medium">{title}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
