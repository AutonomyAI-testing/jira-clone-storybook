import { Button } from "../button";

// Constants for the 404 error page
const DEFAULT_MESSAGE =
  "Even our magic-powered robot couldn't find the page you're looking for. It may have been moved, deleted, or never existed at all.";
const DEFAULT_HREF = "/";
const HEADING_TEXT = "Oops! It looks like our wizard lost that page!";
const HOMEPAGE_BUTTON_TEXT = "Go to Homepage";
const BACK_BUTTON_TEXT = "Go Back";

export const Error404 = ({
  message = DEFAULT_MESSAGE,
  href = DEFAULT_HREF,
  showBackButton = true,
}: Props): JSX.Element => {
  // Navigate to the specified href when clicking the homepage button
  const handleHomeClick = () => {
    window.location.href = href;
  };

  // Navigate back in browser history when clicking the back button
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="flex max-w-[500px] flex-col items-center gap-6 text-center">
      <img
        src="/images/error-404.svg"
        alt="Wizard robot lost in space"
        className="mx-auto h-[420px] w-auto"
      />
      <div className="flex flex-col items-center gap-2">
        <h1
          className="font-primary-bold text-2xl"
          style={{ color: "var(--Red600)" }}
        >
          {HEADING_TEXT}
        </h1>
        <p className="text-base text-font-subtle">{message}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          color="primary"
          variant="contained"
          size="lg"
          onClick={handleHomeClick}
        >
          {HOMEPAGE_BUTTON_TEXT}
        </Button>
        {showBackButton && (
          <Button
            color="neutral"
            variant="subtlest"
            size="lg"
            onClick={handleBackClick}
          >
            {BACK_BUTTON_TEXT}
          </Button>
        )}
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
  showBackButton?: boolean;
}
