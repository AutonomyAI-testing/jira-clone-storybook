import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

type TabType = "commercial" | "residential";

const PRICE_MIN = 0;
const PRICE_MAX = 5000;

const propertyTypes = ["Office", "Retail", "Warehouse", "Co-working", "Studio"];
const spaceTypes = ["Private Office", "Open Space", "Meeting Room", "Event Space"];
const navLinks = ["Company", "About", "Careers", "Press", "Contact Us"];

export const LandingView = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabType>("commercial");
  const [billingType, setBillingType] = useState<"hourly" | "monthly">("hourly");
  const [priceRange, setPriceRange] = useState<[number, number]>([999, 1999]);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [spaceType, setSpaceType] = useState("");

  return (
    <div
      className="flex flex-col"
      style={{ minHeight: "100vh", backgroundColor: "#ffffff", fontFamily: "CircularStdMedium, sans-serif" }}
    >
      {/* Header / Navigation */}
      <header
        className="flex items-center justify-between"
        style={{
          height: 70,
          paddingLeft: 40,
          paddingRight: 40,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #f0f0f0",
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2" style={{ cursor: "pointer" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="10" width="20" height="12" rx="1" fill="#111" />
            <polygon points="12,2 22,10 2,10" fill="#111" />
            <rect x="9" y="14" width="6" height="8" fill="#fff" />
          </svg>
          <span
            className="font-primary-black"
            style={{ fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase", color: "#111" }}
          >
            SuddenlySpaces
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-4">
          <button
            className="font-primary"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#333" }}
          >
            Switch to Tenant
          </button>

          <button
            className="font-primary-bold flex items-center"
            style={{
              backgroundColor: "#111",
              color: "#ffffff",
              border: "none",
              borderRadius: 6,
              padding: "8px 16px",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            List Your Space
          </button>

          <button
            className="font-primary"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#333" }}
          >
            EN
          </button>

          <button
            className="font-primary"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#333" }}
          >
            Sign Up
          </button>

          <button
            className="font-primary"
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#333" }}
          >
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center" style={{ paddingTop: 60, paddingBottom: 60, flex: 1 }}>
        {/* Heading + subtitle */}
        <div
          className="flex flex-col items-center"
          style={{ maxWidth: "min(90%, 900px)", width: "100%", marginBottom: 40, gap: 24 }}
        >
          <h1
            className="font-primary-black"
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              textAlign: "center",
              color: "#000000",
              margin: 0,
              width: "100%",
            }}
          >
            Let&apos;s Find Your Ideal Space
          </h1>
          <p
            className="font-primary-light"
            style={{
              fontSize: 20,
              lineHeight: 1.5,
              textAlign: "center",
              color: "#ef4444",
              margin: 0,
              width: "100%",
            }}
          >
            Discover residential and commercial properties tailored to your needs
          </p>
        </div>

        {/* Search Card */}
        <div
          style={{
            width: "100%",
            maxWidth: 1500,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          {/* Tabs */}
          <div
            className="flex items-center justify-center"
            style={{ marginBottom: 24, gap: 40 }}
          >
            {(["commercial", "residential"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="font-primary-bold"
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? "2px solid #111" : "2px solid transparent",
                  paddingBottom: 8,
                  fontSize: 16,
                  color: activeTab === tab ? "#111" : "#888",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.15s ease",
                }}
              >
                {tab === "commercial" ? "Commercial" : "Residential"}
              </button>
            ))}
          </div>

          {/* Search form card */}
          <div
            className="flex items-center"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 20,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              padding: "20px 24px",
              gap: 0,
            }}
          >
            {/* Location */}
            <div className="flex flex-col" style={{ flex: 1, paddingRight: 20 }}>
              <label
                className="font-primary-bold"
                style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}
              >
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Type a location"
                className="font-primary"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  color: "#111",
                  backgroundColor: "transparent",
                  padding: 0,
                }}
              />
            </div>

            <div style={{ width: 1, backgroundColor: "#e8e8e8", alignSelf: "stretch", marginLeft: 4, marginRight: 4 }} />

            {/* Property Type */}
            <div className="flex flex-col" style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
              <label
                className="font-primary-bold"
                style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}
              >
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="font-primary"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  color: propertyType ? "#111" : "#aaa",
                  backgroundColor: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  appearance: "none",
                }}
              >
                <option value="" disabled>Select</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <span style={{ position: "relative" }}>
                <svg
                  style={{ position: "absolute", right: 0, top: -22, pointerEvents: "none" }}
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M4 6L8 10L12 6" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <div style={{ width: 1, backgroundColor: "#e8e8e8", alignSelf: "stretch", marginLeft: 4, marginRight: 4 }} />

            {/* Billing Toggle - Hourly / Monthly */}
            <div className="flex flex-col items-center" style={{ paddingLeft: 20, paddingRight: 20, flexShrink: 0 }}>
              <div
                className="flex items-center"
                style={{
                  backgroundColor: "#f3f3f3",
                  borderRadius: 9999,
                  padding: 3,
                  gap: 2,
                }}
              >
                <button
                  onClick={() => setBillingType("hourly")}
                  className="font-primary-bold"
                  style={{
                    backgroundColor: billingType === "hourly" ? "#111" : "transparent",
                    color: billingType === "hourly" ? "#ffffff" : "#555",
                    border: "none",
                    borderRadius: 9999,
                    padding: "6px 14px",
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  Hourly
                </button>
                <button
                  onClick={() => setBillingType("monthly")}
                  className="font-primary-bold"
                  style={{
                    backgroundColor: billingType === "monthly" ? "#111" : "transparent",
                    color: billingType === "monthly" ? "#ffffff" : "#555",
                    border: "none",
                    borderRadius: 9999,
                    padding: "6px 14px",
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div style={{ width: 1, backgroundColor: "#e8e8e8", alignSelf: "stretch", marginLeft: 4, marginRight: 4 }} />

            {/* Space Type */}
            <div className="flex flex-col" style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
              <label
                className="font-primary-bold"
                style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}
              >
                Space Type
              </label>
              <select
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="font-primary"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  color: spaceType ? "#111" : "#aaa",
                  backgroundColor: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  appearance: "none",
                }}
              >
                <option value="" disabled>Select</option>
                {spaceTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div style={{ width: 1, backgroundColor: "#e8e8e8", alignSelf: "stretch", marginLeft: 4, marginRight: 4 }} />

            {/* Price Range */}
            <div className="flex flex-col" style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
              <label
                className="font-primary-bold"
                style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}
              >
                Price
              </label>
              <div
                className="font-primary-bold"
                style={{ fontSize: 13, color: "#111", marginBottom: 6 }}
              >
                ${priceRange[0].toLocaleString()} &ndash; ${priceRange[1].toLocaleString()}
              </div>
              <Slider.Root
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={50}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", height: 20 }}
              >
                <Slider.Track
                  style={{
                    backgroundColor: "#e0e0e0",
                    position: "relative",
                    flexGrow: 1,
                    borderRadius: 9999,
                    height: 4,
                  }}
                >
                  <Slider.Range
                    style={{
                      position: "absolute",
                      backgroundColor: "#111",
                      borderRadius: 9999,
                      height: "100%",
                    }}
                  />
                </Slider.Track>
                <Slider.Thumb
                  style={{
                    display: "block",
                    width: 14,
                    height: 14,
                    backgroundColor: "#111",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    boxShadow: "0 0 0 2px #111",
                    cursor: "pointer",
                    outline: "none",
                  }}
                />
                <Slider.Thumb
                  style={{
                    display: "block",
                    width: 14,
                    height: 14,
                    backgroundColor: "#111",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    boxShadow: "0 0 0 2px #111",
                    cursor: "pointer",
                    outline: "none",
                  }}
                />
              </Slider.Root>
            </div>

            {/* Search button */}
            <button
              className="font-primary-bold flex items-center justify-center"
              style={{
                backgroundColor: "#111",
                color: "#ffffff",
                border: "none",
                borderRadius: 12,
                padding: "14px 28px",
                fontSize: 16,
                cursor: "pointer",
                flexShrink: 0,
                marginLeft: 16,
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
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 24,
          paddingBottom: 24,
          borderTop: "1px solid #f0f0f0",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="font-primary-light" style={{ fontSize: 13, color: "#555" }}>
            © SuddenlySpaces, 2024
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-primary-bold" style={{ fontSize: 13, color: "#111" }}>Company</span>
          {navLinks.slice(1).map((link) => (
            <button
              key={link}
              className="font-primary"
              style={{ background: "none", border: "none", fontSize: 13, color: "#555", cursor: "pointer" }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer", color: "#555", display: "flex" }}
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </button>
          {/* LinkedIn */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer", color: "#555", display: "flex" }}
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </button>
          {/* Instagram */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer", color: "#555", display: "flex" }}
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </button>
          {/* YouTube */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer", color: "#555", display: "flex" }}
            aria-label="YouTube"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM10 15V9l5.2 3-5.2 3z" />
            </svg>
          </button>
        </div>

        {/* Legal links */}
        <div className="flex items-center gap-4">
          <button
            className="font-primary"
            style={{ background: "none", border: "none", fontSize: 13, color: "#555", cursor: "pointer" }}
          >
            Terms of Use
          </button>
          <button
            className="font-primary"
            style={{ background: "none", border: "none", fontSize: 13, color: "#555", cursor: "pointer" }}
          >
            Privacy Policy
          </button>
        </div>
      </footer>
    </div>
  );
};
