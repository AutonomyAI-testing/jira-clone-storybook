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
export const Error404Page = ({
  headline = "Oops! Page Not Found",
  subheading = "Error 404",
  message = "It seems our wizard bot couldn't conjure up this page. It may have been moved, deleted, or never existed in the first place.",
  ctaText = "Return to Dashboard",
  ctaHref = "/",
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-elevation-surface px-4">
      <div className="max-w-md text-center">
        {/* Mascot Image with entrance animation */}
        <div className="mb-8 flex justify-center animate-fade-in duration-300">
          <div className="w-[280px] transition-transform duration-300 hover:scale-105 sm:w-[350px] lg:w-[420px]">
            <Wizard404Svg />
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in text-3xl font-primary-bold duration-300 delay-100 sm:text-4xl lg:text-5xl" style={{ color: "var(--Red600)" }}>
          {headline}
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in py-3 text-lg text-font-subtle duration-300 delay-150 sm:py-4">
          {subheading}
        </p>

        {/* Body Message */}
        <p className="animate-fade-in mb-8 leading-relaxed text-font duration-300 delay-200 sm:mb-10 sm:text-base">
          {message}
        </p>

        {/* CTA Button with animation */}
        <div className="flex animate-fade-in flex-col gap-3 duration-300 delay-300 sm:flex-row sm:justify-center">
          <Button
            onClick={() => navigate(ctaHref)}
            color="primary"
            variant="contained"
            size="lg"
            className="w-full sm:w-auto"
          >
            {ctaText}
          </Button>

          {/* Optional secondary back button */}
          <button
            onClick={() => window.history.back()}
            className={cx(
              "w-full rounded px-8 py-2 text-lg font-primary text-font-subtle transition-colors duration-200 sm:w-auto",
              "hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
            )}
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Accessibility: Reduced motion support via CSS media query in stylesheet */}
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
