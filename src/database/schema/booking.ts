import {
  pgTable,
  varchar,
  integer,
  pgEnum,
  timestamp,
} from "drizzle-orm/pg-core";
import { userTable } from "./user";
import { eventSchema } from "./event";

const bookingStausEnum = pgEnum("booking_status", [
  "PENDING",
  "CONFIRMED",
  "CANCELLED",
  "EXPIRED",
]);
export const bookingSchema = pgTable("bookings", {
  bookingId: integer().primaryKey().generatedByDefaultAsIdentity(),
  userId: integer()
    .notNull()
    .references(() => userTable.id),
  bookingStatus: bookingStausEnum().notNull().default("PENDING"),
  bookingTime: timestamp("booking_time").defaultNow(),
  eventId: integer()
    .notNull()
    .references(() => eventSchema.eventId),
});
