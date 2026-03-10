/**
 * Pre-compile src/ entry points needed by Vercel api/[...path].ts.
 * Outputs ESM .js bundles so the catch-all function can import them.
 */
import { dirname } from "node:path";

const entries = [
  "src/app.ts",
  "src/vercel/nodeAdapter.ts",
];

console.log(`Pre-compiling ${entries.length} src/ entry point(s)…`);

for (const entry of entries) {
  const result = await Bun.build({
    entrypoints: [entry],
    outdir: dirname(entry),
    target: "node",
    format: "esm",
  });

  if (!result.success) {
    for (const log of result.logs) {
      console.error(log);
    }
    process.exit(1);
  }
  console.log(`  ✓ ${entry}`);
}

console.log("Done.");
