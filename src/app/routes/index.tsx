import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { WelcomeView } from "@app/ui/welcome";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira Clone — Project management, simplified";
  const description =
    "Manage projects, track issues and collaborate in real-time with Jira Clone — a pragmatic Jira-inspired app built with Remix, React and Tailwind.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev";

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

export default function IndexRoute() {
  return <WelcomeView />;
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
