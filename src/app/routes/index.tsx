import type { V2_MetaFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { LandingView } from "@app/ui/landing";

export const meta: V2_MetaFunction = () => [
  { title: "SuddenlySpaces — Find Your Ideal Space" },
  {
    name: "description",
    content:
      "Discover residential and commercial properties tailored to your needs.",
  },
];

export default function IndexRoute() {
  return <LandingView />;
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
