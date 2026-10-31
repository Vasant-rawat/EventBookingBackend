import z from "zod";

export const createTicketSchema = z.object({
  ticketId: z.coerce.number().int().positive(),
});
