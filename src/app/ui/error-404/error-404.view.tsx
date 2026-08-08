import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

// Avatar gradient: teal to blue to purple for visual appeal
const AVATAR_GRADIENT = "linear-gradient(135deg, #64d8cb, #526ee0, #b178e0)";

// Avatar dimensions for the circular image container (in pixels)
const AVATAR_SIZE = 316;
const AVATAR_PADDING = 8;

export const Error404PageView = (): JSX.Element => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-background-neutral">
      <div className="flex flex-col items-center gap-8 rounded-lg border-4 border-border-success p-8 text-center">
        {/* Circular avatar with gradient border effect */}
        <div
          className="relative rounded-full shadow-lg"
          style={{
            background: AVATAR_GRADIENT,
            width: `${AVATAR_SIZE}px`,
            height: `${AVATAR_SIZE}px`,
            padding: `${AVATAR_PADDING}px`,
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-full">
            <img
              src="/images/error-404.svg"
              alt="Page Not Found"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Error message section with emphasized 404 heading */}
        <div className="max-w-[500px]">
          <h1
            className="inline-block rounded-md border-2 border-font-danger px-4 py-1 font-primary-black text-5xl text-font"
            style={{ WebkitTextStroke: "1px var(--Red700)" }}
          >
            404
          </h1>
          <p className="mt-4 font-primary text-lg text-font">
            Oops! Page not found
          </p>
          <p className="mt-2 font-primary-light text-sm text-font-subtle">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        {/* Action buttons: primary CTA to home, secondary option to go back */}
        <div className="flex gap-4">
          <Link to="/">
            <Button color="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <button
            onClick={handleGoBack}
            className="bg-background-neutral-subtlest flex cursor-pointer items-center justify-center gap-2 rounded px-8 py-2 text-lg text-font hover:bg-background-neutral-hovered active:bg-background-neutral-pressed disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Go back to previous page"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
