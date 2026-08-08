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
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20">
      <div className="text-center">
        <h1
          className="font-primary-black text-5xl font-bold leading-tight"
          style={{ color: "var(--Red700)" }}
        >
          Let's Find Your Ideal Space
        </h1>
        <p
          className="mt-4 text-xl leading-relaxed"
          style={{ color: "var(--Red700)" }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>
      </div>
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
