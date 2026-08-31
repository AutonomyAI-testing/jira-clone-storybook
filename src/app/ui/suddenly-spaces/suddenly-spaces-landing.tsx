import { useState } from "react";

const FONT = "Montserrat, sans-serif";

const COLORS = {
  white: "#ffffff",
  border: "#f4f4f4",
  cardBorder: "#f4f6f8",
  muted: "#637381",
  dark: "#1c252e",
  black: "#000000",
  pill: "#f4f6f8",
  rail: "rgba(145, 158, 171, 0.11)",
};

function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SuddenlySpaces logo"
    >
      <g clipPath="url(#clip0_ss_logo)">
        <path
          d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_ss_logo">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="#212B36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000" aria-label="Facebook">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000" aria-label="LinkedIn">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000" aria-label="Instagram">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" aria-label="YouTube">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function DualRangeSlider() {
  const MIN = 0;
  const MAX = 5000;
  const [minVal, setMinVal] = useState(500);
  const [maxVal, setMaxVal] = useState(2500);

  const minPct = ((minVal - MIN) / (MAX - MIN)) * 100;
  const maxPct = ((maxVal - MIN) / (MAX - MIN)) * 100;

  return (
    <div style={{ width: 190, position: "relative", paddingTop: 6 }}>
      {/* value badges */}
      <div style={{ position: "relative", height: 22, marginBottom: 8 }}>
        <span
          style={{
            position: "absolute",
            left: `${minPct}%`,
            transform: "translateX(-50%)",
            background: COLORS.dark,
            color: "#fff",
            fontSize: 12,
            fontFamily: FONT,
            borderRadius: 4,
            padding: "2px 6px",
            whiteSpace: "nowrap",
          }}
        >
          ${minVal}
        </span>
        <span
          style={{
            position: "absolute",
            left: `${maxPct}%`,
            transform: "translateX(-50%)",
            background: COLORS.dark,
            color: "#fff",
            fontSize: 12,
            fontFamily: FONT,
            borderRadius: 4,
            padding: "2px 6px",
            whiteSpace: "nowrap",
          }}
        >
          ${maxVal}
        </span>
      </div>

      {/* rail + track */}
      <div style={{ position: "relative", height: 20 }}>
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 0,
            right: 0,
            height: 3,
            borderRadius: 3,
            background: COLORS.rail,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 8,
            left: `${minPct}%`,
            width: `${maxPct - minPct}%`,
            height: 3,
            borderRadius: 3,
            background: COLORS.black,
          }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(Number(e.target.value), maxVal - 50))
          }
          className="ss-range"
          style={{ zIndex: minVal > MAX - 100 ? 5 : 3 }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(Number(e.target.value), minVal + 50))
          }
          className="ss-range"
          style={{ zIndex: 4 }}
        />
      </div>
    </div>
  );
}

