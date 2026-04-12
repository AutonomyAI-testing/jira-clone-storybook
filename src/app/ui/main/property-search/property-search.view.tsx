import { useState } from "react";

export const PropertySearchView = () => {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-6xl font-bold text-red-600 mb-4 font-primary border-4 border-green-500 p-4">
          Let's Find Your Ideal Space
        </h1>
        <p className="text-2xl text-red-600 font-primary">
          Discover residential and commercial properties tailored to your needs
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-8 mb-12 border-b">
        <button
          onClick={() => setActiveTab("commercial")}
          className={`pb-2 px-2 font-primary font-medium text-sm ${
            activeTab === "commercial"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Commercial
        </button>
        <button
          onClick={() => setActiveTab("residential")}
          className={`pb-2 px-2 font-primary font-medium text-sm ${
            activeTab === "residential"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Residential
        </button>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl">
        <div className="grid grid-cols-4 gap-4 items-end">
          {/* Location Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-primary text-red-600">Location</label>
            <input
              type="text"
              placeholder="Type a location"
              className="px-4 py-2 border border-gray-300 rounded font-primary text-red-600 placeholder-gray-400"
            />
          </div>

          {/* Property Type Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-primary text-red-600">Property Type</label>
            <select className="px-4 py-2 border border-gray-300 rounded font-primary text-red-600">
              <option>Select</option>
            </select>
          </div>

          {/* Time Period Toggle */}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-black text-white rounded-full font-primary font-medium text-sm">
              Hourly
            </button>
            <button className="px-4 py-2 text-gray-400 font-primary font-medium text-sm">
              Monthly
            </button>
          </div>

          {/* Space Type Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-primary text-red-600">Space Type</label>
            <select className="px-4 py-2 border border-gray-300 rounded font-primary text-red-600">
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Price Range and Search */}
        <div className="grid grid-cols-4 gap-4 items-center mt-6 border-t pt-6">
          <div />
          <div />
          
          {/* Price Range */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="$500"
              className="px-3 py-2 bg-black text-white rounded text-sm font-primary font-medium text-center w-20"
            />
            <input
              type="number"
              placeholder="$2500"
              className="px-3 py-2 bg-black text-white rounded text-sm font-primary font-medium text-center w-20"
            />
          </div>

          {/* Search Button */}
          <button className="px-8 py-3 bg-black text-white rounded-full font-primary font-semibold text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
