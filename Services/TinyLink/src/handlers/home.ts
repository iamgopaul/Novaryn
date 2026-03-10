export function handleHome(): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TinyLink</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #f5f5f5;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 16px;
    }
    h1 { font-size: 2rem; margin-bottom: 8px; color: #111; }
    p.subtitle { color: #666; margin-bottom: 32px; }
    .card {
      background: white;
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 560px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      margin-bottom: 16px;
    }
    .scope {
      margin-top: 12px;
      display: grid;
      gap: 6px;
    }
    .scope label {
      font-size: 0.75rem;
      color: #6b7280;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .input-row { display: flex; gap: 8px; }
    input[type="text"] {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="text"]:focus { border-color: #4f46e5; }
    button {
      padding: 12px 20px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 0.95rem;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.2s;
    }
    button:hover { background: #4338ca; }
    button:disabled { background: #a5b4fc; cursor: not-allowed; }
    #result { margin-top: 20px; display: none; }
    .result-box {
      background: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 8px;
      padding: 14px 16px;
    }
    .result-box .label { font-size: 0.75rem; color: #16a34a; font-weight: 600; text-transform: uppercase; margin-bottom: 6px; }
    .short-url { display: flex; align-items: center; gap: 8px; }
    .short-url a { font-size: 1.05rem; color: #4f46e5; text-decoration: none; font-weight: 500; word-break: break-all; }
    .short-url a:hover { text-decoration: underline; }
    .copy-btn {
      padding: 4px 10px;
      font-size: 0.75rem;
      background: #e0e7ff;
      color: #4f46e5;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .copy-btn:hover { background: #c7d2fe; }
    .original { font-size: 0.8rem; color: #888; margin-top: 6px; word-break: break-all; }
    #error {
      margin-top: 16px;
      padding: 12px 16px;
      background: #fef2f2;
      border: 1px solid #fca5a5;
      border-radius: 8px;
      color: #dc2626;
      font-size: 0.9rem;
      display: none;
    }
    .dev-btn { background: #1f2937; font-size: 0.85rem; padding: 10px 16px; }
    .dev-btn:hover { background: #111827; }
    #devPanel {
      display: none;
      width: 100%;
      max-width: 860px;
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    }
    #devPanel h2 { font-size: 1rem; margin-bottom: 16px; color: #111; display: flex; justify-content: space-between; align-items: center; }
    #devRefresh { font-size: 0.75rem; color: #4f46e5; font-weight: normal; cursor: pointer; }
    table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
    th {
      text-align: left;
      padding: 8px 12px;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
      color: #6b7280;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 0.05em;
    }
    td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: middle; }
    tr:last-child td { border-bottom: none; }
    tr:hover td { background: #f9fafb; }
    td a { color: #4f46e5; text-decoration: none; }
    td a:hover { text-decoration: underline; }
    .slug-cell { font-family: monospace; font-weight: 600; color: #111; }
    .original-cell { max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    #devEmpty { text-align: center; padding: 32px; color: #888; font-size: 0.9rem; display: none; }
  </style>
</head>
<body>
  <h1>TinyLink</h1>
  <p class="subtitle">Shorten any URL instantly</p>
  <div class="card">
    <div class="input-row">
      <input type="text" id="urlInput" placeholder="https://example.com/very/long/url" />
      <button id="shortenBtn" onclick="shorten()">Shorten</button>
      <button class="dev-btn" onclick="toggleDev()">Dev</button>
    </div>
    <div class="scope">
      <label for="userIdInput">User scope</label>
      <input type="text" id="userIdInput" placeholder="Enter your user id" />
    </div>
    <div id="error"></div>
    <div id="result">
      <div class="result-box">
        <div class="label">Your short link</div>
        <div class="short-url">
          <a id="shortUrl" href="#" target="_blank"></a>
          <button class="copy-btn" onclick="copy()">Copy</button>
        </div>
        <div class="original" id="originalUrl"></div>
      </div>
    </div>
  </div>

  <div id="devPanel">
    <h2>Your Links <span id="devRefresh" onclick="loadDev()">↻ Refresh</span></h2>
    <div id="devEmpty">No links yet.</div>
    <table id="devTable">
      <thead>
        <tr>
          <th>Slug</th>
          <th>Original URL</th>
          <th>Short URL</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody id="devBody"></tbody>
    </table>
  </div>

  <script>
    const input = document.getElementById("urlInput");
    const userIdInput = document.getElementById("userIdInput");
    const params = new URLSearchParams(window.location.search);
    const presetUserId = params.get("userId") || localStorage.getItem("tinylinkUserId") || "";
    userIdInput.value = presetUserId;
    userIdInput.addEventListener("input", () => {
      localStorage.setItem("tinylinkUserId", userIdInput.value.trim());
    });

    input.addEventListener("keydown", (e) => { if (e.key === "Enter") shorten(); });

    function currentUserId() {
      return userIdInput.value.trim();
    }

    async function shorten() {
      const url = input.value.trim();
      const userId = currentUserId();
      if (!url) return;
      if (!userId) {
        const errorEl = document.getElementById("error");
        errorEl.textContent = "Enter a user ID first.";
        errorEl.style.display = "block";
        return;
      }
      const btn = document.getElementById("shortenBtn");
      const errorEl = document.getElementById("error");
      const resultEl = document.getElementById("result");
      btn.disabled = true;
      btn.textContent = "Shortening...";
      errorEl.style.display = "none";
      resultEl.style.display = "none";
      try {
        const res = await fetch("/links", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-TinyLink-User-Id": userId,
          },
          body: JSON.stringify({ url }),
        });
        const data = await res.json();
        if (!res.ok) {
          errorEl.textContent = data.error || "Something went wrong.";
          errorEl.style.display = "block";
          return;
        }
        document.getElementById("shortUrl").href = data.shortUrl;
        document.getElementById("shortUrl").textContent = data.shortUrl;
        document.getElementById("originalUrl").textContent = "→ " + data.originalUrl;
        resultEl.style.display = "block";
        if (document.getElementById("devPanel").style.display !== "none") loadDev();
      } catch (e) {
        errorEl.textContent = "Network error. Is the server running?";
        errorEl.style.display = "block";
      } finally {
        btn.disabled = false;
        btn.textContent = "Shorten";
      }
    }

    function copy() {
      const url = document.getElementById("shortUrl").textContent;
      navigator.clipboard.writeText(url).then(() => {
        const btn = document.querySelector(".copy-btn");
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = "Copy", 1500);
      });
    }

    let devOpen = false;
    function toggleDev() {
      devOpen = !devOpen;
      document.getElementById("devPanel").style.display = devOpen ? "block" : "none";
      if (devOpen) loadDev();
    }

    async function loadDev() {
      const userId = currentUserId();
      if (!userId) {
        document.getElementById("devEmpty").textContent = "Enter a user ID to view your links.";
        document.getElementById("devEmpty").style.display = "block";
        document.getElementById("devTable").style.display = "none";
        return;
      }

      const res = await fetch("/api/links", {
        headers: { "X-TinyLink-User-Id": userId }
      });
      const links = await res.json();
      const tbody = document.getElementById("devBody");
      const empty = document.getElementById("devEmpty");
      const table = document.getElementById("devTable");
      tbody.innerHTML = "";
      if (!links.length) {
        empty.style.display = "block";
        table.style.display = "none";
        return;
      }
      empty.style.display = "none";
      table.style.display = "table";
      const base = window.location.origin;
      links.forEach(link => {
        const shortUrl = base + "/r/" + link.slug;
        const date = new Date(link.created_at).toLocaleString();
        const tr = document.createElement("tr");
        tr.innerHTML = \`
          <td class="slug-cell">\${link.slug}</td>
          <td class="original-cell" title="\${link.original_url}">
            <a href="\${link.original_url}" target="_blank">\${link.original_url}</a>
          </td>
          <td><a href="\${shortUrl}" target="_blank">\${shortUrl}</a></td>
          <td>\${date}</td>
        \`;
        tbody.appendChild(tr);
      });
    }
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}
