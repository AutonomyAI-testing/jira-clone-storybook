import cx from "classix";

export const FilterChip = ({
  icon,
  label,
  active,
}: Props): JSX.Element => (
  <span
    className={cx(
      "flex h-8 items-center gap-1.5 rounded border px-3 font-primary-light text-xs text-font",
      active
        ? "border-border-selected bg-background-neutral"
        : "border-transparent bg-background-neutral"
    )}
  >
    {icon}
    {label}
  </span>
);

interface Props {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}
