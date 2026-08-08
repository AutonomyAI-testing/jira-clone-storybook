import { useNavigate } from "@remix-run/react";
import { Button } from "../button";
import cx from "classix";
import { Wizard404Svg } from "./wizard-404-svg";

/**
 * Error404Page - Full-page 404 error display with wizard mascot illustration
 *
 * Displays a playful, on-brand 404 error page with:
 * - Wizard robot mascot illustration centered at top
 * - Animated entrance effects (fade-in + scale)
 * - Responsive layout for mobile, tablet, and desktop
 * - Primary CTA to return to dashboard
 * - Accessible heading hierarchy and ARIA labels
 * - Respects prefers-reduced-motion user preference
 */

// Brand success color for the headline to reinforce positive action
const HEADLINE_COLOR = "var(--Green600)";

export const Error404Page = ({
  headline = "Oops! Page Not Found",
  subheading = "Error 404",
  message = "It seems our wizard bot couldn't conjure up this page. It may have been moved, deleted, or never existed in the first place.",
  ctaText = "Return to Dashboard",
  ctaHref = "/",
}: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(ctaHref);
  const handleGoBack = () => window.history.back();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-elevation-surface px-4">
      <div className="max-w-md text-center">
        {/* Mascot Image with entrance animation */}
        <div className="mb-8 flex animate-fade-in justify-center duration-300">
          <div className="w-[280px] transition-transform duration-300 hover:scale-105 sm:w-[350px] lg:w-[420px]">
            <Wizard404Svg />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in font-primary-bold text-3xl delay-100 duration-300 sm:text-4xl lg:text-5xl"
          style={{ color: HEADLINE_COLOR }}
        >
          {headline}
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in py-3 text-lg text-font-subtle delay-150 duration-300 sm:py-4">
          {subheading}
        </p>

        {/* Body Message */}
        <p className="mb-8 animate-fade-in leading-relaxed text-font delay-200 duration-300 sm:mb-10 sm:text-base">
          {message}
        </p>

        {/* CTA Button with animation */}
        <div className="flex animate-fade-in flex-col gap-3 delay-300 duration-300 sm:flex-row sm:justify-center">
          <Button
            onClick={handleNavigate}
            color="primary"
            variant="contained"
            size="lg"
            className="w-full sm:w-auto"
          >
            {ctaText}
          </Button>

          {/* Secondary action: Go back to previous page in browser history */}
          <button
            onClick={handleGoBack}
            className={cx(
              "w-full rounded px-8 py-2 font-primary text-lg text-font-subtle transition-colors duration-200 sm:w-auto",
              "hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
            )}
          >
            Go Back
          </button>
        </div>
      </div>

      {/* 
        Accessibility: Disable animations for users who prefer reduced motion.
        This respects the system-level prefers-reduced-motion preference.
      */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

interface Props {
  /** Main headline text */
  headline?: string;
  /** Secondary subheading (typically error code) */
  subheading?: string;
  /** Body message explaining the error */
  message?: string;
  /** Primary CTA button text */
  ctaText?: string;
  /** Primary CTA button href/navigation target */
  ctaHref?: string;
}
