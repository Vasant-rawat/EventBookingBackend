import { Router } from "express";
import { addVenue } from "./venue.controller";
const route = Router();
route.post("/create",addVenue)
export default route;
