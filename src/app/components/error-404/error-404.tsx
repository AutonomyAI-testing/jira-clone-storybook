import { Button } from "../button";

/**
 * Error404 Component - Displays a friendly 404 error page.
 *
 * Features:
 * - Full-screen centered layout with wizard illustration
 * - Customizable error message and navigation href
 * - Two action buttons: "Go Home" (navigate to href) and "Go Back" (browser history)
 * - Responsive button layout (stacked on mobile, horizontal on larger screens)
 *
 * The design uses warm background color (#f5f0e8) and custom CSS variables for
 * the primary action button to maintain visual consistency with the design system.
 */
export const Error404 = ({
  message = "Oops! This page got lost in the magic.",
  href = "/",
}: Props): JSX.Element => {
  // Handle back navigation using browser history
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center px-4 py-8"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Wizard illustration - 300px height maintains visual balance */}
      <div className="mb-8 flex justify-center">
        <img
          src="/images/error-404-wizard.svg"
          alt="Wizard robot - 404 Not Found"
          className="h-[300px] w-auto object-contain"
        />
      </div>

      {/* Large error code for immediate visual recognition */}
      <div className="mb-2 text-center">
        <h1 className="font-primary-black text-6xl text-font">404</h1>
      </div>

      {/* Primary heading below error code */}
      <div className="mb-4 text-center">
        <h2 className="font-primary-bold text-2xl text-font">Page Not Found</h2>
      </div>

      {/* Custom message and secondary descriptive text */}
      <div className="mb-8 max-w-[500px] text-center">
        <p className="font-primary text-font-subtle">{message}</p>
        <p className="mt-2 font-primary-light text-sm text-font-subtlest">
          Looks like a wizard cast a spell and made this page disappear.
        </p>
      </div>

      {/* Primary action (navigation) and secondary action (go back) */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Primary CTA - uses CSS variable for brand color and styled as anchor */}
        <a
          href={href}
          className="flex cursor-pointer items-center justify-center gap-2 rounded px-6 py-2 font-primary text-lg text-font-inverse hover:opacity-90 active:opacity-75"
          style={{ backgroundColor: "var(--color-background-brand-bold)" }}
        >
          Go Home
        </a>
        {/* Secondary action - uses Button component for consistency */}
        <Button
          onClick={handleGoBack}
          color="neutral"
          variant="subtlest"
          size="lg"
          className="px-6"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

/**
 * Props for the Error404 component
 *
 * @property message - Custom error message (defaults to playful wizard-themed message)
 * @property href - Navigation target for the "Go Home" button (defaults to "/")
 */
interface Props {
  message?: string;
  href?: string;
}
