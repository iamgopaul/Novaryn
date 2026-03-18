import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");

const sql = postgres(url);

const rows = await sql.unsafe(`
  select
    pid,
    state,
    wait_event_type,
    wait_event,
    now() - query_start as runtime,
    left(query, 220) as query
  from pg_stat_activity
  where datname = current_database()
    and state <> 'idle'
  order by query_start asc
`);

console.log(rows);
await sql.end();
