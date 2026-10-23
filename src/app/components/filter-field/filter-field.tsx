import cx from "classix";

/**
 * The two-line field used across the search filter bar: a small muted label
 * above the control's current value.
 */
export const FilterField = ({
  label,
  children,
  className,
}: Props): JSX.Element => (
  <div className={cx("flex min-w-0 flex-col gap-3", className)}>
    <span className="font-primary-light text-2xs leading-none text-font-subtlest">
      {label}
    </span>
    {children}
  </div>
);

/** Shared styling for a field's value line, so every control reads the same. */
export const filterFieldValueClass =
  "truncate font-primary text-base leading-none text-font";

interface Props {
  label: string;
  children: React.ReactNode;
  className?: string;
}
