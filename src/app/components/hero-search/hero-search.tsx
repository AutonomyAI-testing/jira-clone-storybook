import React, { useState } from "react";
import { Button } from "@app/components/button";
import * as Select from "@app/components/select";
import cx from "classix";

interface PropertyType {
  id: string;
  label: string;
}

interface SpaceType {
  id: string;
  label: string;
}

const propertyTypes: PropertyType[] = [
  { id: "apartment", label: "Apartment" },
  { id: "house", label: "House" },
  { id: "office", label: "Office" },
  { id: "retail", label: "Retail" },
];

const spaceTypes: SpaceType[] = [
  { id: "studio", label: "Studio" },
  { id: "1bed", label: "1 Bedroom" },
  { id: "2bed", label: "2 Bedroom" },
  { id: "3bed", label: "3+ Bedroom" },
];

export const HeroSearch: React.FC = () => {
  const [propertyTypeValue, setPropertyTypeValue] = useState<string | undefined>(undefined);
  const [spaceTypeValue, setSpaceTypeValue] = useState<string | undefined>(undefined);
  const [listingType, setListingType] = useState<"commercial" | "residential">(
    "commercial"
  );
  const [priceType, setPriceType] = useState<"hourly" | "monthly">("hourly");
  const [priceMin, setPriceMin] = useState<number>(500);
  const [priceMax, setPriceMax] = useState<number>(2500);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="bg-white border-b border-border py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-font"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L21 3z" />
            </svg>
            <span className="text-2xl font-primary-bold text-font">
              SUDDENLYSPACES
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <button className="text-font text-sm hover:text-font-brand">
              Switch to Tenant
            </button>
            <Button
              color="neutral"
              variant="contained"
              size="md"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              List Your Space
            </Button>
            <button className="text-font text-sm hover:text-font-brand">
              EN
            </button>
            <button className="text-font text-sm hover:text-font-brand">
              Sign Up
            </button>
            <button className="text-font text-sm hover:text-font-brand">
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-8">
        <div className="max-w-4xl text-center mb-12">
          <h1
            className="text-5xl font-primary-black mb-4"
            style={{ color: "blue" }}
          >
            Let's Find Your Ideal Space
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg text-font-subtle"
            style={{ color: "blue" }}
          >
            Discover residential and commercial properties tailored to your
            needs
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-8 border-b border-border">
          <button
            onClick={() => setListingType("commercial")}
            className={cx(
              "pb-2 text-base font-primary-bold transition-colors",
              listingType === "commercial"
                ? "text-font border-b-2 border-font"
                : "text-font-subtle hover:text-font"
            )}
          >
            Commercial
          </button>
          <button
            onClick={() => setListingType("residential")}
            className={cx(
              "pb-2 text-base font-primary-bold transition-colors",
              listingType === "residential"
                ? "text-font border-b-2 border-font"
                : "text-font-subtle hover:text-font"
            )}
          >
            Residential
          </button>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-5xl bg-elevation-surface-raised rounded-lg shadow-md p-6">
          <div className="grid grid-cols-12 gap-4 items-end">
            {/* Location Input */}
            <div className="col-span-3">
              <label className="block text-sm text-font-subtle mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Type a location"
                className="w-full px-3 py-2 rounded border-none bg-background-neutral text-font placeholder-font-subtle hover:bg-background-neutral-hovered focus-visible:bg-background-neutral-pressed outline-2"
              />
            </div>

            {/* Property Type Dropdown */}
            <div className="col-span-2">
              <label className="block text-sm text-font-subtle mb-2">
                Property Type
              </label>
              <Select.Root
                value={propertyTypeValue}
                onValueChange={setPropertyTypeValue}
              >
                <Select.Trigger aria-label="Select property type">
                  <Select.Value placeholder="Select" />
                  <Select.TriggerIcon />
                </Select.Trigger>
                <Select.Content>
                  <Select.Viewport>
                    {propertyTypes.map((type) => (
                      <Select.Item key={type.id} value={type.id}>
                        <Select.ItemIndicator />
                        <Select.ItemText>{type.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Root>
            </div>

            {/* Hourly/Monthly Toggle */}
            <div className="col-span-2 flex gap-2">
              <button
                onClick={() => setPriceType("hourly")}
                className={cx(
                  "px-4 py-2 rounded text-sm font-primary-bold transition-colors",
                  priceType === "hourly"
                    ? "text-font-inverse"
                    : "bg-elevation-surface-sunken text-font hover:bg-background-neutral"
                )}
                style={priceType === "hourly" ? { backgroundColor: "#000000" } : undefined}
              >
                Hourly
              </button>
              <button
                onClick={() => setPriceType("monthly")}
                className={cx(
                  "px-4 py-2 rounded text-sm font-primary-bold transition-colors",
                  priceType === "monthly"
                    ? "text-font-inverse"
                    : "bg-elevation-surface-sunken text-font hover:bg-background-neutral"
                )}
                style={priceType === "monthly" ? { backgroundColor: "#000000" } : undefined}
              >
                Monthly
              </button>
            </div>

            {/* Space Type Dropdown */}
            <div className="col-span-2">
              <label className="block text-sm text-font-subtle mb-2">
                Space Type
              </label>
              <Select.Root
                value={spaceTypeValue}
                onValueChange={setSpaceTypeValue}
              >
                <Select.Trigger aria-label="Select space type">
                  <Select.Value placeholder="Select" />
                  <Select.TriggerIcon />
                </Select.Trigger>
                <Select.Content>
                  <Select.Viewport>
                    {spaceTypes.map((type) => (
                      <Select.Item key={type.id} value={type.id}>
                        <Select.ItemIndicator />
                        <Select.ItemText>{type.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Root>
            </div>

            {/* Price Range */}
            <div className="col-span-2">
              <label className="block text-sm text-font-subtle mb-2">
                Price
              </label>
              <div className="flex gap-2">
                <div className="relative w-20">
                  <span className="absolute left-2 top-2 text-sm text-font-subtle">
                    $
                  </span>
                  <input
                    type="number"
                    value={priceMin}
                    onChange={(e) => setPriceMin(Number(e.target.value))}
                    className="w-full pl-5 py-2 rounded border-none bg-background-neutral text-font text-sm hover:bg-background-neutral-hovered focus-visible:bg-background-neutral-pressed outline-2"
                  />
                </div>
                <div className="relative w-20">
                  <span className="absolute left-2 top-2 text-sm text-font-subtle">
                    $
                  </span>
                  <input
                    type="number"
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full pl-5 py-2 rounded border-none bg-background-neutral text-font text-sm hover:bg-background-neutral-hovered focus-visible:bg-background-neutral-pressed outline-2"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="col-span-1">
              <Button
                color="primary"
                variant="contained"
                size="md"
                className="w-full"
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Copyright */}
            <div className="text-sm text-font-subtle">
              © SuddenlySpaces, 2024
            </div>

            {/* Center Links */}
            <div className="flex gap-6 text-sm text-font-subtle">
              <a href="#" className="hover:text-font">
                Company
              </a>
              <a href="#" className="hover:text-font">
                About
              </a>
              <a href="#" className="hover:text-font">
                Careers
              </a>
              <a href="#" className="hover:text-font">
                Press
              </a>
              <a href="#" className="hover:text-font">
                Contact Us
              </a>
            </div>

            {/* Social Icons & Legal */}
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="text-font-subtle hover:text-font">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3 10h-2v6h-2v-6h-2v-2h2V9c0-1.1.9-2 2-2h2v2h-1c-.55 0-1 .45-1 1v1h2v2z" fill="white" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-font-subtle hover:text-font">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm-1-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 8h-2v-4c0-1-1-1.5-1.5-1.5S12 12 12 13v4h-2v-7h2v1c.5-1 1.5-1.5 2.5-1.5 2 0 3.5 1.5 3.5 4v3.5z" fill="white" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-font-subtle hover:text-font">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5zm1.5-4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" fill="white" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="text-font-subtle hover:text-font">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M19.5 6.5c-.5-.3-1.2-.5-2.2-.5H6.7c-1 0-1.7.2-2.2.5-.8.5-1.3 1.4-1.3 2.8v5.4c0 1.4.5 2.3 1.3 2.8.5.3 1.2.5 2.2.5h10.6c1 0 1.7-.2 2.2-.5.8-.5 1.3-1.4 1.3-2.8V9.3c0-1.4-.5-2.3-1.3-2.8zM9.5 15V9l5 3-5 3z" fill="white" />
                  </svg>
                </a>
              </div>
              <div className="flex gap-4 text-sm text-font-subtle">
                <a href="#" className="hover:text-font">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-font">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
