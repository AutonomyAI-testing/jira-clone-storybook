import { useState, type ReactNode } from "react";
import { Link } from "@remix-run/react";
import {
  HiOutlineChevronDown,
  HiOutlineFolder,
  HiOutlineChatAlt2,
  HiOutlinePhotograph,
  HiOutlineCog,
  HiOutlineLocationMarker,
  HiSearch,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import cx from "classix";

const SPACE_TABS = [
  "Residential",
  "Office Space",
  "Commercial / Mixed",
  "Land & Development",
] as const;

const PROPERTY_TYPES = ["Any", "Apartment", "House", "Studio", "Penthouse"];
const BUDGET_OPTIONS = [
  "Any Budget",
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
];

const FOOTER_LINKS = ["About", "Contact", "Pricing", "Blog"] as const;
const LEGAL_LINKS = ["Privacy Policy", "Terms of Service"] as const;

export const WelcomeView = (): JSX.Element => {
  const [activeTab, setActiveTab] =
    useState<(typeof SPACE_TABS)[number]>("Residential");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1C252E]">
      <WelcomeHeader />

      <main className="flex flex-1 flex-col items-center px-6 pb-16 pt-20">
        <div className="flex w-full max-w-[906px] flex-col items-center gap-8 text-center">
          <h1 className="font-primary-black text-4xl leading-tight tracking-tight text-black md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Let&apos;s Find Your Ideal Space
          </h1>
          <p className="max-w-[720px] font-primary text-base text-[#637381] md:text-lg">
            Search for the perfect home, workspace or commercial location that
            fits your lifestyle and budget.
          </p>
        </div>

        <div className="mt-12 flex w-full max-w-[900px] flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {SPACE_TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cx(
                    "relative pb-3 font-primary-bold text-sm transition-colors",
                    isActive
                      ? "text-[#1C252E]"
                      : "text-[#637381] hover:text-[#1C252E]"
                  )}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-[#22C55E]" />
                  )}
                </button>
              );
            })}
            <div className="hidden items-center gap-2 sm:flex">
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={40}
                aria-label="Filter intensity"
                className="h-1.5 w-24 cursor-pointer appearance-none rounded-full bg-[#E5E7EB] accent-[#22C55E]"
              />
              <button
                type="button"
                aria-label="Use current location"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-sm transition hover:bg-[#16A34A]"
              >
                <HiOutlineLocationMarker size={18} />
              </button>
            </div>
          </div>

          <form
            className="flex w-full max-w-[900px] flex-col items-stretch gap-0 overflow-hidden rounded-xl border border-[#F4F6F8] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:flex-row md:items-center"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label className="flex flex-1 flex-col gap-1 px-5 py-4 text-left">
              <span className="font-primary-bold text-xs uppercase tracking-wide text-[#637381]">
                Where to?
              </span>
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City or Zip Code"
                className="w-full border-none bg-transparent p-0 font-primary text-sm text-black outline-none placeholder:text-[#919EAB]"
              />
            </label>

            <div className="hidden h-10 w-px bg-[#E5E7EB] md:block" />

            <label className="flex flex-1 flex-col gap-1 px-5 py-4 text-left">
              <span className="font-primary-bold text-xs uppercase tracking-wide text-[#637381]">
                What Type?
              </span>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(event) => setPropertyType(event.target.value)}
                  className="w-full appearance-none border-none bg-transparent p-0 pr-6 font-primary text-sm text-black outline-none"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <HiOutlineChevronDown
                  size={16}
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#637381]"
                />
              </div>
            </label>

            <div className="hidden h-10 w-px bg-[#E5E7EB] md:block" />

            <label className="flex flex-1 flex-col gap-1 px-5 py-4 text-left">
              <span className="font-primary-bold text-xs uppercase tracking-wide text-[#637381]">
                Budget
              </span>
              <div className="relative">
                <select
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="w-full appearance-none border-none bg-transparent p-0 pr-6 font-primary text-sm text-black outline-none"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <HiOutlineChevronDown
                  size={16}
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#637381]"
                />
              </div>
            </label>

            <div className="p-3 md:pr-4">
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-lg bg-[#22C55E] px-6 font-primary-bold text-sm uppercase tracking-wide text-white transition hover:bg-[#16A34A] md:min-w-[140px]"
              >
                Find Space
              </button>
            </div>
          </form>
        </div>
      </main>

      <WelcomeFooter />
    </div>
  );
};

