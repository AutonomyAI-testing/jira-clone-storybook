export const Error404 = ({
  message,
  href,
  primaryHref,
  secondaryHref,
  primaryLabel,
  secondaryLabel,
  heading = "Page Not Found",
  subheading = "Oops! This page seems to have wandered off...",
  layout = "page",
}: Props) => {
  // Resolve primary button href with fallback chain: primaryHref > href > home
  const resolvedPrimaryHref = primaryHref ?? href ?? "/";
  // Resolve primary button label with fallback chain: primaryLabel > message > default
  const resolvedPrimaryLabel = primaryLabel ?? message ?? "Take me home";
  // Secondary button only renders if secondaryHref is provided (optional)
  const resolvedSecondaryHref = secondaryHref;
  const resolvedSecondaryLabel = secondaryLabel;

  // Wrapper classes vary by layout: full-screen page vs constrained embedded component
  const wrapperClasses =
    "flex flex-col items-center justify-center text-center px-6" +
    (layout === "page" ? " min-h-screen" : " max-w-[500px] mx-auto");

  return (
    <div className={wrapperClasses}>
      <img
        src="/images/error-404.svg"
        alt="A steampunk wizard robot searching for the page"
        className="h-[420px] w-auto mb-4"
      />

      <div className="text-[120px] font-black leading-none mb-2" style={{ color: "var(--Green500)" }}>
        404
      </div>

      <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--Green500)" }}>{heading}</h1>

      <p className="text-base mb-8 max-w-[360px]" style={{ color: "var(--Green500)" }}>{subheading}</p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href={resolvedPrimaryHref}
          className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-semibold bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed transition-colors"
        >
          {resolvedPrimaryLabel}
        </a>

        {resolvedSecondaryHref && (
          <a
            href={resolvedSecondaryHref}
            className="inline-flex items-center px-5 py-2.5 rounded-md text-sm font-semibold bg-background-neutral text-font hover:bg-background-neutral-hovered active:bg-background-neutral-pressed transition-colors"
          >
            {resolvedSecondaryLabel}
          </a>
        )}
      </div>
    </div>
  );
};

interface Props {
  /** Legacy: main error message (used as primaryLabel if primaryLabel not set) */
  message?: string;
  /** Legacy: primary link destination (used as primaryHref if primaryHref not set) */
  href?: string;
  /** Primary CTA destination (e.g., "/" or "/projects") */
  primaryHref?: string;
  /** Secondary CTA destination (if not provided, secondary button won't render) */
  secondaryHref?: string;
  /** Primary button label (default: message or "Take me home") */
  primaryLabel?: string;
  /** Secondary button label (shown only if secondaryHref is provided) */
  secondaryLabel?: string;
  /** Main heading text (default: "Page Not Found") */
  heading?: string;
  /** Friendly description below heading (default: "Oops! This page seems to have wandered off...") */
  subheading?: string;
  /** Rendering context: "page" for full-screen, "embedded" for constrained width */
  layout?: "page" | "embedded";
}
