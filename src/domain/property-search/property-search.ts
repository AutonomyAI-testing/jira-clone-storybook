export type PropertyType = (typeof propertyTypes)[number];
export const propertyTypes = [
  "office-building",
  "retail-space",
  "warehouse",
  "co-working",
  "medical-office",
] as const;

export const propertyTypeDict: Record<PropertyType, string> = {
  "office-building": "Office Building",
  "retail-space": "Retail Space",
  warehouse: "Warehouse",
  "co-working": "Co-working",
  "medical-office": "Medical Office",
};

export type SpaceType = (typeof spaceTypes)[number];
export const spaceTypes = [
  "meeting-room",
  "event-space",
  "private-office",
  "hot-desk",
  "studio",
  "conference-suite",
] as const;

export const spaceTypeDict: Record<SpaceType, string> = {
  "meeting-room": "Meeting Room",
  "event-space": "Event Space",
  "private-office": "Private Office",
  "hot-desk": "Hot Desk",
  studio: "Studio",
  "conference-suite": "Conference Suite",
};

export type RentalPeriod = (typeof rentalPeriods)[number];
export const rentalPeriods = ["hourly", "monthly"] as const;

export const rentalPeriodDict: Record<RentalPeriod, string> = {
  hourly: "Hourly",
  monthly: "Monthly",
};

export type PriceRange = [number, number];

export const PRICE_MIN = 0;
export const PRICE_MAX = 5000;
export const PRICE_STEP = 50;

export interface PropertySearchFilters {
  location: string;
  propertyType: PropertyType;
  rentalPeriod: RentalPeriod;
  spaceTypes: SpaceType[];
  priceRange: PriceRange;
}

export const getPropertyTypeLabel = (propertyType: PropertyType): string =>
  propertyTypeDict[propertyType];

export const getSpaceTypesLabel = (types: SpaceType[]): string =>
  types.map((type) => spaceTypeDict[type]).join(", ");

export const formatPrice = (price: number): string => `$${price.toLocaleString("en-US")}`;
