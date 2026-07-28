import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { getUserSession } from "@app/session-storage";
import { getUser } from "@infrastructure/db/user";
import { WelcomeView } from "@app/ui/welcome";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Jira Clone - Welcome" }];
};

type LoaderData = {
  user: User | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (!userId) {
    return json<LoaderData>({ user: null });
  }

  const user = await getUser(userId);
  return json<LoaderData>({ user });
};

export default function WelcomeRoute() {
  const { user } = useLoaderData<LoaderData>();
  return <WelcomeView user={user || undefined} />;
}
