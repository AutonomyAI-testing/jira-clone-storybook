export type Listing = {
  id: string;
  name: string;
  location: string;
  propertyType: string;
  spaceTypes: string[];
  hourlyPrice: number;
  monthlyPrice: number;
};

export const listingPriceFor = (listing: Listing, billingPeriod: "hourly" | "monthly"): number =>
  billingPeriod === "hourly" ? listing.hourlyPrice : listing.monthlyPrice;
