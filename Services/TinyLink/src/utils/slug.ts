// Slug utilities used by the createLink handler.

// Generates a random alphanumeric slug of the given length (default 7).
// Uses a mixed-case character set for more entropy per character compared to base-36.
export function generateSlug(length = 7): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

// Validates a user-provided custom slug before storing it.
// Rules: alphanumeric + hyphens only, 3–30 chars, no leading/trailing hyphens.
// The regex enforces this in one pass: first and last chars must be alphanumeric.
export function isValidCustomSlug(slug: string): boolean {
  const slugRegex = /^[A-Za-z0-9][A-Za-z0-9-]{1,28}[A-Za-z0-9]$/;
  return slugRegex.test(slug);
}
