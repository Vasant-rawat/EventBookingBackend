import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { venues } from "./venues";
import { userTable } from "./user";
export const eventSchema = pgTable("events", {
  eventId: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", {
    length: 255,
  }).notNull(),
  description: varchar().notNull(),
  venueId: integer("venue_id")
    .notNull()
    .references(() => venues.venues_id),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  totalSeats: integer("total_seats").notNull(),
  eventStatus: varchar("event_status", {
    length: 50,
  })
    .notNull()
    .default("upcoming"),
  createdBy: integer("created_by")
    .notNull()
    .references(() => userTable.id),
  createdAt: timestamp("created_at ").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
