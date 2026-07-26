import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User } from "@domain/user";
import { getUsers } from "@infrastructure/db/user";
import { getUserSession } from "@app/session-storage/user-storage.server";
import { WelcomeView } from "@app/ui/welcome";
import { Error404 } from "@app/components/error-404";

type LoaderData = {
  users: User[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (userId) {
    return redirect("/projects");
  }

  const users = await getUsers();
  return json<LoaderData>({ users });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "setUser") {
    const userId = formData.get("user") as string;
    const userSession = await getUserSession(request);
    userSession.setUser(userId);

    return redirect("/projects", {
      headers: { "Set-Cookie": await userSession.commit() },
    });
  }
  console.error("Unknown action", _action);
};

export default function IndexRoute() {
  const { users } = useLoaderData<LoaderData>();
  return <WelcomeView users={users} />;
}

export function CatchBoundary() {
  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}
