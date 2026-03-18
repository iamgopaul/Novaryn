/**
 * Novaryn JavaScript SDK
 *
 * Usage:
 *   import { Novaryn } from "@novaryn/sdk";
 *   const ct = new Novaryn({ host: "http://localhost:3000", project: "myapp", env: "prod" });
 *   const flags = await ct.evaluate("user_123", ["new_layout", "dark_mode"]);
 *   if (flags.new_layout) { ... }
 */

export type FlagValue = boolean | string | number | Record<string, unknown>;

export type EvaluatedFlag = {
  key: string;
  value: FlagValue;
  reason: "allowlist" | "rollout" | "default" | "disabled";
  bucket?: number;
  version: number;
};

export type EvaluateResult = {
  userId: string;
  flags: EvaluatedFlag[];
};

export type NovarynOptions = {
  host: string;
  project: string;
  env: string;
  /** Cache TTL in milliseconds. Default: 30000 (30s). Set to 0 to disable. */
  cacheTtl?: number;
};

type CacheEntry = { value: Record<string, FlagValue>; expiresAt: number };

export class Novaryn {
  private host: string;
  private project: string;
  private env: string;
  private cacheTtl: number;
  private cache = new Map<string, CacheEntry>();
  private sseSource: EventSource | null = null;
  private changeListeners: Set<() => void> = new Set();

  constructor(opts: NovarynOptions) {
    this.host = opts.host.replace(/\/$/, "");
    this.project = opts.project;
    this.env = opts.env;
    this.cacheTtl = opts.cacheTtl ?? 30_000;
  }

  /**
   * Evaluate one or more flags for a user.
   * Returns a map of flagKey → value.
   */
  async evaluate(userId: string, keys: string[]): Promise<Record<string, FlagValue>> {
    const cacheKey = `${userId}:${keys.sort().join(",")}`;
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() < cached.expiresAt) return cached.value;

    const params = new URLSearchParams({
      project: this.project,
      env: this.env,
      userId,
      keys: keys.join(","),
    });

    const res = await fetch(`${this.host}/evaluate?${params}`);
    if (!res.ok) throw new Error(`Novaryn evaluate failed: ${res.status}`);

    const data: EvaluateResult = await res.json();
    const result: Record<string, FlagValue> = {};
    for (const flag of data.flags) {
      result[flag.key] = flag.value as FlagValue;
    }

    if (this.cacheTtl > 0) {
      this.cache.set(cacheKey, { value: result, expiresAt: Date.now() + this.cacheTtl });
    }

    return result;
  }

  /**
   * Evaluate a single flag. Returns the value, or `defaultValue` if not found.
   */
  async flag<T extends FlagValue>(userId: string, key: string, defaultValue: T): Promise<T> {
    const result = await this.evaluate(userId, [key]);
    return (result[key] as T) ?? defaultValue;
  }

  /**
   * Subscribe to real-time flag changes via SSE.
   * The callback fires whenever any flag in this project/env changes.
   * Call the returned unsubscribe function to stop listening.
   */
  subscribe(onChange: () => void): () => void {
    this.changeListeners.add(onChange);

    if (!this.sseSource) {
      const params = new URLSearchParams({ project: this.project, env: this.env });
      this.sseSource = new EventSource(`${this.host}/stream?${params}`);
      this.sseSource.onmessage = (e) => {
        try {
          const msg = JSON.parse(e.data);
          if (msg.type !== "connected") {
            this.cache.clear(); // invalidate cache on any change
            this.changeListeners.forEach((fn) => fn());
          }
        } catch { /* ignore parse errors */ }
      };
      this.sseSource.onerror = () => {
        // SSE will auto-reconnect; clear cache so next evaluate is fresh
        this.cache.clear();
      };
    }

    return () => {
      this.changeListeners.delete(onChange);
      if (this.changeListeners.size === 0) {
        this.sseSource?.close();
        this.sseSource = null;
      }
    };
  }

  /** Clear the local cache, forcing fresh evaluation on the next call. */
  clearCache() {
    this.cache.clear();
  }
}

// Backward-compatible aliases for existing Meridian SDK imports.
export type MeridianOptions = NovarynOptions;
export class Meridian extends Novaryn {}
