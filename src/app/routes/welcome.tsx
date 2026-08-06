import type { V2_MetaFunction } from "@remix-run/node";
import { WelcomeView } from "@app/ui/welcome";
import { formatTags } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Welcome";
  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
  };
  return [{ title }, ...formatTags(tags)];
};

export default function WelcomeRoute() {
  return <WelcomeView />;
}
