import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { WelcomeView } from "@app/ui/welcome";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "SuddenlySpaces";
  const description = "Welcome to SuddenlySpaces.";
  const url = "https://jira-clone.fly.dev/";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary",
    "twitter:site": url,
    "twitter:title": title,
    "twitter:description": description,
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
  };

  return [...formatTags(tags), ...formatProperties(properties)];
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
