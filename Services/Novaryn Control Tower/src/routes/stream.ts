// In-memory subscriber registry: "project:env" → Set of SSE controllers
const subscribers = new Map<string, Set<ReadableStreamDefaultController>>();

export function getSubscribers() {
  return subscribers;
}

export function broadcast(project: string, env: string, data: unknown) {
  const key = `${project}:${env}`;
  const subs = subscribers.get(key);
  if (!subs || subs.size === 0) return;

  const message = `data: ${JSON.stringify(data)}\n\n`;
  const encoder = new TextEncoder();

  for (const controller of subs) {
    try {
      controller.enqueue(encoder.encode(message));
    } catch {
      // Client disconnected — remove stale subscriber
      subs.delete(controller);
    }
  }
}

export async function handleStream(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const project = url.searchParams.get("project");
  const env = url.searchParams.get("env");

  if (!project || !env) {
    return new Response(JSON.stringify({ error: "Missing project or env" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const key = `${project}:${env}`;

  const stream = new ReadableStream({
    start(controller) {
      if (!subscribers.has(key)) subscribers.set(key, new Set());
      subscribers.get(key)!.add(controller);

      // Send initial connected event
      const encoder = new TextEncoder();
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "connected", project, env })}\n\n`));

      // Clean up on close
      req.signal.addEventListener("abort", () => {
        subscribers.get(key)?.delete(controller);
        try { controller.close(); } catch { /* already closed */ }
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
