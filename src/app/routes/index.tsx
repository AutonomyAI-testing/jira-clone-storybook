import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { WelcomeView } from "@app/ui/welcome";

export const meta: V2_MetaFunction = () => [
  { title: "Welcome — Jira Clone" },
  { name: "description", content: "Your team's workspace for tracking issues and managing projects." },
];

export default function IndexRoute() {
  return <WelcomeView />;
}

export function CatchBoundary() {
  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}
