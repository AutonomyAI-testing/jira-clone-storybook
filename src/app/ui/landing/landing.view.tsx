import { useState } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────

type Tab = "commercial" | "residential";
type RentalMode = "hourly" | "monthly";

// ─── Logo ────────────────────────────────────────────────────────────────────

function SuddenlySpacesLogo() {
  return (
    <a href="/" className="flex items-center gap-2.5 select-none">
      {/* Icon mark */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g clipPath="url(#logo-clip)">
          <path
            d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="logo-clip">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {/* Wordmark */}
      <span className="text-sm font-semibold tracking-widest uppercase leading-none">
        <span className="font-black">SUDDENLY</span>
        <span className="font-light">SPACES</span>
      </span>
    </a>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-[1440px] mx-auto px-10 h-[70px] flex items-center justify-between">
        <SuddenlySpacesLogo />

        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">
            Switch to Tenant
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap">
            List Your Space
          </button>

          {/* Language selector */}
          <button className="flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
            <img
              src="/images/us-flag.svg"
              alt="US flag"
              className="w-5 h-5 rounded-full object-cover"
            />
            <span>EN</span>
          </button>

          <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
            Sign Up
          </button>
          <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

// ─── Chevron Down icon ────────────────────────────────────────────────────────

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Search Bar ───────────────────────────────────────────────────────────────

function SearchBar() {
  const [mode, setMode] = useState<RentalMode>("hourly");
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2500);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [spaceType, setSpaceType] = useState("");

  const MIN = 0;
  const MAX = 5000;

  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  return (
    <div
      className="bg-white rounded-xl overflow-hidden"
      style={{ border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
    >
      <div className="flex items-stretch divide-x divide-gray-200">
        {/* Location */}
        <div className="flex flex-col justify-center px-6 py-4 min-w-[200px] flex-1">
          <label className="text-xs text-gray-500 font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="Type a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none border-none w-full font-medium"
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-col justify-center px-6 py-4 min-w-[180px]">
          <label className="text-xs text-gray-500 font-medium mb-1">
            Property Type
          </label>
          <div className="flex items-center gap-2">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="text-sm text-gray-800 bg-transparent outline-none border-none appearance-none cursor-pointer flex-1 font-medium"
            >
              <option value="">Select</option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
              <option value="warehouse">Warehouse</option>
              <option value="industrial">Industrial</option>
            </select>
            <ChevronDown className="text-gray-500 flex-shrink-0" />
          </div>
        </div>

        {/* Hourly / Monthly toggle */}
        <div className="flex items-center px-6 py-4 gap-2">
          <button
            onClick={() => setMode("hourly")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              mode === "hourly"
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Hourly
          </button>
          <button
            onClick={() => setMode("monthly")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              mode === "monthly"
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Space Type */}
        <div className="flex flex-col justify-center px-6 py-4 min-w-[180px] flex-1">
          <label className="text-xs text-gray-500 font-medium mb-1">
            Space Type
          </label>
          <div className="flex items-center gap-2">
            <select
              value={spaceType}
              onChange={(e) => setSpaceType(e.target.value)}
              className="text-sm text-gray-800 bg-transparent outline-none border-none appearance-none cursor-pointer flex-1 font-medium"
            >
              <option value="">Select</option>
              <option value="private-office">Private Office</option>
              <option value="coworking">Coworking</option>
              <option value="meeting-room">Meeting Room</option>
              <option value="event-space">Event Space</option>
            </select>
            <ChevronDown className="text-gray-500 flex-shrink-0" />
          </div>
        </div>

        {/* Price range */}
        <div className="flex flex-col justify-center pl-6 pr-3 py-4 min-w-[180px]">
          <label className="text-xs text-gray-500 font-medium mb-2">
            Price
          </label>
          {/* Price bubble labels */}
          <div className="relative mb-3">
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: `calc(${minPercent}% - 20px)`,
                bottom: "0",
              }}
            >
              <span className="bg-gray-900 text-white text-xs font-semibold px-2 py-0.5 rounded-sm whitespace-nowrap">
                ${minPrice.toLocaleString()}
              </span>
            </div>
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: `calc(${maxPercent}% - 24px)`,
                bottom: "0",
              }}
            >
              <span className="bg-gray-900 text-white text-xs font-semibold px-2 py-0.5 rounded-sm whitespace-nowrap">
                ${maxPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Range slider track */}
          <div className="relative h-4 mt-4">
            {/* Track background */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[3px] bg-gray-200 rounded-full" />
            {/* Active range fill */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-gray-900 rounded-full"
              style={{
                left: `${minPercent}%`,
                right: `${100 - maxPercent}%`,
              }}
            />
            {/* Min thumb */}
            <input
              type="range"
              min={MIN}
              max={MAX}
              value={minPrice}
              step={50}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val < maxPrice - 100) setMinPrice(val);
              }}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Minimum price"
            />
            {/* Max thumb */}
            <input
              type="range"
              min={MIN}
              max={MAX}
              value={maxPrice}
              step={50}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val > minPrice + 100) setMaxPrice(val);
              }}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Maximum price"
            />
            {/* Visible min thumb dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-gray-900 rounded-full pointer-events-none"
              style={{ left: `calc(${minPercent}% - 6px)` }}
            />
            {/* Visible max thumb dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-gray-900 rounded-full pointer-events-none"
              style={{ left: `calc(${maxPercent}% - 6px)` }}
            />
          </div>
        </div>

        {/* Search button */}
        <div className="flex items-center px-4 py-4 flex-shrink-0">
          <button className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("commercial");

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-52 pb-20">
      {/* Heading */}
      <h1
        className="text-[56px] font-black leading-tight max-w-4xl tracking-tight"
        style={{ color: '#ef4444' }}
      >
        Let's Find Your Ideal Space
      </h1>

      {/* Subtitle */}
      <p
        className="mt-4 text-lg font-normal whitespace-nowrap"
        style={{ color: '#6b6b6b' }}
      >
        Discover residential and commercial properties tailored to your needs
      </p>

      {/* Commercial / Residential tabs */}
      <div className="mt-10 flex items-center gap-8">
        {(["commercial", "residential"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-sm font-semibold pb-2 capitalize transition-colors ${
              activeTab === tab
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="mt-8 w-full max-w-[1100px]">
        <SearchBar />
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-10 py-4 flex items-center justify-between">
        {/* Left: copyright */}
        <p className="text-sm text-gray-500">
          © <span className="font-semibold text-gray-900">SuddenlySpaces</span>, 2024
        </p>

        {/* Center: links */}
        <nav className="flex items-center gap-1">
          <span className="text-sm font-bold text-gray-900 mr-4">Company</span>
          {["About", "Careers", "Press", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors px-2"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Right: legal */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── LandingView ─────────────────────────────────────────────────────────────

export function LandingView() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
