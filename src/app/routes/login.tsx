import type {
  LoaderFunction,
  ActionFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getUserSession } from "@app/session-storage";
import { LoginView } from "@app/ui/login";
import { formatTags, formatProperties } from "@utils/meta";
import loginStyles from "@app/styles/login-page.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: loginStyles,
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap",
  },
];

export const meta: V2_MetaFunction = () => {
  const title = "Sign in · Jira Clone";
  const description = "Sign in to your Jira Clone workspace.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/login";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1297",
    "twitter:image:height": "635",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG",
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

export const loader: LoaderFunction = async ({ request }) => {
  // If already logged in, redirect to projects
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();
  if (userId) return redirect("/projects");
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action === "login") {
    const email = formData.get("email") as string;

    // TODO: Replace with real email/password authentication.
    // Currently logs in as the first user whose name matches the email prefix,
    // falling back to the first available user.
    const { getUsers } = await import("@infrastructure/db/user");
    const users = await getUsers();

    const matchedUser =
      users.find(
        (u) =>
          u.name.toLowerCase().replace(/\s/g, "") ===
          email.split("@")[0].toLowerCase()
      ) ?? users[0];

    if (!matchedUser) {
      return json({ error: "No users found." }, { status: 400 });
    }

    const userSession = await getUserSession(request);
    userSession.setUser(matchedUser.id);

    return redirect("/projects", {
      headers: { "Set-Cookie": await userSession.commit() },
    });
  }

  return json({ error: "Unknown action" }, { status: 400 });
};

export default function LoginRoute() {
  return <LoginView />;
}
