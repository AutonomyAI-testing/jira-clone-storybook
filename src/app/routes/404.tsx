import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

export const meta: V2_MetaFunction = () => [
  { title: "404 – Page Not Found" },
  {
    name: "description",
    content:
      "Oops! The page you're looking for seems to have disappeared into another dimension.",
  },
];

export default function NotFound404Route(): JSX.Element {
  return <Error404 href="/" />;
}
