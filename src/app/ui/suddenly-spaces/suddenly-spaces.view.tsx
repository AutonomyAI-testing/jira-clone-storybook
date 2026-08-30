import { useState } from "react";

type SearchTab = "commercial" | "residential";

export const SuddenlySpacesView = () => {
  const [activeTab, setActiveTab] = useState<SearchTab>("commercial");

  return (
    <div className="w-full overflow-x-hidden" style={{ background: "#fff" }}>
      {/* ── A: Browser Chrome ── */}
      <div className="w-full select-none">
        {/* Tab bar */}
        <div
          className="relative flex items-end"
          style={{ background: "#E6E6E6", height: 36 }}
        >
          {/* Active tab */}
          <div
            className="relative flex items-center gap-1 rounded-t-lg px-3"
            style={{
              background: "#FFFFFF",
              height: 28,
              marginLeft: 8,
              minWidth: 180,
            }}
          >
            <img
              src="/suddenly-spaces/logo.svg"
              alt="favicon"
              width={12}
              height={12}
            />
            <span
              className="font-primary text-xs"
              style={{ color: "#1C252E", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              SuddenlySpaces
            </span>
            <img
              src="/suddenly-spaces/closeTab.svg"
              alt="close tab"
              width={7}
              height={7}
              className="ml-auto opacity-60"
            />
          </div>
          {/* New tab button */}
          <div className="flex items-center px-2 pb-1">
            <img src="/suddenly-spaces/newTab.svg" alt="new tab" width={12} height={12} className="opacity-50" />
          </div>
          {/* Window controls — right */}
          <div className="ml-auto flex items-center pr-4 pb-1">
            <img src="/suddenly-spaces/Windows_Controls.svg" alt="window controls" width={89} height={11} />
          </div>
        </div>

        {/* Address bar */}
        <div
          className="flex items-center gap-2 px-3"
          style={{ background: "#FFFFFF", height: 40, borderBottom: "1px solid #E6E6E6" }}
        >
          {/* Navigation buttons */}
          <img src="/suddenly-spaces/back.svg" alt="back" width={13} height={12} className="opacity-40" />
          <img src="/suddenly-spaces/forward.svg" alt="forward" width={13} height={12} className="opacity-20" />
          <img src="/suddenly-spaces/refresh.svg" alt="refresh" width={13} height={13} className="opacity-60" />

          {/* URL bar */}
          <div
            className="mx-2 flex flex-1 items-center gap-2 rounded-full px-4"
            style={{ background: "#F5F5F5", height: 26 }}
          >
            <img src="/suddenly-spaces/lock.svg" alt="secure" width={7} height={9} className="opacity-60" />
            <span className="font-primary text-xs" style={{ color: "#1C252E" }}>
              www.suddenlyspaces.com
            </span>
          </div>

          {/* Right toolbar icons */}
          <div className="flex items-center gap-3">
            <img src="/suddenly-spaces/download.svg" alt="download" width={16} height={16} className="opacity-50" />
            <img src="/suddenly-spaces/menu.svg" alt="menu" width={3} height={11} className="opacity-50" />
          </div>
        </div>
      </div>

      {/* ── Page content inside the browser ── */}
      <div className="w-full" style={{ background: "#FFFFFF" }}>
        {/* ── B: Top Navigation Bar ── */}
        <nav
          className="flex items-center justify-between"
          style={{
            background: "#FFFFFF",
            borderBottom: "1px solid #F5F5F5",
            padding: "0 80px",
            height: 72,
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/suddenly-spaces/Frame_19.svg"
              alt="SuddenlySpaces"
              width={188}
              height={32}
            />
          </div>

          {/* Nav links + auth */}
          <div className="flex items-center gap-6">
            <button
              className="font-primary text-sm"
              style={{ color: "#1C252E", background: "none", border: "none", cursor: "pointer" }}
            >
              Switch to Tenant
            </button>
            <button
              className="font-primary text-sm"
              style={{ color: "#1C252E", background: "none", border: "none", cursor: "pointer" }}
            >
              List Your Space
            </button>

            {/* Language picker */}
            <div className="flex items-center gap-1" style={{ cursor: "pointer" }}>
              <img
                src="/suddenly-spaces/United_States_of_America_US.svg"
                alt="US"
                width={16}
                height={16}
                style={{ borderRadius: "50%" }}
              />
              <span className="font-primary text-sm" style={{ color: "#1C252E" }}>EN</span>
              <img src="/suddenly-spaces/arrow.svg" alt="dropdown" width={8} height={4} />
            </div>

            {/* Sign Up */}
            <button
              className="font-primary rounded-lg px-5 py-2 text-sm"
              style={{
                color: "#1C252E",
                background: "transparent",
                border: "1.5px solid #1C252E",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>

            {/* Login */}
            <button
              className="font-primary rounded-lg px-5 py-2 text-sm"
              style={{
                color: "#FFFFFF",
                background: "#1C252E",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
        </nav>

        {/* ── C: Hero Section ── */}
        <section
          className="w-full flex flex-col items-center"
          style={{ background: "#FFFFFF", paddingTop: 72, paddingBottom: 80 }}
        >
          {/* Heading */}
          <h1
            className="font-primary-bold text-center"
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              color: "#FF0000",
              marginBottom: 16,
              maxWidth: 900,
            }}
          >
            Let&apos;s Find Your Ideal Space
          </h1>

          {/* Subtitle */}
          <p
            className="font-primary-light text-center"
            style={{
              fontSize: 18,
              color: "#637381",
              marginBottom: 48,
              maxWidth: 600,
            }}
          >
            Discover residential and commercial properties tailored to your needs
          </p>

          {/* Search Widget Card */}
          <div
            className="w-full"
            style={{
              maxWidth: 1080,
              background: "#FFFFFF",
              borderRadius: 16,
              boxShadow: "0 4px 40px rgba(28, 37, 62, 0.12)",
              overflow: "hidden",
            }}
          >
            {/* Tab row */}
            <div
              className="flex items-end"
              style={{
                borderBottom: "1px solid #E6E6E6",
                padding: "0 32px",
                gap: 32,
              }}
            >
              {(["commercial", "residential"] as SearchTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="font-primary text-sm capitalize py-4"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: activeTab === tab ? "#1C252E" : "#637381",
                    borderBottom: activeTab === tab ? "2px solid #1C252E" : "2px solid transparent",
                    fontWeight: activeTab === tab ? 600 : 400,
                    marginBottom: -1,
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Fields row */}
            <div className="flex items-center" style={{ padding: "24px 32px", gap: 0 }}>
              {/* Field 1: Location */}
              <div className="flex-1 flex flex-col gap-1 pr-6">
                <span className="font-primary text-xs" style={{ color: "#637381" }}>
                  Location
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-primary text-sm" style={{ color: "#1C252E", fontWeight: 500 }}>
                    City
                  </span>
                  <img
                    src="/suddenly-spaces/iconamoonarrow-up-2-duotone.svg"
                    alt="dropdown"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: 1, height: 44, background: "#E6E6E6", flexShrink: 0 }} />

              {/* Field 2: Move-in date */}
              <div className="flex-1 flex flex-col gap-1 px-6">
                <span className="font-primary text-xs" style={{ color: "#637381" }}>
                  Move-in date
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-primary text-sm" style={{ color: "#1C252E", fontWeight: 500 }}>
                    Select date
                  </span>
                  <img
                    src="/suddenly-spaces/iconamoonarrow-up-2-duotone.svg"
                    alt="dropdown"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: 1, height: 44, background: "#E6E6E6", flexShrink: 0 }} />

              {/* Field 3: Duration */}
              <div className="flex-1 flex flex-col gap-1 px-6">
                <span className="font-primary text-xs" style={{ color: "#637381" }}>
                  Duration
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-primary text-sm" style={{ color: "#1C252E", fontWeight: 500 }}>
                    Select duration
                  </span>
                  <img
                    src="/suddenly-spaces/iconamoonarrow-up-2-duotone.svg"
                    alt="dropdown"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: 1, height: 44, background: "#E6E6E6", flexShrink: 0 }} />

              {/* Field 4: Price range */}
              <div className="flex-1 flex flex-col gap-1 px-6">
                <span className="font-primary text-xs" style={{ color: "#637381" }}>
                  Price Range
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-primary text-sm" style={{ color: "#1C252E", fontWeight: 500 }}>
                    $100 – $1,000
                  </span>
                  {/* Slider visual */}
                  <div className="relative flex items-center" style={{ height: 20 }}>
                    {/* Rail (full track) */}
                    <div
                      className="w-full rounded-full"
                      style={{ height: 6, background: "#E6E6E6" }}
                    />
                    {/* Active track */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        height: 6,
                        left: "15%",
                        width: "55%",
                        background: "#1C252E",
                      }}
                    />
                    {/* Left thumb */}
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#FFFFFF",
                        border: "1px solid rgba(145, 158, 171, 0.2)",
                        boxShadow: "0 1px 2px rgba(145, 158, 171, 0.16)",
                        left: "calc(15% - 9px)",
                      }}
                    />
                    {/* Right thumb */}
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#FFFFFF",
                        border: "1px solid rgba(145, 158, 171, 0.2)",
                        boxShadow: "0 1px 2px rgba(145, 158, 171, 0.16)",
                        left: "calc(70% - 9px)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Search button */}
              <button
                className="font-primary-bold flex items-center gap-2 rounded-xl px-7 py-4 text-sm ml-6"
                style={{
                  background: "#1C252E",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </section>

        {/* ── D: Footer ── */}
        <footer
          className="flex flex-col items-center"
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid #F5F5F5",
            padding: "32px 80px",
          }}
        >
          <div
            className="flex w-full items-center justify-between"
            style={{ maxWidth: 1280 }}
          >
            {/* Left: copyright */}
            <span className="font-primary text-sm" style={{ color: "#637381" }}>
              &copy; SuddenlySpaces, 2024
            </span>

            {/* Center: legal links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-primary text-sm"
                style={{ color: "#637381", textDecoration: "none" }}
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="font-primary text-sm"
                style={{ color: "#637381", textDecoration: "none" }}
              >
                Privacy Policy
              </a>
              <span className="font-primary text-sm" style={{ color: "#1C252E", fontWeight: 600 }}>
                Company
              </span>
            </div>

            {/* Right: social icons */}
            <img
              src="/suddenly-spaces/Frame_21.svg"
              alt="Social media"
              width={168}
              height={24}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};
