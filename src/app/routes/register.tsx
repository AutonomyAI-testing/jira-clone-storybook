import type { V2_MetaFunction } from "@remix-run/node";
import { RegisterView } from "@app/ui/register";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Register";
  const description = "Create a new account to start tracking your projects.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  const properties = {
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function RegisterRoute() {
  return <RegisterView />;
}
