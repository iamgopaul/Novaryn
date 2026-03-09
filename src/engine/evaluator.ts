import { getBucket } from "./hash";
import type { Rule, EvaluatedFlag } from "../types";

type FlagRecord = {
  key: string;
  type: string;
  defaultValueJson: unknown;
  enabled: boolean;
  version: number;
  rules: { priority: number; ruleJson: unknown }[];
};

/**
 * Evaluates a single flag for a given userId.
 * Rule priority order: allowlist → segment → rollout → default
 */
export function evaluateFlag(flag: FlagRecord, userId: string): EvaluatedFlag {
  if (!flag.enabled) {
    return {
      key: flag.key,
      value: flag.defaultValueJson,
      reason: "disabled",
      version: flag.version,
    };
  }

  const sortedRules = [...flag.rules].sort((a, b) => a.priority - b.priority);

  for (const r of sortedRules) {
    const rule = r.ruleJson as Rule;

    if (rule.type === "allowlist") {
      if (rule.userIds.includes(userId)) {
        return {
          key: flag.key,
          value: true,
          reason: "allowlist",
          version: flag.version,
        };
      }
    }

    if (rule.type === "rollout") {
      const bucket = getBucket(userId, flag.key);
      if (bucket < rule.percentage) {
        return {
          key: flag.key,
          value: true,
          reason: "rollout",
          bucket,
          version: flag.version,
        };
      }
    }
  }

  return {
    key: flag.key,
    value: flag.defaultValueJson,
    reason: "default",
    version: flag.version,
  };
}

/**
 * Assigns a stable experiment variant for a given userId.
 * Weights are used to split the 0–99 bucket range.
 */
export function assignVariant(
  experimentKey: string,
  userId: string,
  variants: { key: string; weight: number }[]
): string {
  const bucket = getBucket(userId, experimentKey);
  let cumulative = 0;

  for (const variant of variants) {
    cumulative += variant.weight;
    if (bucket < cumulative) return variant.key;
  }

  return variants[variants.length - 1]!.key;
}
