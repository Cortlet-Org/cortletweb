import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is missing.");
}

// Neon serverless HTTP driver — zero persistent connections, edge-compatible.
const sql = neon(process.env.DATABASE_URL);

// Drizzle ORM instance bound to the Neon HTTP driver and our schema.
export const db = drizzle(sql, { schema });
