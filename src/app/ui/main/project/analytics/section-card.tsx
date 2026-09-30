import cx from "classix";

export const SectionCard = ({
  title,
  subtitle,
  action,
  padding = "md",
  className,
  children,
}: Props): JSX.Element => (
  <div
    className={cx(
      "rounded-md bg-elevation-surface-raised shadow-xs",
      padding === "md" ? "p-5" : "p-4",
      className
    )}
  >
    {(title || action) && (
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          {title && (
            <p className="font-primary-bold text-sm text-font">{title}</p>
          )}
          {subtitle && (
            <p className="mt-0.5 font-primary-light text-2xs text-font-subtlest">
              {subtitle}
            </p>
          )}
        </div>
        {action}
      </div>
    )}
    {children}
  </div>
);

interface Props {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  padding?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
}
