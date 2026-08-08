import { Error404 } from "@app/components/error-404";

export const meta = () => [
  { title: "Page Not Found - Jira Clone" },
  {
    name: "description",
    content: "The page you're looking for doesn't exist.",
  },
];

export default function NotFound404Route() {
  return <Error404 href="/projects" />;
}
