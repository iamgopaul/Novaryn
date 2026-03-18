import { createHash } from "crypto";

/**
 * Returns a stable bucket (0–99) for a given userId + flagKey.
 * Same inputs always produce the same bucket — no random flipping.
 */
export function getBucket(userId: string, key: string): number {
  const hash = createHash("sha256").update(`${userId}:${key}`).digest("hex");
  const int = parseInt(hash.slice(0, 8), 16);
  return int % 100;
}
