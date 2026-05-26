import { LoaderFunction, redirect } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    return redirect("projects");
  }
  return null;
};

// Currently there is no landing. Just redirecting to /projects
export default function IndexRoute() {
  return (
    <div>
      {/* Heading uses inline style for red color (#e34935) as the project's custom Tailwind config
          does not include standard color utilities. The color is from the design system. */}
      <h1 style={{ color: "#e34935" }}>Let's Find Your Ideal Space</h1>
    </div>
  );
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
