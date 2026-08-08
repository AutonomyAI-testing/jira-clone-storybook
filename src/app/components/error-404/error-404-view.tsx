export const Error404View = (): JSX.Element => {
  // Provides a fallback navigation option when users land on a 404 page
  // Using window.history.back() allows users to return to their previous page
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface">
      {/* Content wrapper - constrains width and centers all content */}
      <div className="flex max-w-xs flex-col items-center text-center">
        {/* Character */}
        <img
          src="/images/error-404.svg"
          alt="Wizard robot - page not found"
          className="mb-6 h-auto w-[320px] animate-float select-none drop-shadow-md"
        />

        {/* Error Badge */}
        <div className="mb-3 rounded-full bg-background-brand-subtlest px-3 py-1 font-primary-bold text-xs uppercase tracking-widest text-font-brand">
          404
        </div>

        {/* Main heading with red color to indicate error severity */}
        <h1
          className="mb-2 text-center font-primary-bold text-2xl"
          style={{ color: "var(--Red600)" }}
        >
          Oops! Lost in the void
        </h1>

        {/* Sub-copy */}
        <p className="mb-8 max-w-xs text-center text-sm text-font-subtle">
          This page must have wandered off wearing that wizard hat.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {/* Go Home Button */}
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-background-brand-bold px-5 py-2 font-primary-bold text-sm text-font-inverse transition-colors hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          >
            Go home
          </a>

          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 rounded-md bg-background-neutral px-5 py-2 font-primary text-sm text-font transition-colors hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};
