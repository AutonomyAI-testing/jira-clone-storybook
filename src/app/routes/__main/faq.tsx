import type { V2_MetaFunction } from "@remix-run/node";
import { FAQView } from "@app/ui/faq";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "FAQ - Project Management" },
    {
      name: "description",
      content: "Frequently asked questions about using the project management tool",
    },
  ];
};

export default function FAQRoute() {
  return <FAQView />;
}
