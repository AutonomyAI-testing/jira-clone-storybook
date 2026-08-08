import type { V2_MetaFunction } from "@remix-run/node";
import { LoginPage } from "@app/ui/login";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "AutonomyAI On-Call Agent - Sign In";
  const description =
    "Sign in to AutonomyAI and manage your on-call incidents from anywhere.";
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
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function LoginRoute() {
  return <LoginPage />;
}
