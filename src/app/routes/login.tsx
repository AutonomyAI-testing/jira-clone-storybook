import type { ActionFunction, V2_MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { LoginView } from "@app/ui/login";
import { formatTags, formatProperties } from "@utils/meta";
import { getUserSession } from "@app/session-storage";
import loginCss from "../ui/login/login.css";

export const links = () => [{ rel: "stylesheet", href: loginCss }];

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Login";
  const description =
    "Select your user profile and login to see your projects.";
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

export default function LoginRoute() {
  return <LoginView />;
}
