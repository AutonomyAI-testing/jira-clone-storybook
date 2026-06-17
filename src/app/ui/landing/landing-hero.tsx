import { useState } from "react";
import { Button } from "@app/components/button";
import * as Select from "@app/components/select";

type PropertyType = "commercial" | "residential";
type RentalPeriod = "hourly" | "monthly";

export const LandingHero = (): JSX.Element => {
  const [selectedPropertyType, setSelectedPropertyType] =
    useState<PropertyType>("commercial");
  const [selectedPeriod, setSelectedPeriod] = useState<RentalPeriod>("hourly");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [priceMin, setPriceMin] = useState("500");
  const [priceMax, setPriceMax] = useState("2500");

  const handleSearch = () => {
    // TODO: Implement search functionality
  };

  const propertyTypeOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
    { value: "office", label: "Office" },
    { value: "retail", label: "Retail" },
  ];

  const spaceTypeOptions = [
    { value: "all", label: "All Types" },
    { value: "studio", label: "Studio" },
    { value: "1bed", label: "1 Bedroom" },
    { value: "2bed", label: "2 Bedroom" },
    { value: "3bed", label: "3+ Bedroom" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation Bar */}
      <nav className="border-b border-border px-8 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo SVG */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-font"
            >
              <path
                d="M14 2L4 8V20C4 22.2091 8.47715 24 14 24C19.5228 24 24 22.2091 24 20V8L14 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M14 12V24"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 16H19"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <div className="font-primary-black text-2xl">SUDDENLYSPACES</div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-font hover:text-font-brand">
              Switch to Tenant
            </button>
            <Button size="md" className="px-6 rounded-full" style={{ backgroundColor: "#000", color: "#fff" }}>
              List Your Space
            </Button>
            <select className="rounded border border-border bg-white px-3 py-2 text-font">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            <button className="text-font hover:text-font-brand">Sign Up</button>
            <button className="text-font hover:text-font-brand">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading with Red Color */}
          <h1
            className="font-primary-black text-6xl leading-tight"
            style={{ color: "var(--Red700)" }}
          >
            Let’s Find Your Ideal Space
          </h1>

          {/* Subtitle */}
          <p className="font-primary-light mt-6 text-xl text-font-subtle">
            Discover residential and commercial properties tailored to your
            needs
          </p>

          {/* Property Type Tabs */}
          <div className="mt-8 flex justify-center gap-12">
            <button
              onClick={() => setSelectedPropertyType("commercial")}
              className="font-primary-bold text-lg"
            >
              <span className="text-font-subtle">Commercial</span>
              <div
                className={`mt-2 h-1 w-full transition-colors ${
                  selectedPropertyType === "commercial"
                    ? "bg-font"
                    : "bg-transparent"
                }`}
              />
            </button>
            <button
              onClick={() => setSelectedPropertyType("residential")}
              className="font-primary-bold text-lg"
            >
              <span className="text-font-subtle">Residential</span>
              <div
                className={`mt-2 h-1 w-full transition-colors ${
                  selectedPropertyType === "residential"
                    ? "bg-font"
                    : "bg-transparent"
                }`}
              />
            </button>
          </div>

          {/* Search Form */}
          <div className="mt-12 rounded-lg bg-elevation-surface-sunken p-6">
            <div className="grid grid-cols-5 gap-4">
              {/* Location Input */}
              <div className="col-span-1">
                <label className="mb-2 block text-left text-sm text-font-subtle">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Type a location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded border border-border bg-white px-3 py-2 text-font placeholder-font-subtle focus:outline-none focus:ring-2 focus:ring-border-brand"
                />
              </div>

              {/* Property Type Dropdown */}
              <div className="col-span-1">
                <label className="mb-2 block text-left text-sm text-font-subtle">
                  Property Type
                </label>
                <Select.Root value={propertyType} onValueChange={setPropertyType}>
                  <Select.Trigger className="w-full justify-between" aria-label="Select property type">
                    <Select.Value />
                    <Select.TriggerIcon />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {propertyTypeOptions.map((option) => (
                        <Select.Item key={option.value} value={option.value}>
                          <Select.ItemIndicator />
                          <Select.ItemText>{option.label}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select.Root>
              </div>

              {/* Hourly/Monthly Toggle */}
              <div className="col-span-1">
                <label className="mb-2 block text-left text-sm text-font-subtle">
                  Period
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPeriod("hourly")}
                    className={`flex-1 rounded px-3 py-2 font-primary-bold text-sm ${
                      selectedPeriod === "hourly"
                        ? "bg-font text-font-inverse"
                        : "border border-border bg-white text-font"
                    }`}
                  >
                    Hourly
                  </button>
                  <button
                    onClick={() => setSelectedPeriod("monthly")}
                    className={`flex-1 rounded px-3 py-2 font-primary-bold text-sm ${
                      selectedPeriod === "monthly"
                        ? "bg-font text-font-inverse"
                        : "border border-border bg-white text-font"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Space Type Dropdown */}
              <div className="col-span-1">
                <label className="mb-2 block text-left text-sm text-font-subtle">
                  Space Type
                </label>
                <Select.Root value={spaceType} onValueChange={setSpaceType}>
                  <Select.Trigger className="w-full justify-between" aria-label="Select space type">
                    <Select.Value />
                    <Select.TriggerIcon />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {spaceTypeOptions.map((option) => (
                        <Select.Item key={option.value} value={option.value}>
                          <Select.ItemIndicator />
                          <Select.ItemText>{option.label}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select.Root>
              </div>

              {/* Price Range */}
              <div className="col-span-1">
                <label className="mb-2 block text-left text-sm text-font-subtle">
                  Price
                </label>
                <div className="flex items-center justify-center gap-2">
                  {/* Min Price Pill */}
                  <div className="rounded-full bg-font px-3 py-2 text-sm font-primary-bold text-font-inverse">
                    ${priceMin}
                  </div>
                  {/* Divider */}
                  <span className="text-font-subtle">—</span>
                  {/* Max Price Pill */}
                  <div className="rounded-full bg-font px-3 py-2 text-sm font-primary-bold text-font-inverse">
                    ${priceMax}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleSearch}
                className="rounded-full px-8 py-2"
                style={{ backgroundColor: "#000", color: "#fff" }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-white px-8 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Copyright */}
            <div className="min-w-fit text-sm text-font-subtle whitespace-nowrap">
              © SuddenlySpaces, 2024
            </div>

            {/* Company Links */}
            <div className="flex flex-wrap items-center gap-6">
              <span className="font-primary-bold text-sm whitespace-nowrap">Company</span>
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand whitespace-nowrap">About</a>
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand whitespace-nowrap">Careers</a>
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand whitespace-nowrap">Press</a>
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand whitespace-nowrap">Contact Us</a>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-sm text-font-subtle hover:text-font-brand" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href="#" className="text-font-subtle hover:text-font-brand whitespace-nowrap">
                Terms of Use
              </a>
              <a href="#" className="text-font-subtle hover:text-font-brand whitespace-nowrap">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
