import { z } from "zod";
export const createVenueSchema = z.object({
  location: z.string(),
  totalNumberSeats: z.number().int().positive(),
});
