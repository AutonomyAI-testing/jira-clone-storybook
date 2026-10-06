import { User as UserDB } from "@prisma/client";
import { User, UserId } from "@domain/user";
import { TopicId } from "@domain/topic";
import { db } from "./db.server";

export type NewUserData = {
  name: string;
  email: string;
  passwordHash: string;
  color: string;
  jobTitle?: string;
  interests: TopicId[];
  notifyIssueActivity: boolean;
  notifyMentions: boolean;
  notifyWeeklyDigest: boolean;
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

export const createUser = async (data: NewUserData): Promise<User> => {
  const user = await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      passwordHash: data.passwordHash,
      color: data.color,
      jobTitle: data.jobTitle,
      onboardedAt: new Date(),
      notifyIssueActivity: data.notifyIssueActivity,
      notifyMentions: data.notifyMentions,
      notifyWeeklyDigest: data.notifyWeeklyDigest,
      interests: { connect: data.interests.map((id) => ({ id })) },
    },
  });

  return toUser(user);
};

// The row also carries the email, the password hash and the notification
// preferences. None of those belong in a loader payload, so map explicitly
// instead of returning the record as it comes out of the database.
const toUser = (user: UserDB): User => ({
  id: user.id,
  name: user.name,
  image: user.image ?? undefined,
  color: user.color,
});
