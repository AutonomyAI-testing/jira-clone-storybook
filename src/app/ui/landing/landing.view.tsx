import { useState } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────

const LogoIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#ss-logo-clip)">
      <path
        d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="ss-logo-clip">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="8"
    height="4"
    viewBox="0 0 8 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0L5.41421 2.58579C4.63316 3.36684 3.36683 3.36683 2.58579 2.58579L0 0H8Z"
      fill="#1C252E"
    />
  </svg>
);

const USFlagIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#us-flag-clip)">
      <path d="M0 0H16V16H0" fill="#BD3D44" />
      <path
        d="M0 1.8125H16M0 4.28125H16M0 6.75H16M0 9.21875H16M0 11.6875H16M0 14.1562H16"
        stroke="white"
        strokeWidth="1.25"
      />
      <path d="M0 0H8.5V8.5H0V0Z" fill="#192F5D" />
    </g>
    <defs>
      <clipPath id="us-flag-clip">
        <rect width="16" height="16" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Social media icons
const FacebookIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3084 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1922C13.95 8.5625 13.5625 9.3334 13.5625 10.125V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z"
      fill="black"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5 2H3.5C2.67 2 2 2.67 2 3.5V20.5C2 21.33 2.67 22 3.5 22H20.5C21.33 22 22 21.33 22 20.5V3.5C22 2.67 21.33 2 20.5 2ZM8 19H5V10H8V19ZM6.5 8.75C5.5335 8.75 4.75 7.9665 4.75 7C4.75 6.0335 5.5335 5.25 6.5 5.25C7.4665 5.25 8.25 6.0335 8.25 7C8.25 7.9665 7.4665 8.75 6.5 8.75ZM19 19H16V14.25C16 13.2165 15.2835 12.5 14.25 12.5C13.2165 12.5 12.5 13.2165 12.5 14.25V19H9.5V10H12.5V11.5C13.05 10.5835 14.2165 9.875 15.25 9.875C17.3165 9.875 19 11.5585 19 13.625V19Z"
      fill="black"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      fill="black"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="black"
    />
  </svg>
);

// ─── Price Range Slider ───────────────────────────────────────────────────────

