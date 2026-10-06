import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "classix";
import { RiCheckLine } from "react-icons/ri";

export const FilterMenu = (props: Props): JSX.Element => {
  const { labelId, options, placeholder, disabled, className } = props;
  const selectedValues = props.multiple
    ? props.value
    : props.value
    ? [props.value]
    : [];
  const triggerLabel = selectedValues.length
    ? selectedValues.join(", ")
    : placeholder;

  const handleSelect = (option: string): void => {
    if (props.multiple) {
      props.onChange(
        props.value.includes(option)
          ? props.value.filter((value) => value !== option)
          : [...props.value, option]
      );
      return;
    }

    props.onChange(option);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-labelledby={labelId}
        disabled={disabled}
        className={cx(
          "group flex min-w-0 cursor-pointer items-center gap-1 rounded text-left disabled:cursor-not-allowed disabled:opacity-40",
          className
        )}
      >
        <span
          className={cx(
            "truncate text-base font-semibold leading-5",
            selectedValues.length ? "text-font-strong" : "text-font-subtlest"
          )}
        >
          {triggerLabel}
        </span>
        <ChevronDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={12}
          className="z-50 max-h-[280px] min-w-[200px] overflow-y-auto rounded-lg bg-elevation-surface-overlay p-1 font-montserrat shadow-overlay scrollbar-hide"
        >
          {props.multiple ? (
            options.map((option) => (
              <DropdownMenu.CheckboxItem
                key={option}
                checked={props.value.includes(option)}
                onCheckedChange={(): void => handleSelect(option)}
                // The menu stays open so several options can be picked in a row
                onSelect={(e): void => e.preventDefault()}
                className={itemClass}
              >
                <ItemIndicator />
                <span>{option}</span>
              </DropdownMenu.CheckboxItem>
            ))
          ) : (
            <DropdownMenu.RadioGroup
              value={props.value ?? ""}
              onValueChange={handleSelect}
            >
              {options.map((option) => (
                <DropdownMenu.RadioItem
                  key={option}
                  value={option}
                  className={itemClass}
                >
                  <ItemIndicator />
                  <span>{option}</span>
                </DropdownMenu.RadioItem>
              ))}
            </DropdownMenu.RadioGroup>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

type Props = {
  labelId: string;
  options: string[];
  placeholder: string;
  disabled?: boolean;
  className?: string;
} & (
  | {
      multiple?: false;
      value: string | null;
      onChange: (value: string) => void;
    }
  | { multiple: true; value: string[]; onChange: (value: string[]) => void }
);

const itemClass = cx(
  "relative flex cursor-pointer select-none items-center gap-2 rounded p-2 pl-8 text-sm text-font outline-none",
  "hover:bg-background-selected focus:bg-background-selected radix-disabled:opacity-40"
);

const ItemIndicator = (): JSX.Element => (
  <DropdownMenu.ItemIndicator className="absolute left-3 top-1/2 -translate-y-1/2">
    <RiCheckLine size={16} />
  </DropdownMenu.ItemIndicator>
);

const ChevronDown = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="shrink-0 fill-font-strong"
  >
    <path d="M11.6699 15.5011C11.9028 15.6549 12.2187 15.629 12.4238 15.4239L17.4238 10.4239C17.6581 10.1896 17.6581 9.8106 17.4238 9.57629C17.1895 9.34197 16.8104 9.34197 16.5761 9.57629L12 14.1525L7.42378 9.57629C7.18947 9.34197 6.81044 9.34197 6.57613 9.57629C6.34181 9.8106 6.34181 10.1896 6.57613 10.4239L11.5761 15.4239L11.6699 15.5011Z" />
  </svg>
);
