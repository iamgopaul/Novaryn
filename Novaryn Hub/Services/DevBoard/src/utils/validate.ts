import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(2).max(100),
  key: z
    .string()
    .min(2)
    .max(10)
    .regex(/^[A-Z][A-Z0-9_]*$/, "Project key must be uppercase alphanumeric or underscore"),
  description: z.string().max(2000).optional(),
});

export const createCardSchema = z.object({
  columnId: z.string().uuid().optional(),
  title: z.string().min(2).max(200),
  description: z.string().max(4000).optional(),
  assigneeUserId: z.string().max(120).optional(),
  priority: z.enum(["low", "medium", "high", "critical"]).optional(),
  storyPoints: z.number().int().min(1).max(100).optional(),
  dueAt: z.string().datetime().optional(),
});

export const updateCardSchema = z
  .object({
    title: z.string().min(2).max(200).optional(),
    description: z.string().max(4000).optional(),
    assigneeUserId: z.string().max(120).nullable().optional(),
    priority: z.enum(["low", "medium", "high", "critical"]).optional(),
    storyPoints: z.number().int().min(1).max(100).nullable().optional(),
    dueAt: z.string().datetime().nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field must be provided",
  });

export const moveCardSchema = z.object({
  columnId: z.string().uuid(),
  position: z.number().int().min(0).optional(),
});
