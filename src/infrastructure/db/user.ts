import { User, UserId } from "@domain/user";
import { dnull } from "src/utils/dnull";
import { db } from "./db.server";

export const getUser = async (userId: UserId): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: { id: userId },
  });
  return user ? dnull(user) : null;
};

export const getUsers = async (): Promise<User[]> => {
  const users = await db.user.findMany({
    orderBy: { name: "asc" },
  });
  return users.map(dnull);
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await db.user.findFirst({
    where: { email },
  });
  return user ? dnull(user) : null;
};

export type CreateUserInputData = {
  name: string;
  email: string;
  color: string;
};

export const createUser = async (user: CreateUserInputData): Promise<User> => {
  const userDb = await db.user.create({
    data: {
      name: user.name,
      email: user.email,
      color: user.color,
    },
  });
  return dnull(userDb);
};
