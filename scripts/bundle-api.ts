/**
 * Pre-bundle all Vercel API functions using Bun's built-in bundler.
 * Outputs self-contained CommonJS .js files so Vercel doesn't need
 * to resolve any cross-directory TypeScript imports at runtime.
 */
import { unlink } from "node:fs/promises";

const scanner = new Bun.Glob("api/**/*.ts");
const entries: string[] = [];
for await (const file of scanner.scan(".")) {
  entries.push(file);
}

console.log(`Bundling ${entries.length} API function(s)…`);

const result = await Bun.build({
  entrypoints: entries,
  outdir: "api",
  target: "node",
  format: "cjs",
  external: ["node:*"],
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
  console.log(`  ✓ ${file}`);
}

console.log("Done.");
