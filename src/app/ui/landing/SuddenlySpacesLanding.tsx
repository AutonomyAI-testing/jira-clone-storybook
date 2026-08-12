import { useState } from "react";

// Social icons as inline SVG components
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073C24 5.40365 18.629 0 12 0C5.37097 0 0 5.40365 0 12.073C0 18.0988 4.38823 23.0935 10.125 24V15.563H7.07661V12.073H10.125V9.41265C10.125 6.38751 11.9174 4.71627 14.6576 4.71627C15.9706 4.71627 17.3439 4.95189 17.3439 4.95189V7.92146H15.8303C14.3398 7.92146 13.875 8.85225 13.875 9.80669V12.073H17.2031L16.6708 15.563H13.875V24C19.6118 23.0935 24 18.0988 24 12.073Z" fill="black"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="black"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.686 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.948 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z" fill="black"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186C23.2 5.006 22.273 4.079 21.093 3.782C19.251 3.3 12 3.3 12 3.3C12 3.3 4.749 3.3 2.907 3.782C1.727 4.079 0.8 5.006 0.502 6.186C0 8.07 0 12 0 12C0 12 0 15.93 0.502 17.814C0.8 18.994 1.727 19.921 2.907 20.218C4.749 20.7 12 20.7 12 20.7C12 20.7 19.251 20.7 21.093 20.218C22.273 19.921 23.2 18.994 23.498 17.814C24 15.93 24 12 24 12C24 12 24 8.07 23.498 6.186ZM9.6 15.6V8.4L15.897 12L9.6 15.6Z" fill="black"/>
  </svg>
);

const LogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#logo-clip)">
      <path d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="logo-clip">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5.5 5L10 1" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const USFlagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#flag-clip)">
      <path d="M0 0H16V16H0" fill="#BD3D44"/>
      <path d="M0 1.8125H16M0 4.28125H16M0 6.75H16M0 9.21875H16M0 11.6875H16M0 14.1562H16" stroke="white" strokeWidth="1.25"/>
      <path d="M0 0H12.1875V8.59375H0V0Z" fill="#002868"/>
    </g>
    <defs>
      <clipPath id="flag-clip">
        <rect width="16" height="16" rx="8" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export function SuddenlySpacesLanding() {
  const [activePropertyTab, setActivePropertyTab] = useState<"commercial" | "residential">("commercial");
  const [activeDurationTab, setActiveDurationTab] = useState<"hourly" | "monthly">("hourly");
  const [priceMin, setPriceMin] = useState(500);
  const [priceMax, setPriceMax] = useState(2500);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [spaceType, setSpaceType] = useState("");

  const PRICE_RANGE_MIN = 0;
  const PRICE_RANGE_MAX = 5000;

  const minPercent = ((priceMin - PRICE_RANGE_MIN) / (PRICE_RANGE_MAX - PRICE_RANGE_MIN)) * 100;
  const maxPercent = ((priceMax - PRICE_RANGE_MIN) / (PRICE_RANGE_MAX - PRICE_RANGE_MIN)) * 100;

  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "0.8px solid #f4f4f4",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "40px",
          paddingRight: "40px",
          height: "70px",
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <LogoIcon />
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.05em",
              color: "#000000",
            }}
          >
            SUDDENLY<span style={{ fontWeight: 400 }}>SPACES</span>
          </span>
        </div>

        {/* Nav Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span className="ss-nav-link" style={{ color: "#000000" }}>Switch to Tenant</span>

          {/* List Your Space Button */}
          <button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "24px",
              borderRadius: "1000px",
              border: "none",
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingTop: "6px",
              paddingBottom: "6px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            List Your Space
          </button>

          {/* Language */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
            <USFlagIcon />
            <span
              style={{
                fontFamily: "Plus Jakarta Sans, Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "14px",
                color: "#000000",
              }}
            >
              EN
            </span>
          </div>

          <span className="ss-nav-link">Sign Up</span>
          <span className="ss-nav-link">Login</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Hero Text */}
        <div style={{ textAlign: "center", marginBottom: "48px", width: "100%", maxWidth: "1000px", padding: "0 32px" }}>
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "1.2",
              color: "#000000",
              margin: "0 0 16px 0",
            }}
          >
            <span style={{ color: "#ff0000" }}>Let&rsquo;s Find</span> Your Ideal Space
          </h1>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "26px",
              lineHeight: "40px",
              color: "#000000",
              margin: 0,
            }}
          >
            Discover residential and commercial properties tailored to your needs
          </p>
        </div>

        {/* Tab Switcher - Commercial / Residential */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", gap: "24px", borderBottom: "1.5px solid #e5e7eb" }}>
            <button
              onClick={() => setActivePropertyTab("commercial")}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: activePropertyTab === "commercial" ? 500 : 400,
                fontSize: "14px",
                lineHeight: "22px",
                color: activePropertyTab === "commercial" ? "#1c252e" : "#637381",
                background: "none",
                border: "none",
                borderBottom: activePropertyTab === "commercial" ? "2px solid #1c252e" : "2px solid transparent",
                marginBottom: "-1.5px",
                paddingBottom: "8px",
                paddingLeft: "4px",
                paddingRight: "4px",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              Commercial
            </button>
            <button
              onClick={() => setActivePropertyTab("residential")}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: activePropertyTab === "residential" ? 500 : 400,
                fontSize: "14px",
                lineHeight: "22px",
                color: activePropertyTab === "residential" ? "#1c252e" : "#637381",
                background: "none",
                border: "none",
                borderBottom: activePropertyTab === "residential" ? "2px solid #1c252e" : "2px solid transparent",
                marginBottom: "-1.5px",
                paddingBottom: "8px",
                paddingLeft: "4px",
                paddingRight: "4px",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Search Bar Card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #f4f6f8",
            borderRadius: "10px",
            boxShadow: "0px 1.85px 3.15px 0px rgba(0,0,0,0.005), 0px 8.15px 6.52px 0px rgba(0,0,0,0.008), 0px 20px 13px 0px rgba(0,0,0,0.01), 0px 38.52px 25.48px 0px rgba(0,0,0,0.012), 0px 64.81px 46.85px 0px rgba(0,0,0,0.015), 0px 100px 80px 0px rgba(0,0,0,0.02)",
            display: "flex",
            alignItems: "center",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "32px",
            paddingRight: "22px",
            gap: "0",
            width: "min(1500px, calc(100vw - 48px))",
          }}
        >
          {/* Location */}
          <div style={{ flex: "1.5", paddingRight: "24px", minWidth: 0 }}>
            <label
              style={{
                display: "block",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#637381",
                marginBottom: "4px",
              }}
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Type a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#000000",
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
                padding: 0,
              }}
            />
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "56px", backgroundColor: "#e5e8eb", flexShrink: 0 }} />

          {/* Property Type */}
          <div style={{ flex: "1", padding: "0 24px", minWidth: 0 }}>
            <label
              style={{
                display: "block",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#637381",
                marginBottom: "4px",
              }}
            >
              Property Type
            </label>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#000000",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  appearance: "none",
                  cursor: "pointer",
                  flex: 1,
                  padding: 0,
                }}
              >
                <option value="">Select</option>
                <option value="office">Office</option>
                <option value="retail">Retail</option>
                <option value="warehouse">Warehouse</option>
                <option value="industrial">Industrial</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "56px", backgroundColor: "#e5e8eb", flexShrink: 0 }} />

          {/* Hourly / Monthly Toggle */}
          <div style={{ padding: "0 24px", flexShrink: 0 }}>
            <div
              style={{
                backgroundColor: "#f4f6f8",
                borderRadius: "100px",
                padding: "8px",
                display: "flex",
                gap: "4px",
              }}
            >
              <button
                onClick={() => setActiveDurationTab("hourly")}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: activeDurationTab === "hourly" ? "#ffffff" : "#637381",
                  backgroundColor: activeDurationTab === "hourly" ? "#000000" : "transparent",
                  borderRadius: "100px",
                  border: "none",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                Hourly
              </button>
              <button
                onClick={() => setActiveDurationTab("monthly")}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: activeDurationTab === "monthly" ? "#ffffff" : "#637381",
                  backgroundColor: activeDurationTab === "monthly" ? "#000000" : "transparent",
                  borderRadius: "100px",
                  border: "none",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "56px", backgroundColor: "#e5e8eb", flexShrink: 0 }} />

          {/* Space Type */}
          <div style={{ flex: "1", padding: "0 24px", minWidth: 0 }}>
            <label
              style={{
                display: "block",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#637381",
                marginBottom: "4px",
              }}
            >
              Space Type
            </label>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
              <select
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#000000",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  appearance: "none",
                  cursor: "pointer",
                  flex: 1,
                  padding: 0,
                }}
              >
                <option value="">Select</option>
                <option value="coworking">Coworking</option>
                <option value="private-office">Private Office</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="event-space">Event Space</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "56px", backgroundColor: "#e5e8eb", flexShrink: 0 }} />

          {/* Price Range */}
          <div style={{ padding: "0 24px", minWidth: "220px", flexShrink: 0 }}>
            {/* Row 1: Label + badges side by side */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#637381",
                  flexShrink: 0,
                }}
              >
                Price
              </span>
              {/* Min price badge */}
              <div
                style={{
                  backgroundColor: "#1c252e",
                  borderRadius: "4px",
                  paddingLeft: "6px",
                  paddingRight: "6px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#ffffff",
                  }}
                >
                  ${priceMin}
                </span>
              </div>
              {/* Max price badge */}
              <div
                style={{
                  backgroundColor: "#1c252e",
                  borderRadius: "4px",
                  paddingLeft: "6px",
                  paddingRight: "6px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#ffffff",
                  }}
                >
                  ${priceMax}
                </span>
              </div>
            </div>

            {/* Dual Range Slider */}
            <div style={{ position: "relative", height: "6px", width: "100%" }}>
              {/* Rail */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#919eab",
                  borderRadius: "500px",
                  opacity: 0.11,
                }}
              />
              {/* Active track */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "6px",
                  left: `${minPercent}%`,
                  width: `${maxPercent - minPercent}%`,
                  backgroundColor: "#000000",
                  borderRadius: "500px",
                }}
              />
              {/* Min thumb */}
              <input
                type="range"
                min={PRICE_RANGE_MIN}
                max={PRICE_RANGE_MAX}
                step={50}
                value={priceMin}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (val < priceMax - 100) setPriceMin(val);
                }}
                className="ss-slider-thumb"
                style={{ top: "-5px" }}
              />
              {/* Max thumb */}
              <input
                type="range"
                min={PRICE_RANGE_MIN}
                max={PRICE_RANGE_MAX}
                step={50}
                value={priceMax}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (val > priceMin + 100) setPriceMax(val);
                }}
                className="ss-slider-thumb"
                style={{ top: "-5px" }}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "26px",
              borderRadius: "1000px",
              border: "none",
              paddingLeft: "32px",
              paddingRight: "32px",
              paddingTop: "11px",
              paddingBottom: "11px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              marginLeft: "8px",
            }}
          >
            Search
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "24px",
          paddingBottom: "24px",
          paddingLeft: "184px",
          paddingRight: "184px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #f4f4f4",
          flexShrink: 0,
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Copyright */}
        <span
          style={{
            fontFamily: '"Microsoft Sans Serif", Arial, sans-serif',
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          © SuddenlySpaces, 2024
        </span>

        {/* Center: Company links + Social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "Metropolis, Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#000000",
            }}
          >
            Company
          </span>
          <a href="#" className="ss-footer-link">About</a>
          <a href="#" className="ss-footer-link">Careers</a>
          <a href="#" className="ss-footer-link">Press</a>
          <a href="#" className="ss-footer-link">Contact Us</a>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "8px" }}>
            <a href="#" style={{ cursor: "pointer", lineHeight: 0 }}><FacebookIcon /></a>
            <a href="#" style={{ cursor: "pointer", lineHeight: 0 }}><LinkedInIcon /></a>
            <a href="#" style={{ cursor: "pointer", lineHeight: 0 }}><InstagramIcon /></a>
            <a href="#" style={{ cursor: "pointer", lineHeight: 0 }}><YouTubeIcon /></a>
          </div>
        </div>

        {/* Right: Legal links */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="#" className="ss-copyright-link">Terms of Use</a>
          <a href="#" className="ss-copyright-link">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
