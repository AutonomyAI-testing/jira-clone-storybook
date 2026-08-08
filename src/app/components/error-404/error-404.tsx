import { Link } from "@remix-run/react";
import { Button } from "../button";

/**
 * Error404 component - displays a friendly 404 error page.
 * 
 * @param message - Optional custom error message. Defaults to a wizard-themed message.
 * @param href - Optional link destination. Defaults to home page (/).
 */
export const Error404 = ({ message, href }: Props = {}) => {
  return (
    // Full-screen container with centered content and background elevation surface
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/images/wizard-robot-404.svg"
          alt="404 wizard robot"
          className="h-[340px] w-auto"
        />
        <h1 className="font-primary-black text-6xl text-font">404</h1>
        <h2 className="font-primary-bold text-2xl text-font">
          Oops! Page not found
        </h2>
        <p className="max-w-md text-base text-font-subtle">
          {message ||
            "The page you're looking for has vanished into thin air. Even our wizard couldn't find it."}
        </p>
        <Link to={href || "/"}>
          <Button color="primary" variant="contained">
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
};

interface Props {
  /** Custom error message displayed to user. Falls back to default if not provided. */
  message?: string;
  /** Navigation link destination after user clicks the CTA button. Defaults to home. */
  href?: string;
}
