import { Router } from "express"
import { createEvent } from "./events.controller"

const route = Router();
route.post("/create", createEvent)
export default route;
