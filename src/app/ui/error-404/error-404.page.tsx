import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const Error404Page = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-elevation-surface">
      <div className="flex max-w-[600px] flex-col items-center gap-8 px-4">
        {/* Illustration Container */}
        <div className="flex items-center justify-center">
          <img
            src="/images/error-404.svg"
            alt="404 Error - Page Not Found"
            className="h-auto w-[280px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-primary-black text-5xl text-font">
            Page Not Found
          </h1>

          <p className="font-primary-light text-lg text-font-subtle">
            Sorry, the page you're looking for doesn't exist. It might have been
            moved or deleted. Let's get you back on track!
          </p>
        </div>

        {/* Action Button */}
        <Link to="/" className="inline-block">
          <Button size="lg" color="primary" variant="contained">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
