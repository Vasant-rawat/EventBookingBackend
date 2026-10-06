import  express from "express"
import userRoutes from "./modules/users/user.routes"
import eventRoutes from "./modules/events/events.routes"
const app =express()
app.use(express.json())

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/events", eventRoutes)

export default app;
