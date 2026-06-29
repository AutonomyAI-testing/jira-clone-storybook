import type {
  LoaderFunction,
  ActionFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { LoginView } from "@app/ui/login";
import { formatTags, formatProperties } from "@utils/meta";
import { getUserSession } from "@app/session-storage";
import { getUsers } from "@infrastructure/db/user";

export const meta: V2_MetaFunction = () => {
  const title = "Sign in · AutonomyAI On-Call Agent";
  const description =
    "Sign in to your AutonomyAI On-Call Agent account.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/login";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export const loader: LoaderFunction = async () => {
  // Keep users available for demo login fallback
  const users = await getUsers();
  return json({ users });
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

  // New login action — pick first user for demo
  const users = await getUsers();
  if (users.length > 0) {
    const userSession = await getUserSession(request);
    userSession.setUser(users[0].id);
    return redirect("/projects", {
      headers: { "Set-Cookie": await userSession.commit() },
    });
  }

  return null;
};

export default function LoginRoute() {
  return <LoginView />;
}
