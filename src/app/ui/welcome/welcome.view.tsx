export const WelcomeView = () => {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{ backgroundColor: "#ffffff", fontFamily: "inherit" }}
    >
      {/* ── Header ── */}
      <header
        className="flex items-center justify-between px-10"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        {/* Logo wordmark */}
        <div className="flex items-center">
          <img
            src="/images/suddenly-wordmark.png"
            alt="SuddenlySpaces"
            style={{ height: 32, width: "auto" }}
          />
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <span
            className="cursor-pointer font-primary text-sm transition-opacity hover:opacity-70"
            style={{ color: "#1a1a1a" }}
          >
            Switch to Tenant
          </span>
          <button
            className="rounded-full font-primary text-sm transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              fontWeight: 700,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            List Your Space
          </button>

          {/* Language selector */}
          <div className="flex cursor-pointer items-center gap-1" style={{ color: "#1a1a1a" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 3C10 6.5 10 17.5 12 21" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 3C14 6.5 14 17.5 12 21" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="font-primary text-sm" style={{ color: "#1a1a1a" }}>
              EN
            </span>
          </div>

          <span
            className="cursor-pointer font-primary text-sm transition-opacity hover:opacity-70"
            style={{ color: "#1a1a1a" }}
          >
            Sign Up
          </span>
          <span
            className="cursor-pointer font-primary text-sm transition-opacity hover:opacity-70"
            style={{ color: "#1a1a1a" }}
          >
            Login
          </span>
        </nav>
      </header>

      {/* ── Hero ── */}
      <main
        className="flex flex-col items-center justify-center px-8"
        style={{ paddingTop: 64, paddingBottom: 64 }}
      >
        <h1
          className="mb-4 text-center leading-tight"
          style={{
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#111111",
          }}
        >
          Let&rsquo;s Find Your Ideal Space
        </h1>
        <p
          className="mb-10 text-center"
          style={{ fontWeight: 400, fontSize: "1.125rem", color: "#444444" }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Search card */}
        <div
          className="w-full max-w-4xl rounded-xl"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 1px 16px rgba(0,0,0,0.09)",
          }}
        >
          {/* Tabs */}
          <div
            className="flex gap-6 px-8 pt-4"
            style={{ borderBottom: "1px solid #e5e5e5" }}
          >
            <button
              className="pb-3 font-primary text-sm"
              style={{
                borderBottom: "2px solid #111",
                color: "#111",
                fontWeight: 700,
              }}
            >
              Commercial
            </button>
            <button
              className="pb-3 font-primary text-sm"
              style={{
                borderBottom: "2px solid transparent",
                color: "#888",
                fontWeight: 400,
              }}
            >
              Residential
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center px-4 py-3">
            {/* Location */}
            <div
              className="flex flex-1 flex-col px-4 py-1"
              style={{ borderRight: "1px solid #e5e5e5" }}
            >
              <span
                className="mb-0.5 font-primary text-xs"
                style={{ color: "#aaa" }}
              >
                Location
              </span>
              <input
                type="text"
                placeholder="Type a location"
                className="bg-transparent font-primary text-sm outline-none"
                style={{ color: "#111" }}
              />
            </div>

            {/* Property Type */}
            <div
              className="flex flex-1 flex-col px-4 py-1"
              style={{ borderRight: "1px solid #e5e5e5" }}
            >
              <span
                className="mb-0.5 font-primary text-xs"
                style={{ color: "#aaa" }}
              >
                Property Type
              </span>
              <div className="flex items-center justify-between">
                <span className="font-primary text-sm" style={{ color: "#888" }}>
                  Select
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "#888" }}>
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Billing toggle */}
            <div
              className="flex items-center gap-2 px-4 py-1"
              style={{ borderRight: "1px solid #e5e5e5" }}
            >
              <button
                className="rounded-full font-primary text-xs"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  fontWeight: 700,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}
              >
                Hourly
              </button>
              <button
                className="rounded-full font-primary text-xs"
                style={{ color: "#666", fontWeight: 400 }}
              >
                Monthly
              </button>
            </div>

            {/* Space Type */}
            <div
              className="flex flex-1 flex-col px-4 py-1"
              style={{ borderRight: "1px solid #e5e5e5" }}
            >
              <span
                className="mb-0.5 font-primary text-xs"
                style={{ color: "#aaa" }}
              >
                Space Type
              </span>
              <div className="flex items-center justify-between">
                <span className="font-primary text-sm" style={{ color: "#888" }}>
                  Select
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "#888" }}>
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Price range */}
            <div
              className="flex flex-1 flex-col px-4 py-1"
              style={{ borderRight: "1px solid #e5e5e5" }}
            >
              <span
                className="mb-0.5 font-primary text-xs"
                style={{ color: "#aaa" }}
              >
                Price
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="rounded font-primary text-xs"
                  style={{
                    backgroundColor: "#111",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "2px 6px",
                  }}
                >
                  $500
                </span>
                <div
                  className="h-0.5 flex-1"
                  style={{ backgroundColor: "#111" }}
                />
                <span
                  className="rounded font-primary text-xs"
                  style={{
                    backgroundColor: "#111",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "2px 6px",
                  }}
                >
                  $5000
                </span>
              </div>
            </div>

            {/* Search button */}
            <div className="pl-4">
              <button
                className="rounded-full font-primary text-sm transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  fontWeight: 700,
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="flex items-center justify-between px-10"
        style={{ paddingTop: 20, paddingBottom: 20, fontSize: "0.8rem", color: "#666" }}
      >
        <span className="font-primary">© SuddenlySpaces, 2024</span>

        {/* Centre */}
        <div className="flex items-center gap-5">
          <span
            className="font-primary"
            style={{ color: "#111", fontWeight: 700 }}
          >
            Company
          </span>
          {["About", "Careers", "Press", "Contact Us"].map((item) => (
            <span
              key={item}
              className="cursor-pointer font-primary transition-opacity hover:opacity-70"
            >
              {item}
            </span>
          ))}

          {/* Social icons */}
          <div className="ml-2 flex items-center gap-3">
            {/* Facebook */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#111" }}>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            {/* LinkedIn */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#111" }}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            {/* Instagram */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#111" }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            {/* YouTube */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#111" }}>
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
          </div>
        </div>

        <nav className="flex items-center gap-4 font-primary">
          <span className="cursor-pointer transition-opacity hover:opacity-70">
            Terms of Use
          </span>
          <span className="cursor-pointer transition-opacity hover:opacity-70">
            Privacy Policy
          </span>
        </nav>
      </footer>
    </div>
  );
};
