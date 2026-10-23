import React from "react";
import cx from "classix";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { twix } from "tailwindcss-radix-ui";
import { RiArrowDropDownLine, RiLoader4Line } from "react-icons/ri";
import {
  PRICE_MAX,
  PRICE_MIN,
  PRICE_STEP,
  PriceRange,
  PropertySearchFilters,
  PropertyType,
  RentalPeriod,
  SpaceType,
  formatPrice,
  getPropertyTypeLabel,
  getSpaceTypesLabel,
  propertyTypeDict,
  propertyTypes,
  rentalPeriodDict,
  rentalPeriods,
  spaceTypeDict,
  spaceTypes,
} from "@domain/property-search";
import { Button } from "@app/components/button";
import { RangeSlider } from "@app/components/range-slider";
import * as Select from "@app/components/select";

export const PropertySearchBar = ({
  value,
  onChange,
  onSubmit,
  isLoading = false,
  className,
}: Props): JSX.Element => {
  const setFilter = (patch: Partial<PropertySearchFilters>): void => {
    onChange({ ...value, ...patch });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      aria-label="Property search filters"
      onSubmit={handleSubmit}
      className={cx(
        "flex w-fit items-center gap-6 rounded-md bg-elevation-surface-raised",
        "px-6 py-4 shadow-sm outline outline-1 outline-border",
        className
      )}
    >
      <FilterField label="Location" value={value.location} />

      <Separator />

      <FilterSelect
        label="Property Type"
        display={getPropertyTypeLabel(value.propertyType)}
        value={value.propertyType}
        options={propertyTypes.map((propertyType) => ({
          value: propertyType,
          label: propertyTypeDict[propertyType],
        }))}
        onValueChange={(propertyType) =>
          setFilter({ propertyType: propertyType as PropertyType })
        }
      />

      <Separator />

      <RentalPeriodTabs
        value={value.rentalPeriod}
        onChange={(rentalPeriod) => setFilter({ rentalPeriod })}
      />

      <Separator />

      <SpaceTypeFilter
        label="Space Type"
        value={value.spaceTypes}
        onValueChange={(spaceTypes) => setFilter({ spaceTypes })}
      />

      <Separator />

      <PriceFilter
        value={value.priceRange}
        onChange={(priceRange) => setFilter({ priceRange })}
      />

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="shrink-0 rounded-full"
      >
        {isLoading ? (
          <>
            <RiLoader4Line size={20} className="animate-spin" />
            Searching
          </>
        ) : (
          "Search"
        )}
      </Button>
    </form>
  );
};

const Separator = (): JSX.Element => (
  <span className="h-11 w-px shrink-0 bg-border" />
);

const labelClass = "font-primary-light text-2xs text-font-subtlest";
const valueClass = "truncate font-primary-bold text-lg text-font";

const FilterField = ({ label, value }: FilterFieldProps): JSX.Element => (
  <div className="flex flex-col gap-1.5 px-2 py-1">
    <span className={labelClass}>{label}</span>
    <span className={cx(valueClass, "max-w-[225px]")}>{value}</span>
  </div>
);

const FilterSelect = ({
  label,
  display,
  value,
  options,
  onValueChange,
}: FilterSelectProps): JSX.Element => (
  <Select.Root value={value} onValueChange={onValueChange}>
    <Select.PlainTrigger aria-label={`${label}: ${display}`}>
      <span className="flex flex-col items-start gap-1.5">
        <span className={labelClass}>{label}</span>
        <span className={cx(valueClass, "max-w-[225px]")}>{display}</span>
      </span>
      <Select.TriggerIcon />
    </Select.PlainTrigger>
    <Select.Content position="popper" sideOffset={6} className="rounded-md">
      <Select.Viewport>
        {options.map((option) => (
          <Select.Item key={option.value} value={option.value}>
            <Select.ItemIndicator />
            <Select.ItemText>{option.label}</Select.ItemText>
          </Select.Item>
        ))}
      </Select.Viewport>
    </Select.Content>
  </Select.Root>
);

const MenuTrigger = twix(
  DropdownMenu.Trigger,
  cx(
    "flex cursor-pointer items-center gap-2 rounded border-none px-2 py-1",
    "bg-transparent hover:bg-background-neutral active:bg-background-neutral-pressed",
    "font-primary-bold text-sm text-font"
  )
);

const MenuContent = twix(
  DropdownMenu.Content,
  cx("min-w-[200px] rounded-md bg-elevation-surface-overlay py-1 shadow-md")
);

const MenuCheckboxItem = twix(
  DropdownMenu.CheckboxItem,
  cx(
    "relative flex cursor-pointer select-none items-center gap-2 p-2 pl-8",
    "font-primary-bold text-sm text-font outline-none",
    "hover:bg-background-selected focus:bg-background-selected"
  )
);

