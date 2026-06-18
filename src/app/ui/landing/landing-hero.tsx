import { useState } from "react";
import cx from "classix";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPenFancy,
} from "react-icons/fa";

// Color palette for the landing page
const COLORS = {
  // Primary brand colors
  primary: "#1D4ED8",
  primaryLight: "#3B82F6",
  // Neutrals
  black: "#1a1a1a",
  white: "#ffffff",
  gray: "#999999",
  grayLight: "#d0d0d0",
  grayLighter: "#f0f0f0",
  grayLightest: "#f9f9f9",
  border: "#e5e5e5",
} as const;

export const LandingHero = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">(
    "commercial"
  );
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Select");
  const [rentalPeriod, setRentalPeriod] = useState<"hourly" | "monthly">(
    "hourly"
  );
  const [spaceType, setSpaceType] = useState("Select");
  const [priceMin, setPriceMin] = useState(500);
  const [priceMax, setPriceMax] = useState(2500);

  const handleSearch = () => {
    // TODO: Implement search logic with API call
  };

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: COLORS.white }}
    >
      {/* Navigation Header */}
      <header
        className="flex items-center justify-between border-b px-8 py-4"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-center gap-2">
          <FaPenFancy size={20} style={{ color: COLORS.primary }} />
          <div className="text-xl font-bold" style={{ color: COLORS.primary }}>
            SUDDENLYSPACES
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <button
            className="font-medium"
            style={{ color: COLORS.primaryLight }}
          >
            Switch to Tenant
          </button>
          <button
            className="flex cursor-pointer items-center justify-center gap-2 rounded p-2 font-medium"
            style={{ backgroundColor: COLORS.black, color: COLORS.white }}
          >
            List Your Space
          </button>
          <button
            className="font-medium"
            style={{ color: COLORS.primaryLight }}
          >
            🇬🇧 EN
          </button>
          <button
            className="font-medium"
            style={{ color: COLORS.primaryLight }}
          >
            Sign Up
          </button>
          <button
            className="font-medium"
            style={{ color: COLORS.primaryLight }}
          >
            Login
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-8 py-16">
        {/* Hero Headline and Subtitle */}
        <div className="mb-12 max-w-2xl text-center">
          <h1
            className="mb-4 text-5xl font-bold leading-tight"
            style={{ color: COLORS.primary }}
          >
            Let's Find Your Ideal Space
          </h1>
          <p className="text-lg" style={{ color: COLORS.primaryLight }}>
            Discover residential and commercial properties tailored to your
            needs
          </p>
        </div>

        {/* Tabs for property type selection */}
        <div className="mb-8 flex gap-8">
          <button
            onClick={() => setActiveTab("commercial")}
            className={cx(
              "pb-2 font-medium transition-all",
              activeTab === "commercial" && "border-b-2"
            )}
            style={{
              color: activeTab === "commercial" ? COLORS.primary : COLORS.gray,
              borderColor:
                activeTab === "commercial" ? COLORS.primary : "transparent",
            }}
          >
            Commercial
          </button>
          <button
            onClick={() => setActiveTab("residential")}
            className={cx(
              "pb-2 font-medium transition-all",
              activeTab === "residential" && "border-b-2"
            )}
            style={{
              color: activeTab === "residential" ? COLORS.primary : COLORS.gray,
              borderColor:
                activeTab === "residential" ? COLORS.primary : "transparent",
            }}
          >
            Residential
          </button>
        </div>

        {/* Search Filter Bar */}
        <div
          className="w-full max-w-6xl rounded-lg bg-white p-6"
          style={{ border: `1px solid ${COLORS.border}` }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:items-end md:gap-3">
            {/* Location Input */}
            <div className="md:col-span-1">
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: COLORS.primaryLight }}
              >
                Location
              </label>
              <input
                type="text"
                placeholder="Type a location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded border px-3 py-2 text-sm"
                style={{ borderColor: COLORS.grayLight }}
              />
            </div>

            {/* Property Type Dropdown */}
            <div className="md:col-span-1">
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: COLORS.primaryLight }}
              >
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded border px-3 py-2 text-sm"
                style={{ borderColor: COLORS.grayLight }}
              >
                <option>Select</option>
                <option>Office</option>
                <option>Apartment</option>
                <option>House</option>
              </select>
            </div>

            {/* Hourly/Monthly Toggle */}
            <div className="md:col-span-1">
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: COLORS.primaryLight }}
              >
                Period
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setRentalPeriod("hourly")}
                  className="flex-1 rounded px-3 py-2 text-sm font-medium transition-all"
                  style={{
                    backgroundColor:
                      rentalPeriod === "hourly"
                        ? COLORS.black
                        : COLORS.grayLighter,
                    color: rentalPeriod === "hourly" ? COLORS.white : "#666666",
                  }}
                >
                  Hourly
                </button>
                <button
                  onClick={() => setRentalPeriod("monthly")}
                  className="flex-1 rounded px-3 py-2 text-sm font-medium transition-all"
                  style={{
                    backgroundColor:
                      rentalPeriod === "monthly"
                        ? COLORS.black
                        : COLORS.grayLighter,
                    color:
                      rentalPeriod === "monthly" ? COLORS.white : "#666666",
                  }}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Space Type Dropdown */}
            <div className="md:col-span-1">
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: COLORS.primaryLight }}
              >
                Space Type
              </label>
              <select
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full rounded border px-3 py-2 text-sm"
                style={{ borderColor: COLORS.grayLight }}
              >
                <option>Select</option>
                <option>Studio</option>
                <option>1 Bedroom</option>
                <option>2+ Bedrooms</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="md:col-span-1">
              <label
                className="mb-2 block text-sm font-medium"
                style={{ color: COLORS.primaryLight }}
              >
                Price
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="$500"
                  readOnly
                  className="w-24 rounded-full border px-3 py-2 text-center text-sm"
                  style={{
                    borderColor: COLORS.grayLight,
                    backgroundColor: COLORS.grayLightest,
                  }}
                />
                <span style={{ color: COLORS.gray }}>—</span>
                <input
                  type="text"
                  defaultValue="$2500"
                  readOnly
                  className="w-24 rounded-full border px-3 py-2 text-center text-sm"
                  style={{
                    borderColor: COLORS.grayLight,
                    backgroundColor: COLORS.grayLightest,
                  }}
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1">
              <button
                onClick={handleSearch}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded px-4 py-2 font-medium transition-all"
                style={{ backgroundColor: COLORS.black, color: COLORS.white }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t px-8 py-8"
        style={{ borderColor: COLORS.border }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8">
          {/* Left: Copyright */}
          <div style={{ color: COLORS.primaryLight }} className="text-sm">
            © SuddenlySpaces, 2024
          </div>

          {/* Center: Company Links */}
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-sm font-medium"
              style={{ color: COLORS.primary }}
            >
              Company
            </a>
            <a
              href="#"
              className="text-sm"
              style={{ color: COLORS.primaryLight }}
            >
              About
            </a>
            <a
              href="#"
              className="text-sm"
              style={{ color: COLORS.primaryLight }}
            >
              Careers
            </a>
            <a
              href="#"
              className="text-sm"
              style={{ color: COLORS.primaryLight }}
            >
              Press
            </a>
            <a
              href="#"
              className="text-sm"
              style={{ color: COLORS.primaryLight }}
            >
              Contact Us
            </a>
          </div>

          {/* Right: Social Links and Legal */}
          <div className="flex items-center justify-end gap-4">
            <a href="#" className="text-font hover:opacity-70">
              <FaFacebook size={18} style={{ color: COLORS.primary }} />
            </a>
            <a href="#" className="text-font hover:opacity-70">
              <FaLinkedin size={18} style={{ color: COLORS.primary }} />
            </a>
            <a href="#" className="text-font hover:opacity-70">
              <FaInstagram size={18} style={{ color: COLORS.primary }} />
            </a>
            <a href="#" className="text-font hover:opacity-70">
              <FaYoutube size={18} style={{ color: COLORS.primary }} />
            </a>
            <span style={{ color: COLORS.grayLight }}>|</span>
            <a
              href="#"
              className="text-sm"
              style={{ color: COLORS.primaryLight }}
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="text-sm"
              style={{ color: COLORS.primaryLight }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
