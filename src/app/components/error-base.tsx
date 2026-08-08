export const ErrorBase = ({
  variant,
  message,
  href,
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  showFullHeight = false,
  showAnimation = false,
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;
  const isRichContent = headline && ctaLabel && ctaHref;

  if (isRichContent) {
    // Animation style for the illustration — creates subtle floating motion
    const illustrationStyle = showAnimation
      ? { animation: "float 4s ease-in-out infinite" }
      : undefined;

    return (
      <div
        className={
          showFullHeight ? "flex min-h-screen items-center justify-center" : ""
        }
      >
        <div className="max-w-[600px] px-4 text-center sm:px-8">
          {/* Illustration wrapper with optional animation */}
          <div className="mb-8" style={illustrationStyle}>
            <img
              src={imgPath}
              alt="Error illustration"
              className="mx-auto h-[350px] w-auto"
            />
          </div>

          {/* Headline in error red color */}
          <h1
            className="mb-4 font-primary-bold text-5xl"
            style={{ color: "var(--Red700)" }}
          >
            {headline}
          </h1>
          {/* Optional subtext for additional context */}
          {subtext && (
            <p className="mb-8 text-lg text-font-subtle">{subtext}</p>
          )}
          {/* CTA button with brand colors and hover/active states */}
          <a
            href={ctaHref}
            className="font-primary-medium inline-block rounded bg-background-brand-bold px-8 py-3 text-lg text-font-inverse transition-colors hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    );
  }

  // Legacy simple layout for backward compatibility
  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message?: string;
  href?: string;
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showFullHeight?: boolean;
  showAnimation?: boolean;
}
