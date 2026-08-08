import { forwardRef, useEffect, useState } from "react";
import cx from "classix";
import { Button } from "../button";

export const Error404Page = forwardRef<HTMLDivElement, Props>(
  (
    {
      headline = "These Aren't the Pages You're Looking For...",
      message = "The page you're looking for seems to have vanished into the enchanted forest. Let the wizard guide you back home!",
      homeHref = "/",
      showBackLink = true,
      animate = true,
      imageSrc = "/images/error-404.svg",
    },
    ref
  ): JSX.Element => {
    const [isAnimating, setIsAnimating] = useState(animate);

    useEffect(() => {
      if (!animate) return;
      setIsAnimating(true);
    }, [animate]);

    const handleGoBack = () => {
      // Safe for SSR: guard browser API calls
      if (typeof window !== "undefined") {
        window.history.back();
      }
    };

    return (
      <div
        ref={ref}
        className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-8"
      >
        <div className="max-w-[600px] text-center">
          {/* Wizard Robot Illustration */}
          <div
            className={cx(
              "mx-auto mb-8 flex justify-center",
              isAnimating && "animate-float"
            )}
          >
            <img
              src={imageSrc}
              alt="Wizard robot: a retro TV-head robot wearing a wizard hat covered with stars and moons, arms spread wide in a Vitruvian Man pose."
              className="h-auto w-full max-w-[320px]"
            />
          </div>

          {/* Large 404 Number */}
          <div
            className="mb-6 font-primary-black text-9xl leading-none text-font-brand"
            style={{ opacity: 0.9 }}
          >
            404
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-2xl font-primary-bold" style={{ color: "var(--Red500)" }}>
            {headline}
          </h1>

          {/* Message */}
          <p className="mb-8 text-lg text-font-subtle">{message}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href={homeHref}>
              <Button
                color="primary"
                variant="contained"
                size="lg"
                className="w-full sm:w-auto"
              >
                Take Me Home
              </Button>
            </a>
            {showBackLink && (
              <button
                onClick={handleGoBack}
                className="text-lg text-font-brand hover:underline active:text-font-brand-pressed"
                aria-label="Go back to previous page"
              >
                Go Back
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Error404Page.displayName = "Error404Page";

interface Props {
  /**
   * The main headline/title for the error page
   * @default "These Aren't the Pages You're Looking For..."
   */
  headline?: string;

  /**
   * The message body explaining what happened
   * @default "The page you're looking for seems to have vanished into the enchanted forest..."
   */
  message?: string;

  /**
   * The href for the home/dashboard button
   * @default "/"
   */
  homeHref?: string;

  /**
   * Whether to show the "Go back" link
   * @default true
   */
  showBackLink?: boolean;

  /**
   * Whether to animate the illustration with a floating motion
   * @default true
   */
  animate?: boolean;

  /**
   * The image source URL for the wizard robot illustration
   * @default "/images/error-404.svg"
   */
  imageSrc?: string;
}
