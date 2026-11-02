import type { Response, Request } from "express";
import { getTicketByBookingIdService, getUserTicketsService, createTicketService } from "./ticket.service";
import { ticketSchema } from "../../database/schema/ticket";
import { createTicketSchema } from "./tickes.validation";
import { serial } from "drizzle-orm/mysql-core";

export const getTicketByIdController = (req: Request, res: Response) => {
  try {
    const [bookingId, userId] = req.body;
    getTicketByBookingIdService({
      bookingId: bookingId,
      userId: userId,
    });
  } catch (e) {
    res.status(500).json({
      message: "A error has occured" + e
    })
  }
}
export const getUserTicketsController = (req: Request, res: Response){
  try {
    const user = req.user;
    const result = createTicketSchema.safeParse(user)

    if (result.success) {
      const tickets = getUserTicketsService(result.data.ticketId)
      res.status(200).json({
        message: "Tickets where able to fetch"
        , data: tickets
      })
    }
    if (result.error) {
      res.status(400).json{
        message: "A error has occured" + result.error
      }
    }

  } catch (e) {
    res.status(500).json({
      message: "A error has occured" + e
    })
  }
}

export const createUserTickets = (req: Request, res: Response){
  try {
    const [bookingId, seatIds] = req.body;
if(!Number.isInteger(bookingId) || !Array.isArray(seatIds)|| seatIds.length ===0){
    res.status(500).json({
      message: "Invalid booking ids or Seaat Ids"
    })
}
    const tickets = createTicketService(bookingId,seatIds)
      res.status(200).json({
        message: "Tickets where able to fetch"
        , data: tickets
      })

  } catch (e) {
    res.status(500).json({
      message: "A error has occured" + e
    })
  }
}