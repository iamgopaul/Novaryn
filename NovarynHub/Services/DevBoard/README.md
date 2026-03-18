# DevBoard

Trello-style project management service for planning and tracking the software development lifecycle.

Built with Bun + TypeScript + PostgreSQL + Drizzle ORM.

## Features

- Create projects with an auto-generated board
- Default SDLC columns: Backlog, Ready, In Development, In Review, Done
- Create, update, and move cards across columns
- Track project-level status breakdown for delivery visibility
- Header-based user identity for easy local integration

## Project Structure

```
src/
├── index.ts
├── router.ts
├── db/
│   ├── index.ts
│   ├── schema.ts
│   └── queries/
│       ├── boards.ts
│       ├── cards.ts
│       └── projects.ts
├── handlers/
│   ├── createCard.ts
│   ├── createProject.ts
│   ├── getBoard.ts
│   ├── getProjectSummary.ts
│   ├── home.ts
│   ├── listProjects.ts
│   ├── moveCard.ts
│   └── updateCard.ts
└── utils/
    ├── json.ts
    ├── requestUser.ts
    └── validate.ts
```

## Setup

```bash
bun install
cp .env.example .env
bun run db:push
bun run dev
```

Runs on `http://localhost:3001` by default.

## Environment Variables

```
DATABASE_URL=postgres://user:password@localhost:5432/devboard
DATABASE_URL_UNPOOLED=postgres://user:password@localhost:5432/devboard
PORT=3001
```

## Auth Model

Send a user ID via header:

`X-DevBoard-User-Id: your-user-id`

## API

### `POST /projects`

Create a project and auto-create a board with default SDLC columns.

Body:

```json
{
  "name": "Payments Platform",
  "key": "PAY",
  "description": "Q2 modernization roadmap"
}
```

### `GET /projects`

List projects for the requesting user.

### `GET /boards/:boardId`

Return board, columns, and cards.

### `POST /boards/:boardId/cards`

Create a card in a column (or first column if omitted).

Body:

```json
{
  "title": "Implement webhook retries",
  "description": "Exponential backoff + dead letter queue",
  "priority": "high",
  "storyPoints": 8
}
```

### `PATCH /cards/:cardId`

Update card details.

### `PATCH /cards/:cardId/move`

Move card to another column and optionally set position.

Body:

```json
{
  "columnId": "c8e32720-61b7-4f35-b88d-fbadf48857f8",
  "position": 1
}
```

### `GET /projects/:projectId/summary`

Return project card totals and SDLC stage breakdown.
