import { Button } from "../button";

// Gradient border colors for the mascot container
const GRADIENT_START = "#36d9d8";
const GRADIENT_END = "#7b8ff7";

// Text color used for the 404 heading (intentional red for emphasis)
const HEADING_RED_COLOR = "var(--Red700)";
const DESCRIPTION_RED_COLOR = "var(--Red600)";

const handleGoBack = () => {
  // SSR-safe history navigation
  if (typeof window !== "undefined") {
    window.history.back();
  }
};

const handleNavigateHome = (href: string) => {
  // SSR-safe page navigation
  if (typeof window !== "undefined") {
    window.location.href = href;
  }
};

export const Error404 = ({
  title = "404 - Page Not Found",
  description = "Oops! It looks like this page doesn't exist. Let's get you back on track.",
  href = "/",
  message,
}: Props): JSX.Element => {
  // Legacy compat: use message as description if provided
  const displayDescription = message || description;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      {/* Circular mascot container with gradient border */}
      <div
        className="mb-8 flex items-center justify-center rounded-full p-1"
        style={{
          background: `linear-gradient(135deg, ${GRADIENT_START}, ${GRADIENT_END})`,
          width: "280px",
          height: "280px",
          maxWidth: "100%",
        }}
      >
        <img
          src="/images/404-mascot.svg"
          alt="404 mascot"
          className="rounded-full"
          style={{ width: "calc(100% - 8px)", height: "calc(100% - 8px)" }}
        />
      </div>

      {/* Large 404 number */}
      <h1
        className="mb-2 text-center font-primary-black leading-none"
        style={{ fontSize: "120px", color: "red" }}
      >
        404
      </h1>

      {/* Heading */}
      <h2
        className="mb-3 max-w-md text-center font-primary-bold text-2xl"
        style={{ color: HEADING_RED_COLOR }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="mb-8 max-w-md text-center"
        style={{ color: DESCRIPTION_RED_COLOR }}
      >
        {displayDescription}
      </p>

      {/* Action buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          color="primary"
          variant="contained"
          size="lg"
          className="no-underline"
          onClick={() => handleNavigateHome(href)}
        >
          Go to Homepage
        </Button>
        <Button color="neutral" variant="text" size="lg" onClick={handleGoBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

interface Props {
  title?: string;
  description?: string;
  href?: string;
  message?: string; // Legacy compat
}
