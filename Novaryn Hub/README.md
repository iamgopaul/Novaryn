# Novaryn Website

React + Vite frontend for Novaryn.

Deployment target: Vercel (Novaryn Hub project).

## Local development

Install dependencies:

```bash
bun install
```

Run website:

```bash
bun run dev
```

Default URL:

```text
http://localhost:5173
```

## Connect to Control Tower service

Set API base URL in `.env`:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

Then run `Novaryn Control Tower` service from `Services/Novaryn Control Tower` inside `Novaryn Hub`.
