import type { V2_MetaFunction } from "@remix-run/node";
import { Error500 } from "@app/components/error-500";
import { FaqView } from "@app/ui/main/faq";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - FAQ";
  const description =
    "Answers to the questions this demo raises most often: signing in, projects, the board, keyboard shortcuts, themes and what is not implemented.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = "https://jira-clone.fly.dev/faq";

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
    "twitter:image:alt": title,
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

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Error500
      message="Error 500: the FAQ could not be loaded"
      href="/projects"
    />
  );
}

export default function FaqRoute() {
  return <FaqView />;
}
