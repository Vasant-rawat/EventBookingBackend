import * as eventRepository from "./events.repository";
export async function createEvent(data: {
  title: string;
  description: string;
  venueId: number;
  startTime: string;
  endTime: string;
  totalSeats: number;
  createdBy: number;
}) {
  console.log("Services")
  const startTime = new Date(data.startTime);
  const endTime = new Date(data.endTime);
  if (endTime <= startTime) {
    throw new Error("Ënd time must  be after start time.");
  }
  if (data.totalSeats <= 0) {
    throw new Error("Total Seats must be greater then 0.");
  }
  const event = await eventRepository.createEvent({
    title: data.title,
    description: data.description,
    venueId: data.venueId,
    startTime: startTime,
    endTime: endTime,
    totalSeats: data.totalSeats,
    createdBy: data.createdBy,
  });
 console.log(event)
  return event;
}
