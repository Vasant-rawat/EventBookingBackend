import { db } from "../../database";
import { venues } from "../../database/schema/venues";
export async function createVenue(data: {
  location: string;
  totalNumberOfSeats: number;
}) {
  try {

    const [venue]= await db.insert(venues).values(
      {
          location: data.location,
          total_number_seats:data.totalNumberOfSeats
      }
    ).returning()
    return venue
  } catch (e) {
    throw e
  }
}
