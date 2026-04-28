import cx from "classix";

export const PageTitle = ({
  children,
  level = "h1",
  className,
}: PageTitleProps): JSX.Element => {
  // Dynamic heading level for semantic HTML — allows using the correct heading hierarchy
  // without duplicating component logic across h1-h6 variants
  const Component = level;

  // Base typography styles applied to all heading levels
  const baseClasses = "font-primary-black text-2xl";

  return (
    <Component className={cx(baseClasses, className)}>{children}</Component>
  );
};

interface PageTitleProps {
  /**
   * The content to display as the title/heading.
   */
  children: React.ReactNode;

  /**
   * Semantic heading level (h1-h6) for correct document outline.
   * Choose based on page structure, not visual size — PageTitle always renders
   * with the same typography (font-primary-black text-2xl) regardless of level.
   * @default "h1"
   */
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Additional className to apply for custom styling.
   */
  className?: string;
}
