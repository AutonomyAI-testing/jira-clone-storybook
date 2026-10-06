import type { Listing } from "./listing";

// Illustrative fixtures for the search demo. Both prices sit inside the bar's
// default $500 - $2,500 range so switching billing period keeps results.
export const listingsMock: Listing[] = [
  {
    id: "hudson-yards-conference-centre",
    name: "Hudson Yards Conference Centre",
    location: "New York",
    propertyType: "Office Building",
    spaceTypes: ["Meeting Room", "Event Space", "Conference Hall"],
    hourlyPrice: 1850,
    monthlyPrice: 2400,
  },
  {
    id: "soho-loft-studio",
    name: "SoHo Loft Studio",
    location: "New York",
    propertyType: "Office Building",
    spaceTypes: ["Meeting Room", "Event Space", "Studio"],
    hourlyPrice: 1200,
    monthlyPrice: 1950,
  },
  {
    id: "midtown-executive-suite",
    name: "Midtown Executive Suite",
    location: "New York",
    propertyType: "Office Building",
    spaceTypes: ["Meeting Room", "Private Office", "Conference Hall"],
    hourlyPrice: 2300,
    monthlyPrice: 2500,
  },
  {
    id: "williamsburg-rooftop",
    name: "Williamsburg Rooftop",
    location: "New York",
    propertyType: "Office Building",
    spaceTypes: ["Event Space", "Rooftop"],
    hourlyPrice: 1450,
    monthlyPrice: 2100,
  },
  {
    id: "financial-district-boardroom",
    name: "Financial District Boardroom",
    location: "New York",
    propertyType: "Office Building",
    spaceTypes: ["Meeting Room", "Conference Hall"],
    hourlyPrice: 2400,
    monthlyPrice: 2500,
  },
  {
    id: "brooklyn-navy-yard-workshop",
    name: "Brooklyn Navy Yard Workshop",
    location: "New York",
    propertyType: "Warehouse",
    spaceTypes: ["Event Space", "Studio", "Training Room"],
    hourlyPrice: 980,
    monthlyPrice: 1400,
  },
  {
    id: "chelsea-market-retail-unit",
    name: "Chelsea Market Retail Unit",
    location: "New York",
    propertyType: "Retail Unit",
    spaceTypes: ["Event Space", "Studio"],
    hourlyPrice: 640,
    monthlyPrice: 1100,
  },
  {
    id: "flatiron-coworking-floor",
    name: "Flatiron Coworking Floor",
    location: "New York",
    propertyType: "Coworking Space",
    spaceTypes: ["Hot Desk", "Meeting Room", "Private Office"],
    hourlyPrice: 480,
    monthlyPrice: 900,
  },
  {
    id: "austin-eastside-studio",
    name: "Austin Eastside Studio",
    location: "Austin",
    propertyType: "Meeting Studio",
    spaceTypes: ["Studio", "Meeting Room"],
    hourlyPrice: 560,
    monthlyPrice: 1150,
  },
  {
    id: "chicago-loop-office",
    name: "Chicago Loop Office",
    location: "Chicago",
    propertyType: "Office Building",
    spaceTypes: ["Private Office", "Meeting Room"],
    hourlyPrice: 720,
    monthlyPrice: 1650,
  },
  {
    id: "san-francisco-bay-lab",
    name: "San Francisco Bay Lab",
    location: "San Francisco",
    propertyType: "Office Building",
    spaceTypes: ["Meeting Room", "Training Room"],
    hourlyPrice: 1320,
    monthlyPrice: 2300,
  },
];

export const propertyTypesMock: string[] = [
  ...new Set(listingsMock.map((listing) => listing.propertyType)),
].sort();

export const spaceTypesMock: string[] = [
  ...new Set(listingsMock.flatMap((listing) => listing.spaceTypes)),
].sort();
