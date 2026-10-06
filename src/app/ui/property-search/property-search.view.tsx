import { useSubmit, useTransition } from "@remix-run/react";
import { PropertySearchBar } from "@app/components/property-search-bar";
import type {
  SearchFilters,
  SearchFilterOptions,
} from "@app/components/property-search-bar";
import type { Listing } from "@domain/listing";
import { ListingCard } from "./listing-card";

export const PropertySearchView = ({
  filters,
  listings,
  options,
}: Props): JSX.Element => {
  const submit = useSubmit();
  const transition = useTransition();

  const handleSearch = (next: SearchFilters): void => {
    submit(toSearchParams(next), { method: "get" });
  };

  return (
    <main className="min-h-screen bg-elevation-surface-sunken px-6 py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="font-primary-bold text-2xl text-font">Find a space</h1>
          <p className="text-sm text-font-subtle">
            Rent by the hour or by the month — filter by property type, space
            and price.
          </p>
        </header>

        <PropertySearchBar
          defaultValue={filters}
          options={options}
          onSearch={handleSearch}
          loading={transition.state !== "idle"}
          className="rounded-xl shadow-sm"
        />

        <section className="flex flex-col gap-4">
          <p className="text-sm text-font-subtle">
            {listings.length} {listings.length === 1 ? "space" : "spaces"} match
            your search
          </p>
          {listings.length === 0 ? (
            <p className="rounded-xl bg-elevation-surface-raised p-8 text-center text-sm text-font-subtle">
              No spaces match those filters yet — try widening the price range
              or removing a space type.
            </p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {listings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  billingPeriod={filters.billingPeriod}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

interface Props {
  filters: SearchFilters;
  listings: Listing[];
  options: SearchFilterOptions;
}

const toSearchParams = (filters: SearchFilters): URLSearchParams => {
  const searchParams = new URLSearchParams();

  searchParams.set("location", filters.location);
  searchParams.set("billingPeriod", filters.billingPeriod);
  searchParams.set("minPrice", String(filters.price.min));
  searchParams.set("maxPrice", String(filters.price.max));

  if (filters.propertyType) {
    searchParams.set("propertyType", filters.propertyType);
  }

  filters.spaceTypes.forEach((spaceType) =>
    searchParams.append("spaceType", spaceType)
  );

  return searchParams;
};
