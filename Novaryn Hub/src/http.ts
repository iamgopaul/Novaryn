const rawApiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim();

const isLocalHost = typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname);

function normalizeApiBaseUrl(value: string | undefined): string {
  if (!value) return "";
  const normalized = value.replace(/\/+$/, "");

  try {
    const parsed = new URL(normalized);
    const apiHost = parsed.hostname;
    const apiIsLocal = apiHost === "localhost" || apiHost === "127.0.0.1";
    if (!isLocalHost && apiIsLocal) return "";
  } catch {
    if (!isLocalHost && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(normalized)) return "";
  }

  return normalized;
}

export const API_BASE_URL = normalizeApiBaseUrl(rawApiBaseUrl) || (isLocalHost ? "http://localhost:3000" : "");

export function apiUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return API_BASE_URL ? `${API_BASE_URL}${normalizedPath}` : normalizedPath;
}
