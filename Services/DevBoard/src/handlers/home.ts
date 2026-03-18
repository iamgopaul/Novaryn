const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DevBoard API</title>
    <style>
      body { font-family: Inter, system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 16px; line-height: 1.5; }
      code { background: #f3f4f6; padding: 2px 6px; border-radius: 6px; }
      li { margin: 8px 0; }
    </style>
  </head>
  <body>
    <h1>DevBoard</h1>
    <p>A project management board API for planning and tracking software development cycles.</p>
    <p>Send user identity in header <code>X-DevBoard-User-Id</code>.</p>
    <ul>
      <li><code>POST /projects</code> - create project + default board columns</li>
      <li><code>GET /projects</code> - list projects</li>
      <li><code>GET /boards/:boardId</code> - get board with columns and cards</li>
      <li><code>POST /boards/:boardId/cards</code> - create card</li>
      <li><code>PATCH /cards/:cardId</code> - update card details</li>
      <li><code>PATCH /cards/:cardId/move</code> - move card across columns</li>
      <li><code>GET /projects/:projectId/summary</code> - cycle-level metrics</li>
    </ul>
  </body>
</html>`;

export function handleHome() {
  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
