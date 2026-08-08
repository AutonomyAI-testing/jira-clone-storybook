import { useNavigate } from "@remix-run/react";

interface Props {
  // Legacy props (kept for backward compatibility with error message-based flow)
  message?: string;
  href?: string;
  // New enhanced props (modern UI with anime character theme)
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
}

// Color constants used throughout the component
const COLORS = {
  background: "#FEFAF3", // Warm cream background
  badgeBg: "#F5A623", // Orange accent
  badgeText: "#D4870A", // Dark orange text
  darkText: "#1a1a2e", // Deep navy
  opacities: {
    badgeBg20: "20%",
    borderColor20: "33", // hex opacity representation
    hoverBg10: "1a", // hex opacity representation
  },
} as const;

const DEFAULT_PROPS = {
  title: "Page not found",
  subtitle:
    "Looks like this page got lost in the void. Don't worry, let's get you back on track.",
  primaryText: "Go home",
  primaryHref: "/",
  secondaryText: "Go back",
} as const;

/**
 * ErrorBadge - Displays the "Error 404" label with styled background
 */
function ErrorBadge() {
  return (
    <div
      className="flex items-center gap-2 rounded-full px-4 py-1.5"
      style={{
        backgroundColor: `${COLORS.badgeBg}${COLORS.opacities.badgeBg20}`,
      }}
    >
      <span
        className="text-sm font-semibold uppercase tracking-widest"
        style={{ color: COLORS.badgeText }}
      >
        Error 404
      </span>
    </div>
  );
}

/**
 * SecondaryButton - "Go back" button with hover state styling
 * Uses navigate(-1) to go back in browser history
 */
function SecondaryButton({
  text,
  onGoBack,
}: {
  text: string;
  onGoBack: () => void;
}) {
  return (
    <button
      onClick={onGoBack}
      style={{
        borderColor: `${COLORS.darkText}${COLORS.opacities.borderColor20}`,
        color: COLORS.darkText,
      }}
      className="rounded-lg border bg-white px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-opacity-10 active:bg-opacity-20"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${COLORS.badgeBg}${COLORS.opacities.hoverBg10}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "white";
      }}
    >
      {text}
    </button>
  );
}

export const Error404 = ({
  // Legacy
  message,
  href,
  // Enhanced
  title = DEFAULT_PROPS.title,
  subtitle = DEFAULT_PROPS.subtitle,
  primaryText = DEFAULT_PROPS.primaryText,
  primaryHref = DEFAULT_PROPS.primaryHref,
  secondaryText = DEFAULT_PROPS.secondaryText,
}: Props) => {
  const navigate = useNavigate();

  // Backward compatibility: render legacy message-based UI if 'message' prop is provided.
  // This allows existing code to continue working while migration to new UI proceeds.
  if (message !== undefined) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <img
          src="/images/error-404.svg"
          alt="404 Not Found"
          className="mx-auto mb-2 h-[280px] w-auto"
        />
        {href ? (
          <a
            href={href}
            className="text-lg text-link hover:underline active:text-link-pressed"
          >
            {message}
          </a>
        ) : (
          <span className="text-lg text-font">{message}</span>
        )}
      </div>
    );
  }

  // Modern enhanced 404 page with anime character theme, structured information, and clear actions
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Character illustration with shadow for visual depth */}
        <img
          src="/images/error-404.svg"
          alt="404 character"
          className="h-[300px] w-auto drop-shadow-lg"
        />

        {/* Badge labels the error clearly and creates visual hierarchy */}
        <ErrorBadge />

        {/* Primary heading for emphasis */}
        <h1
          className="font-primary-black text-4xl tracking-tight"
          style={{ color: COLORS.darkText }}
        >
          {title}
        </h1>

        {/* Explanatory text with empathetic tone */}
        <p className="max-w-sm text-base text-font-subtle">{subtitle}</p>

        {/* Action buttons: primary (navigate home) and secondary (go back) */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primaryHref}
            style={{ backgroundColor: COLORS.darkText }}
            className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80 active:opacity-60"
          >
            {primaryText}
          </a>
          <SecondaryButton text={secondaryText} onGoBack={() => navigate(-1)} />
        </div>
      </div>
    </div>
  );
};
