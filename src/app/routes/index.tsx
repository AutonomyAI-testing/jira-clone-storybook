import type {
  LoaderFunction,
  TypedResponse,
  V2_MetaFunction,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getUserSession } from "@app/session-storage";
import { WelcomeView } from "@app/ui/welcome";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Welcome";
  const description =
    "Welcome to jira_clone — a companion tool that takes care of the busywork so your team can focus.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/";

  const tags = {
    charset: "utf-8",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:url": url,
  };

  const properties = {
    "og:title": title,
    "og:type": "website",
    "og:url": url,
    "og:image": image,
    "og:description": description,
  };

  return [...formatTags(tags), ...formatProperties(properties)];
};

type LoaderData = null;

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData | TypedResponse<never>> => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (userId) {
    return redirect("/projects");
  }

  return null;
};

export default function IndexRoute() {
  return <WelcomeView />;
}
