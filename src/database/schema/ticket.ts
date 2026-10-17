import { integer, pgTable } from "drizzle-orm/pg-core";
import { bookingSchema } from "./booking";

const ticketSchema = pgTable("ticket", {
  ticketId: integer().primaryKey().notNull().generatedByDefaultAsIdentity(),
  bookingId: integer().references(() => bookingSchema.bookingId),
  seatId:integer().references(()=>)
})
