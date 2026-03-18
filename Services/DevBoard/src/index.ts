import { router } from "./router";

const PORT = Number(process.env.PORT) || 3001;

Bun.serve({
  port: PORT,
  fetch: router,
});

console.log(`DevBoard listening on http://localhost:${PORT}`);
