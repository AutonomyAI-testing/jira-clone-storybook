import { useState } from "react";

// Logo SVG inline from Figma asset
const SuddenlySpacesLogo = () => (
  <svg width="22" height="22" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#ss-logo-clip)">
      <path
        d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="ss-logo-clip">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Social icons as inline SVG
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="16" viewBox="0 0 24 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.495 2.205a3.02 3.02 0 00-2.122-2.134C19.505 0 12 0 12 0s-7.505 0-9.374.07A3.02 3.02 0 00.505 2.205C0 4.087 0 8.013 0 8.013s0 3.926.505 5.808a3.02 3.02 0 002.122 2.134C4.495 16.027 12 16.027 12 16.027s7.505 0 9.373-.072a3.02 3.02 0 002.122-2.134C24 11.925 24 8 24 8s0-3.926-.505-5.795zM9.545 11.43V4.597l6.272 3.416-6.272 3.416z"/>
  </svg>
);

// US flag for language selector
const USFlagIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="12" rx="1" fill="#BD3D44"/>
    <rect y="1" width="16" height="1.5" fill="white"/>
    <rect y="4" width="16" height="1.5" fill="white"/>
    <rect y="7" width="16" height="1.5" fill="white"/>
    <rect y="10" width="16" height="1.5" fill="white"/>
    <rect width="7" height="6" fill="#1A47B8"/>
    <circle cx="1" cy="1" r="0.5" fill="white"/>
    <circle cx="3" cy="1" r="0.5" fill="white"/>
    <circle cx="5" cy="1" r="0.5" fill="white"/>
    <circle cx="2" cy="2.5" r="0.5" fill="white"/>
    <circle cx="4" cy="2.5" r="0.5" fill="white"/>
    <circle cx="6" cy="2.5" r="0.5" fill="white"/>
    <circle cx="1" cy="4" r="0.5" fill="white"/>
    <circle cx="3" cy="4" r="0.5" fill="white"/>
    <circle cx="5" cy="4" r="0.5" fill="white"/>
  </svg>
);

