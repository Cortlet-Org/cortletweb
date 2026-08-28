import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  referralToken: text("referral_token").notNull().unique(),
  status: text("status").notNull().default("pending"),
  // CRITICAL FIX: Force timezone-aware recording
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
