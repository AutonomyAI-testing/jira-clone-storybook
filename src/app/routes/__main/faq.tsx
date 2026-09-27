import type { V2_MetaFunction } from "@remix-run/node";
import { faqCategoriesMock } from "@domain/faq";
import { FaqView } from "@app/ui/main/faq";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - FAQ";
  const description =
    "Find answers to common questions about getting started, billing and your account.";
  const url = "https://jira-clone.fly.dev/faq";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function FaqRoute() {
  return <FaqView categories={faqCategoriesMock} />;
}
