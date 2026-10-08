import type {Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization  token is required",
      });
    }
    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(401).json({
        message: "invalid Authorization format",
      });
    }
    const decoded = jwt.verify(token, env.jwtToken) as { userId: number };
    console.log(decoded)
    if (!decoded.userId) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }
    req.user = { id:decoded.userId }
    next();
  } catch (e) {
    res.status(401).json({
      message: "invalid or unauthorized token",
    });
  }
};
export default authMiddleware;
