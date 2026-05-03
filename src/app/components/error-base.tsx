import { Button } from "@app/components/button";

export const ErrorBase = ({
  variant,
  message,
  href,
  title,
  subtitle,
  imagePath,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonOnClick,
}: Props) => {
  const imgPath = imagePath || `/images/error-${variant}.svg`;
  // Enhanced layout is triggered when new-style props (title/subtitle/buttons) are provided
  const isEnhancedLayout =
    title || subtitle || primaryButtonText || secondaryButtonText;
  const is404 = variant === "404";

  if (isEnhancedLayout) {
    return (
      <div
        // 404 pages get a warm tan background for visual distinction and thematic consistency
        className={`${
          is404 ? "min-h-screen bg-[#F5E6D3]" : "bg-background"
        } flex items-center justify-center px-4 py-8`}
      >
        <div className="max-w-[500px] text-center">
          <img
            src={imgPath}
            alt={title || "Error"}
            className="mx-auto mb-8 h-[380px] w-auto"
          />
          {title && (
            <h1 className="mb-3 font-primary-bold text-4xl text-font-danger">
              {title}
            </h1>
          )}
          {subtitle && <p className="mb-8 text-lg text-font">{subtitle}</p>}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            {primaryButtonText && primaryButtonHref ? (
              <a
                href={primaryButtonHref}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded bg-background-brand-bold px-8 py-2 text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed sm:flex-none"
              >
                {primaryButtonText}
              </a>
            ) : (
              primaryButtonText && (
                <Button
                  color="primary"
                  size="lg"
                  className="flex-1 sm:flex-none"
                  onClick={secondaryButtonOnClick}
                >
                  {primaryButtonText}
                </Button>
              )
            )}
            {secondaryButtonText && (
              <Button
                variant="text"
                color="neutral"
                size="lg"
                className="flex-1 sm:flex-none"
                onClick={secondaryButtonOnClick}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Legacy layout for backward compatibility
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
  title?: string;
  subtitle?: string;
  imagePath?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonOnClick?: () => void;
}
