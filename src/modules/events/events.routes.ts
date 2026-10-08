import { Router } from "express"
import { createEvent } from "./events.controller"
import authMiddleware from "../../middleware/auth.middleware"
const route = Router();
route.post("/create",authMiddleware, createEvent)
export default route;
