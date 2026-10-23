import { useState } from "react";
import cx from "classix";
import { Button } from "@app/components/button";
import { FilterField } from "@app/components/filter-field";
import { FilterSelect } from "@app/components/filter-select";
import { RangeSlider } from "@app/components/range-slider";
import {
  SegmentedTabs,
  SegmentedTabOption,
} from "@app/components/segmented-tabs";
import { LocationField } from "./location-field";

const STEP_DIVISIONS = 50;

/**
 * The property search filter bar. It owns the draft filter state and hands the
 * whole set to `onSearch` when the Search button is pressed — it does no
 * fetching of its own, so the caller decides what a search does.
 *
 * Geometry follows the design (a 1500 x 92 card, 32px of clear space either
 * side of every divider, a 300px price rail, a 48px Search button), and the
 * colours, type and radii resolve to this app's design tokens rather than the
 * source design's raw values, so it works in every theme.
 */
export const SearchFilterBar = ({
  options,
  defaultFilters,
  onSearch,
  searching = false,
  disabled = false,
  className,
}: Props): JSX.Element => {
  const [filters, setFilters] = useState<SearchFilters>(() => {
    const billingPeriod = defaultFilters?.billingPeriod ?? "hourly";

    return {
      location: "",
      propertyType: "",
      spaceTypes: [],
      ...defaultFilters,
      billingPeriod,
      priceRange:
        defaultFilters?.priceRange ?? options.priceBounds[billingPeriod],
    };
  });

  const bounds = options.priceBounds[filters.billingPeriod];
  const priceStep = priceStepFor(bounds);
  const formatPrice = (amount: number): string => `$${amount}`;

  const handlePeriodChange = (billingPeriod: BillingPeriod): void =>
    setFilters((current) => ({
      ...current,
      billingPeriod,
      // the two periods price differently, so the range starts from the new
      // period's full span rather than carrying a range that no longer applies
      priceRange: options.priceBounds[billingPeriod],
    }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSearch(filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx("w-full overflow-x-auto py-2", className)}
    >
      <div
        className={cx(
          "flex w-fit min-w-full items-center py-[19px]",
          "rounded-lg bg-elevation-surface-raised shadow-sm",
          "outline outline-1 outline-border"
        )}
      >
        <div className="min-w-[120px] flex-[189_1_0%] px-8">
          <LocationField
            label="Location"
            value={filters.location}
            options={options.locations}
            disabled={disabled}
            onValueChange={(location) =>
              setFilters((current) => ({ ...current, location }))
            }
          />
        </div>

        <Divider />

        <div className="min-w-[140px] flex-[217_1_0%] px-8">
          <FilterSelect
            label="Property Type"
            options={options.propertyTypes}
            value={filters.propertyType}
            placeholder="Any"
            disabled={disabled}
            onValueChange={(propertyType) =>
              setFilters((current) => ({ ...current, propertyType }))
            }
          />
        </div>

        <Divider />

        <div className="shrink-0 px-8">
          <SegmentedTabs
            options={billingPeriodOptions}
            value={filters.billingPeriod}
            ariaLabel="Billing period"
            disabled={disabled}
            onValueChange={handlePeriodChange}
          />
        </div>

        <Divider />

        <div className="min-w-[180px] flex-[341_1_0%] px-8">
          <FilterSelect
            label="Space Type"
            multiple
            options={options.spaceTypes}
            value={filters.spaceTypes}
            placeholder="Any"
            disabled={disabled}
            onValueChange={(spaceTypes) =>
              setFilters((current) => ({ ...current, spaceTypes }))
            }
          />
        </div>

        <Divider />

        <div className="shrink-0 px-8">
          <FilterField label="Price">
            <RangeSlider
              className="w-[300px]"
              min={bounds[0]}
              max={bounds[1]}
              step={priceStep}
              value={filters.priceRange}
              formatValue={formatPrice}
              ariaLabel="Price"
              disabled={disabled}
              onValueChange={(priceRange) =>
                setFilters((current) => ({ ...current, priceRange }))
              }
            />
          </FilterField>
        </div>

        <div className="ml-auto flex shrink-0 items-center pl-8 pr-[14px]">
          <Button
            type="submit"
            color="neutral"
            className="rounded-full px-8 py-3 text-sm"
            disabled={disabled || searching}
            aria-busy={searching}
          >
            {searching && <Spinner />}
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

/**
 * A round step for the price rail — one that the bounds themselves divide into,
 * so the handles land on whole values rather than on an arbitrary fraction.
 */
const priceStepFor = (bounds: [number, number]): number => {
  const raw = (bounds[1] - bounds[0]) / STEP_DIVISIONS;
  const magnitude = 10 ** Math.floor(Math.log10(raw));

  return Math.max(1, Math.round(raw / magnitude) * magnitude);
};

const Spinner = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 animate-spin"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      className="opacity-25"
    />
    <path
      fill="currentColor"
      className="opacity-75"
      d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z"
    />
  </svg>
);

const Divider = (): JSX.Element => (
  <span aria-hidden="true" className="h-11 w-px shrink-0 bg-border" />
);

export const billingPeriodOptions: Array<SegmentedTabOption<BillingPeriod>> = [
  { value: "hourly", label: "Hourly" },
  { value: "monthly", label: "Monthly" },
];

export type BillingPeriod = "hourly" | "monthly";

export interface SearchFilters {
  location: string;
  propertyType: string;
  billingPeriod: BillingPeriod;
  spaceTypes: string[];
  priceRange: [number, number];
}

export interface SearchFilterOptions {
  locations: string[];
  propertyTypes: string[];
  spaceTypes: string[];
  priceBounds: Record<BillingPeriod, [number, number]>;
}

interface Props {
  options: SearchFilterOptions;
  defaultFilters?: Partial<SearchFilters>;
  onSearch: (filters: SearchFilters) => void;
  searching?: boolean;
  disabled?: boolean;
  className?: string;
}
