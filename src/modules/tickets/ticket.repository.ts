import { db } from "../../database";
import { ticketSchema } from "../../database/schema/ticket";
import { bookingSchema } from "../../database/schema/booking";
import { and, eq } from "drizzle-orm";

export function createTicket(data: { bookingId: number; seatIds: number[] }) {
  if (data.seatIds.length === 0) {
    throw new Error("At least one seat is  required to issue a ticket");
  }
  const rows = data.seatIds.map((seatId) => ({
    bookingId: data.bookingId,
    seatId,
  }));
  return db.insert(ticketSchema).values(rows).returning();
}


export async function getTicketByBookingId(bookingId: number, userId: number) {
  db.select({
    ticketId: ticketSchema.ticketId,
    bookingId: ticketSchema.bookingId,
    seatId: ticketSchema.seatId,
  })
    .from(ticketSchema)
    .innerJoin(
      bookingSchema,
      eq(ticketSchema.bookingId, bookingSchema.bookingId),
    )
    .where(
      and(
        eq(ticketSchema.bookingId, bookingId),
        eq(bookingSchema.userId, userId),
      ),
    );
}

export async function getUserTickets(userId: number) {
  db.select({
    ticketId: ticketSchema.ticketId,
    bookingId: ticketSchema.bookingId,
    seatId: ticketSchema.seatId,
  })
    .from(ticketSchema)
    .innerJoin(
      bookingSchema,
      eq(ticketSchema.bookingId, bookingSchema.bookingId),
    )
    .where(eq(bookingSchema.userId, userId));
}
