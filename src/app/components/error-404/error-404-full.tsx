import cx from "classix";

// Animation delay increments for staggered entrance effect
const ANIMATION_DELAYS = {
  IMAGE: "0.1s",
  HEADING: "0.15s",
  SUBHEADING: "0.2s",
  BUTTON: "0.25s",
  HINT: "0.3s",
} as const;

export const Error404Full = (): JSX.Element => {
  return (
    <div
      className={cx(
        "flex min-h-screen flex-col items-center justify-center",
        "gap-4 px-4 py-8 md:gap-6 md:px-6",
        "bg-elevation-surface",
        "text-center"
      )}
    >
      {/* Wizard robot illustration with hover scale effect */}
      <div
        className={cx(
          "motion-safe:animate-slide-up",
          "w-72 h-auto md:w-96",
          "hover:scale-105 transition-transform duration-300"
        )}
      >
        <img
          src="/images/error-404-wizard.svg"
          alt="Lost wizard robot illustration"
          className="w-full h-auto drop-shadow-lg"
        />
      </div>

      {/* Page not found heading with staggered animation */}
      <h1
        className={cx(
          "motion-safe:animate-slide-up text-8xl md:text-9xl",
          "font-primary-black text-font-brand",
          "drop-shadow-sm",
          "mt-2"
        )}
        style={{ animationDelay: ANIMATION_DELAYS.IMAGE }}
      >
        404
      </h1>

      {/* Witty error message subheading */}
      <h2
        className={cx(
          "motion-safe:animate-slide-up text-2xl md:text-3xl",
          "font-primary-bold text-font",
          "mt-2"
        )}
        style={{ animationDelay: ANIMATION_DELAYS.HEADING }}
      >
        Oops! You've wandered off the map
      </h2>

      {/* Explanation text with reassurance and context */}
      <p
        className={cx(
          "motion-safe:animate-slide-up text-base md:text-lg",
          "text-font-subtle text-center",
          "max-w-md leading-relaxed",
          "my-3 md:my-4",
          "line-clamp-4"
        )}
        style={{ animationDelay: ANIMATION_DELAYS.SUBHEADING }}
      >
        Looks like this page doesn't exist (anymore). The wizard robot couldn't
        find what you're looking for. Don't worry, let's get you back on track!
      </p>

      {/* Primary action to return home */}
      <div
        className="motion-safe:animate-slide-up mt-6 md:mt-8"
        style={{ animationDelay: ANIMATION_DELAYS.BUTTON }}
      >
        <a
          href="/"
          className={cx(
            "inline-flex items-center justify-center",
            "gap-2 rounded-md",
            "px-6 py-3",
            "bg-background-brand-bold text-font-inverse",
            "font-primary-bold",
            "hover:bg-background-brand-bold-hovered",
            "active:bg-background-brand-bold-pressed",
            "transition-colors duration-200",
            "no-underline"
          )}
        >
          Return to Safety
        </a>
      </div>

      {/* Alternative action hint for users who prefer browser controls */}
      <p
        className={cx(
          "motion-safe:animate-slide-up text-sm",
          "text-font-subtle",
          "mt-4 md:mt-6"
        )}
        style={{ animationDelay: ANIMATION_DELAYS.HINT }}
      >
        (or use your browser's back button)
      </p>
    </div>
  );
};
