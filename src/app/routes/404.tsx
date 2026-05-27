import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

export const meta: V2_MetaFunction = () => [
  { title: "Page Not Found - Jira Clone" },
  {
    name: "description",
    content: "The page you're looking for doesn't exist.",
  },
];

export default function NotFound404Route(): JSX.Element {
  return <Error404 />;
}
