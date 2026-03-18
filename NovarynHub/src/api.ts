import { apiUrl } from "./http";

const API_KEY = import.meta.env.VITE_ADMIN_API_KEY as string | undefined;

/** Build default headers. Session cookie is sent automatically via `credentials: include`.
 *  The legacy VITE_ADMIN_API_KEY is included as a Bearer fallback for direct API access. */
function defaultHeaders(): HeadersInit {
  const h: Record<string, string> = { "Content-Type": "application/json" };
  if (API_KEY) h["Authorization"] = `Bearer ${API_KEY}`;
  return h;
}

export type Flag = {
  id: string;
  envId: string;
  key: string;
  type: string;
  defaultValueJson: unknown;
  enabled: boolean;
  version: number;
  updatedAt: string;
  createdAt: string;
};

export type FlagRule = {
  id: string;
  flagId: string;
  priority: number;
  ruleJson: { type: string; [k: string]: unknown };
  createdAt: string;
};

export type AuditEntry = {
  id: string;
  actor: string;
  action: string;
  resource: string;
  beforeJson: unknown;
  afterJson: unknown;
  createdAt: string;
};

export type Experiment = {
  id: string;
  envId: string;
  key: string;
  variantsJson: { key: string; weight: number }[];
  status: "draft" | "running" | "paused" | "completed";
  version: number;
  updatedAt: string;
  createdAt: string;
};

export type Environment = { id: string; projectId: string; name: string; createdAt: string };
export type Project = { id: string; orgId: string; name: string; createdAt: string };
export type Org = { id: string; name: string; createdAt: string };
export type TeamMember = { id: string; email: string; name: string; role: string; createdAt: string };
export type Invite = { id: string; orgId: string; email: string; role: string; token: string; expiresAt: string; acceptedAt: string | null; inviteUrl: string };
export type UserSearchResult = { id: string; username: string; name: string };
export type ReceivedProjectInvite = {
  id: string;
  status: string;
  createdAt: string;
  projectId: string;
  projectName: string;
  fromUserId: string;
  fromUsername: string | null;
  fromName: string;
};

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(apiUrl(path), {
    credentials: "include",
    ...init,
    headers: { ...defaultHeaders(), ...init?.headers },
  });
  const text = await res.text();
  if (!text) throw new Error(`Empty response from ${path} (status ${res.status}) — is the backend running?`);
  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON response from ${path}: ${text.slice(0, 100)}`);
  }
  if (!res.ok) throw new Error((json as { error: string }).error ?? "Request failed");
  return json as T;
}

export const api = {
  flags: {
    list: () => req<Flag[]>("/admin/flags"),
    create: (body: { envId: string; key: string; type: string; defaultValue: unknown; enabled: boolean }) =>
      req<Flag>("/admin/flags", { method: "POST", body: JSON.stringify(body) }),
    update: (key: string, body: { enabled?: boolean; defaultValue?: unknown }) =>
      req<Flag>(`/admin/flags/${key}`, { method: "PUT", body: JSON.stringify(body) }),
    delete: (key: string) =>
      req<{ deleted: boolean }>(`/admin/flags/${key}`, { method: "DELETE" }),
  },
  rules: {
    list: (key: string) => req<FlagRule[]>(`/admin/flags/${key}/rules`),
    create: (key: string, body: { priority: number; rule: unknown }) =>
      req<FlagRule>(`/admin/flags/${key}/rules`, { method: "POST", body: JSON.stringify(body) }),
    delete: (key: string, ruleId: string) =>
      req<{ deleted: boolean }>(`/admin/flags/${key}/rules/${ruleId}`, { method: "DELETE" }),
  },
  experiments: {
    list: () => req<Experiment[]>("/admin/experiments"),
    create: (body: { envId: string; key: string; variants: { key: string; weight: number }[] }) =>
      req<Experiment>("/admin/experiments", { method: "POST", body: JSON.stringify(body) }),
    update: (key: string, body: { status?: string; variants?: { key: string; weight: number }[] }) =>
      req<Experiment>(`/admin/experiments/${key}`, { method: "PUT", body: JSON.stringify(body) }),
  },
  audit: {
    list: () => req<AuditEntry[]>("/admin/audit"),
  },
  orgs: {
    list: () => req<Org[]>("/admin/orgs"),
  },
  projects: {
    list: () => req<Project[]>("/admin/projects"),
    create: (body: { orgId?: string; name: string }) =>
      req<Project>("/admin/projects", { method: "POST", body: JSON.stringify(body) }),
  },
  environments: {
    list: () => req<Environment[]>("/admin/environments"),
    create: (body: { projectId: string; name: string }) =>
      req<Environment>("/admin/environments", { method: "POST", body: JSON.stringify(body) }),
  },
  team: {
    list: () => req<TeamMember[]>("/auth/team"),
    invite: (body: { email: string; role: "admin" | "member"; orgId: string }) =>
      req<{ invite: Invite; inviteUrl: string }>("/auth/invite", { method: "POST", body: JSON.stringify(body) }),
    updateRole: (userId: string, role: "admin" | "member") =>
      req<{ ok: boolean }>(`/auth/team/${userId}`, { method: "PATCH", body: JSON.stringify({ role }) }),
    remove: (userId: string) =>
      req<{ ok: boolean }>(`/auth/team/${userId}`, { method: "DELETE" }),
  },
  users: {
    search: (q: string) => req<UserSearchResult[]>(`/auth/users/search?q=${encodeURIComponent(q)}`),
  },
  projectInvites: {
    send: (body: { projectId: string; username: string }) =>
      req<{ id: string }>("/auth/project-invites", { method: "POST", body: JSON.stringify(body) }),
    received: () => req<ReceivedProjectInvite[]>("/auth/project-invites/received"),
    accept: (id: string) => req<{ ok: boolean }>(`/auth/project-invites/${id}/accept`, { method: "POST" }),
    decline: (id: string) => req<{ ok: boolean }>(`/auth/project-invites/${id}/decline`, { method: "POST" }),
  },
  profile: {
    update: (body: {
      username?: string;
      phone?: string;
      twoFactorEnabled?: boolean;
      twoFactorMethod?: "email" | "phone" | "either";
      name?: string;
      avatarUrl?: string;
      currentPassword?: string;
      newPassword?: string;
    }) =>
      req<{ ok: boolean }>("/auth/profile", { method: "PATCH", body: JSON.stringify(body) }),
  },
};
