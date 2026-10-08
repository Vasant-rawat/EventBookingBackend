import { createVenue } from "./venue.repository";
export async function createVenues(data: {
  location: string;
  totalNumberOfSeats: number;
}) {
  try {
    const result = await createVenue(data);
    return result;
  } catch (e) {
    throw e;
  }
}
