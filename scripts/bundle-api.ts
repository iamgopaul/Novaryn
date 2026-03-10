/**
 * Bundle the entire backend into a single api/adapter.mjs file.
 * Vercel won't try to compile .mjs files as serverless functions,
 * so the api/ handler files can safely import from ./adapter.mjs.
 */

console.log("Bundling backend → api/adapter.mjs…");

const result = await Bun.build({
  entrypoints: ["src/vercel/nodeAdapter.ts"],
  outdir: "api",
  target: "node",
  format: "esm",
  naming: "adapter.mjs",
});

if (!result.success) {
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}

console.log("✓ api/adapter.mjs created.");
