import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { WelcomeView } from "@app/ui/welcome";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Jira clone - Welcome" },
    {
      name: "description",
      content: "Welcome to Jira clone — your project management tool.",
    },
  ];
};

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
