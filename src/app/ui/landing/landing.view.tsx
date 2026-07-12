import { useState } from "react";

// Logo SVG from Figma design
function SuddenlySpacesLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SuddenlySpaces icon - two overlapping angular shapes/arrows */}
        <path
          d="M3 22 L11 4 L19 22"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6 15 L16 15"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 22 L23 4 L27 14"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        style={{
          fontFamily: "CircularStdBold, sans-serif",
          fontSize: "15px",
          letterSpacing: "1px",
          color: "#111",
          textTransform: "uppercase",
        }}
      >
        SUDDENLY<span style={{ fontFamily: "CircularStdLight, sans-serif" }}>SPACES</span>
      </span>
    </div>
  );
}

// Facebook icon
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// LinkedIn icon
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Instagram icon
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// YouTube icon
function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

// Globe/Flag icon (simple)
function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#111" strokeWidth="1.5" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="#111" strokeWidth="1.5" />
    </svg>
  );
}

// Chevron Down
function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// Price Range Slider
function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (v: [number, number]) => void;
}) {
  const percent1 = ((value[0] - min) / (max - min)) * 100;
  const percent2 = ((value[1] - min) / (max - min)) * 100;

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.min(Number(e.target.value), value[1] - 100);
    onChange([v, value[1]]);
  };
  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(Number(e.target.value), value[0] + 100);
    onChange([value[0], v]);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "48px" }}>
      {/* Price pills - two separate black boxes */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            background: "#111",
            color: "#fff",
            fontSize: "11px",
            padding: "3px 8px",
            borderRadius: "4px",
            fontFamily: "CircularStdMedium, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          ${value[0].toLocaleString()}
        </div>
        <div
          style={{
            background: "#111",
            color: "#fff",
            fontSize: "11px",
            padding: "3px 8px",
            borderRadius: "4px",
            fontFamily: "CircularStdMedium, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          ${value[1].toLocaleString()}
        </div>
      </div>
      {/* Slider track area */}
      <div style={{ position: "relative", height: "20px" }}>
        {/* Track */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            height: "3px",
            width: "100%",
            background: "#e5e7eb",
            borderRadius: "2px",
          }}
        />
        {/* Active track */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            height: "3px",
            left: `${percent1}%`,
            right: `${100 - percent2}%`,
            background: "#111",
            borderRadius: "2px",
          }}
        />
        {/* Min range input */}
        <input
          type="range"
          min={min}
          max={max}
          step={100}
          value={value[0]}
          onChange={handleMin}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            appearance: "none",
            background: "transparent",
            pointerEvents: "none",
            zIndex: 4,
            cursor: "pointer",
          }}
        />
        {/* Max range input */}
        <input
          type="range"
          min={min}
          max={max}
          step={100}
          value={value[1]}
          onChange={handleMax}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            appearance: "none",
            background: "transparent",
            pointerEvents: "none",
            zIndex: 4,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export function LandingView() {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">(
    "commercial"
  );
  const [billingMode, setBillingMode] = useState<"hourly" | "monthly">(
    "hourly"
  );
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Select");
  const [spaceType, setSpaceType] = useState("Select");
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 2500]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        fontFamily: "CircularStdMedium, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 40px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {/* Logo */}
        <SuddenlySpacesLogo />

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#111",
              fontFamily: "CircularStdMedium, sans-serif",
              padding: "4px 0",
            }}
          >
            Switch to Tenant
          </button>
          <button
            style={{
              background: "#111",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#fff",
              fontFamily: "CircularStdMedium, sans-serif",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            List Your Space
          </button>
          {/* Language selector */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#111",
              fontFamily: "CircularStdMedium, sans-serif",
            }}
          >
            <GlobeIcon />
            <span>EN</span>
          </div>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#111",
              fontFamily: "CircularStdMedium, sans-serif",
            }}
          >
            Sign Up
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#111",
              fontFamily: "CircularStdMedium, sans-serif",
            }}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero section */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "60px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontFamily: "CircularStdBlack, sans-serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            color: "red",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.1,
          }}
        >
          Let's Find Your Ideal Space
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "CircularStdLight, sans-serif",
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#444",
            textAlign: "center",
            margin: "0 0 48px 0",
          }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          <button
            onClick={() => setActiveTab("commercial")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontFamily: "CircularStdMedium, sans-serif",
              color: activeTab === "commercial" ? "#111" : "#999",
              fontWeight: activeTab === "commercial" ? 700 : 400,
              paddingBottom: "8px",
              borderBottom:
                activeTab === "commercial"
                  ? "1.5px solid #111"
                  : "1.5px solid transparent",
              transition: "all 0.2s",
            }}
          >
            Commercial
          </button>
          <button
            onClick={() => setActiveTab("residential")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontFamily: "CircularStdMedium, sans-serif",
              color: activeTab === "residential" ? "#111" : "#999",
              fontWeight: activeTab === "residential" ? 700 : 400,
              paddingBottom: "8px",
              borderBottom:
                activeTab === "residential"
                  ? "1.5px solid #111"
                  : "1.5px solid transparent",
              transition: "all 0.2s",
            }}
          >
            Residential
          </button>
        </div>

        {/* Search bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: "12px",
            boxShadow: "none",
            padding: "0",
            width: "100%",
            maxWidth: "900px",
            overflow: "hidden",
          }}
        >
          {/* Location */}
          <div
            style={{
              flex: "1.5",
              padding: "16px 20px",
              minWidth: "160px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#888",
                fontFamily: "CircularStdMedium, sans-serif",
                marginBottom: "4px",
              }}
            >
              Location
            </div>
            <input
              type="text"
              className="location-input"
              placeholder="Type a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "14px",
                color: "#111",
                fontFamily: "CircularStdMedium, sans-serif",
                background: "transparent",
                padding: 0,
              }}
            />
          </div>

          {/* Property Type */}
          <div
            style={{
              flex: "1",
              padding: "16px 20px",
              minWidth: "130px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#888",
                fontFamily: "CircularStdMedium, sans-serif",
                marginBottom: "4px",
              }}
            >
              Property Type
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  color: "#111",
                  fontFamily: "CircularStdMedium, sans-serif",
                }}
              >
                {propertyType}
              </span>
              <ChevronDown />
            </div>
          </div>

          {/* Hourly / Monthly toggle */}
          <div
            style={{
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                background: "#f5f5f5",
                borderRadius: "8px",
                padding: "3px",
              }}
            >
              <button
                onClick={() => setBillingMode("hourly")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontFamily: "CircularStdMedium, sans-serif",
                  background: billingMode === "hourly" ? "#111" : "transparent",
                  color: billingMode === "hourly" ? "#fff" : "#888",
                  boxShadow: "none",
                  transition: "all 0.2s",
                }}
              >
                Hourly
              </button>
              <button
                onClick={() => setBillingMode("monthly")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontFamily: "CircularStdMedium, sans-serif",
                  background:
                    billingMode === "monthly" ? "#111" : "transparent",
                  color: billingMode === "monthly" ? "#fff" : "#888",
                  boxShadow: "none",
                  transition: "all 0.2s",
                }}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Space Type */}
          <div
            style={{
              flex: "1",
              padding: "16px 20px",
              minWidth: "130px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#888",
                fontFamily: "CircularStdMedium, sans-serif",
                marginBottom: "4px",
              }}
            >
              Space Type
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  color: "#111",
                  fontFamily: "CircularStdMedium, sans-serif",
                }}
              >
                {spaceType}
              </span>
              <ChevronDown />
            </div>
          </div>

          {/* Price */}
          <div
            style={{
              flex: "1.2",
              padding: "16px 20px",
              minWidth: "150px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#888",
                fontFamily: "CircularStdMedium, sans-serif",
                marginBottom: "8px",
              }}
            >
              Price
            </div>
            <PriceRangeSlider
              min={0}
              max={5000}
              value={priceRange}
              onChange={setPriceRange}
            />
          </div>

          {/* Search Button */}
          <div style={{ padding: "12px 16px" }}>
            <button
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "16px 28px",
                fontSize: "15px",
                fontFamily: "CircularStdBold, sans-serif",
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
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #f0f0f0",
          padding: "32px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Copyright */}
          <span
            style={{
              fontSize: "13px",
              color: "#555",
              fontFamily: "CircularStdLight, sans-serif",
            }}
          >
            © SuddenlySpaces, 2024
          </span>

          {/* Footer links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#111",
                fontFamily: "CircularStdBold, sans-serif",
              }}
            >
              Company
            </span>
            {["About", "Careers", "Press", "Contact Us"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "#555",
                  fontFamily: "CircularStdLight, sans-serif",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
            {/* Social icons */}
            <div style={{ display: "flex", gap: "16px", color: "#111" }}>
              <a href="#" style={{ color: "#111" }}>
                <FacebookIcon />
              </a>
              <a href="#" style={{ color: "#111" }}>
                <LinkedInIcon />
              </a>
              <a href="#" style={{ color: "#111" }}>
                <InstagramIcon />
              </a>
              <a href="#" style={{ color: "#111" }}>
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Legal links */}
          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="#"
              style={{
                fontSize: "13px",
                color: "#555",
                fontFamily: "CircularStdLight, sans-serif",
                textDecoration: "none",
              }}
            >
              Terms of Use
            </a>
            <a
              href="#"
              style={{
                fontSize: "13px",
                color: "#555",
                fontFamily: "CircularStdLight, sans-serif",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      {/* Range input thumb styles + placeholder color */}
      <style>{`
        .location-input::placeholder {
          color: #aaa;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #111;
          cursor: pointer;
          pointer-events: all;
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #111;
          cursor: pointer;
          pointer-events: all;
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
        }
        input[type='range']::-webkit-slider-runnable-track {
          background: transparent;
        }
        input[type='range']::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
