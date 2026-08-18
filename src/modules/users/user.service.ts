import { exit } from "process";
import * as userRepository from "./user.repository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JsonWebTokenError } from "jsonwebtoken";
import { env } from "../../config/env";
export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const existingUser = await userRepository.findeUserByEmail(data.email);
  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await userRepository.createUser({
    ...data,
    password: hashedPassword,
  });
  return user;
}
export async function signIn(data: { email: string; password: string }) {
  const existingUser = await userRepository.findeUserByEmail(data.email);
  if (!existingUser) {
    throw new Error("User Is not created");
  }
  const isPasswordValid = await bcrypt.compare(
    data.password,
    existingUser?.password!!,
  );
  if (!isPasswordValid) {
    throw new Error("Email or Password is invalid");
  }
  const token = jwt.sign(
    {
      userId: existingUser.id,
      email: existingUser.email,
    },
    env.jwtToken,
    { expiresIn: "1d" },
  );
  return {
    user: {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    },
    token,
  };
}
