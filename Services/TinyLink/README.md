# TinyLink

A lightweight URL shortener built with **Bun + TypeScript**, **PostgreSQL**, and **Drizzle ORM**.

---

## Project Structure

```
src/
├── index.ts                  # Entry point — starts the HTTP server
├── router.ts                 # Routes each request to the correct handler
├── db/
│   ├── schema.ts             # Drizzle table definitions (links + clicks)
│   ├── index.ts              # Shared database client
│   └── queries/
│       ├── links.ts          # DB queries for the links table
│       └── clicks.ts         # DB queries for the clicks table
├── handlers/
│   ├── home.ts               # GET /        — serves the web UI
│   ├── createLink.ts         # POST /links  — creates a short link
│   ├── redirectLink.ts       # GET /r/:slug — redirects + logs click
│   ├── getLink.ts            # GET /links/:slug — returns link metadata
│   └── getAnalytics.ts       # GET /links/:slug/analytics — click stats
└── utils/
    ├── slug.ts               # Slug generation and validation
    └── validate.ts           # Zod schema for request body validation
```

---

## Prerequisites

- [Bun](https://bun.sh) >= 1.0
- PostgreSQL (local install or managed database)

---

## Local Setup

```bash
# 1. Install dependencies
bun install

# 2. Create your .env file and fill in the values
cp .env.example .env

# 3. Push the schema to your local database
bun run db:push

# 4. Start the dev server (auto-restarts on file changes)
bun run dev
```

The server starts at `http://localhost:3000`. Open it in your browser to use the web UI.

### Environment Variables

```
DATABASE_URL=postgres://user:password@localhost:5432/tinylink
DATABASE_URL_UNPOOLED=postgres://user:password@localhost:5432/tinylink
BASE_URL=http://localhost:3000
PORT=3000
```

### Neon Postgres

TinyLink can store data in Neon as well.

Recommended setup:

```
DATABASE_URL=postgresql://USER:PASSWORD@EP-POOLER.REGION.aws.neon.tech/DB?sslmode=require
DATABASE_URL_UNPOOLED=postgresql://USER:PASSWORD@EP.REGION.aws.neon.tech/DB?sslmode=require
BASE_URL=http://localhost:3000
PORT=3000
```

- Use `DATABASE_URL` for the running app.
- Use `DATABASE_URL_UNPOOLED` for migrations and schema operations.
- `sslmode=require` should be included in both Neon connection strings.

---

## Database Commands

| Command | What it does |
|---|---|
| `bun run db:push` | Syncs schema directly to DB — fast for local dev, **do not use in production** |
| `bun run db:generate` | Reads `src/db/schema.ts` and writes SQL files to `drizzle/migrations/` |
| `bun run db:migrate` | Applies pending migration files to the DB — use in CI/production |
| `bun run db:studio` | Opens Drizzle Studio (visual DB browser) in your browser |

**Production migration workflow:**
1. Edit `src/db/schema.ts`
2. `bun run db:generate` — generates a SQL migration file, commit it
3. On deploy: `bun run db:migrate` — applies the migration safely

---

## API Reference

### `GET /` — Web UI

Opens the browser interface. Paste a URL to shorten it and click **Dev** to view all stored links in a table.

---

### `POST /links` — Create a short link

**Body:**
```json
{
  "url": "https://example.com/some/long/path",
  "slug": "my-link"
}
```
`slug` is optional. If omitted, a random 7-character slug is generated.

**Response 201:**
```json
{
  "slug": "my-link",
  "shortUrl": "http://localhost:3000/r/my-link",
  "originalUrl": "https://example.com/some/long/path",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:** `400` invalid body, `409` slug already taken

---

### `GET /r/:slug` — Redirect

Redirects to the original URL with a **302**. Logs the click (IP, user-agent, referer) in the background — the redirect is not delayed by the log write.

**Errors:** `404` slug not found

---

### `GET /links/:slug` — Get link metadata

**Response 200:**
```json
{
  "slug": "my-link",
  "originalUrl": "https://example.com/some/long/path",
  "shortUrl": "http://localhost:3000/r/my-link",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:** `404` slug not found

---

### `GET /links/:slug/analytics` — Click analytics

**Response 200:**
```json
{
  "slug": "my-link",
  "totalClicks": 42,
  "lastClickedAt": "2024-01-15T10:30:00.000Z"
}
```

`lastClickedAt` is `null` if the link has never been clicked.

**Errors:** `404` slug not found

---

## AWS Deployment

### Option A: Lightsail (Simple)

1. Create a **Lightsail instance** (Ubuntu, $5–$10/month)
2. Create a **Lightsail Managed Database** (PostgreSQL) in the same region
3. SSH into the instance and install Bun:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```
4. Clone the repo, run `bun install`, set up `.env` with your DB connection string
5. Run migrations: `bun run db:migrate`
6. Use **pm2** to keep the process alive:
   ```bash
   bun add -g pm2
   pm2 start "bun run src/index.ts" --name tinylink
   pm2 save && pm2 startup
   ```
7. Point **Nginx** or **Caddy** to `localhost:3000` for TLS termination

### Option B: EC2 + RDS

1. Create an **RDS PostgreSQL** instance (db.t3.micro for dev/staging)
2. Deploy the app on **EC2** in the same VPC
3. Allow inbound port 5432 from the EC2 security group on the RDS security group
4. Set `DATABASE_URL` to the RDS endpoint
5. Use the same pm2 + Nginx setup for process management

### Environment Variables on AWS

```
DATABASE_URL=postgres://user:password@your-db-endpoint:5432/tinylink
BASE_URL=https://yourdomain.com
PORT=3000
```
