import { Button } from "@app/components/button";
import cx from "classix";

/**
 * Props for the Error404Page component.
 *
 * Allows customization of message, buttons, and illustration while maintaining
 * sensible defaults for a standard 404 error page experience.
 */
export interface Error404PageProps {
  /**
   * The main message body (explanation of the error)
   * @default "Oops! Page not found"
   */
  message?: string;

  /**
   * Subtitle or additional context
   * @default "We can't find the page you're looking for. It might have been moved, deleted, or never existed."
   */
  subtitle?: string;

  /**
   * Primary button text (link to projects)
   * @default "Go to Projects"
   */
  primaryButtonLabel?: string;

  /**
   * Primary button href
   * @default "/projects"
   */
  primaryButtonHref?: string;

  /**
   * Secondary button text (go back)
   * @default "Go Back"
   */
  secondaryButtonLabel?: string;

  /**
   * Whether to show secondary button
   * @default true
   */
  showSecondaryButton?: boolean;

  /**
   * Illustration SVG path
   * @default "/images/error-404.svg"
   */
  illustrationSrc?: string;
}

/**
 * Error404Page Component
 *
 * A user-friendly 404 error page with:
 * - Large "404" status code with brand color for immediate visual recognition
 * - Customizable headline and subtitle for flexible error messaging
 * - Primary CTA ("Go to Projects") for main recovery path
 * - Optional secondary "Go Back" button for alternative navigation
 * - Fade-in animation on load for smooth page entrance
 * - Responsive layout: full width on mobile, centered max-width on desktop
 * - Accessibility: descriptive alt text, semantic HTML, keyboard-navigable buttons
 */
export const Error404Page = ({
  message = "Oops! Page not found",
  subtitle = "We can't find the page you're looking for. It might have been moved, deleted, or never existed.",
  primaryButtonLabel = "Go to Projects",
  primaryButtonHref = "/projects",
  secondaryButtonLabel = "Go Back",
  showSecondaryButton = true,
  illustrationSrc = "/images/error-404.svg",
}: Error404PageProps): JSX.Element => {
  // Navigate back in browser history. Provides familiar user gesture for recovery.
  const handleGoBack = (): void => {
    window.history.back();
  };

  return (
    <div className={cx("flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:py-16")}>
      <div className={cx("animate-fade-in w-full max-w-[500px]")}>
        {/* Illustration: Static SVG showing friendly robot error character */}
        <img
          src={illustrationSrc}
          alt="Page not found illustration"
          className={cx("mx-auto mb-6 h-[280px] w-auto")}
        />

        {/* Status code: Large, brand-colored "404" for immediate visual recognition */}
        <p className={cx("text-center font-primary-black text-6xl leading-none text-font-brand mb-4")}>
          404
        </p>

        {/* Headline: Customizable main error message. Default is friendly and approachable. */}
        <h1 className={cx("text-center font-primary-bold text-xl sm:text-2xl leading-tight text-font mb-2 max-w-[400px] mx-auto")}>
          {message}
        </h1>

        {/* Subtitle: Supporting explanation providing context and reassurance to users. */}
        <p className={cx("text-center font-primary text-sm sm:text-base leading-relaxed text-font-subtle mb-6")}>
          {subtitle}
        </p>

        {/* CTA buttons: Primary action (go to projects) + optional secondary action (browser back) */}
        <div className={cx("flex flex-col items-center gap-3 mt-8")}>
          {/* Primary button: Main recovery path sending user to projects dashboard. */}
          <a href={primaryButtonHref} className="w-full sm:w-auto">
            <Button
              color="primary"
              variant="contained"
              size="md"
              className="w-full sm:w-auto"
            >
              {primaryButtonLabel}
            </Button>
          </a>

          {/* Secondary button: Browser back navigation. Hidden conditionally via showSecondaryButton prop. */}
          {showSecondaryButton && (
            <button
              onClick={handleGoBack}
              className={cx(
                "flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60",
                "bg-background-neutral text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed",
                "w-full sm:w-auto px-4 py-2 text-sm sm:text-base font-primary"
              )}
            >
              {secondaryButtonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
