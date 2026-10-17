import { db } from "../../database";
import { eventSchema } from "../../database/schema/event";
export async function createEvent(data: {
  title: string,
  description:string,
  venueId:number,
  startTime:Date,
  endTime:Date,
  totalSeats: number,
createdBy:number
}) {
  console.log("Repositor");
  try {
    const [event ] = await db.insert(eventSchema).values(
       {
         title: data.title,
         description:data.description,
        startTime: data.startTime,
        venueId: data.venueId,
        endTime: data.endTime,
        totalSeats: data.totalSeats,
        createdBy: data.createdBy
        }
    ).returning();
    return event
  } catch (e) {
    return e;
  }
}
