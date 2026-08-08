// CSS variable for brand color used in the 404 badge
const BADGE_COLOR = "var(--color-font-brand)";
// CSS variable for the heading color - using Red700 for strong visual impact
const HEADING_COLOR = "var(--Red700)";

export const Error404 = ({
  message = "Looks like the wizard lost the spell and sent you here!",
  href,
  showGoBack = true,
}: Props): JSX.Element => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-subtlest px-4 py-8 text-center">
      {/* Illustration section with retro wizard robot */}
      <div className="mb-12 w-full max-w-sm">
        <img
          src="/images/error-404-wizard.svg"
          alt="Wizard robot with CRT monitor head and wizard hat"
          className="mx-auto h-auto w-full"
          width="400"
          height="400"
        />
      </div>

      {/* Large "404" badge in brand color */}
      <div
        className="mb-4 text-5xl font-black tracking-widest uppercase leading-none"
        style={{ color: BADGE_COLOR }}
      >
        404
      </div>

      {/* Main heading - Page Not Found */}
      <h1 className="mb-6 text-4xl font-bold" style={{ color: HEADING_COLOR }}>
        Page Not Found
      </h1>

      {/* Witty subtitle message - customizable via props */}
      <p className="mb-10 max-w-md text-lg text-font-subtle">
        {message}
      </p>

      {/* Primary call-to-action button - only shown when href is provided */}
      {href && (
        <div className="mb-8 w-full max-w-xs">
          <a
            href={href}
            className="inline-flex w-full items-center justify-center rounded px-8 py-2 text-lg font-medium bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed transition-colors"
          >
            Go to Dashboard
          </a>
        </div>
      )}

      {/* Secondary action - browser back button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        {showGoBack && (
          <button
            onClick={handleGoBack}
            className="text-sm font-medium text-font-subtle transition-colors hover:text-font hover:underline cursor-pointer"
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export interface Props {
  message?: string;
  href?: string;
  showGoBack?: boolean;
}
