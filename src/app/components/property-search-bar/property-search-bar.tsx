import { useId, useState } from "react";
import cx from "classix";
import { FilterMenu } from "./filter-menu";
import { PillTabGroup } from "./pill-tab-group";
import { PriceRangeSlider } from "./price-range-slider";
import { SearchButton } from "./search-button";
import { SearchField } from "./search-field";
import {
  ANY_PROPERTY_TYPE,
  ANY_SPACE_TYPE,
  billingPeriodDict,
  billingPeriods,
  DEFAULT_PRICE_BOUNDS,
  DEFAULT_PRICE_STEP,
  DEFAULT_SEARCH_FILTERS,
  formatUsd,
} from "./types";
import type {
  BillingPeriod,
  PriceRange,
  SearchFilterOptions,
  SearchFilters,
} from "./types";

const billingPeriodOptions = billingPeriods.map((period) => ({
  value: period,
  label: billingPeriodDict[period],
}));

export const PropertySearchBar = ({
  value,
  defaultValue,
  options,
  onFiltersChange,
  onSearch,
  priceBounds = DEFAULT_PRICE_BOUNDS,
  priceStep = DEFAULT_PRICE_STEP,
  priceFormatter = formatUsd,
  loading,
  disabled,
  className,
}: Props): JSX.Element => {
  const [uncontrolledFilters, setUncontrolledFilters] = useState<SearchFilters>(
    defaultValue ?? DEFAULT_SEARCH_FILTERS
  );
  const [pending, setPending] = useState<boolean>(false);
  const fieldId = useId();

  const filters = value ?? uncontrolledFilters;
  const isBusy = loading ?? pending;

  const updateFilters = (patch: Partial<SearchFilters>): void => {
    const next = { ...filters, ...patch };

    if (value === undefined) setUncontrolledFilters(next);
    onFiltersChange?.(next);
  };

  const handleSearch = async (): Promise<void> => {
    if (isBusy) return;

    const result = onSearch(filters);
    if (!(result instanceof Promise)) return;

    setPending(true);
    try {
      await result;
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      className={cx(
        "flex w-full flex-wrap items-center gap-x-6 gap-y-6 bg-elevation-surface-raised px-8 py-6 font-montserrat xl:py-5",
        className
      )}
    >
      <SearchField label="Location" labelId={`${fieldId}-location`}>
        <span className="truncate text-base font-semibold leading-5 text-font-strong">
          {filters.location}
        </span>
      </SearchField>

      <Separator />

      <SearchField label="Property Type" labelId={`${fieldId}-property-type`}>
        <FilterMenu
          labelId={`${fieldId}-property-type`}
          options={options.propertyTypes}
          placeholder={ANY_PROPERTY_TYPE}
          value={filters.propertyType}
          onChange={(propertyType): void => updateFilters({ propertyType })}
          disabled={disabled}
          className="max-w-[200px]"
        />
      </SearchField>

      <Separator />

      <PillTabGroup
        ariaLabel="Billing period"
        value={filters.billingPeriod}
        options={billingPeriodOptions}
        onChange={(billingPeriod: BillingPeriod): void =>
          updateFilters({ billingPeriod })
        }
        disabled={disabled}
      />

      <Separator />

      <SearchField label="Space Type" labelId={`${fieldId}-space-type`}>
        <FilterMenu
          multiple
          labelId={`${fieldId}-space-type`}
          options={options.spaceTypes}
          placeholder={ANY_SPACE_TYPE}
          value={filters.spaceTypes}
          onChange={(spaceTypes): void => updateFilters({ spaceTypes })}
          disabled={disabled}
          className="max-w-[260px]"
        />
      </SearchField>

      <Separator />

      <PriceRangeSlider
        label="Price"
        labelId={`${fieldId}-price`}
        value={filters.price}
        bounds={priceBounds}
        step={priceStep}
        formatValue={priceFormatter}
        onChange={(price: PriceRange): void => updateFilters({ price })}
        disabled={disabled}
        className="min-w-[180px] flex-1 pl-1.5 xl:max-w-[336px]"
      />

      <SearchButton
        loading={isBusy}
        disabled={disabled}
        onClick={handleSearch}
        className="w-full xl:ml-auto xl:w-auto"
      />
    </div>
  );
};

interface Props {
  options: SearchFilterOptions;
  onSearch: (filters: SearchFilters) => void | Promise<void>;
  value?: SearchFilters;
  defaultValue?: SearchFilters;
  onFiltersChange?: (filters: SearchFilters) => void;
  priceBounds?: PriceRange;
  priceStep?: number;
  priceFormatter?: (value: number) => string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Separator = (): JSX.Element => (
  <span
    aria-hidden="true"
    className="hidden h-11 w-px shrink-0 bg-border xl:block"
  />
);
