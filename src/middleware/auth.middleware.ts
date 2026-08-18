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
    const decoded = jwt.verify(token,env.jwtToken)
    next();
  } catch (e) {
    res.status(401).json({
      message: "invalid or unauthorized token",
    });
  }
};
