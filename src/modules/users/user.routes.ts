import { Router } from "express";
const router = Router()
router.get("/", (req, res) => {
  res.json({
    message: "Hello from user",
  });
});
export default router;
