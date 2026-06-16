import { Error404 } from "@app/components/error-404";
import { useState } from "react";
import cx from "classix";

// Color constants for consistent styling throughout the page
const COLORS = {
  neutral1000: "var(--Neutral1000)",
  neutral700: "var(--Neutral700)",
  neutral600: "var(--Neutral600)",
  neutral300A: "var(--Neutral300A)",
  red700: "var(--Red700)",
};

// Helper function to get billing frequency button styles based on active state
function getFrequencyButtonStyle(isActive: boolean) {
  return {
    backgroundColor: isActive ? COLORS.neutral1000 : "transparent",
    borderColor: isActive ? "transparent" : COLORS.neutral300A,
    color: isActive ? "white" : COLORS.neutral700,
  };
}

// Reusable tab button component to reduce code duplication
function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "border-b-2 px-4 py-2 font-semibold transition-colors",
        isActive ? "border-b-black text-black" : "border-b-transparent"
      )}
      style={{
        color: isActive ? COLORS.neutral1000 : COLORS.neutral600,
      }}
    >
      {label}
    </button>
  );
}

export default function IndexRoute() {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial");
  const [billingFrequency, setBillingFrequency] = useState<"hourly" | "monthly">("hourly");
  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    spaceType: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    // Handle search request - implementation to be added
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold" style={{ color: COLORS.neutral1000 }}>
              SUDDENLYSPACES
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <button className="text-sm" style={{ color: COLORS.neutral700 }}>
              Switch to Tenant
            </button>
            <button className="rounded px-6 py-2 text-sm font-medium cursor-pointer" style={{ backgroundColor: COLORS.neutral1000, color: 'white' }}>List Your Space</button>
            <select className="border-0 bg-white px-2 py-1" style={{ color: COLORS.neutral1000 }}>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            <button className="text-sm" style={{ color: COLORS.neutral700 }}>Sign Up</button>
            <button className="text-sm" style={{ color: COLORS.neutral700 }}>Login</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 
            className="mb-4 text-5xl font-black leading-tight" 
            style={{ color: COLORS.red700 }}
          >
            Let's Find Your Ideal Space
          </h1>
          <p className="mb-12 text-xl" style={{ color: COLORS.neutral700 }}>
            Discover residential and commercial properties tailored to your needs
          </p>

          {/* Search Form */}
          <div className="mx-auto w-full rounded-lg bg-white p-8 shadow-lg">
            {/* Tabs */}
            <div className="mb-8 flex justify-center gap-6">
              <TabButton
                label="Commercial"
                isActive={activeTab === "commercial"}
                onClick={() => setActiveTab("commercial")}
              />
              <TabButton
                label="Residential"
                isActive={activeTab === "residential"}
                onClick={() => setActiveTab("residential")}
              />
            </div>

            {/* Form Fields - Single Row Layout */}
            <div className="flex flex-wrap items-end gap-4">
              {/* Location */}
              <div className="flex-1 min-w-[180px]">
                <label className="mb-2 block text-sm" style={{ color: COLORS.neutral700 }}>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Type a location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full rounded border px-3 py-2"
                  style={{ borderColor: COLORS.neutral300A }}
                />
              </div>

              {/* Property Type */}
              <div className="flex-1 min-w-[140px]">
                <label className="mb-2 block text-sm" style={{ color: COLORS.neutral700 }}>Property Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full rounded border px-3 py-2"
                  style={{ borderColor: COLORS.neutral300A }}
                >
                  <option value="">Select</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="office">Office</option>
                </select>
              </div>

              {/* Billing Frequency */}
              <div className="flex gap-2">
                <button
                  onClick={() => setBillingFrequency("hourly")}
                  className={cx(
                    "rounded px-4 py-2 text-sm font-medium transition-colors",
                    billingFrequency === "hourly"
                      ? "text-white"
                      : "border"
                  )}
                  style={getFrequencyButtonStyle(billingFrequency === "hourly")}
                >
                  Hourly
                </button>
                <button
                  onClick={() => setBillingFrequency("monthly")}
                  className={cx(
                    "rounded px-4 py-2 text-sm font-medium transition-colors",
                    billingFrequency === "monthly"
                      ? "text-white"
                      : "border"
                  )}
                  style={getFrequencyButtonStyle(billingFrequency === "monthly")}
                >
                  Monthly
                </button>
              </div>

              {/* Space Type */}
              <div className="flex-1 min-w-[140px]">
                <label className="mb-2 block text-sm" style={{ color: COLORS.neutral700 }}>Space Type</label>
                <select
                  name="spaceType"
                  value={formData.spaceType}
                  onChange={handleInputChange}
                  className="w-full rounded border px-3 py-2"
                  style={{ borderColor: COLORS.neutral300A }}
                >
                  <option value="">Select</option>
                  <option value="bedroom">Bedroom</option>
                  <option value="livingroom">Living Room</option>
                  <option value="kitchen">Kitchen</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="flex flex-1 min-w-[200px] gap-2 items-center">
                <div className="flex-1">
                  <label className="mb-2 block text-xs" style={{ color: "var(--Neutral700)" }}>Price</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="minPrice"
                      placeholder="$500"
                      value={formData.minPrice}
                      onChange={handleInputChange}
                      className="w-20 rounded border px-2 py-2 text-sm"
                      style={{ borderColor: "var(--Neutral300A)" }}
                    />
                    <input
                      type="text"
                      name="maxPrice"
                      placeholder="$2500"
                      value={formData.maxPrice}
                      onChange={handleInputChange}
                      className="w-20 rounded border px-2 py-2 text-sm"
                      style={{ borderColor: "var(--Neutral300A)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="rounded px-8 py-2 text-sm font-medium cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: COLORS.neutral1000, color: 'white' }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white" style={{ borderTop: `1px solid ${COLORS.neutral300A}` }}>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Company Info */}
            <div>
              <p className="text-sm font-semibold" style={{ color: COLORS.neutral1000 }}>© SuddenlySpaces, 2024</p>
            </div>
            {/* Company Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold" style={{ color: COLORS.neutral1000 }}>Company</h3>
              <div className="flex gap-6">
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>About</a>
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>Careers</a>
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>Press</a>
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>Contact Us</a>
              </div>
            </div>
            {/* Empty divs for spacing */}
            <div />
            <div />
            {/* Social & Legal */}
            <div>
              <div className="flex gap-6 mb-4">
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>Facebook</a>
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>LinkedIn</a>
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>Instagram</a>
                <a href="#" className="text-sm" style={{ color: COLORS.neutral700 }}>YouTube</a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-xs" style={{ color: COLORS.neutral700 }}>Terms of Use</a>
                <a href="#" className="text-xs" style={{ color: COLORS.neutral700 }}>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function CatchBoundary() {
  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}
