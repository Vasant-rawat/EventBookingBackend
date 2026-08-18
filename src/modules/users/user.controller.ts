import * as userService from "./user.service";
import type { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: "User Has been successfully created",
      user,
    });
  } catch (e) {
    res.status(500).json({
      message: `Some Error has occured ${e}`,
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const user = await userService.signIn(req.body);
  try {
    res.status(200).json({
      message: "User has been successfully login",
      user,
    });
  } catch (e) {
    res.status(500).json({
      message: `Some Error has occured ${e}`,
    });
  }
};
