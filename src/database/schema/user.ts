import { integer, jsonb, pgTable, varchar ,timestamp} from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: integer("id")
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  name: varchar("name", {
    length: 255,
  }).notNull(),
  password: varchar("password", {
    length:255
  }).notNull(),
  email: varchar("email", {
    length: 255,
  }).notNull(),
  created_at :timestamp().defaultNow(),
  updated_at:timestamp().defaultNow()
});
