import { Error404 } from "@app/components/error-404";

/**
 * Catch-all route for 404 Not Found errors.
 * Renders the Error404 component with default message and link.
 * This route is typically matched by Remix's errorBoundary or splat route.
 */
export default function NotFound404Route() {
  return <Error404 />;
}
