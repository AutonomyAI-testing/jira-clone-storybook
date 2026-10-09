import { User, UserId, getRandomPastelColor } from "@domain/user";
import { db } from "./db.server";

type UserRow = {
  id: string;
  name: string;
  image: string | null;
  color: string;
};

// Users are mapped to the domain type field by field instead of with `dnull`.
// Registration stores more about a user than the rest of the app reads (email,
// company, role, team size), and `dnull` copies every column it is handed into
// the loader payloads of /login and the project pages.
const toUser = (row: UserRow): User => ({
  id: row.id,
  name: row.name,
  image: row.image || undefined,
  color: row.color,
});

export type CreateUserInputData = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  teamSize?: string;
};

export const getUser = async (userId: UserId): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: { id: userId },
  });
  return user ? toUser(user) : null;
};

export const getUsers = async (): Promise<User[]> => {
  const users = await db.user.findMany({
    orderBy: { name: "asc" },
  });
  return users.map(toUser);
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: { email },
  });
  return user ? toUser(user) : null;
};

export const createUser = async (user: CreateUserInputData): Promise<User> => {
  const createdUser = await db.user.create({
    data: {
      name: user.name,
      email: user.email,
      company: user.company,
      role: user.role,
      teamSize: user.teamSize,
      color: getRandomPastelColor(),
    },
  });
  return toUser(createdUser);
};
