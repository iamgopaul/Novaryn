import { useEffect, useState, useCallback, type ReactNode } from "react";
import { AuthContext, type AuthUser, type LoginResult, type RegisterRequestResult } from "./AuthContext";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [needsSetup, setNeedsSetup] = useState(false);

  const refreshUser = useCallback(async (signal?: AbortSignal) => {
    try {
      const res = await fetch("/auth/me", { credentials: "include", signal });
      if (!res.ok) { setUser(null); return; }
      const data = await res.json() as { user: AuthUser | null; needsSetup: boolean };
      setUser(data.user);
      setNeedsSetup(data.needsSetup);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
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
    const res = await fetch("/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password, channel }),
    });
    const data = await res.json() as (AuthUser & { error?: string }) | (LoginResult & { error?: string });
    if (!res.ok) throw new Error(data.error ?? "Login failed");
    if ((data as LoginResult).requiresTwoFactor) {
      return data as LoginResult;
    }
    setUser(data as AuthUser);
    setNeedsSetup(false);
    return { requiresTwoFactor: false };
  }

  async function sendTwoFactorCode(challengeId: string, channel: "email") {
    const res = await fetch("/auth/2fa/send", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId, channel }),
    });
    const data = await res.json() as { destination: string; devCode?: string; error?: string };
    if (!res.ok) throw new Error(data.error ?? "Failed to send verification code");
    return { destination: data.destination, devCode: data.devCode };
  }

  async function verifyTwoFactor(challengeId: string, code: string) {
    const res = await fetch("/auth/2fa/verify", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId, code }),
    });
    const data = await res.json() as AuthUser & { error?: string };
    if (!res.ok) throw new Error(data.error ?? "2FA verification failed");
    setUser(data);
    setNeedsSetup(false);
  }

  async function logout() {
    await fetch("/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
  }

  async function requestRegistration(email: string, username: string, name: string, password: string): Promise<RegisterRequestResult> {
    const res = await fetch("/auth/register/request", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, name, password }),
    });
    const data = await res.json() as RegisterRequestResult & { error?: string };
    if (!res.ok) throw new Error(data.error ?? "Registration request failed");
    return data;
  }

  async function confirmRegistration(challengeId: string, code: string) {
    const res = await fetch("/auth/register/confirm", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId, code }),
    });
    const data = await res.json() as AuthUser & { error?: string };
    if (!res.ok) throw new Error(data.error ?? "Registration confirmation failed");
    setUser(data);
    setNeedsSetup(false);
  }

  return (
    <AuthContext.Provider value={{ user, loading, needsSetup, login, sendTwoFactorCode, verifyTwoFactor, logout, requestRegistration, confirmRegistration, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}
