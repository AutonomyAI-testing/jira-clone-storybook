import { Button } from "./button";

// Error state color used for headings and titles
const ERROR_COLOR = "var(--Red500)";

export const ErrorBase = ({
  variant,
  message,
  href,
  heading,
  title,
  description,
  buttonLabel,
  buttonHref,
  imageSrc,
  imageAlt,
}: Props) => {
  const imgPath = imageSrc || `/images/error-${variant}.svg`;
  const altText = imageAlt || "Error";

  // Backward compatibility: support legacy API where variant determines heading if not explicitly provided
  const displayHeading = heading || (variant === "404" ? "404" : "500");

  // Backward compatibility: support legacy API using message prop for title when title is not provided
  const displayTitle = title || message;
  const displayDescription = description;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-8">
      <div className="max-w-[500px] text-center">
        {/* Illustration */}
        <img
          src={imgPath}
          alt={altText}
          className="mx-auto mb-8 h-[320px] w-auto"
        />

        {/* Heading - the error code (e.g., "404") */}
        {heading && (
          <h1
            className="mb-3 font-primary-black text-8xl"
            style={{ color: ERROR_COLOR }}
          >
            {displayHeading}
          </h1>
        )}

        {/* Title - user-facing error message */}
        <h2
          className="mb-4 font-primary-bold text-2xl"
          style={{ color: ERROR_COLOR }}
        >
          {displayTitle}
        </h2>

        {/* Description - additional context */}
        {displayDescription && (
          <p className="mb-8 text-base text-font-subtle">
            {displayDescription}
          </p>
        )}

        {/* Primary action: button CTA or fallback to legacy text link for backward compatibility */}
        {buttonHref && buttonLabel ? (
          <a href={buttonHref}>
            <Button
              color="primary"
              variant="contained"
              size="lg"
              className="inline-flex"
            >
              {buttonLabel}
            </Button>
          </a>
        ) : href ? (
          // Legacy mode: render as simple text link when button properties not provided
          <a
            href={href}
            className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
          >
            {message}
          </a>
        ) : null}
      </div>
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message?: string;
  href?: string;
  heading?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}
