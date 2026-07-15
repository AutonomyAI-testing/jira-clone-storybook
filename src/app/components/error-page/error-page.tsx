import cx from "classix";

type Action = {
  label: string;
  href: string;
};

export interface ErrorPageProps {
  /** Error code shown large — "404", "500", or any string */
  errorCode?: string;
  /** Bold title line under the error code */
  title?: string;
  /** Descriptive body text */
  description?: string;
  /** Primary CTA button */
  primaryAction?: Action;
  /** Optional secondary link */
  secondaryAction?: Action;
  /** Additional class names for the outer wrapper */
  className?: string;
}

const ERROR_DEFAULTS: Record<string, Omit<ErrorPageProps, "errorCode">> = {
  "404": {
    title: "Page not found.",
    description:
      "Looks like this page took an unplanned detour. The URL may have changed, or it never existed.",
    primaryAction: { label: "Back to home", href: "/" },
  },
  "500": {
    title: "Something went wrong.",
    description:
      "A critical error occurred on our end. We've been notified — try again in a moment.",
    primaryAction: { label: "Back to home", href: "/" },
    secondaryAction: {
      label: "Contact support",
      href: "mailto:support@example.com",
    },
  },
};

function getIllustrationSrc(errorCode?: string): string {
  if (errorCode === "404") return "/images/error-404.svg";
  if (errorCode === "500") return "/images/error-500.svg";
  return "/images/error-500.svg";
}

export const ErrorPage = ({
  errorCode,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: ErrorPageProps) => {
  const defaults = errorCode ? ERROR_DEFAULTS[errorCode] : undefined;

  const resolvedTitle = title ?? defaults?.title ?? "An error occurred.";
  const resolvedDescription =
    description ??
    defaults?.description ??
    "Something went wrong. Please try again.";
  const resolvedPrimaryAction =
    primaryAction ?? defaults?.primaryAction ?? { label: "Go home", href: "/" };
  const resolvedSecondaryAction =
    secondaryAction ?? defaults?.secondaryAction;

  const illustrationSrc = getIllustrationSrc(errorCode);

  return (
    <div
      className={cx(
        "error-page-root",
        "flex h-full min-h-screen w-full flex-col items-center justify-center",
        "px-6 py-16",
        className
      )}
      style={{
        background: "#121211",
        backgroundImage:
          "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.38), transparent 60%), radial-gradient(55% 55% at 90% 100%, rgba(242,87,48,.20), transparent 62%)",
        fontFamily: "'Poppins', 'CircularStdMedium', sans-serif",
      }}
    >
      {/* Illustration */}
      <div className="mb-8 flex items-center justify-center">
        <img
          src={illustrationSrc}
          alt=""
          aria-hidden="true"
          className="h-[280px] w-auto max-w-full sm:h-[350px]"
        />
      </div>

      {/* Text group */}
      <div className="w-full max-w-[520px] text-center">
        {/* Error code eyebrow */}
        {errorCode && (
          <p
            className="mb-3 font-primary-black"
            style={{
              fontFamily: "'Poppins', 'CircularStdBlack', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 8vw, 80px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              background: "linear-gradient(110deg, #F25730 0%, #FFC1A0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {errorCode}
          </p>
        )}

        {/* Title */}
        <h1
          className="mb-4"
          style={{
            fontFamily: "'Poppins', 'CircularStdBold', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(22px, 3.5vw, 32px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#EF4444",
          }}
        >
          {resolvedTitle}
        </h1>

        {/* Description */}
        <p
          className="mb-10"
          style={{
            fontFamily: "'Poppins', 'CircularStdMedium', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.6,
            color: "#B4B1AC",
          }}
        >
          {resolvedDescription}
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Primary CTA */}
          <a
            href={resolvedPrimaryAction.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "13px 28px",
              borderRadius: "8px",
              background: "#F25730",
              color: "#fff",
              fontFamily: "'Poppins', 'CircularStdBold', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: 1,
              textDecoration: "none",
              boxShadow:
                "0 0 0 1px rgba(242,87,48,.55), 0 6px 28px rgba(242,87,48,.48), 0 0 0 4px rgba(242,87,48,.10)",
              transition: "background 0.15s ease-out, transform 0.12s ease-out",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#FC816F";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#F25730";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            {resolvedPrimaryAction.label}
          </a>

          {/* Secondary link */}
          {resolvedSecondaryAction && (
            <a
              href={resolvedSecondaryAction.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 20px",
                borderRadius: "8px",
                background: "#212120",
                border: "1px solid #3C3B39",
                color: "#B4B1AC",
                fontFamily: "'Poppins', 'CircularStdMedium', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: 1,
                textDecoration: "none",
                transition:
                  "border-color 0.18s ease-out, background 0.18s ease-out, color 0.18s ease-out",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "#7C7A75";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#2A2A28";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "#3C3B39";
                (e.currentTarget as HTMLAnchorElement).style.color = "#B4B1AC";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#212120";
              }}
            >
              {resolvedSecondaryAction.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
