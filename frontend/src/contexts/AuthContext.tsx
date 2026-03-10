import { createContext, useContext } from "react";

export type AuthUser = {
  id: string;
  email: string;
  username: string | null;
  phone: string | null;
  name: string;
  role: "owner" | "admin" | "member";
  twoFactorEnabled: boolean;
  twoFactorMethod: "email" | "phone" | "either";
};

export type LoginResult = {
  requiresTwoFactor: boolean;
  challengeId?: string;
  channels?: Array<"email">;
  sentChannel?: "email";
  destination?: string;
  devCode?: string;
};

export type RegistrationResult = {
  challengeId: string;
  destination: string;
  devCode?: string;
};

export type AuthState = {
  user: AuthUser | null;
  /** True while the initial /auth/me check is in progress */
  loading: boolean;
  /** True if no users exist yet (first-time setup) */
  needsSetup: boolean;
  login: (identifier: string, password: string, channel?: "email") => Promise<LoginResult>;
  sendTwoFactorCode: (challengeId: string, channel: "email") => Promise<{ destination: string; devCode?: string }>;
  verifyTwoFactor: (challengeId: string, code: string) => Promise<void>;
  logout: () => Promise<void>;
  requestRegistration: (email: string, username: string, name: string, password: string) => Promise<RegistrationResult>;
  confirmRegistration: (challengeId: string, code: string) => Promise<void>;
  refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthState | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
