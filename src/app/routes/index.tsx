import { LoaderFunction, redirect } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { LandingView } from "@app/ui/landing/landing.view";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    return redirect("projects");
  }
  return null;
};

// Landing page
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
