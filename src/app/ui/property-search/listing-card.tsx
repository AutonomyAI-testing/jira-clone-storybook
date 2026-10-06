import {
  billingPeriodUnitDict,
  formatUsd,
} from "@app/components/property-search-bar";
import type { BillingPeriod } from "@app/components/property-search-bar";
import { listingPriceFor } from "@domain/listing";
import type { Listing } from "@domain/listing";

export const ListingCard = ({ listing, billingPeriod }: Props): JSX.Element => (
  <li className="flex flex-col gap-3 rounded-xl bg-elevation-surface-raised p-5 shadow-sm">
    <div className="flex items-start justify-between gap-3">
      <h2 className="font-primary-bold text-base text-font">{listing.name}</h2>
      <span className="shrink-0 rounded-full bg-background-brand-subtlest px-3 py-1 text-2xs text-font-brand">
        {listing.propertyType}
      </span>
    </div>
    <p className="text-sm text-font-subtle">{listing.location}</p>
    <ul className="flex flex-wrap gap-2">
      {listing.spaceTypes.map((spaceType) => (
        <li
          key={spaceType}
          className="rounded bg-background-neutral px-2 py-1 text-2xs text-font-subtle"
        >
          {spaceType}
        </li>
      ))}
    </ul>
    <p className="mt-auto pt-2 font-primary-bold text-lg text-font">
      {formatUsd(listingPriceFor(listing, billingPeriod))}
      <span className="font-primary text-sm text-font-subtle">
        {" "}
        per {billingPeriodUnitDict[billingPeriod]}
      </span>
    </p>
  </li>
);

interface Props {
  listing: Listing;
  billingPeriod: BillingPeriod;
}
