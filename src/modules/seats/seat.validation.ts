import z from "zod";
export const createSeatSchema = z.object({
  bookingId: z.coerce.number().int().positive(),
});
