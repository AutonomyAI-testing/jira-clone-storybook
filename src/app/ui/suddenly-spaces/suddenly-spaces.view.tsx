import { useState } from "react";

// ============================================================
// ICONS
// ============================================================

// --- Logo: four-quadrant geometric mark with diagonal slash (Figma) ---
const SuddenlySpacesLogo = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top-left block with vertical bars */}
    <rect x="0" y="0" width="14" height="14" fill="black"/>
    <line x1="3.5" y1="2" x2="3.5" y2="12" stroke="white" strokeWidth="1.8"/>
    <line x1="7" y1="2" x2="7" y2="12" stroke="white" strokeWidth="1.8"/>
    <line x1="10.5" y1="2" x2="10.5" y2="12" stroke="white" strokeWidth="1.8"/>
    {/* Top-right block */}
    <rect x="20" y="0" width="14" height="14" fill="black"/>
    {/* Bottom-left block */}
    <rect x="0" y="20" width="14" height="14" fill="black"/>
    {/* Bottom-right block with diagonal slash */}
    <rect x="20" y="20" width="14" height="14" fill="black"/>
    <line x1="23" y1="31" x2="31" y2="23" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

// Social icons — 16px, stroked
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

// Chevron for dropdowns
const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// US Flag circle
const USFlag = () => (
  <span style={{ display: "inline-flex", width: 20, height: 20, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
    <svg viewBox="0 0 20 20" width="20" height="20">
      <rect width="20" height="20" fill="#B22234"/>
      <rect y="2.86" width="20" height="1.43" fill="white"/>
      <rect y="5.71" width="20" height="1.43" fill="white"/>
      <rect y="8.57" width="20" height="1.43" fill="white"/>
      <rect y="11.43" width="20" height="1.43" fill="white"/>
      <rect y="14.29" width="20" height="1.43" fill="white"/>
      <rect y="17.14" width="20" height="1.43" fill="white"/>
      <rect width="8" height="11" fill="#3C3B6E"/>
    </svg>
  </span>
);

// ============================================================
// NAVBAR
// ============================================================
const Navbar = () => (
  <nav
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 40px",
      borderBottom: "1px solid #f0f0f0",
      boxSizing: "border-box",
    }}
  >
    {/* Logo mark + wordmark */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <SuddenlySpacesLogo />
      <span
        style={{
          fontFamily: "CircularStdBlack, sans-serif",
          letterSpacing: "0.12em",
          color: "#111",
          fontSize: 13,
          userSelect: "none",
        }}
      >
        SUDDENLYSPACES
      </span>
    </div>

    {/* Right nav */}
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <button style={{ fontFamily: "CircularStdMedium, sans-serif", fontSize: 14, color: "#111", background: "none", border: "none", cursor: "pointer" }}>
        Switch to Tenant
      </button>
      <button
        style={{
          fontFamily: "CircularStdBlack, sans-serif",
          fontSize: 14,
          color: "#fff",
          backgroundColor: "#111",
          border: "none",
          borderRadius: 50,
          padding: "9px 20px",
          cursor: "pointer",
        }}
      >
        List Your Space
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <USFlag />
        <span style={{ fontFamily: "CircularStdMedium, sans-serif", fontSize: 14, color: "#111" }}>EN</span>
      </div>
      <button style={{ fontFamily: "CircularStdMedium, sans-serif", fontSize: 14, color: "#111", background: "none", border: "none", cursor: "pointer" }}>
        Sign Up
      </button>
      <button style={{ fontFamily: "CircularStdMedium, sans-serif", fontSize: 14, color: "#111", background: "none", border: "none", cursor: "pointer" }}>
        Login
      </button>
    </div>
  </nav>
);

// ============================================================
// PRICE RANGE SLIDER
// ============================================================
const PriceRangeSlider = () => {
  const [minVal, setMinVal] = useState(500);
  const [maxVal, setMaxVal] = useState(2500);
  const min = 0;
  const max = 5000;
  const toPercent = (v: number) => ((v - min) / (max - min)) * 100;

  return (
    <div style={{ width: "100%", paddingTop: 28, position: "relative" }}>
      {/* Price label badges */}
      <div
        style={{
          position: "absolute",
          left: `${toPercent(minVal)}%`,
          top: -2,
          transform: "translateX(-50%)",
          backgroundColor: "#111",
          color: "#fff",
          borderRadius: 4,
          padding: "2px 7px",
          fontSize: 10,
          fontFamily: "CircularStdBlack, sans-serif",
          whiteSpace: "nowrap",
          zIndex: 10,
        }}
      >
        ${minVal.toLocaleString()}
      </div>
      <div
        style={{
          position: "absolute",
          left: `${toPercent(maxVal)}%`,
          top: -2,
          transform: "translateX(-50%)",
          backgroundColor: "#111",
          color: "#fff",
          borderRadius: 4,
          padding: "2px 7px",
          fontSize: 10,
          fontFamily: "CircularStdBlack, sans-serif",
          whiteSpace: "nowrap",
          zIndex: 10,
        }}
      >
        ${maxVal.toLocaleString()}
      </div>

      {/* Slider track */}
      <div style={{ position: "relative", height: 16, display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", width: "100%", height: 2, backgroundColor: "#e0e0e0", borderRadius: 2 }} />
        <div
          style={{
            position: "absolute",
            height: 2,
            backgroundColor: "#111",
            borderRadius: 2,
            left: `${toPercent(minVal)}%`,
            width: `${toPercent(maxVal) - toPercent(minVal)}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => setMinVal(Math.min(Number(e.target.value), maxVal - 100))}
          style={{ position: "absolute", width: "100%", height: 2, opacity: 0, zIndex: 5, cursor: "pointer" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => setMaxVal(Math.max(Number(e.target.value), minVal + 100))}
          style={{ position: "absolute", width: "100%", height: 2, opacity: 0, zIndex: 6, cursor: "pointer" }}
        />
        {/* Visual thumb circles */}
        <div
          style={{
            position: "absolute",
            left: `${toPercent(minVal)}%`,
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#fff",
            border: "2px solid #111",
            transform: "translateX(-50%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: `${toPercent(maxVal)}%`,
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#fff",
            border: "2px solid #111",
            transform: "translateX(-50%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

// ============================================================
// SEARCH BAR
// ============================================================
const SearchBar = () => {
  const [propertyType, setPropertyType] = useState("Select");
  const [spaceType, setSpaceType] = useState("Select");
  const [duration, setDuration] = useState<"hourly" | "monthly">("hourly");
  const [location, setLocation] = useState("");

  const divStyle: React.CSSProperties = {
    borderRight: "1px solid #e8e8e8",
    padding: "12px 24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: 0,
  };

  const labelStyle: React.CSSProperties = {
    color: "#999",
    fontSize: 11,
    fontFamily: "CircularStdMedium, sans-serif",
    marginBottom: 3,
  };

  const inputStyle: React.CSSProperties = {
    color: "#111",
    fontSize: 14,
    fontFamily: "CircularStdMedium, sans-serif",
    border: "none",
    outline: "none",
    padding: 0,
    backgroundColor: "transparent",
    width: "100%",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        backgroundColor: "#fff",
        border: "1px solid #dedede",
        borderRadius: 50,
        maxWidth: 980,
        width: "100%",
        margin: "0 auto",
        overflow: "visible",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* Location */}
      <div style={{ ...divStyle, flex: "1 1 160px" }}>
        <span style={labelStyle}>Location</span>
        <input
          type="text"
          placeholder="Type a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ ...inputStyle }}
        />
      </div>

      {/* Property Type */}
      <div style={{ ...divStyle, flex: "1 1 140px" }}>
        <span style={labelStyle}>Property Type</span>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const }}
          >
            <option>Select</option>
            <option>Office</option>
            <option>Retail</option>
            <option>Industrial</option>
            <option>Apartment</option>
            <option>House</option>
          </select>
          <ChevronDown />
        </div>
      </div>

      {/* Duration Toggle */}
      <div
        style={{
          borderRight: "1px solid #e8e8e8",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => setDuration("hourly")}
          style={{
            backgroundColor: duration === "hourly" ? "#111" : "transparent",
            color: duration === "hourly" ? "#fff" : "#888",
            borderRadius: 50,
            padding: "7px 18px",
            fontSize: 13,
            fontFamily: "CircularStdBlack, sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Hourly
        </button>
        <button
          onClick={() => setDuration("monthly")}
          style={{
            backgroundColor: duration === "monthly" ? "#111" : "transparent",
            color: duration === "monthly" ? "#fff" : "#888",
            borderRadius: 50,
            padding: "7px 18px",
            fontSize: 13,
            fontFamily: "CircularStdMedium, sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Monthly
        </button>
      </div>

      {/* Space Type */}
      <div style={{ ...divStyle, flex: "1 1 140px" }}>
        <span style={labelStyle}>Space Type</span>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <select
            value={spaceType}
            onChange={(e) => setSpaceType(e.target.value)}
            style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const }}
          >
            <option>Select</option>
            <option>Coworking</option>
            <option>Private Office</option>
            <option>Meeting Room</option>
            <option>Studio</option>
            <option>Warehouse</option>
          </select>
          <ChevronDown />
        </div>
      </div>

      {/* Price Range */}
      <div
        style={{
          borderRight: "1px solid #e8e8e8",
          padding: "12px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: "1 1 190px",
          overflow: "visible",
          position: "relative",
        }}
      >
        <span style={labelStyle}>Price</span>
        <PriceRangeSlider />
      </div>

      {/* Search Button */}
      <div style={{ display: "flex", alignItems: "center", padding: 6, flexShrink: 0 }}>
        <button
          style={{
            backgroundColor: "#111",
            color: "#fff",
            borderRadius: 50,
            padding: "14px 30px",
            fontSize: 15,
            fontFamily: "CircularStdBlack, sans-serif",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

// ============================================================
// HERO SECTION
// ============================================================
const Hero = () => {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial");

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        padding: "72px 24px 64px",
        boxSizing: "border-box",
      }}
    >
      {/* Main heading */}
      <h1
        style={{
          fontSize: "clamp(38px, 5.5vw, 72px)",
          color: "red",
          lineHeight: 1.1,
          marginBottom: 14,
          fontFamily: "CircularStdBlack, sans-serif",
          textAlign: "center",
          margin: "0 0 14px",
        }}
      >
        Let's Find Your Ideal Space
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "clamp(15px, 1.3vw, 18px)",
          color: "#111",
          marginBottom: 44,
          fontFamily: "CircularStdMedium, sans-serif",
          textAlign: "center",
          margin: "0 0 44px",
        }}
      >
        Discover residential and commercial properties tailored to your needs
      </p>

      {/* Tab toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 32 }}>
        <button
          onClick={() => setActiveTab("commercial")}
          style={{
            color: activeTab === "commercial" ? "#111" : "#ccc",
            paddingBottom: 4,
            fontSize: 14,
            fontFamily:
              activeTab === "commercial"
                ? "CircularStdBold, sans-serif"
                : "CircularStdMedium, sans-serif",
            background: "none",
            border: "none",
            borderBottom:
              activeTab === "commercial" ? "2px solid #111" : "2px solid transparent",
            cursor: "pointer",
          }}
        >
          Commercial
        </button>
        <button
          onClick={() => setActiveTab("residential")}
          style={{
            color: activeTab === "residential" ? "#111" : "#ccc",
            paddingBottom: 4,
            fontSize: 14,
            fontFamily:
              activeTab === "residential"
                ? "CircularStdBold, sans-serif"
                : "CircularStdMedium, sans-serif",
            background: "none",
            border: "none",
            borderBottom:
              activeTab === "residential" ? "2px solid #111" : "2px solid transparent",
            cursor: "pointer",
          }}
        >
          Residential
        </button>
      </div>

      {/* Search bar */}
      <SearchBar />
    </section>
  );
};

// ============================================================
// FOOTER
// ============================================================
const Footer = () => (
  <footer
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderTop: "1px solid #f0f0f0",
      boxSizing: "border-box",
    }}
  >
    {/* Copyright */}
    <span style={{ color: "#555", fontSize: 13, fontFamily: "CircularStdMedium, sans-serif", flexShrink: 0 }}>
      © SuddenlySpaces, 2024
    </span>

    {/* Company links */}
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <span style={{ color: "#111", fontSize: 14, fontFamily: "CircularStdBold, sans-serif" }}>
        Company
      </span>
      {["About", "Careers", "Press", "Contact Us"].map((link) => (
        <a
          key={link}
          href="#"
          style={{
            color: "#111",
            fontSize: 13,
            fontFamily: "CircularStdMedium, sans-serif",
            textDecoration: "none",
          }}
        >
          {link}
        </a>
      ))}
    </div>

    {/* Social icons — filled black circles with white icons (Figma) */}
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {[
        { icon: <FacebookIcon />, label: "Facebook" },
        { icon: <LinkedInIcon />, label: "LinkedIn" },
        { icon: <InstagramIcon />, label: "Instagram" },
        { icon: <YouTubeIcon />, label: "YouTube" },
      ].map(({ icon, label }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          {icon}
        </a>
      ))}
    </div>

    {/* Legal links */}
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
      <a
        href="#"
        style={{ color: "#555", fontSize: 13, fontFamily: "CircularStdMedium, sans-serif", textDecoration: "none" }}
      >
        Terms of Use
      </a>
      <a
        href="#"
        style={{ color: "#555", fontSize: 13, fontFamily: "CircularStdMedium, sans-serif", textDecoration: "none" }}
      >
        Privacy Policy
      </a>
    </div>
  </footer>
);

// ============================================================
// MAIN PAGE
// ============================================================
export const SuddenlySpacesView = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#fff" }}>
    <Navbar />
    <Hero />
    <Footer />
  </div>
);
