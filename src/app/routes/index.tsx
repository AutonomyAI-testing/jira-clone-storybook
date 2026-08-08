import { LoaderFunction, redirect } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { HeroSection } from "@app/components/hero-section";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    return redirect("projects");
  }
  return null;
};

export default function IndexRoute() {
  return <HeroSection />;
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
