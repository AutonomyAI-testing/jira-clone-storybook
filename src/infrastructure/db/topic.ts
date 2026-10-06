import { Topic } from "@domain/topic";
import { db } from "./db.server";

export const getTopics = async (): Promise<Topic[]> => {
  const topics = await db.topic.findMany({
    orderBy: { order: "asc" },
  });
  return topics.map(({ id, name, order }) => ({ id, name, order }));
};
