/**
 * Pre-bundle all Vercel API functions using Bun's built-in bundler.
 * This outputs self-contained CommonJS .js files so Vercel doesn't
 * need to resolve any cross-directory TypeScript imports at runtime.
 */
import { glob } from "bun";
import { unlink } from "node:fs/promises";

const entries: string[] = [];
for await (const file of glob("api/**/*.ts")) {
  entries.push(file);
}

console.log(`Bundling ${entries.length} API function(s)…`);

const result = await Bun.build({
  entrypoints: entries,
  outdir: "api",
  target: "node",
  format: "cjs",
  bundle: true,
  // Don't bundle these — they're provided by the Vercel runtime
  external: ["node:*", "node:crypto", "node:util", "node:fs", "node:path", "node:stream", "node:http", "node:https"],
  naming: "[dir]/[name].js",
});

if (!result.success) {
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}

// Remove the .ts source files so Vercel uses the bundled .js versions
for (const file of entries) {
  await unlink(file).catch(() => {});
  console.log(`  ✓ bundled ${file}`);
}

console.log("Done — API functions bundled to CommonJS.");
