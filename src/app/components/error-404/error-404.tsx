import cx from "classix";

// Animation configuration
const ANIMATION_CONFIG = {
  fillMode: "both" as const,
  imageFadeIn: { delay: "0ms" },
  badgeSlideDown: { delay: "100ms" },
  headingSlideDown: { delay: "200ms" },
  descriptionSlideDown: { delay: "300ms" },
  buttonsSlideDownNew: { delay: "400ms" },
  buttonsSlideDownLegacy: { delay: "100ms" },
};

// Default text content
const DEFAULT_CONTENT = {
  heading: "Oops! You've been lost in the digital realm",
  description:
    "The page you're looking for seems to have wandered off with our magical robot friend. Don't worry, we'll help you find your way back!",
  primaryHref: "/",
  primaryLabel: "Go Home",
  secondaryHref: "/projects",
  secondaryLabel: "Go to Projects",
};

export const Error404 = ({
  heading = DEFAULT_CONTENT.heading,
  description = DEFAULT_CONTENT.description,
  primaryHref = DEFAULT_CONTENT.primaryHref,
  primaryLabel = DEFAULT_CONTENT.primaryLabel,
  secondaryHref = DEFAULT_CONTENT.secondaryHref,
  secondaryLabel = DEFAULT_CONTENT.secondaryLabel,
  message,
  href,
}: Props): JSX.Element => {
  // Support legacy mode: if message prop is provided, use it as heading with primary href fallback
  const isLegacyMode = !!message;
  const displayHeading = isLegacyMode ? message : heading;
  const resolvedPrimaryHref = href || primaryHref;

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-12">
      {/* Hero image with fade-in animation */}
      <div
        className="mb-8 animate-fade-in"
        style={{ animationFillMode: ANIMATION_CONFIG.fillMode }}
      >
        <img
          src="/images/error-wizard-robot.svg"
          alt="Wizard Robot - 404 Not Found"
          className="mx-auto h-[320px] w-auto select-none"
        />
      </div>

      {/* 404 badge */}
      <p
        className={cx(
          "mb-3 animate-slide-down font-primary-black text-6xl",
          "text-font-subtlest"
        )}
        style={{
          animationDelay: ANIMATION_CONFIG.badgeSlideDown.delay,
          animationFillMode: ANIMATION_CONFIG.fillMode,
        }}
      >
        404
      </p>

      {/* Heading */}
      <h1
        className="mb-4 max-w-md animate-slide-down text-center font-primary-black text-2xl"
        style={{
          animationDelay: ANIMATION_CONFIG.headingSlideDown.delay,
          animationFillMode: ANIMATION_CONFIG.fillMode,
          color: "var(--Red500)",
        }}
      >
        {displayHeading}
      </h1>

      {/* Description (only show in new mode) */}
      {!isLegacyMode && (
        <p
          className="mb-8 max-w-sm animate-slide-down text-center font-primary text-base text-font-subtle"
          style={{
            animationDelay: ANIMATION_CONFIG.descriptionSlideDown.delay,
            animationFillMode: ANIMATION_CONFIG.fillMode,
          }}
        >
          {description}
        </p>
      )}

      {/* CTA Buttons */}
      <div
        className="flex animate-slide-down flex-col gap-3 sm:flex-row"
        style={{
          animationDelay: isLegacyMode
            ? ANIMATION_CONFIG.buttonsSlideDownLegacy.delay
            : ANIMATION_CONFIG.buttonsSlideDownNew.delay,
          animationFillMode: ANIMATION_CONFIG.fillMode,
        }}
      >
        <a
          href={resolvedPrimaryHref}
          className="inline-flex items-center justify-center rounded bg-background-brand-bold px-8 py-2 font-primary-bold text-lg text-font-inverse transition-colors hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          {primaryLabel}
        </a>
        {!isLegacyMode && secondaryHref && (
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded bg-background-neutral px-8 py-2 font-primary text-lg text-font transition-colors hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
          >
            {secondaryLabel}
          </a>
        )}
      </div>
    </div>
  );
};

interface Props {
  // New API (recommended): Full-featured 404 page with staggered animations
  heading?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;

  // Legacy API (backwards compat): Used in root.tsx CatchBoundary for error handling.
  // When message is provided, description and secondary button are hidden.
  message?: string;
  href?: string;
}
