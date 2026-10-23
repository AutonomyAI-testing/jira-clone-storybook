import { SearchFilterOptions } from "./search-filter-bar";

/** Example option sets for the search filter bar. Not used by the app. */
export const searchFilterOptionsMock: SearchFilterOptions = {
  locations: ["New York", "Brooklyn", "Jersey City", "San Francisco", "Austin", "Chicago"],
  propertyTypes: ["Office Building", "Coworking Space", "Retail Unit", "Warehouse", "Studio"],
  spaceTypes: [
    "Meeting Room",
    "Event Space",
    "Private Office",
    "Hot Desk",
    "Photo Studio",
    "Rooftop Terrace",
  ],
  priceBounds: {
    hourly: [0, 2500],
    monthly: [500, 8500],
  },
};
