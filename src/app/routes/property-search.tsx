import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  billingPeriods,
  DEFAULT_PRICE_BOUNDS,
  DEFAULT_SEARCH_FILTERS,
} from "@app/components/property-search-bar";
import type {
  BillingPeriod,
  SearchFilterOptions,
  SearchFilters,
} from "@app/components/property-search-bar";
import { PropertySearchView } from "@app/ui/property-search";
import {
  listingPriceFor,
  listingsMock,
  propertyTypesMock,
  spaceTypesMock,
} from "@domain/listing";
import type { Listing } from "@domain/listing";
import { formatProperties, formatTags } from "@utils/meta";

type LoaderData = {
  filters: SearchFilters;
  listings: Listing[];
  options: SearchFilterOptions;
};

export const loader: LoaderFunction = async ({ request }) => {
  const filters = parseFilters(new URL(request.url).searchParams);

  return json<LoaderData>({
    filters,
    listings: filterListings(filters, listingsMock),
    options: {
      propertyTypes: propertyTypesMock,
      spaceTypes: spaceTypesMock,
    },
  });
};

export const meta: V2_MetaFunction = () => {
  const tags = { title: "Find a space" };
  const properties = {
    description:
      "Search hourly and monthly spaces by location, property type, space and price.",
  };

  return [
    { title: tags.title },
    ...formatTags(tags),
    ...formatProperties(properties),
  ];
};

export default function PropertySearchRoute() {
  const { filters, listings, options } = useLoaderData() as LoaderData;

  return (
    <PropertySearchView
      filters={filters}
      listings={listings}
      options={options}
    />
  );
}

// A first visit has no query string, so the bar starts on the design's values
const parseFilters = (searchParams: URLSearchParams): SearchFilters => {
  if ([...searchParams.keys()].length === 0) return DEFAULT_SEARCH_FILTERS;

  const billingPeriod = searchParams.get("billingPeriod");
  const minPrice = readAmount(
    searchParams.get("minPrice"),
    DEFAULT_SEARCH_FILTERS.price.min
  );
  const maxPrice = readAmount(
    searchParams.get("maxPrice"),
    DEFAULT_SEARCH_FILTERS.price.max
  );

  return {
    location: searchParams.get("location") ?? DEFAULT_SEARCH_FILTERS.location,
    propertyType: searchParams.get("propertyType"),
    billingPeriod: isValidBillingPeriod(billingPeriod)
      ? billingPeriod
      : DEFAULT_SEARCH_FILTERS.billingPeriod,
    spaceTypes: searchParams.getAll("spaceType"),
    price: {
      min: Math.min(minPrice, maxPrice),
      max: Math.max(minPrice, maxPrice),
    },
  };
};

const readAmount = (raw: string | null, fallback: number): number => {
  const amount = Number(raw);
  const isInBounds =
    amount >= DEFAULT_PRICE_BOUNDS.min && amount <= DEFAULT_PRICE_BOUNDS.max;

  return raw !== null && Number.isFinite(amount) && isInBounds
    ? amount
    : fallback;
};

const isValidBillingPeriod = (value: string | null): value is BillingPeriod =>
  billingPeriods.includes(value as BillingPeriod);

const filterListings = (
  filters: SearchFilters,
  listings: Listing[]
): Listing[] =>
  listings.filter((listing) => {
    if (listing.location !== filters.location) return false;

    if (filters.propertyType && listing.propertyType !== filters.propertyType) {
      return false;
    }

    const matchesSpaceType =
      filters.spaceTypes.length === 0 ||
      filters.spaceTypes.some((spaceType) =>
        listing.spaceTypes.includes(spaceType)
      );
    if (!matchesSpaceType) return false;

    const price = listingPriceFor(listing, filters.billingPeriod);

    return price >= filters.price.min && price <= filters.price.max;
  });
