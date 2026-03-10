import { useEffect, useState, useCallback, type ReactNode } from "react";
import { AuthContext, type AuthUser, type LoginResult } from "./AuthContext";
import { apiUrl } from "../http";

async function readJsonResponse<T>(res: Response): Promise<T> {
  const text = await res.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    const preview = text.replace(/\s+/g, " ").slice(0, 180);
    throw new Error(`API returned non-JSON response (status ${res.status}): ${preview}`);
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [needsSetup, setNeedsSetup] = useState(false);

  const refreshUser = useCallback(async (signal?: AbortSignal) => {
    try {
      const res = await fetch(apiUrl("/auth/session"), { credentials: "include", signal });
      if (!res.ok) { setUser(null); return; }
      const data = await readJsonResponse<{ authenticated: boolean; user: AuthUser | null; needsSetup: boolean }>(res);
      setUser(data.user);
      setNeedsSetup(data.needsSetup);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      if (err instanceof Error) console.error("Auth refresh failed:", err.message);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    refreshUser(controller.signal).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; controller.abort(); };
  }, [refreshUser]);

  async function login(identifier: string, password: string, channel?: "email"): Promise<LoginResult> {
    const res = await fetch(apiUrl("/auth/login"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password, channel }),
    });
    const data = await readJsonResponse<(AuthUser & { error?: string }) | (LoginResult & { error?: string })>(res);
    if (!res.ok) throw new Error(data.error ?? "Login failed");
    if ((data as LoginResult).requiresTwoFactor) {
      return data as LoginResult;
    }
    setUser(data as AuthUser);
    setNeedsSetup(false);
    return { requiresTwoFactor: false };
  }

  async function sendTwoFactorCode(challengeId: string, channel: "email") {
    const res = await fetch(apiUrl("/auth/2fa-send"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId, channel }),
    });
    const data = await readJsonResponse<{ destination: string; devCode?: string; error?: string }>(res);
    if (!res.ok) throw new Error(data.error ?? "Failed to send verification code");
    return { destination: data.destination, devCode: data.devCode };
  }

  async function verifyTwoFactor(challengeId: string, code: string) {
    const res = await fetch(apiUrl("/auth/2fa-verify"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId, code }),
    });
    const data = await readJsonResponse<AuthUser & { error?: string }>(res);
    if (!res.ok) throw new Error(data.error ?? "2FA verification failed");
    setUser(data);
    setNeedsSetup(false);
  }

  async function logout() {
    await fetch(apiUrl("/auth/logout"), { method: "POST", credentials: "include" });
    setUser(null);
  }

  async function requestRegistration(email: string, username: string, name: string, password: string) {
    const res = await fetch(apiUrl("/auth/register/request"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, name, password }),
    });
    const data = await readJsonResponse<{ challengeId: string; destination: string; resendCooldownSeconds?: number; devCode?: string; error?: string }>(res);
    if (!res.ok) throw new Error(data.error ?? "Registration request failed");
    return {
      challengeId: data.challengeId,
      destination: data.destination,
      resendCooldownSeconds: data.resendCooldownSeconds,
      devCode: data.devCode,
    };
  }

  async function resendRegistrationCode(challengeId: string) {
    const res = await fetch(apiUrl("/auth/register/resend"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId }),
    });
    const data = await readJsonResponse<{ challengeId: string; destination: string; resendCooldownSeconds?: number; devCode?: string; error?: string }>(res);
    if (!res.ok) throw new Error(data.error ?? "Failed to resend code");
    return {
      challengeId: data.challengeId,
      destination: data.destination,
      resendCooldownSeconds: data.resendCooldownSeconds,
      devCode: data.devCode,
    };
  }

  async function confirmRegistration(challengeId: string, code: string) {
    const res = await fetch(apiUrl("/auth/register/confirm"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId, code }),
    });
    const data = await readJsonResponse<AuthUser & { error?: string }>(res);
    if (!res.ok) throw new Error(data.error ?? "Registration confirmation failed");
    setUser(data);
    setNeedsSetup(false);
  }

  return (
    <AuthContext.Provider value={{ user, loading, needsSetup, login, sendTwoFactorCode, verifyTwoFactor, logout, requestRegistration, resendRegistrationCode, confirmRegistration, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}