// Chevron down icon
const ChevronDown = () => (
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5.5 6L10 1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function SuddenlySpacesView() {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial");
  const [pricing, setPricing] = useState<"hourly" | "monthly">("hourly");
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2500);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [spaceType, setSpaceType] = useState("");

  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* White design card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "1200px",
          overflow: "hidden",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {/* ── Header ── */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 40px",
            borderBottom: "1px solid #f4f4f4",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#000000" }}>
            <SuddenlySpacesLogo />
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: "#000000",
            }}>
              SUDDENLY<span style={{ fontWeight: 300 }}>SPACES</span>
            </span>
          </a>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href="#" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "24px",
              color: "#000000",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Switch to Tenant
            </a>

            <a href="#" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "24px",
              padding: "6px 24px",
              borderRadius: "1000px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              List Your Space
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <USFlagIcon />
              <span style={{
                fontFamily: "'Plus Jakarta Sans', 'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#000000",
              }}>
                EN
              </span>
            </div>

            <a href="#" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "24px",
              color: "#1c252e",
              textDecoration: "none",
            }}>
              Sign Up
            </a>
            <a href="#" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "24px",
              color: "#1c252e",
              textDecoration: "none",
            }}>
              Login
            </a>
          </nav>
        </header>

        {/* ── Hero ── */}
        <main style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "120px",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}>
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: "1.2",
            color: "#ff0000",
            textAlign: "center",
            margin: 0,
            marginBottom: "20px",
          }}>
            Let's Find Your Ideal Space
          </h1>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "40px",
            color: "#000000",
            textAlign: "center",
            margin: 0,
            marginBottom: "48px",
          }}>
            Discover residential and commercial properties tailored to your needs
          </p>

          {/* ── Tabs ── */}
          <div style={{ marginBottom: "32px" }}>
            {/* Tab switcher pill */}
            <div style={{
              display: "inline-flex",
              backgroundColor: "#f4f6f8",
              borderRadius: "100px",
              padding: "8px",
              gap: "0",
            }}>
              <button
                onClick={() => setActiveTab("commercial")}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: activeTab === "commercial" ? 500 : 400,
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: activeTab === "commercial" ? "#ffffff" : "#637381",
                  backgroundColor: activeTab === "commercial" ? "#000000" : "transparent",
                  borderRadius: "100px",
                  border: "none",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveTab("residential")}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: activeTab === "residential" ? "#ffffff" : "#637381",
                  backgroundColor: activeTab === "residential" ? "#000000" : "transparent",
                  borderRadius: "100px",
                  border: "none",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Residential
              </button>
            </div>
          </div>

          {/* ── Search Bar Card ── */}
          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #f4f6f8",
            borderRadius: "10px",
            boxShadow: "0px 1.85px 3.15px rgba(0,0,0,0.005), 0px 8.15px 6.52px rgba(0,0,0,0.008), 0px 20px 13px rgba(0,0,0,0.01), 0px 38.52px 25.48px rgba(0,0,0,0.012), 0px 64.81px 46.85px rgba(0,0,0,0.015), 0px 100px 80px rgba(0,0,0,0.02)",
            padding: "15px 32px 15px 32px",
            display: "flex",
            alignItems: "center",
            gap: "0",
            width: "100%",
            maxWidth: "1050px",
          }}>
            {/* Location */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#637381",
                marginBottom: "4px",
              }}>
                Location
              </div>
              <input
                type="text"
                placeholder="Type a location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#000000",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  padding: 0,
                  backgroundColor: "transparent",
                }}
              />
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "48px", backgroundColor: "#f4f6f8", margin: "0 14px", flexShrink: 0 }} />

            {/* Property Type */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#637381",
                marginBottom: "4px",
              }}>
                Property Type
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }}>
                <select
                  value={propertyType}
                  onChange={e => setPropertyType(e.target.value)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#000000",
                    border: "none",
                    outline: "none",
                    appearance: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    paddingRight: "18px",
                    flex: 1,
                  }}
                >
                  <option value="">Select</option>
                  <option value="office">Office</option>
                  <option value="retail">Retail</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="apartment">Apartment</option>
                </select>
                <div style={{ position: "absolute", right: 0, pointerEvents: "none" }}>
                  <ChevronDown />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "48px", backgroundColor: "#f4f6f8", margin: "0 14px", flexShrink: 0 }} />

            {/* Hourly / Monthly toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "0", flexShrink: 0 }}>
              <button
                onClick={() => setPricing("hourly")}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: pricing === "hourly" ? "#ffffff" : "#637381",
                  backgroundColor: pricing === "hourly" ? "#000000" : "transparent",
                  borderRadius: "100px",
                  border: "none",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Hourly
              </button>
              <button
                onClick={() => setPricing("monthly")}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: pricing === "monthly" ? "#ffffff" : "#637381",
                  backgroundColor: pricing === "monthly" ? "#000000" : "transparent",
                  borderRadius: "100px",
                  border: "none",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Monthly
              </button>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "48px", backgroundColor: "#f4f6f8", margin: "0 14px", flexShrink: 0 }} />

            {/* Space Type */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#637381",
                marginBottom: "4px",
              }}>
                Space Type
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }}>
                <select
                  value={spaceType}
                  onChange={e => setSpaceType(e.target.value)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#000000",
                    border: "none",
                    outline: "none",
                    appearance: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    paddingRight: "18px",
                    flex: 1,
                  }}
                >
                  <option value="">Select</option>
                  <option value="private-office">Private Office</option>
                  <option value="coworking">Co-working</option>
                  <option value="conference">Conference Room</option>
                  <option value="studio">Studio</option>
                </select>
                <div style={{ position: "absolute", right: 0, pointerEvents: "none" }}>
                  <ChevronDown />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "48px", backgroundColor: "#f4f6f8", margin: "0 14px", flexShrink: 0 }} />

            {/* Price Range */}
            <div style={{ flexShrink: 0, minWidth: "180px" }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#637381",
                marginBottom: "4px",
              }}>
                Price
              </div>
              {/* Price labels */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                {/* Min price badge */}
                <div style={{
                  backgroundColor: "#1c252e",
                  borderRadius: "4px",
                  padding: "3px 6px",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#ffffff",
                  }}>
                    ${minPrice}
                  </span>
                </div>
                {/* Slider track */}
                <div style={{ position: "relative", flex: 1, height: "6px" }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "6px",
                    backgroundColor: "#919eab",
                    borderRadius: "500px",
                    opacity: 0.11,
                  }} />
                  <div style={{
                    position: "absolute",
                    top: 0,
                    height: "6px",
                    left: `${((minPrice - 0) / 5000) * 100}%`,
                    right: `${100 - ((maxPrice / 5000) * 100)}%`,
                    backgroundColor: "#000000",
                    borderRadius: "500px",
                  }} />
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    step={100}
                    value={minPrice}
                    onChange={e => setMinPrice(Math.min(Number(e.target.value), maxPrice - 100))}
                    style={{
                      position: "absolute",
                      top: "-5px",
                      left: 0,
                      right: 0,
                      width: "100%",
                      opacity: 0,
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    step={100}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Math.max(Number(e.target.value), minPrice + 100))}
                    style={{
                      position: "absolute",
                      top: "-5px",
                      left: 0,
                      right: 0,
                      width: "100%",
                      opacity: 0,
                      cursor: "pointer",
                      zIndex: 3,
                    }}
                  />
                </div>
                {/* Max price badge */}
                <div style={{
                  backgroundColor: "#1c252e",
                  borderRadius: "4px",
                  padding: "3px 6px",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#ffffff",
                  }}>
                    ${maxPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div style={{ marginLeft: "20px", flexShrink: 0 }}>
              <button
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "26px",
                  padding: "12px 32px",
                  borderRadius: "1000px",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "opacity 0.15s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Search
              </button>
            </div>
          </div>
        </main>

        {/* ── Footer ── */}
        <footer style={{
          backgroundColor: "#ffffff",
          padding: "24px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #f4f6f8",
        }}>
          {/* Copyright */}
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#000000",
          }}>
            © SuddenlySpaces, 2024
          </span>

          {/* Company links */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#000000",
              fontFamily: "'Montserrat', sans-serif",
            }}>
              Company
            </span>
            {["About", "Careers", "Press", "Contact Us"].map(link => (
              <a key={link} href="#" style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#000000",
                textDecoration: "none",
              }}>
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#000000" }}>
            <a href="#" aria-label="Facebook" style={{ color: "#000000" }}><FacebookIcon /></a>
            <a href="#" aria-label="LinkedIn" style={{ color: "#000000" }}><LinkedInIcon /></a>
            <a href="#" aria-label="Instagram" style={{ color: "#000000" }}><InstagramIcon /></a>
            <a href="#" aria-label="YouTube" style={{ color: "#000000" }}><YouTubeIcon /></a>
          </div>

          {/* Legal */}
          <div style={{ display: "flex", gap: "24px" }}>
            {["Terms of Use", "Privacy Policy"].map(link => (
              <a key={link} href="#" style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#000000",
                textDecoration: "none",
              }}>
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
