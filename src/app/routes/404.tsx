import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - 404 Page Not Found";
  const description = "The page you're looking for doesn't exist or has been moved.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/404";

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
    "og:url": url,
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image": image,
  };

  return formatTags(formatProperties(tags));
};

export default function NotFound404Route() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full">
        <Error404 message="← Back to Home" href="/" />
      </div>
    </div>
  );
}
