import { integer, pgTable ,varchar} from "drizzle-orm/pg-core";
import { venues } from "./venues";


export const seatSchema = pgTable("seats", {
  seatId: integer("seat_id").primaryKey().generatedByDefaultAsIdentity(),
  venueId: integer("venue_id").references(() => venues.venues_id).notNull() ,
  seatNumber: varchar("seat_number").notNull()
})
