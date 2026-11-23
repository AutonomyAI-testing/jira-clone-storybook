import type { LoaderFunction } from "@remix-run/node";

// The catch-all route exists so an address the app does not know still goes
// through the app's own route tree: without it the root loader never runs for
// such an address, and the not-found document the root boundary renders has no
// loader data to read the reader's theme from.
export const loader: LoaderFunction = async () => {
  throw new Response("Not Found", {
    status: 404,
  });
};

// Never rendered: the loader above always throws, so the root CatchBoundary
// answers with the app's own not-found document.
export default function NotFoundRoute() {
  return null;
}
