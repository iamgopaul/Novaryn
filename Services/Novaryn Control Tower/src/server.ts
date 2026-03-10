import { handleRequest } from "./app";

const PORT = parseInt(process.env.PORT ?? "3000");

Bun.serve({
  port: PORT,
  fetch: handleRequest,
});

console.log(`Novaryn running on http://localhost:${PORT}`);
