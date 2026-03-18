import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../src/services/NovarynControlTower/db/schema";
import { eq } from "drizzle-orm";

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client, { schema });

const ENV_ID = "00000000-0000-0000-0000-000000000003"; // linkme-app / prod

async function seed() {
  console.log("🌱 Seeding dummy data...");

  // --- Flags ---
  const flagData = [
    { key: "dark_mode",         type: "boolean", defaultValueJson: false, enabled: true },
    { key: "new_onboarding",    type: "boolean", defaultValueJson: false, enabled: true },
    { key: "beta_dashboard",    type: "boolean", defaultValueJson: false, enabled: false },
    { key: "max_upload_mb",     type: "number",  defaultValueJson: 10,    enabled: true },
    { key: "welcome_message",   type: "string",  defaultValueJson: "Welcome!", enabled: true },
    { key: "maintenance_mode",  type: "boolean", defaultValueJson: false, enabled: false },
    { key: "ai_suggestions",    type: "boolean", defaultValueJson: false, enabled: true },
    { key: "referral_program",  type: "boolean", defaultValueJson: false, enabled: true },
  ];

  const insertedFlags: typeof schema.flags.$inferSelect[] = [];
  for (const f of flagData) {
    const existing = await db.select().from(schema.flags)
      .where(eq(schema.flags.key, f.key)).limit(1);
    if (existing.length > 0) {
      console.log(`  skip flag: ${f.key} (exists)`);
      insertedFlags.push(existing[0]!);
      continue;
    }
    const [flag] = await db.insert(schema.flags).values({ envId: ENV_ID, ...f }).returning();
    insertedFlags.push(flag!);
    console.log(`  + flag: ${f.key}`);
  }

  // --- Rules ---
  const flagMap = new Map(insertedFlags.map((f) => [f.key, f]));

  const rules: { flagKey: string; priority: number; ruleJson: object }[] = [
    { flagKey: "dark_mode",      priority: 0, ruleJson: { type: "rollout", percentage: 50 } },
    { flagKey: "new_onboarding", priority: 0, ruleJson: { type: "allowlist", userIds: ["user_alice", "user_bob", "user_charlie"] } },
    { flagKey: "new_onboarding", priority: 1, ruleJson: { type: "rollout", percentage: 20 } },
    { flagKey: "ai_suggestions", priority: 0, ruleJson: { type: "rollout", percentage: 75 } },
    { flagKey: "referral_program", priority: 0, ruleJson: { type: "allowlist", userIds: ["user_alice", "user_dan"] } },
    { flagKey: "beta_dashboard", priority: 0, ruleJson: { type: "allowlist", userIds: ["user_alice"] } },
  ];

  for (const r of rules) {
    const flag = flagMap.get(r.flagKey);
    if (!flag) continue;
    const existing = await db.select().from(schema.flagRules)
      .where(eq(schema.flagRules.flagId, flag.id));
    if (existing.length > 0) {
      console.log(`  skip rules for: ${r.flagKey} (exists)`);
      continue;
    }
    await db.insert(schema.flagRules).values({
      flagId: flag.id,
      priority: r.priority,
      ruleJson: r.ruleJson,
    });
    console.log(`  + rule: ${r.flagKey} → ${(r.ruleJson as {type:string}).type}`);
  }

  // --- Experiments ---
  const experiments = [
    {
      key: "checkout_button_color",
      variantsJson: [
        { key: "control", weight: 50 },
        { key: "green",   weight: 50 },
      ],
      status: "running" as const,
    },
    {
      key: "pricing_page_layout",
      variantsJson: [
        { key: "control",  weight: 34 },
        { key: "cards",    weight: 33 },
        { key: "table",    weight: 33 },
      ],
      status: "draft" as const,
    },
    {
      key: "email_subject_line",
      variantsJson: [
        { key: "control",   weight: 50 },
        { key: "personalized", weight: 50 },
      ],
      status: "completed" as const,
    },
  ];

  for (const exp of experiments) {
    const existing = await db.select().from(schema.experiments)
      .where(eq(schema.experiments.key, exp.key)).limit(1);
    if (existing.length > 0) {
      console.log(`  skip experiment: ${exp.key} (exists)`);
      continue;
    }
    await db.insert(schema.experiments).values({ envId: ENV_ID, ...exp });
    console.log(`  + experiment: ${exp.key} [${exp.status}]`);
  }

  console.log("✅ Done!");
  await client.end();
}

seed().catch((e) => { console.error(e); process.exit(1); });
