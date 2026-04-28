import cx from "classix";

export const PageTitle = ({
  children,
  level = "h1",
  className,
}: PageTitleProps): JSX.Element => {
  const Component = level;

  const baseClasses = "font-primary-black text-2xl";

  return (
    <Component className={cx(baseClasses, className)}>
      {children}
    </Component>
  );
};

interface PageTitleProps {
  /**
   * The content to display as the title/heading
   */
  children: React.ReactNode;

  /**
   * Semantic heading level for accessibility (h1-h6)
   * @default "h1"
   */
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Additional className to apply for custom styling
   */
  className?: string;
}
