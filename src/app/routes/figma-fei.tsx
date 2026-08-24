import { useState } from "react";

// Social icons as inline SVGs to avoid external dependencies
function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.86 5.86 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.9.3.8.72 1.47 1.38 2.13.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.9.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.9-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.75.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.9a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.85.63c-.75-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5.5 5L10 1" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function FigmaFeiPage() {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial");
  const [activePricing, setActivePricing] = useState<"hourly" | "monthly">("hourly");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ─── Navbar ─────────────────────────────────────────────────── */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #f4f4f4",
          padding: "0 40px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/figma-fei-logo.svg"
            alt="SuddenlySpaces logo"
            style={{ width: "24px", height: "24px" }}
          />
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.05em",
              color: "#000000",
              textTransform: "uppercase",
            }}
          >
            SUDDENLY<span style={{ fontWeight: 400 }}>SPACES</span>
          </span>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
              cursor: "pointer",
            }}
          >
            Switch to Tenant
          </span>

          <button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              borderRadius: "1000px",
              padding: "6px 24px",
              cursor: "pointer",
              lineHeight: "24px",
            }}
          >
            List Your Space
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "16px" }}>🇺🇸</span>
            <span
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#000000",
              }}
            >
              EN
            </span>
          </div>

          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1c252e",
              cursor: "pointer",
            }}
          >
            Sign Up
          </span>
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1c252e",
              cursor: "pointer",
            }}
          >
            Login
          </span>
        </nav>
      </header>

      {/* ─── Main Content ────────────────────────────────────────────── */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "80px" }}>

        {/* "Figma Fei" headline in red with green outline */}
        <h1
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "64px",
            fontWeight: 700,
            color: "#ff0000",
            textAlign: "center",
            margin: "0 0 12px 0",
            lineHeight: "1.2",
            border: "3px solid #22c55e",
            borderRadius: "8px",
            padding: "8px 32px",
          }}
        >
          Figma Fei
        </h1>

        {/* Hero headline */}
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "64px",
            fontWeight: 700,
            color: "#000000",
            textAlign: "center",
            margin: "0 0 24px 0",
            lineHeight: "1.2",
          }}
        >
          Let's Find Your Ideal Space
        </h2>

        {/* Sub-headline */}
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "26px",
            fontWeight: 400,
            color: "#000000",
            textAlign: "center",
            margin: "0 0 40px 0",
            lineHeight: "40px",
          }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Commercial / Residential tabs */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
          {(["commercial", "residential"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid #1c252e" : "2px solid transparent",
                paddingBottom: "6px",
                cursor: "pointer",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: activeTab === tab ? 500 : 400,
                color: activeTab === tab ? "#1c252e" : "#637381",
                lineHeight: "22px",
                textTransform: "capitalize",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Search panel */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #f4f6f8",
            borderRadius: "10px",
            boxShadow:
              "0px 1.85px 3.15px rgba(0,0,0,0.005), 0px 8.15px 6.52px rgba(0,0,0,0.008), 0px 20px 13px rgba(0,0,0,0.01), 0px 38.52px 25.48px rgba(0,0,0,0.012), 0px 64.81px 46.85px rgba(0,0,0,0.015), 0px 100px 80px rgba(0,0,0,0.02)",
            display: "flex",
            alignItems: "center",
            padding: "15px 22px 15px 32px",
            gap: "0",
            width: "min(1500px, calc(100vw - 80px))",
          }}
        >
          {/* Location */}
          <div style={{ flex: 2, paddingRight: "24px" }}>
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#637381",
                lineHeight: "16px",
                marginBottom: "4px",
              }}
            >
              Location
            </div>
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#000000",
                lineHeight: "20px",
              }}
            >
              Type a location
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "44px", backgroundColor: "#f4f6f8", flexShrink: 0 }} />

          {/* Property Type */}
          <div style={{ flex: 2, padding: "0 24px" }}>
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#637381",
                lineHeight: "16px",
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
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#000000",
                  lineHeight: "18px",
                }}
              >
                Select
              </span>
              <ChevronDownIcon />
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "44px", backgroundColor: "#f4f6f8", flexShrink: 0 }} />

          {/* Hourly / Monthly toggle */}
          <div style={{ flex: 1, padding: "0 24px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "#f4f6f8",
                borderRadius: "100px",
                padding: "8px",
                display: "flex",
                gap: "4px",
              }}
            >
              {(["hourly", "monthly"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePricing(p)}
                  style={{
                    backgroundColor: activePricing === p ? "#000000" : "transparent",
                    color: activePricing === p ? "#ffffff" : "#637381",
                    border: "none",
                    borderRadius: "100px",
                    padding: "8px 16px",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "22px",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "44px", backgroundColor: "#f4f6f8", flexShrink: 0 }} />

          {/* Space Type */}
          <div style={{ flex: 2, padding: "0 24px" }}>
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#637381",
                lineHeight: "16px",
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
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#000000",
                  lineHeight: "18px",
                }}
              >
                Select
              </span>
              <ChevronDownIcon />
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "44px", backgroundColor: "#f4f6f8", flexShrink: 0 }} />

          {/* Price range */}
          <div style={{ flex: 2, padding: "0 24px" }}>
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#637381",
                lineHeight: "16px",
                marginBottom: "8px",
              }}
            >
              Price
            </div>
            {/* Price labels */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span
                style={{
                  backgroundColor: "#1c252e",
                  color: "#ffffff",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  borderRadius: "4px",
                  padding: "3px 6px",
                }}
              >
                $500
              </span>
              <span
                style={{
                  backgroundColor: "#1c252e",
                  color: "#ffffff",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  borderRadius: "4px",
                  padding: "3px 6px",
                }}
              >
                $2500
              </span>
            </div>
            {/* Range slider track */}
            <div
              style={{
                position: "relative",
                height: "6px",
                backgroundColor: "rgba(145,158,171,0.11)",
                borderRadius: "500px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "1px",
                  height: "4px",
                  backgroundColor: "#000000",
                  borderRadius: "500px",
                }}
              />
            </div>
          </div>

          {/* Search button */}
          <button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: "26px",
              border: "none",
              borderRadius: "1000px",
              padding: "11px 32px",
              cursor: "pointer",
              flexShrink: 0,
              marginLeft: "16px",
            }}
          >
            Search
          </button>
        </div>
      </main>

      {/* ─── Footer ──────────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "#ffffff",
          padding: "24px 184px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Copyright */}
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            color: "#000000",
            lineHeight: "20px",
          }}
        >
          © SuddenlySpaces, 2024
        </span>

        {/* Footer links */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span
            style={{
              fontFamily: "Metropolis, Montserrat, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "#000000",
              lineHeight: "20px",
            }}
          >
            Company
          </span>
          {["About", "Careers", "Press", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "Metropolis, Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "20px",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginLeft: "8px" }}>
            <FacebookIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>

        {/* Legal */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["Terms of Use", "Privacy Policy"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#000000",
                lineHeight: "20px",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