export function SuddenlySpacesLanding() {
  const [tab, setTab] = useState<"commercial" | "residential">("commercial");
  const [billing, setBilling] = useState<"hourly" | "monthly">("hourly");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.white,
        fontFamily: FONT,
        color: COLORS.black,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500&display=swap');
        .ss-range {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 20px;
          margin: 0;
          background: transparent;
          pointer-events: none;
          -webkit-appearance: none;
          appearance: none;
        }
        .ss-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          pointer-events: all;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #919eab;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .ss-range::-moz-range-thumb {
          pointer-events: all;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #919eab;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .ss-range::-webkit-slider-runnable-track { background: transparent; }
        .ss-range::-moz-range-track { background: transparent; }
      `}</style>

      {/* Navbar */}
      <nav
        style={{
          height: 70,
          borderBottom: `1px solid ${COLORS.border}`,
          paddingLeft: 40,
          paddingRight: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: COLORS.white,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo />
          <span style={{ fontSize: 18, letterSpacing: "0.02em" }}>
            <span style={{ fontWeight: 400 }}>SUDDENLY</span>
            <span style={{ fontWeight: 700 }}>SPACES</span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.black }}>
            Switch to Tenant
          </span>
          <button
            style={{
              background: COLORS.black,
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 1000,
              padding: "8px 24px",
              border: "none",
              cursor: "pointer",
              fontFamily: FONT,
            }}
          >
            List Your Space
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16 }} aria-label="US flag">
              🇺🇸
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: COLORS.black,
              }}
            >
              EN
            </span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.dark }}>
            Sign Up
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.dark }}>
            Login
          </span>
        </div>
      </nav>

      {/* Hero */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 72,
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ff0000",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Let&rsquo;s Find Your Ideal Space
        </h1>
        <p
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: COLORS.black,
            textAlign: "center",
            margin: "18px 0 0",
          }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 40, marginTop: 56 }}>
          <button
            onClick={() => setTab("commercial")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 8px",
              fontFamily: FONT,
              fontSize: 14,
              fontWeight: tab === "commercial" ? 500 : 400,
              color: tab === "commercial" ? COLORS.dark : COLORS.muted,
              borderBottom:
                tab === "commercial"
                  ? `2px solid ${COLORS.black}`
                  : "2px solid transparent",
            }}
          >
            Commercial
          </button>
          <button
            onClick={() => setTab("residential")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 8px",
              fontFamily: FONT,
              fontSize: 14,
              fontWeight: tab === "residential" ? 500 : 400,
              color: tab === "residential" ? COLORS.dark : COLORS.muted,
              borderBottom:
                tab === "residential"
                  ? `2px solid ${COLORS.black}`
                  : "2px solid transparent",
            }}
          >
            Residential
          </button>
        </div>

        {/* Search card */}
        <div
          style={{
            marginTop: 24,
            background: COLORS.white,
            border: `1px solid ${COLORS.cardBorder}`,
            borderRadius: 10,
            boxShadow:
              "0 0 2px rgba(145,158,171,0.2), 0 12px 24px -4px rgba(145,158,171,0.12)",
            padding: "15px 22px 15px 32px",
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Location */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 12, color: COLORS.muted }}>Location</span>
            <input
              placeholder="Type a location"
              style={{
                border: "none",
                outline: "none",
                fontSize: 16,
                fontFamily: FONT,
                color: COLORS.black,
                width: 130,
                background: "transparent",
              }}
            />
          </div>

          <Divider />

          {/* Property Type */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 12, color: COLORS.muted }}>
              Property Type
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 40,
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              <span>Select</span>
              <ChevronDown />
            </div>
          </div>

          <Divider />

          {/* Billing toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: COLORS.pill,
              borderRadius: 100,
              padding: 8,
              gap: 4,
            }}
          >
            <button
              onClick={() => setBilling("hourly")}
              style={{
                border: "none",
                cursor: "pointer",
                borderRadius: 100,
                padding: "8px 16px",
                fontFamily: FONT,
                fontSize: 14,
                fontWeight: 500,
                background: billing === "hourly" ? COLORS.black : "transparent",
                color: billing === "hourly" ? "#fff" : COLORS.muted,
              }}
            >
              Hourly
            </button>
            <button
              onClick={() => setBilling("monthly")}
              style={{
                border: "none",
                cursor: "pointer",
                borderRadius: 100,
                padding: "8px 16px",
                fontFamily: FONT,
                fontSize: 14,
                fontWeight: 500,
                background:
                  billing === "monthly" ? COLORS.black : "transparent",
                color: billing === "monthly" ? "#fff" : COLORS.muted,
              }}
            >
              Monthly
            </button>
          </div>

          <Divider />

          {/* Space Type */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 12, color: COLORS.muted }}>Space Type</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 120,
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              <span>Select</span>
              <ChevronDown />
            </div>
          </div>

          <Divider />

          {/* Price */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 12, color: COLORS.muted }}>Price</span>
            <DualRangeSlider />
          </div>

          {/* Search button */}
          <button
            style={{
              background: COLORS.black,
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 1000,
              padding: "12px 32px",
              border: "none",
              cursor: "pointer",
              fontFamily: FONT,
              marginLeft: 8,
            }}
          >
            Search
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: COLORS.white,
          padding: "24px 184px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 400, color: COLORS.black }}>
          &copy; SuddenlySpaces, 2024
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: COLORS.black }}>
            Company
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.black }}>
            About
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.black }}>
            Careers
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.black }}>
            Press
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.black }}>
            Contact Us
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: 8 }}>
            <FacebookIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ fontSize: 14, fontWeight: 400, color: COLORS.black }}>
            Terms of Use
          </span>
          <span style={{ fontSize: 14, fontWeight: 400, color: COLORS.black }}>
            Privacy Policy
          </span>
        </div>
      </footer>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: 1,
        alignSelf: "stretch",
        background: "#f4f6f8",
        margin: "4px 0",
      }}
    />
  );
}

export default SuddenlySpacesLanding;
