import cx from "classix";

export const SearchField = ({
  label,
  labelId,
  className,
  children,
}: Props): JSX.Element => (
  <div
    role="group"
    aria-labelledby={labelId}
    className={cx("flex min-w-0 flex-col gap-4", className)}
  >
    <span id={labelId} className="text-2xs text-font-subtlest">
      {label}
    </span>
    {children}
  </div>
);

interface Props {
  label: string;
  labelId: string;
  className?: string;
  children: React.ReactNode;
}
