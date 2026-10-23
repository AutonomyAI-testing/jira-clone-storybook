import { useRef } from "react";
import cx from "classix";

export const SegmentedTabs = <T extends string>({
  options,
  value,
  onValueChange,
  ariaLabel,
  disabled = false,
  className,
}: Props<T>): JSX.Element => {
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectByIndex = (index: number): void => {
    const next = (index + options.length) % options.length;
    const option = options[next];

    if (!option) return;

    onValueChange(option.value);
    itemRefs.current[next]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ): void => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectByIndex(index + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectByIndex(index - 1);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cx(
        "flex items-center rounded-full bg-background-neutral p-2",
        className
      )}
    >
      {options.map((option, index) => {
        const isSelected = option.value === value;

        return (
          <button
            key={option.value}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onValueChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cx(
              "flex h-[38px] cursor-pointer items-center justify-center",
              "rounded-full px-4 font-primary-bold text-sm transition-colors duration-100 ease-in-out",
              isSelected
                ? "bg-background-neutral-bold text-font-inverse"
                : "text-font-subtlest hover:bg-background-neutral-hovered active:bg-background-neutral-pressed",
              disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

interface Props<T extends string> {
  options: Array<SegmentedTabOption<T>>;
  value: T;
  onValueChange: (value: T) => void;
  ariaLabel: string;
  disabled?: boolean;
  className?: string;
}

export interface SegmentedTabOption<T extends string> {
  value: T;
  label: string;
}
