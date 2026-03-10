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
  const [code, setCode] = useState("");
  const [challengeId, setChallengeId] = useState("");
  const [destination, setDestination] = useState("");
  const [step, setStep] = useState<"form" | "verify">("form");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (step === "form") {
      if (password !== confirm) {
        setError("Passwords do not match");
        return;
      }
      setLoading(true);
      try {
        const result = await requestRegistration(email, username, name, password);
        setChallengeId(result.challengeId);
        setDestination(result.destination);
        setStep("verify");
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
      return;
    }

    setLoading(true);
    try {
      await confirmRegistration(challengeId, code);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (step === "verify") {
    return (
      <AuthShell title="Verify your email" subtitle={`We sent a 6-digit code to ${destination}`}>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Verification code</label>
            <input
              type="text"
              required
              minLength={6}
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              className="input w-full text-center text-2xl tracking-widest"
              placeholder="000000"
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading || code.length !== 6}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-2 rounded text-sm"
          >
            {loading ? "Verifying…" : "Verify & Create Account"}
          </button>
          <button
            type="button"
            onClick={() => {
              setStep("form");
              setCode("");
              setError("");
            }}
            className="w-full text-gray-400 hover:text-gray-300 text-sm"
          >
            ← Back to form
          </button>
        </form>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Get started with Novaryn"
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
            placeholder="first_last"
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
            placeholder="Alex Johnson"
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
            placeholder="work.email@company.com"
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
          {loading ? "Sending verification…" : "Create account"}
        </button>
      </form>
    </AuthShell>
  );
}
