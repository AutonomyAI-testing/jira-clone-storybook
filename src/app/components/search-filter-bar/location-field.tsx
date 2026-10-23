import { useEffect, useId, useRef, useState } from "react";
import cx from "classix";
import {
  FilterField,
  filterFieldValueClass,
} from "@app/components/filter-field";

const MAX_SUGGESTIONS = 6;

/**
 * The location filter. The design gives it no chevron where the two pickers
 * both have one, so it is a typed field with suggestions rather than a picker.
 */
export const LocationField = ({
  label,
  value,
  options,
  onValueChange,
  disabled = false,
  className,
}: Props): JSX.Element => {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const query = value.trim().toLowerCase();
  const matches = options
    .filter((option) => option.toLowerCase().includes(query))
    .slice(0, MAX_SUGGESTIONS);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent): void => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen]);

  const select = (option: string): void => {
    onValueChange(option);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onValueChange(event.target.value);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();

      if (!isOpen) {
        setIsOpen(true);
        return;
      }

      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex(
        Math.min(Math.max(activeIndex + step, 0), matches.length - 1)
      );
      return;
    }

    if (event.key === "Enter" && isOpen && activeIndex >= 0) {
      event.preventDefault();
      const option = matches[activeIndex];
      if (option) select(option);
      return;
    }

    if (event.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const showSuggestions = isOpen && matches.length > 0 && !disabled;

  return (
    <div ref={rootRef} className={cx("relative w-full", className)}>
      <FilterField label={label}>
        <input
          type="text"
          role="combobox"
          autoComplete="off"
          aria-expanded={showSuggestions}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined
          }
          value={value}
          disabled={disabled}
          placeholder="Any"
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className={cx(
            filterFieldValueClass,
            "w-full border-none bg-transparent p-0",
            "placeholder:font-primary-light placeholder:text-font-subtlest",
            "disabled:cursor-not-allowed disabled:opacity-60"
          )}
        />
      </FilterField>

      {showSuggestions && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className={cx(
            "absolute left-0 top-full z-50 mt-3 flex min-w-[180px] flex-col gap-0.5",
            "rounded-lg bg-elevation-surface-overlay p-2 shadow-md"
          )}
        >
          {matches.map((option, index) => (
            <li
              key={option}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={option === value}
              // mousedown fires before blur, so the input keeps focus until the
              // suggestion has been applied
              onMouseDown={(event) => {
                event.preventDefault();
                select(option);
              }}
              className={cx(
                "flex h-[38px] cursor-pointer select-none items-center gap-2 rounded p-2",
                "font-primary text-sm text-font",
                index === activeIndex && "bg-background-neutral"
              )}
            >
              <span className="truncate">{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface Props {
  label: string;
  value: string;
  options: string[];
  onValueChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}
