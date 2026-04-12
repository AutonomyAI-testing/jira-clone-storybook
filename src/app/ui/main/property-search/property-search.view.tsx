import { useState } from "react";

type TabType = "commercial" | "residential";

// Tab options for property search
const TAB_OPTIONS: Array<{ id: TabType; label: string }> = [
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
];

interface TabButtonProps {
  id: TabType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Reusable tab button with consistent styling for active/inactive states
const TabButton = ({ id, label, isActive, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`px-2 pb-2 font-primary text-sm font-medium ${
      isActive ? "border-b-2 border-black text-black" : "text-gray-400"
    }`}
  >
    {label}
  </button>
);

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
}

// Reusable text input field with label and consistent styling
const FormField = ({ label, type = "text", placeholder }: FormFieldProps) => (
  <div className="flex flex-col gap-2">
    <label className="font-primary text-sm text-red-600">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="rounded border border-gray-300 px-4 py-2
        font-primary text-red-600 placeholder-gray-400"
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  options: string[];
}

// Reusable select dropdown field with label and consistent styling
const SelectField = ({ label, options }: SelectFieldProps) => (
  <div className="flex flex-col gap-2">
    <label className="font-primary text-sm text-red-600">{label}</label>
    <select className="rounded border border-gray-300 px-4 py-2 font-primary text-red-600">
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

// Time period toggle with active/inactive states (Hourly and Monthly options)
const TimePeriodToggle = () => (
  <div className="flex gap-2">
    <button
      className="rounded-full bg-black px-4 py-2 font-primary
        text-sm font-medium text-white"
    >
      Hourly
    </button>
    <button className="px-4 py-2 font-primary text-sm font-medium text-gray-400">
      Monthly
    </button>
  </div>
);

// Price range input with min and max values
const PriceRangeInput = () => (
  <div className="flex gap-2">
    <input
      type="number"
      placeholder="$500"
      className="w-20 rounded bg-black px-3 py-2 text-center
        font-primary text-sm font-medium text-white"
    />
    <input
      type="number"
      placeholder="$2500"
      className="w-20 rounded bg-black px-3 py-2 text-center
        font-primary text-sm font-medium text-white"
    />
  </div>
);

export const PropertySearchView = () => {
  const [activeTab, setActiveTab] = useState<TabType>("commercial");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      {/* Header Section */}
      <div className="mb-12 max-w-2xl text-center">
        <h1
          className={[
            "mb-4 border-4 border-green-500 p-4 font-primary text-6xl",
            "font-bold text-red-600",
          ].join(" ")}
        >
          Let&apos;s Find Your Ideal Space
        </h1>
        <p
          className="font-primary text-2xl text-red-600"
        >
          Discover residential and commercial properties tailored to your needs
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-12 flex gap-8 border-b">
        {TAB_OPTIONS.map(({ id, label }) => (
          <TabButton
            key={id}
            id={id}
            label={label}
            isActive={activeTab === id}
            onClick={() => setActiveTab(id)}
          />
        ))}
      </div>

      {/* Search Filters */}
      <div className="w-full max-w-6xl rounded-lg bg-white p-6 shadow-lg">
        <div className="grid grid-cols-4 items-end gap-4">
          {/* Location Input */}
          <FormField
            label="Location"
            type="text"
            placeholder="Type a location"
          />

          {/* Property Type Dropdown */}
          <SelectField label="Property Type" options={["Select"]} />

          {/* Time Period Toggle */}
          <TimePeriodToggle />

          {/* Space Type Dropdown */}
          <SelectField label="Space Type" options={["Select"]} />
        </div>

        {/* Price Range and Search */}
        <div className="mt-6 grid grid-cols-4 items-center gap-4 border-t pt-6">
          <div />
          <div />

          {/* Price Range */}
          <PriceRangeInput />

          {/* Search Button */}
          <button
            className="rounded-full bg-black px-8 py-3 font-primary
              text-base font-semibold text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
