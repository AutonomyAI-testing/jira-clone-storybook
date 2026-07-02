import { useState } from "react";

type TabType = "Commercial" | "Residential";
type RentalType = "Hourly" | "Monthly";

export const HeroSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabType>("Commercial");
  const [rentalType, setRentalType] = useState<RentalType>("Hourly");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [priceMin, setPriceMin] = useState(500);
  const [priceMax, setPriceMax] = useState(2500);

  const PRICE_MIN = 0;
  const PRICE_MAX = 5000;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value), priceMax - 100);
    setPriceMin(val);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value), priceMin + 100);
    setPriceMax(val);
  };

  const minPct = ((priceMin - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
  const maxPct = ((priceMax - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

  return (
    <div className="bg-elevation-surface" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <nav
        className="flex items-center justify-between px-8 py-6"
        style={{ borderBottom: "none" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div style={{ width: 32, height: 32 }}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <polygon points="2,8 22,3 25,10 5,15" fill="black" />
              <polygon points="6,18 26,13 29,20 9,25" fill="black" />
            </svg>
          </div>
          <span
            className="font-primary-black text-font"
            style={{ fontSize: "0.875rem", letterSpacing: "0.12em" }}
          >
            SUDDENLY<span className="font-primary-bold">SPACES</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          <button className="font-primary text-sm text-font cursor-pointer">
            Switch to Tenant
          </button>
          <button
            className="font-primary-bold text-sm text-font-inverse bg-black cursor-pointer"
            style={{
              borderRadius: 9999,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            List Your Space
          </button>
          <div className="flex items-center gap-1">
            <span style={{ fontSize: 18 }}>🇨🇦</span>
            <span className="font-primary text-sm text-font">EN</span>
          </div>
          <button className="font-primary text-sm text-font cursor-pointer">Sign Up</button>
          <button className="font-primary text-sm text-font cursor-pointer">Login</button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="flex-grow flex flex-col items-center" style={{ paddingTop: "5rem" }}>
        {/* Headline */}
        <h1
          className="font-primary-black text-center"
          style={{ fontSize: "4.5rem", lineHeight: 1.05, marginBottom: "1rem", color: "#1a1a1a" }}
        >
          Let&apos;s Find Your Ideal Space
        </h1>
        <p
          className="font-primary text-center"
          style={{ fontSize: "1.125rem", marginBottom: "2.5rem", color: "#3d3d3d" }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Tabs: Commercial / Residential */}
        <div className="flex items-center gap-8" style={{ marginBottom: "2rem" }}>
          {(["Commercial", "Residential"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="font-primary-bold cursor-pointer"
              style={{
                fontSize: "0.9375rem",
                color: activeTab === tab ? "#1a1a1a" : "#8590a2",
                paddingBottom: 8,
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid #1a1a1a" : "2px solid transparent",
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div
          className="flex items-center bg-elevation-surface"
          style={{
            border: "1px solid var(--Neutral300)",
            borderRadius: 8,
            padding: "0 0",
            height: 70,
            width: "min(900px, 95vw)",
            maxWidth: "100%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            flexShrink: 0,
          }}
        >
          {/* Location */}
          <div
            className="flex flex-col justify-center"
            style={{
              padding: "0 20px",
              height: "100%",
              minWidth: 170,
              borderRight: "1px solid var(--Neutral300)",
            }}
          >
            <span
              className="font-primary-bold"
              style={{ fontSize: "0.6875rem", color: "var(--Neutral700)", marginBottom: 2 }}
            >
              Location
            </span>
            <input
              type="text"
              placeholder="Type a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="font-primary text-font outline-none bg-transparent"
              style={{
                fontSize: "0.9375rem",
                border: "none",
                padding: 0,
                width: "100%",
                color: "var(--Neutral1100)",
              }}
            />
          </div>

          {/* Property Type */}
          <div
            className="flex flex-col justify-center"
            style={{
              padding: "0 20px",
              height: "100%",
              minWidth: 160,
              borderRight: "1px solid var(--Neutral300)",
            }}
          >
            <span
              className="font-primary-bold"
              style={{ fontSize: "0.6875rem", color: "var(--Neutral700)", marginBottom: 2 }}
            >
              Property Type
            </span>
            <div className="flex items-center justify-between">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="font-primary text-font outline-none bg-transparent cursor-pointer"
                style={{
                  fontSize: "0.9375rem",
                  border: "none",
                  padding: 0,
                  width: "100%",
                  color: propertyType ? "var(--Neutral1100)" : "var(--Neutral500)",
                  appearance: "auto",
                }}
              >
                <option value="">Select</option>
                <option value="office">Office</option>
                <option value="retail">Retail</option>
                <option value="warehouse">Warehouse</option>
                <option value="studio">Studio</option>
              </select>
            </div>
          </div>

          {/* Hourly / Monthly Toggle */}
          <div
            className="flex items-center"
            style={{
              padding: "0 20px",
              height: "100%",
              borderRight: "1px solid var(--Neutral300)",
              gap: 8,
            }}
          >
            {(["Hourly", "Monthly"] as RentalType[]).map((type) => (
              <button
                key={type}
                onClick={() => setRentalType(type)}
                className="font-primary-bold cursor-pointer"
                style={{
                  fontSize: "0.875rem",
                  padding: "6px 14px",
                  borderRadius: 9999,
                  background: rentalType === type ? "black" : "transparent",
                  color: rentalType === type ? "white" : "var(--Neutral500)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Space Type */}
          <div
            className="flex flex-col justify-center"
            style={{
              padding: "0 20px",
              height: "100%",
              minWidth: 160,
              borderRight: "1px solid var(--Neutral300)",
              flex: 1,
            }}
          >
            <span
              className="font-primary-bold"
              style={{ fontSize: "0.6875rem", color: "var(--Neutral700)", marginBottom: 2 }}
            >
              Space Type
            </span>
            <select
              value={spaceType}
              onChange={(e) => setSpaceType(e.target.value)}
              className="font-primary text-font outline-none bg-transparent cursor-pointer"
              style={{
                fontSize: "0.9375rem",
                border: "none",
                padding: 0,
                width: "100%",
                color: spaceType ? "var(--Neutral1100)" : "var(--Neutral500)",
                appearance: "auto",
              }}
            >
              <option value="">Select</option>
              <option value="coworking">Coworking</option>
              <option value="conference">Conference Room</option>
              <option value="event">Event Space</option>
              <option value="private-office">Private Office</option>
            </select>
          </div>

          {/* Price Range */}
          <div
            className="flex flex-col justify-center"
            style={{
              padding: "0 20px",
              height: "100%",
              minWidth: 160,
              borderRight: "1px solid var(--Neutral300)",
            }}
          >
            <span
              className="font-primary-bold"
              style={{ fontSize: "0.6875rem", color: "var(--Neutral700)", marginBottom: 4 }}
            >
              Price
            </span>
            {/* Price labels */}
            <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
              <span
                className="font-primary-bold"
                style={{
                  fontSize: "0.6875rem",
                  background: "black",
                  color: "white",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                ${priceMin.toLocaleString()}
              </span>
              <span
                className="font-primary-bold"
                style={{
                  fontSize: "0.6875rem",
                  background: "black",
                  color: "white",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                ${priceMax.toLocaleString()}
              </span>
            </div>
            {/* Dual range slider */}
            <div style={{ position: "relative", height: 16 }}>
              {/* Track */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "var(--Neutral300)",
                  borderRadius: 9999,
                }}
              />
              {/* Active range */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: `${minPct}%`,
                  right: `${100 - maxPct}%`,
                  height: 3,
                  background: "black",
                  borderRadius: 9999,
                }}
              />
              {/* Min thumb */}
              <input
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                value={priceMin}
                onChange={handleMinChange}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  appearance: "none",
                  background: "transparent",
                  pointerEvents: "auto",
                  zIndex: 2,
                  cursor: "pointer",
                  margin: 0,
                  padding: 0,
                }}
              />
              {/* Max thumb */}
              <input
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                value={priceMax}
                onChange={handleMaxChange}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  appearance: "none",
                  background: "transparent",
                  pointerEvents: "auto",
                  zIndex: 2,
                  cursor: "pointer",
                  margin: 0,
                  padding: 0,
                }}
              />
            </div>
          </div>

          {/* Search Button */}
          <div
            style={{
              padding: "0 20px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              className="font-primary-bold text-font-inverse cursor-pointer"
              style={{
                background: "black",
                borderRadius: 9999,
                padding: "12px 28px",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="flex items-center justify-between"
        style={{
          padding: "24px 40px",
          marginTop: "auto",
          borderTop: "1px solid var(--Neutral200)",
        }}
      >
        {/* Left: Copyright */}
        <span className="font-primary text-sm" style={{ color: "var(--Neutral700)" }}>
          © SuddenlySpaces, 2024
        </span>

        {/* Center: Company links */}
        <div className="flex items-center gap-6">
          <span className="font-primary-bold text-sm text-font">Company</span>
          {["About", "Careers", "Press", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-primary text-sm"
              style={{ color: "var(--Neutral700)", textDecoration: "none" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Social + Legal */}
        <div className="flex items-center gap-4">
          {/* Social icons */}
          <a href="#" aria-label="Facebook" style={{ color: "var(--Neutral700)" }}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" style={{ color: "var(--Neutral700)" }}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" style={{ color: "var(--Neutral700)" }}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" style={{ color: "var(--Neutral700)" }}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
          </a>
          <span style={{ width: 1, height: 16, background: "var(--Neutral300)", display: "inline-block", margin: "0 4px" }} />
          <a href="#" className="font-primary text-sm" style={{ color: "var(--Neutral700)", textDecoration: "none" }}>
            Terms of Use
          </a>
          <a href="#" className="font-primary text-sm" style={{ color: "var(--Neutral700)", textDecoration: "none" }}>
            Privacy Policy
          </a>
        </div>
      </footer>

      {/* Inline style for range thumb */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        input[type="range"]::-webkit-slider-runnable-track {
          background: transparent;
        }
        input[type="range"]::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};
