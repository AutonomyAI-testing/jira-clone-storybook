import { useState } from "react";
import cx from "classix";

type Tab = "Commercial" | "Residential";
type RateType = "Hourly" | "Monthly";

const PROPERTY_TYPES = ["Office", "Retail", "Warehouse", "Industrial", "Land"];
const SPACE_TYPES = [
  "Private Office",
  "Co-working",
  "Meeting Room",
  "Event Space",
  "Retail Space",
];

interface SelectDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

const SelectDropdown = ({
  label,
  value,
  options,
  onChange,
}: SelectDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-col">
        <span className="mb-1 text-xs font-medium text-gray-500">{label}</span>
        <button
          className="flex items-center gap-2 text-sm font-medium text-black focus:outline-none"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={cx(value === "Select" ? "text-gray-400" : "text-black")}>
            {value}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cx("transition-transform", open ? "rotate-180" : "")}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[160px] rounded-lg bg-white py-1 shadow-lg border border-gray-100">
          {options.map((opt) => (
            <button
              key={opt}
              className="block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-50"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (val: [number, number]) => void;
}

const PriceRangeSlider = ({
  min,
  max,
  value,
  onChange,
}: PriceRangeSliderProps) => {
  const getPercent = (val: number) =>
    Math.round(((val - min) / (max - min)) * 100);

  const leftPercent = getPercent(value[0]);
  const rightPercent = getPercent(value[1]);

  return (
    <div className="relative flex flex-col">
      <span className="mb-1 text-xs font-medium text-gray-500">Price</span>
      <div className="relative flex items-center" style={{ width: 130 }}>
        {/* Price bubbles */}
        <div
          className="absolute -top-7 rounded-full bg-black px-1.5 py-0.5 text-[11px] font-semibold text-white"
          style={{ left: `${leftPercent}%`, transform: "translateX(-50%)" }}
        >
          ${value[0].toLocaleString()}
        </div>
        <div
          className="absolute -top-7 rounded-full bg-black px-1.5 py-0.5 text-[11px] font-semibold text-white"
          style={{ left: `${rightPercent}%`, transform: "translateX(-50%)" }}
        >
          ${value[1].toLocaleString()}
        </div>

        {/* Track */}
        <div className="relative h-1 w-full rounded-full bg-gray-200">
          <div
            className="absolute h-full rounded-full bg-black"
            style={{
              left: `${leftPercent}%`,
              right: `${100 - rightPercent}%`,
            }}
          />
        </div>

        {/* Min thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={value[0]}
          step={50}
          className="absolute w-full cursor-pointer opacity-0"
          style={{ zIndex: 3 }}
          onChange={(e) => {
            const v = Math.min(Number(e.target.value), value[1] - 100);
            onChange([v, value[1]]);
          }}
        />
        {/* Max thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          step={50}
          className="absolute w-full cursor-pointer opacity-0"
          style={{ zIndex: 4 }}
          onChange={(e) => {
            const v = Math.max(Number(e.target.value), value[0] + 100);
            onChange([value[0], v]);
          }}
        />
      </div>
    </div>
  );
};

export const HeroSearchSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Commercial");
  const [activeRate, setActiveRate] = useState<RateType>("Hourly");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Select");
  const [spaceType, setSpaceType] = useState("Select");
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 2500]);

  return (
    <section className="flex flex-col items-center px-8 py-16">
      {/* Headline */}
      <h1
        className="mb-3 text-center text-6xl font-primary-black leading-tight tracking-tight text-black"
      >
        Let's Find Your Ideal Space
      </h1>

      {/* Sub-headline */}
      <p className="mb-10 text-center text-lg text-gray-500">
        Discover residential and commercial properties tailored to your needs
      </p>

      {/* Tabs */}
      <div className="mb-8 flex gap-6">
        {(["Commercial", "Residential"] as Tab[]).map((tab) => (
          <button
            key={tab}
            className={cx(
              "relative pb-2 text-base font-medium transition-colors",
              activeTab === tab
                ? "text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black"
                : "text-gray-400 hover:text-gray-600"
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex w-full max-w-5xl items-center rounded-2xl bg-white px-6 py-5 shadow-[0px_2px_16px_rgba(0,0,0,0.08)]">
        {/* Location */}
        <div className="flex flex-1 flex-col pr-6 border-r border-gray-100">
          <span className="mb-1 text-xs font-medium text-gray-500">Location</span>
          <input
            type="text"
            placeholder="Type a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-sm font-medium text-black placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Property Type */}
        <div className="px-6 border-r border-gray-100">
          <SelectDropdown
            label="Property Type"
            value={propertyType}
            options={PROPERTY_TYPES}
            onChange={setPropertyType}
          />
        </div>

        {/* Hourly / Monthly toggle */}
        <div className="px-6 border-r border-gray-100">
          <span className="mb-1 block text-xs font-medium text-gray-500 opacity-0">Rate</span>
          <div className="flex items-center gap-1">
            {(["Hourly", "Monthly"] as RateType[]).map((rate) => (
              <button
                key={rate}
                onClick={() => setActiveRate(rate)}
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeRate === rate
                    ? "bg-black text-white"
                    : "text-gray-400 hover:text-gray-600"
                )}
              >
                {rate}
              </button>
            ))}
          </div>
        </div>

        {/* Space Type */}
        <div className="px-6 border-r border-gray-100">
          <SelectDropdown
            label="Space Type"
            value={spaceType}
            options={SPACE_TYPES}
            onChange={setSpaceType}
          />
        </div>

        {/* Price range */}
        <div className="px-6">
          <PriceRangeSlider
            min={0}
            max={5000}
            value={priceRange}
            onChange={setPriceRange}
          />
        </div>

        {/* Search button */}
        <button className="ml-4 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-gray-900 transition-colors whitespace-nowrap">
          Search
        </button>
      </div>
    </section>
  );
};
