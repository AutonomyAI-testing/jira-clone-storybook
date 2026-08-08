import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { formatTags } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Page Not Found";
  const description =
    "The page you are looking for does not exist. Navigate back to the main page.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  return [{ title }, ...formatTags(tags)];
};

export default function NotFound404Route() {
  return (
    <Error404
      message="Looks like you're lost in the void."
      href="/"
    />
  );
}
