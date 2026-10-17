import { createVenues } from "./venue.service";
import { createVenueSchema } from "./venue.validation";
import type { Response, Request } from "express";
export async function addVenue(req: Request, res: Response) {
  try {
    const result = createVenueSchema.safeParse(req.body);

    //use to check weather the data was successfully loaded or not
    if (!result.success) {
      return res.status(404).json({
        message: "Invalid event data",
        erorr: result.error.message,
      });
    }
    const data = result.data;
    const venue = await createVenues({
      location: data.location,
      totalNumberOfSeats: data.totalNumberSeats,
    });
    res.status(201).json({
      message: "Venue created successfully",
      data: venue,
    });
  } catch (e) {
    res.status(400).json({
      message: "There was some Error while Creating a Venue.",
      error: e,
    });
  }
}
