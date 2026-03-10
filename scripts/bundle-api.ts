/**
 * Pre-compile src/ entry points needed by Vercel api/ functions.
 *
 * Vercel compiles api/*.ts to JavaScript but leaves relative imports
 * as runtime require() calls. Node.js can only resolve .js files,
 * not .ts files. This script pre-bundles the src/ entry points so
 * that require("../../src/routes/auth") resolves to a real .js file.
 */
import { dirname } from "node:path";

const entries = [
  "src/routes/auth.ts",
  "src/vercel/nodeAdapter.ts",
  "src/app.ts",
];

console.log(`Pre-compiling ${entries.length} src/ entry point(s)…`);

for (const entry of entries) {
  const result = await Bun.build({
    entrypoints: [entry],
    outdir: dirname(entry),  // e.g. "src/routes" → outputs src/routes/auth.js
    target: "node",
    format: "esm",
  });

  if (!result.success) {
    for (const log of result.logs) {
      console.error(log);
    }
    process.exit(1);
  }
  console.log(`  ✓ ${entry} → ${dirname(entry)}/${entry.split("/").pop()!.replace(".ts", ".js")}`);
}

console.log("Done.");
