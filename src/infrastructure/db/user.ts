import { User, UserId } from "@domain/user";
import { dnull } from "src/utils/dnull";
import { db } from "./db.server";

// `password` is deliberately absent: the hash is server-only and must never be
// part of a loader payload.
const userSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  company: true,
  image: true,
  color: true,
} as const;

export const getUser = async (userId: UserId): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: userSelect,
  });
  return user ? dnull(user) : null;
};

export const getUsers = async (): Promise<User[]> => {
  const users = await db.user.findMany({
    orderBy: { name: "asc" },
    select: userSelect,
  });
  return users.map(dnull);
};

export const isEmailTaken = async (email: string): Promise<boolean> => {
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return Boolean(user);
};

type CreateUserInput = {
  name: string;
  email: string;
  passwordHash: string;
  role: string;
  company?: string;
  color: string;
};

export const createUser = async (user: CreateUserInput): Promise<UserId> => {
  const createdUser = await db.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.passwordHash,
      role: user.role,
      company: user.company,
      color: user.color,
    },
    select: { id: true },
  });

  return createdUser.id;
};