const MenuItemIndicator = twix(
  DropdownMenu.ItemIndicator,
  cx(
    "absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2",
    "rounded-full bg-border-selected"
  )
);

const SpaceTypeFilter = ({
  label,
  value,
  onValueChange,
}: SpaceTypeFilterProps): JSX.Element => {
  const toggle = (spaceType: SpaceType): void => {
    const isSelected = value.includes(spaceType);

    onValueChange(
      isSelected
        ? value.filter((selected) => selected !== spaceType)
        : [...value, spaceType]
    );
  };

  return (
    <DropdownMenu.Root>
      <MenuTrigger aria-label={`${label}: ${getSpaceTypesLabel(value)}`}>
        <span className="flex flex-col items-start gap-1.5">
          <span className={labelClass}>{label}</span>
          <span className={cx(valueClass, "max-w-[225px]")}>
            {getSpaceTypesLabel(value)}
          </span>
        </span>
        <RiArrowDropDownLine size={28} />
      </MenuTrigger>
      <MenuContent align="start" sideOffset={6}>
        {spaceTypes.map((spaceType) => (
          <MenuCheckboxItem
            key={spaceType}
            checked={value.includes(spaceType)}
            onCheckedChange={() => toggle(spaceType)}
            // keeps the menu open so several types can be picked in a row
            onSelect={(e) => e.preventDefault()}
          >
            <MenuItemIndicator />
            {spaceTypeDict[spaceType]}
          </MenuCheckboxItem>
        ))}
      </MenuContent>
    </DropdownMenu.Root>
  );
};

const RentalPeriodTabs = ({
  value,
  onChange,
}: RentalPeriodTabsProps): JSX.Element => (
  <div className="px-2 py-1">
    <div
      role="group"
      aria-label="Rental period"
      className="flex items-center rounded-full bg-background-neutral p-2"
    >
      {rentalPeriods.map((rentalPeriod) => (
        <button
          key={rentalPeriod}
          type="button"
          aria-pressed={value === rentalPeriod}
          onClick={() => onChange(rentalPeriod)}
          className={cx(
            "h-[38px] cursor-pointer rounded-full px-4 font-primary text-sm",
            "duration-100 ease-in-out",
            value === rentalPeriod
              ? "bg-background-brand-bold text-font-inverse"
              : "text-font-subtle hover:bg-background-neutral-hovered"
          )}
        >
          {rentalPeriodDict[rentalPeriod]}
        </button>
      ))}
    </div>
  </div>
);

const PriceFilter = ({
  value,
  onChange,
  min = PRICE_MIN,
  max = PRICE_MAX,
  step = PRICE_STEP,
}: PriceFilterProps): JSX.Element => (
  <div className="flex flex-col px-2 py-1">
    <span className={labelClass}>Price</span>
    {/* The value pills get their own band above the rail, so a low value
        never lands on top of the label. */}
    <div className="relative w-[300px] pt-6">
      {value.map((price, index) => (
        <span
          key={index}
          style={{ left: getThumbOffset(price, min, max) }}
          className={cx(
            "pointer-events-none absolute top-0 -translate-x-1/2",
            "rounded bg-background-neutral-bold px-1.5 py-0.5",
            "font-primary-bold text-2xs text-font-inverse",
            "after:absolute after:left-1/2 after:top-full after:-translate-x-1/2",
            "after:border-x-4 after:border-x-transparent",
            "after:border-t-4 after:border-t-background-neutral-bold"
          )}
        >
          {formatPrice(price)}
        </span>
      ))}
      <RangeSlider
        label="Price"
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={(next) => onChange(next as PriceRange)}
      />
    </div>
  </div>
);

/**
 * Radix keeps each thumb inside the track, so its centre travels from half a
 * thumb to (track width - half a thumb). The value pill follows that path, and
 * clamps so it never overflows the rail at either end.
 */
const getThumbOffset = (price: number, min: number, max: number): string => {
  const fraction = (price - min) / (max - min);

  return `clamp(1.5rem, calc(0.5rem + ${fraction} * (100% - 1rem)), calc(100% - 1.5rem))`;
};

interface Props {
  value: PropertySearchFilters;
  onChange: (value: PropertySearchFilters) => void;
  onSubmit?: () => void;
  isLoading?: boolean;
  className?: string;
}

interface FilterFieldProps {
  label: string;
  value: string;
}

interface FilterSelectProps {
  label: string;
  display: string;
  value: string;
  options: { value: string; label: string }[];
  onValueChange: (value: string) => void;
}

interface SpaceTypeFilterProps {
  label: string;
  value: SpaceType[];
  onValueChange: (value: SpaceType[]) => void;
}

interface RentalPeriodTabsProps {
  value: RentalPeriod;
  onChange: (value: RentalPeriod) => void;
}

interface PriceFilterProps {
  value: PriceRange;
  onChange: (value: PriceRange) => void;
  min?: number;
  max?: number;
  step?: number;
}
