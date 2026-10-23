import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "classix";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import {
  FilterField,
  filterFieldValueClass,
} from "@app/components/filter-field";

/**
 * A labelled filter control that opens a panel of options. Used twice on the
 * search filter bar: single-select for the property type, multi-select for the
 * space types. Radix owns the open/close, the keyboard list navigation and
 * returning focus to the trigger.
 */
export const FilterSelect = (props: Props): JSX.Element => {
  const {
    label,
    options,
    placeholder = "Any",
    disabled = false,
    className,
  } = props;

  const selected = props.multiple
    ? props.value
    : props.value
    ? [props.value]
    : [];

  const displayValue = selected.length > 0 ? selected.join(", ") : placeholder;

  const handleSelect = (option: string): void => {
    if (props.multiple) {
      props.onValueChange(
        props.value.includes(option)
          ? props.value.filter((item) => item !== option)
          : [...props.value, option]
      );

      return;
    }

    props.onValueChange(option);
  };

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        type="button"
        disabled={disabled}
        aria-label={`${label}: ${displayValue}`}
        className={cx(
          "group flex w-full cursor-pointer items-center gap-2 rounded text-left",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
      >
        <FilterField label={label} className="flex-1">
          <span className={filterFieldValueClass}>{displayValue}</span>
        </FilterField>
        <RiArrowDownSLine size={16} className="shrink-0 text-icon" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={12}
          className={cx(
            "z-50 flex min-w-[180px] flex-col gap-0.5 rounded-lg p-2",
            "bg-elevation-surface-overlay shadow-md"
          )}
        >
          {options.map((option) => {
            const isSelected = selected.includes(option);

            const row = (
              <>
                <span className="flex h-4 w-4 shrink-0 items-center justify-center text-icon-selected">
                  {isSelected && <BsCheckLg size={12} />}
                </span>
                <span className="truncate">{option}</span>
              </>
            );

            if (props.multiple) {
              return (
                <DropdownMenu.CheckboxItem
                  key={option}
                  checked={isSelected}
                  onCheckedChange={() => handleSelect(option)}
                  onSelect={(event) => event.preventDefault()}
                  className={itemClass}
                >
                  {row}
                </DropdownMenu.CheckboxItem>
              );
            }

            return (
              <DropdownMenu.Item
                key={option}
                onSelect={() => handleSelect(option)}
                className={itemClass}
              >
                {row}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const itemClass = cx(
  "flex h-[38px] cursor-pointer select-none items-center gap-2 rounded p-2",
  "font-primary text-sm text-font outline-none",
  "data-[highlighted]:bg-background-neutral"
);

type Props = BaseProps & (SingleProps | MultipleProps);

interface BaseProps {
  label: string;
  options: string[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

interface SingleProps {
  multiple?: false;
  value: string;
  onValueChange: (value: string) => void;
}

interface MultipleProps {
  multiple: true;
  value: string[];
  onValueChange: (value: string[]) => void;
}
