import { useSubmit } from "@remix-run/react";
import { HiFlag } from "react-icons/hi";
import { BsClockHistory } from "react-icons/bs";
import cx from "classix";
import { DEFAULT_SORT } from "@domain/filter";
import { useSortBy } from "@app/hooks/useSortBy";

export const SelectSort = (): JSX.Element => {
  const submit = useSubmit();
  const sortBy = useSortBy() || DEFAULT_SORT;

  const handleSort = (value: string): void => {
    submit({ sortBy: value });
  };

  return (
    <div className="flex items-center gap-1">
      <SortButton
        label="Sort by date"
        icon={<BsClockHistory size={14} />}
        isActive={sortBy === "date"}
        onClick={() => handleSort("date")}
        aria-label="Sort issues by date"
      />
      <SortButton
        label="Sort by priority"
        icon={<HiFlag size={14} />}
        isActive={sortBy === "priority"}
        onClick={() => handleSort("priority")}
        aria-label="Sort issues by priority"
      />
    </div>
  );
};

interface SortButtonProps {
  label: string;
  icon: JSX.Element;
  isActive: boolean;
  onClick: () => void;
  "aria-label": string;
}

const SortButton = ({
  label,
  icon,
  isActive,
  onClick,
  "aria-label": ariaLabel,
}: SortButtonProps): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    aria-pressed={isActive}
    className={cx(
      "flex cursor-pointer items-center gap-1.5 rounded border-none px-3 py-1.5 text-xs duration-100",
      isActive
        ? "bg-background-brand-bold text-font-inverse"
        : "bg-background-brand-subtlest text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed"
    )}
  >
    {icon}
    {label}
  </button>
);
