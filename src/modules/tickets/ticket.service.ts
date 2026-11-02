import { createTicket ,getTicketByBookingId,getUserTickets} from "./ticket.repository"

export const createTicketService = (data: {
  bookingId: number
  seatIds: number[]
}, seatIds: any) => {
    createTicket(data)
}

export const getTicketByBookingIdService = (data: {
  bookingId: number,
 userId:number
}) => {
getTicketByBookingId(data)
}

export const getUserTicketsService = (userId: number)=>{
  getUserTickets(userId)
}
