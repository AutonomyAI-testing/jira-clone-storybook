import { useNavigate } from "@remix-run/react";
import { Button } from "@app/components/button";

/**
 * Error404 component displays a user-friendly 404 error page with a wizard robot illustration.
 *
 * The component provides:
 * - Clear visual indication of a missing page (404 heading + custom illustration)
 * - Navigation options: home button (with optional custom destination) and back button
 * - Customizable error message for context-specific scenarios
 *
 * Navigation behavior:
 * - If 'href' prop is provided, the home button navigates via window.location.href (full page reload)
 * - If 'href' is omitted, uses Remix router's navigate("/") for SPA-style navigation
 * - Back button always uses browser history (window.history.back())
 */

export const Error404 = ({ message, href }: Props = {}): JSX.Element => {
  const navigate = useNavigate();

  // Navigation handler supports both external URLs (via href) and internal routing (via Remix navigate)
  const handleGoHome = () => {
    if (href) {
      // Use window.location.href for custom destinations (allows external URLs or full reload)
      window.location.href = href;
    } else {
      // Use Remix router for default home navigation (client-side routing)
      navigate("/");
    }
  };

  // Browser back navigation
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-4 py-8 md:px-6 md:py-12"
      style={{
        background: "linear-gradient(135deg, #f5f0eb 0%, #ede8e3 100%)",
      }}
    >
      <div className="flex w-full flex-col items-center text-center">
        {/* Decorative wizard robot illustration with fade-in animation */}
        <img
          src="/images/error-404-wizard.svg"
          alt="Wizard robot character - 404 not found illustration"
          className="mb-8 h-72 w-auto animate-fade-in md:h-96 lg:h-[28rem]"
        />

        {/* Large 404 error code - uses subtle color and opacity for visual hierarchy */}
        <h1 className="mb-6 animate-fade-in font-primary-black text-5xl text-font-subtle opacity-60 md:text-6xl lg:text-7xl">
          404
        </h1>

        {/* Main headline - uses CSS variable for color because 'red-500' is not in custom Tailwind palette */}
        <h2
          className="mb-4 animate-fade-in font-primary-bold text-2xl leading-tight md:text-3xl"
          style={{ color: "var(--Red500)" }}
        >
          Page Not Found
        </h2>

        {/* Customizable error description with fallback default message */}
        <p className="mb-8 max-w-md animate-fade-in text-sm text-font-subtle md:text-base">
          {message ||
            "The page you're looking for doesn't exist. It might have been removed or the link might be broken. No worries though—let's get you back on track."}
        </p>

        {/* Primary CTA button - wrapped in div for animation application */}
        <div className="animate-fade-in">
          <Button
            color="primary"
            variant="contained"
            size="lg"
            onClick={handleGoHome}
          >
            Go Home
          </Button>
        </div>

        {/* Secondary back button for users who prefer returning to previous page */}
        <button
          onClick={handleGoBack}
          className="mt-4 cursor-pointer text-link hover:underline"
        >
          ← Go back
        </button>
      </div>
    </main>
  );
};

interface Props {
  /**
   * Custom error description message shown to the user.
   * If omitted, displays a default message explaining the page was not found.
   * Useful for context-specific scenarios (e.g., archived projects, deleted resources).
   */
  message?: string;

  /**
   * Destination URL for the primary CTA button.
   * - If provided: navigates via full page load (window.location.href) — use for external URLs or when full reload is needed
   * - If omitted: uses Remix client-side routing to navigate home (/) — standard for internal SPA navigation
   */
  href?: string;
}
