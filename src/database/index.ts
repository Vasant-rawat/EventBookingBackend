import { Pool } from "pg";
import {env}from "../config/env"
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: env.databaseUrl,
});
export const db = drizzle({client:pool})
