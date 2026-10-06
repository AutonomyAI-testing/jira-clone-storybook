import { useRef } from "react";
import cx from "classix";
import type { BillingPeriod } from "./types";

export const PillTabGroup = ({
  value,
  options,
  onChange,
  ariaLabel,
  disabled,
  className,
}: Props): JSX.Element => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (disabled) return;

    const currentIndex = options.findIndex((option) => option.value === value);
    const lastIndex = options.length - 1;
    let nextIndex: number | null = null;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
    }

    if (nextIndex === null) return;

    e.preventDefault();
    onChange(options[nextIndex].value);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className={cx(
        "flex shrink-0 items-center rounded-full bg-background-neutral p-2",
        className
      )}
    >
      {options.map((option, index) => {
        const isSelected = option.value === value;

        return (
          <button
            key={option.value}
            ref={(node): void => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            disabled={disabled}
            onClick={(): void => onChange(option.value)}
            className={cx(
              "cursor-pointer rounded-full px-4 py-2 text-sm font-medium leading-[22px] transition-colors disabled:cursor-not-allowed disabled:opacity-40",
              isSelected
                ? "bg-background-neutral-boldest text-font-inverse"
                : "text-font-subtlest hover:text-font-strong"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

interface Props {
  value: BillingPeriod;
  options: { value: BillingPeriod; label: string }[];
  onChange: (value: BillingPeriod) => void;
  ariaLabel: string;
  disabled?: boolean;
  className?: string;
}
