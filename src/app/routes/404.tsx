import type { LoaderFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";

// Throw 404 response to trigger CatchBoundary
export const loader: LoaderFunction = async () => {
  throw new Response("Not Found", { status: 404 });
};

// Display user-friendly error UI when route throws 404
export const CatchBoundary = () => {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <Error404
        message="Page not found"
        href="/"
        buttonText="Back to Home"
        useButton={true}
      />
    </div>
  );
};

// Route default export is not used since loader always throws
export default function NotFound404Route() {
  return null;
}
