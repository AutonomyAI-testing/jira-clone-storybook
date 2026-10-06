export const billingPeriods = ["hourly", "monthly"] as const;

export type BillingPeriod = (typeof billingPeriods)[number];

export const billingPeriodDict: Record<BillingPeriod, string> = {
  hourly: "Hourly",
  monthly: "Monthly",
};

export const billingPeriodUnitDict: Record<BillingPeriod, string> = {
  hourly: "hour",
  monthly: "month",
};

export type PriceRange = {
  min: number;
  max: number;
};

export type SearchFilters = {
  location: string;
  propertyType: string | null;
  billingPeriod: BillingPeriod;
  spaceTypes: string[];
  price: PriceRange;
};

export type SearchFilterOptions = {
  propertyTypes: string[];
  spaceTypes: string[];
};

// The design draws $500 and $2,500 a third and two thirds along the rail; no
// range can reproduce that exactly from those two values, so this one keeps the
// default selection a comparable width instead of collapsing it at the left end
export const DEFAULT_PRICE_BOUNDS: PriceRange = { min: 0, max: 5000 };
export const DEFAULT_PRICE_STEP = 100;

export const ANY_PROPERTY_TYPE = "Any property type";
export const ANY_SPACE_TYPE = "Any space type";

export const DEFAULT_SEARCH_FILTERS: SearchFilters = {
  location: "New York",
  propertyType: "Office Building",
  billingPeriod: "hourly",
  spaceTypes: ["Meeting Room", "Event Space"],
  price: { min: 500, max: 2500 },
};

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const formatUsd = (value: number): string => usdFormatter.format(value);
