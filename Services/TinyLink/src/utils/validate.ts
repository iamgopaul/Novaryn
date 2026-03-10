// Zod schemas for validating incoming request bodies.
// Centralising validation here keeps handlers thin and makes schemas reusable.
import { z } from "zod";
import { isValidCustomSlug } from "./slug";

// Schema for POST /links — validates the request body before creating a link.
export const createLinkSchema = z.object({
  // url is required and must be a valid URL string.
  url: z.string().url({ message: "Invalid URL" }),

  // slug is optional — if provided, it must pass the custom slug rules.
  slug: z.string()
    .optional()
    .refine(
      (val) => val === undefined || isValidCustomSlug(val),
      { message: "Slug must be 3–30 alphanumeric chars or hyphens, no leading/trailing hyphens" }
    ),
});

// Inferred TypeScript type — gives handlers full type safety on validated input.
export type CreateLinkInput = z.infer<typeof createLinkSchema>;
