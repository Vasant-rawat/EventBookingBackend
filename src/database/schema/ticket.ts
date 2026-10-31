import { integer, pgTable ,unique} from "drizzle-orm/pg-core";
import { bookingSchema } from "./booking";
import { seatSchema } from "./seats";

export const ticketSchema = pgTable("ticket", {
  ticketId: integer().primaryKey().notNull().generatedByDefaultAsIdentity(),
  bookingId: integer().references(() => bookingSchema.bookingId),
  seatId:integer().references(()=>seatSchema.seatId)
},(t)=>[unique("ticket_booking_unique").on(t.bookingId,t.seatId)])