const WelcomeHeader = (): JSX.Element => {
  return (
    <header className="flex h-[70px] items-center justify-between gap-4 border-b border-[#F4F6F8] bg-white px-6 lg:px-10">
      <div className="flex min-w-0 flex-1 items-center gap-6 lg:gap-10">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-black no-underline"
          aria-label="Suddenly Spaces home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-xs font-primary-black text-white">
            S
          </span>
          <span className="hidden font-primary-black text-sm tracking-[0.12em] sm:inline">
            SUDDENLY SPACES
          </span>
        </Link>

        <label className="relative hidden min-w-0 max-w-md flex-1 md:block">
          <HiSearch
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#919EAB]"
          />
          <input
            type="search"
            placeholder="Start grabbing content from anywhere"
            className="w-full rounded-full border border-[#E5E7EB] bg-[#F9FAFB] py-2 pl-9 pr-4 font-primary text-sm text-[#1C252E] outline-none placeholder:text-[#919EAB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
            readOnly
          />
        </label>
      </div>

      <div className="flex shrink-0 items-center gap-2 lg:gap-3">
        <div className="hidden items-center gap-1 lg:flex">
          <HeaderIconButton label="Folders">
            <HiOutlineFolder size={18} />
          </HeaderIconButton>
          <HeaderIconButton label="Messages">
            <HiOutlineChatAlt2 size={18} />
          </HeaderIconButton>
          <HeaderIconButton label="Media">
            <HiOutlinePhotograph size={18} />
          </HeaderIconButton>
          <HeaderIconButton label="Settings">
            <HiOutlineCog size={18} />
          </HeaderIconButton>
        </div>

        <span className="hidden items-center gap-1.5 rounded-full bg-[#F4F6F8] px-3 py-1.5 font-primary-bold text-xs text-[#1C252E] sm:inline-flex">
          Top Configs
          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#22C55E] px-1.5 text-[10px] font-primary-bold text-white">
            5
          </span>
        </span>

        <nav
          aria-label="Account"
          className="flex items-center gap-1.5 pl-1 sm:gap-2"
        >
          <Link
            to="/login"
            className="rounded-full px-3 py-2 font-primary-bold text-sm text-[#1C252E] no-underline transition hover:bg-[#F4F6F8] sm:px-4"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="rounded-full bg-[#1C252E] px-3 py-2 font-primary-bold text-sm text-white no-underline transition hover:bg-black sm:px-4"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

const HeaderIconButton = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}): JSX.Element => (
  <button
    type="button"
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-full text-[#637381] transition hover:bg-[#F4F6F8] hover:text-[#1C252E]"
  >
    {children}
  </button>
);

const WelcomeFooter = (): JSX.Element => {
  return (
    <footer className="mt-auto border-t border-[#F4F6F8] bg-white px-6 py-8 lg:px-12">
      <div className="mx-auto flex max-w-[1552px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-wrap items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-primary-bold text-sm text-[#1C252E] no-underline hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[#637381]">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-primary text-sm text-[#637381] no-underline hover:underline"
            >
              {link}
            </a>
          ))}
          <span className="font-primary text-sm text-[#637381]">
            © 2024 Suddenly Spaces Inc.
          </span>
          <div className="flex items-center gap-3 text-[#1C252E]">
            <a href="#facebook" aria-label="Facebook" className="hover:opacity-70">
              <FaFacebookF size={16} />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:opacity-70">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:opacity-70">
              <FaInstagram size={16} />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:opacity-70">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
