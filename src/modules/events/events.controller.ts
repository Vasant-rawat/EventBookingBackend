import { createEventSchema } from "./events.validation";
import * as eventService from "./events.service";
import type { Request, Response } from "express";
export const createEvent = async (req: Request, res: Response) => {
  console.log("eventController");
  try {
    const result = createEventSchema.safeParse(req.body);
    if (!result.success) {
      return res.send({
        message: "Invalid event data",
        error: result.error.issues,
      });
    }
    const data = result.data;
    const event = await eventService.createEvent({
      title: data.title,
      description: data.description,
      totalSeats: data.totalSeats,
      startTime: data.startTime,
      venueId: data.venueId,
      endTime: data.endTime,
      createdBy: req.user.id,
    });
    return res.sendStatus(201).json({
      message: "Event was succesfully created",
      event,
    });
  } catch (e) {
    return res.sendStatus(404).json({
      message: "Some Error has occured",
      error: e,
    });
  }
};
