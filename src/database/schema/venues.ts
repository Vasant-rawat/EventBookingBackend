import { integer,  pgTable, varchar } from "drizzle-orm/pg-core";

export const venues = pgTable("venues", {
  venues_id: integer("venue_id").primaryKey().generatedAlwaysAsIdentity()
  , location: varchar("location", {
    length:255,
  }).notNull(),
  total_number_seats: integer("total_number_seats",).notNull()
}
)
