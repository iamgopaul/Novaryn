// Entry point — starts the HTTP server and wires every request to the router.
import { router } from "./router";

// Read PORT from the environment, fall back to 3000 if not set.
const PORT = Number(process.env.PORT) || 3000;

Bun.serve({
  port: PORT,
  fetch: router, // router receives every Request and returns a Response
});

console.log(`TinyLink listening on http://localhost:${PORT}`);
