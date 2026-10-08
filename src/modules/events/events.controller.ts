import { createEventSchema } from "./events.validation";
import * as eventService from "./events.service";
import type { Request, Response } from "express";
export const createEvent = async (req: Request, res: Response) => {
  try {
    const result = createEventSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(404).json({
        message: "Invalid event data",
        error: result.error.issues,
      });
    }
    console.log("eventController");
    const data = result.data;
    console.log("eventController",data);
    const event = await eventService.createEvent({
      title: data.title,
      description: data.description,
      totalSeats: data.totalSeats,
      startTime: data.startTime,
      venueId: data.venueId,
      endTime: data.endTime,
      createdBy: req.user.id,
    });
    console.log("Hello",event)
    return res.status(201).json({
      message: "Event was succesfully created",
      event,
    });
  } catch (e) {
    return res.status(404).json({
      message: "Some Error has occured",
      error: e,
    });
  }
};
