import { ErrorBase } from "../error-base";

/**
 * Error404 component wraps ErrorBase to provide a 404-specific error page.
 * Supports both legacy (message/href) and rich content (headline/subtext/ctaLabel/ctaHref) modes.
 * When headline, ctaLabel, and ctaHref are all provided, rich content mode activates.
 */
export const Error404 = ({
  message,
  href,
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  showFullHeight = false,
  showAnimation = true,
}: Props) => {
  // Detect rich content mode: when all three props are present, legacy props are ignored
  const isRichContent = headline && ctaLabel && ctaHref;

  return (
    <ErrorBase
      variant="404"
      message={isRichContent ? undefined : message}
      href={isRichContent ? undefined : href}
      headline={headline}
      subtext={subtext}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      showFullHeight={showFullHeight}
      showAnimation={showAnimation}
    />
  );
};

export interface Props {
  message?: string;
  href?: string;
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showFullHeight?: boolean;
  showAnimation?: boolean;
}
