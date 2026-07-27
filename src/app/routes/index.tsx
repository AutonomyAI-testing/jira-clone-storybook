import type { LinksFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { WelcomeView, welcomeLinks } from "@app/ui/welcome";

export const links: LinksFunction = () => [...welcomeLinks()];

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
