import { z } from "zod";
export const createEventSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(1).max(1000),
  venueId: z.number().int().positive(),
  startTime: z.iso.datetime(),
  endTime: z.iso.datetime(),
  totalSeats: z.number().int().positive(),
});
