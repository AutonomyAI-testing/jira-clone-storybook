import { Button } from "../button";

/**
 * 404 Error page with a whimsical wizard robot mascot.
 * Provides a friendly error message and navigation options back to the app.
 * Supports optional custom message and home link via props.
 */
export const Error404 = ({ message, href }: Props): JSX.Element => {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Large "404" background text: 8rem size with low opacity creates visual hierarchy */}
      <p className="select-none text-[8rem] font-black leading-none tracking-tight text-font-brand opacity-20">
        404
      </p>

      {/* Wizard Robot Mascot: -mt-8 pulls it up into the 404 text, responsive width */}
      <div className="-mt-8 mb-6 w-[280px] md:w-[340px]">
        <img
          src="/images/mascots/wizard-robot.svg"
          alt="Wizard Robot mascot looking confused"
          className="h-auto w-full drop-shadow-xl"
        />
      </div>

      {/* Main Heading */}
      <h1 className="mb-3 text-3xl font-bold text-font-danger">
        Lost in the digital ether?
      </h1>

      {/* Error Message */}
      <p className="mb-8 max-w-md text-base text-font-subtle">
        {message ||
          "Even our wizard robot couldn't find this page. It may have been moved, deleted, or perhaps never existed in this dimension."}
      </p>

      {/* Primary CTA Button - only shown if href is provided */}
      {href && (
        <a href={href} className="mb-4">
          <Button color="primary" size="lg">
            Take me home
          </Button>
        </a>
      )}

      {/* Secondary Navigation Links - always visible for quick navigation */}
      <div className="flex gap-4 text-sm">
        <a href="/" className="text-link hover:underline">
          Dashboard
        </a>
        <span className="text-font-subtlest">·</span>
        {/* "Go back" link: uses onClick handler to safely call history.back() (SSR-safe) */}
        {typeof window !== "undefined" && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
            className="text-link hover:underline"
          >
            Go back
          </a>
        )}
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
