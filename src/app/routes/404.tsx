import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "404 – Page Not Found | Jira Clone" },
    {
      name: "description",
      content: "The page you were looking for could not be found.",
    },
  ];
};

export default function NotFound404Route() {
  return <Error404 href="/" />;
}
