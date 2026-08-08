import { Error404 } from "@app/components/error-404";

/**
 * 404 route handler displays the error page when users navigate to non-existent routes.
 * Centers the error component on the full viewport.
 */
export default function NotFound404Route() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Error404 message="Oops! This page has vanished into the void." href="/" />
    </div>
  );
}
