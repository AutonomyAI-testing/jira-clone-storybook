import { useState } from "react";
import cx from "classix";

// Vertical divider styling for search panel inputs
const DIVIDER_STYLE = {
  width: "1px",
  height: "44px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

// Divider component for cleaner layout
const VerticalDivider = () => <div style={DIVIDER_STYLE} />;

export const Hero = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">(
    "commercial"
  );
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16">
      <div className="max-w-5xl w-full">
        {/* Heading with red font color for brand identity */}
        <h1 className="font-primary-black text-6xl" style={{ color: "var(--Red600)" }}>
          Let's Find Your Ideal Space
        </h1>

        {/* Subtitle with red font color matching heading */}
        <p
          className="mt-6 font-primary"
          style={{ fontSize: "26px", textAlign: "left", color: "var(--Red600)" }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Tab Navigation */}
        <div className="mt-12 flex gap-8 border-b border-border">
          <button
            onClick={() => setActiveTab("commercial")}
            className={cx(
              "pb-2 text-center font-primary text-base transition-colors",
              activeTab === "commercial"
                ? "border-b-2 border-font"
                : "border-b-2 border-transparent"
            )}
          >
            Commercial
          </button>
          <button
            onClick={() => setActiveTab("residential")}
            className={cx(
              "pb-2 text-center font-primary text-base transition-colors",
              activeTab === "residential"
                ? "border-b-2 border-font"
                : "border-b-2 border-transparent"
            )}
          >
            Residential
          </button>
        </div>

        {/* Search Panel */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <div className="flex items-center gap-0">
            {/* Location Input */}
            <div className="flex-1">
              <label className="block text-sm font-primary-bold mb-2">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className={cx(
                  "w-full border-none bg-transparent py-2 px-4 font-primary text-base",
                  "focus:outline-none"
                )}
              />
            </div>

            <VerticalDivider />

            {/* Property Type Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-primary-bold mb-2">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className={cx(
                  "w-full border-none bg-transparent py-2 px-4 font-primary text-base appearance-none",
                  "cursor-pointer focus:outline-none"
                )}
              >
                <option value="">Select property type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="office">Office</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <VerticalDivider />

            {/* Price Range Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-primary-bold mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className={cx(
                  "w-full border-none bg-transparent py-2 px-4 font-primary text-base appearance-none",
                  "cursor-pointer focus:outline-none"
                )}
              >
                <option value="">Select price range</option>
                <option value="0-100k">$0 - $100k</option>
                <option value="100k-250k">$100k - $250k</option>
                <option value="250k-500k">$250k - $500k</option>
                <option value="500k+">$500k+</option>
              </select>
            </div>

            <VerticalDivider />

            {/* Search Button */}
            <div className="flex items-end pb-0 pl-4">
              <button
                className={cx(
                  "h-[44px] px-8 rounded font-primary-bold text-base text-white transition-colors",
                  "hover:opacity-90 active:opacity-80"
                )}
                style={{
                  backgroundColor: "var(--Red600)",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
