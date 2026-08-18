import { Router } from "express";
import { signup ,signIn} from "./user.controller";
const router = Router()
router.post("/auth/signup",signup);
router.post("/auth/signin",signIn);
export default router;