function PriceRangeSlider() {
  const MIN = 0;
  const MAX = 3000;
  const [minVal, setMinVal] = useState(500);
  const [maxVal, setMaxVal] = useState(2500);

  const minPercent = ((minVal - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxVal - MIN) / (MAX - MIN)) * 100;

  return (
    <div
      className="relative flex flex-col items-center w-full"
      style={{ minWidth: 180 }}
    >
      {/* Price labels */}
      <div className="relative w-full" style={{ height: 24, marginBottom: 4 }}>
        <span
          className="absolute text-xs font-bold text-white bg-black rounded whitespace-nowrap"
          style={{
            left: `${minPercent}%`,
            transform: "translateX(-50%)",
            padding: "2px 6px",
            fontSize: 11,
          }}
        >
          ${minVal}
        </span>
        <span
          className="absolute text-xs font-bold text-white bg-black rounded whitespace-nowrap"
          style={{
            left: `${maxPercent}%`,
            transform: "translateX(-50%)",
            padding: "2px 6px",
            fontSize: 11,
          }}
        >
          ${maxVal}
        </span>
      </div>

      {/* Track */}
      <div
        className="relative w-full rounded-full"
        style={{ height: 3, background: "#E5E7EB" }}
      >
        {/* Active range */}
        <div
          className="absolute rounded-full"
          style={{
            height: "100%",
            background: "#1C252E",
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />
        {/* Min thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minVal}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxVal - 100);
            setMinVal(val);
          }}
          className="ss-range absolute w-full pointer-events-none appearance-none bg-transparent"
          style={{ height: 3, zIndex: minVal > MAX - 100 ? 5 : 3 }}
        />
        {/* Max thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxVal}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minVal + 100);
            setMaxVal(val);
          }}
          className="ss-range absolute w-full pointer-events-none appearance-none bg-transparent"
          style={{ height: 3, zIndex: 4 }}
        />
      </div>
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

const VDivider = () => (
  <div
    style={{ width: 1, height: 40, background: "#E5E7EB", flexShrink: 0 }}
  />
);

// ─── Landing Page ─────────────────────────────────────────────────────────────

type Tab = "commercial" | "residential";

export function LandingView() {
  const [activeTab, setActiveTab] = useState<Tab>("commercial");

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <header
        className="flex items-center justify-between"
        style={{ height: 72, paddingLeft: 40, paddingRight: 40 }}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline"
          style={{ textDecoration: "none" }}
        >
          <LogoIcon />
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#000000",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            SUDDENLY
            <span style={{ fontWeight: 400 }}>SPACES</span>
          </span>
        </a>

        {/* Nav right */}
        <nav className="flex items-center" style={{ gap: 28 }}>
          <a
            href="#"
            style={{
              fontSize: 14,
              color: "#1C252E",
              fontWeight: 400,
              textDecoration: "none",
            }}
          >
            Switch to Tenant
          </a>
          <a
            href="#"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#FFFFFF",
              backgroundColor: "#1C252E",
              borderRadius: 999,
              padding: "8px 20px",
              textDecoration: "none",
            }}
          >
            List Your Space
          </a>
          {/* Language */}
          <div className="flex items-center" style={{ gap: 6, cursor: "pointer" }}>
            <USFlagIcon />
            <span style={{ fontSize: 14, color: "#1C252E", fontWeight: 400 }}>
              EN
            </span>
          </div>
          <a
            href="#"
            style={{ fontSize: 14, color: "#1C252E", textDecoration: "none" }}
          >
            Sign Up
          </a>
          <a
            href="#"
            style={{ fontSize: 14, color: "#1C252E", textDecoration: "none" }}
          >
            Login
          </a>
        </nav>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <main
        className="flex-1 flex flex-col items-center"
        style={{ paddingTop: 80, paddingBottom: 40 }}
      >
        {/* Heading */}
        <h1
          className="text-center"
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#EF4444",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Let&rsquo;s Find Your Ideal Space
        </h1>

        {/* Subtitle */}
        <p
          className="text-center"
          style={{
            fontSize: 18,
            color: "#454F5B",
            fontWeight: 400,
            marginTop: 16,
            marginBottom: 0,
          }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* ── Tabs ──────────────────────────────────────────────────────── */}
        <div
          className="flex items-center"
          style={{
            gap: 40,
            marginTop: 40,
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          {(["commercial", "residential"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                paddingBottom: 12,
                paddingLeft: 0,
                paddingRight: 0,
                fontSize: 14,
                fontWeight: 500,
                color: activeTab === tab ? "#1C252E" : "#919EAB",
                borderBottom:
                  activeTab === tab
                    ? "2px solid #1C252E"
                    : "2px solid transparent",
                marginBottom: -1,
                textTransform: "capitalize",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* ── Search Bar ────────────────────────────────────────────────── */}
        <div
          className="flex items-center"
          style={{
            marginTop: 32,
            border: "1px solid #E5E7EB",
            background: "#FFFFFF",
            boxShadow: "0px 4px 24px rgba(0,0,0,0.06)",
            borderRadius: 999,
            paddingLeft: 28,
            paddingRight: 8,
            height: 80,
            width: "min(1000px, 92vw)",
            gap: 0,
          }}
        >
          {/* Location */}
          <div
            className="flex flex-col justify-center"
            style={{ flex: "1 1 160px", minWidth: 140, paddingRight: 20 }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#919EAB",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              Location
            </span>
            <input
              type="text"
              placeholder="Type a location"
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                padding: 0,
                fontSize: 14,
                color: "#919EAB",
                fontFamily: "inherit",
                width: "100%",
              }}
            />
          </div>

          <VDivider />

          {/* Property Type */}
          <div
            className="flex flex-col justify-center"
            style={{ flex: "0 0 auto", minWidth: 130, paddingLeft: 20, paddingRight: 20 }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#919EAB",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              Property Type
            </span>
            <div
              className="flex items-center"
              style={{ gap: 8, cursor: "pointer" }}
            >
              <span style={{ fontSize: 14, color: "#1C252E" }}>Select</span>
              <ChevronDownIcon />
            </div>
          </div>

          <VDivider />

          {/* Billing Period */}
          <div
            className="flex items-center"
            style={{ padding: "0 16px", gap: 4 }}
          >
            <button
              style={{
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                backgroundColor: "#1C252E",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                padding: "8px 18px",
              }}
            >
              Hourly
            </button>
            <button
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#637381",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
              }}
            >
              Monthly
            </button>
          </div>

          <VDivider />

          {/* Space Type */}
          <div
            className="flex flex-col justify-center"
            style={{ flex: "0 0 auto", minWidth: 130, paddingLeft: 20, paddingRight: 20 }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#919EAB",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              Space Type
            </span>
            <div
              className="flex items-center"
              style={{ gap: 8, cursor: "pointer" }}
            >
              <span style={{ fontSize: 14, color: "#1C252E" }}>Select</span>
              <ChevronDownIcon />
            </div>
          </div>

          <VDivider />

          {/* Price Range */}
          <div
            className="flex flex-col justify-center"
            style={{ flex: "0 0 auto", minWidth: 200, paddingLeft: 20, paddingRight: 16 }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#919EAB",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              Price
            </span>
            <PriceRangeSlider />
          </div>

          {/* Search Button */}
          <button
            style={{
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              backgroundColor: "#1C252E",
              color: "#FFFFFF",
              border: "none",
              cursor: "pointer",
              paddingLeft: 36,
              paddingRight: 36,
              height: 60,
              flexShrink: 0,
            }}
          >
            Search
          </button>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer
        className="flex items-center justify-between"
        style={{
          borderTop: "1px solid #F3F4F6",
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 40,
          paddingRight: 40,
          marginTop: "auto",
        }}
      >
        {/* Copyright */}
        <p style={{ fontSize: 13, color: "#637381", margin: 0 }}>
          © SuddenlySpaces, 2024
        </p>

        {/* Company links */}
        <div className="flex items-center" style={{ gap: 24 }}>
          <span
            style={{ fontSize: 14, fontWeight: 600, color: "#1C252E" }}
          >
            Company
          </span>
          {["About", "Careers", "Press", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: 13,
                color: "#637381",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center" style={{ gap: 12 }}>
          <a href="#" aria-label="Facebook" style={{ display: "flex" }}>
            <FacebookIcon />
          </a>
          <a href="#" aria-label="LinkedIn" style={{ display: "flex" }}>
            <LinkedInIcon />
          </a>
          <a href="#" aria-label="Instagram" style={{ display: "flex" }}>
            <InstagramIcon />
          </a>
          <a href="#" aria-label="YouTube" style={{ display: "flex" }}>
            <YouTubeIcon />
          </a>
        </div>

        {/* Legal links */}
        <div className="flex items-center" style={{ gap: 16 }}>
          {["Terms of Use", "Privacy Policy"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: 13,
                color: "#637381",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </footer>

      {/* Range input styling */}
      <style>{`
        .ss-range {
          -webkit-appearance: none;
          appearance: none;
          height: 3px;
          background: transparent;
          top: 0;
          margin: 0;
        }
        .ss-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #1C252E;
          pointer-events: all;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px #1C252E;
        }
        .ss-range::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #1C252E;
          pointer-events: all;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px #1C252E;
        }
      `}</style>
    </div>
  );
}
