import { z } from "zod";

// --- Flag ---
export const CreateFlagSchema = z.object({
  envId: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID"),
  key: z.string().min(1).max(100),
  type: z.enum(["boolean", "string", "number", "json"]).default("boolean"),
  defaultValue: z.unknown(),
  enabled: z.boolean().default(false),
});

export const UpdateFlagSchema = z.object({
  defaultValue: z.unknown().optional(),
  enabled: z.boolean().optional(),
});

export type CreateFlagInput = z.infer<typeof CreateFlagSchema>;
export type UpdateFlagInput = z.infer<typeof UpdateFlagSchema>;

// --- Flag Rule ---
export const RuleSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("allowlist"), userIds: z.array(z.string()) }),
  z.object({ type: z.literal("segment"), segmentKey: z.string() }),
  z.object({ type: z.literal("rollout"), percentage: z.number().min(0).max(100) }),
]);

export type Rule = z.infer<typeof RuleSchema>;

export const CreateRuleSchema = z.object({
  priority: z.number().int().min(0),
  rule: RuleSchema,
});

export type CreateRuleInput = z.infer<typeof CreateRuleSchema>;

// --- Org / Project / Environment ---
export const CreateOrgSchema = z.object({
  name: z.string().min(1).max(100),
});

export const CreateProjectSchema = z.object({
  orgId: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID").optional(),
  name: z.string().min(1).max(100),
});

export const CreateEnvironmentSchema = z.object({
  projectId: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID"),
  name: z.string().min(1).max(50),
});

// --- Experiment ---
export const VariantSchema = z.object({
  key: z.string().min(1),
  weight: z.number().min(0).max(100),
});

export const CreateExperimentSchema = z.object({
  envId: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID"),
  key: z.string().min(1).max(100),
  variants: z.array(VariantSchema).min(2),
});

export const UpdateExperimentSchema = z.object({
  variants: z.array(VariantSchema).min(2).optional(),
  status: z.enum(["draft", "running", "paused", "completed"]).optional(),
});

export type CreateExperimentInput = z.infer<typeof CreateExperimentSchema>;
export type UpdateExperimentInput = z.infer<typeof UpdateExperimentSchema>;

// --- Evaluate ---
export const EvaluateQuerySchema = z.object({
  project: z.string().min(1).nullable().optional(),
  env: z.string().min(1),
  userId: z.string().min(1),
  keys: z.string().min(1), // comma-separated
});

// --- Evaluated result ---
export type EvaluatedFlag = {
  key: string;
  value: unknown;
  reason: "allowlist" | "rollout" | "default" | "disabled";
  bucket?: number;
  version: number;
};
