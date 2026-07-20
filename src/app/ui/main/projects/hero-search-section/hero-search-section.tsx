import { useState } from "react";
import cx from "classix";

type PropertyType = "commercial" | "residential";

export const HeroSearchSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<PropertyType>("commercial");

  return (
    <section className="flex w-full flex-col items-center justify-center py-20 px-8">
      {/* Heading — red color, very large, heavy weight */}
      <h1
        className="font-primary-black text-center text-7xl leading-tight"
        style={{ color: "#ef4444" }}
      >
        Let's Find Your Ideal Space
      </h1>

      {/* Subtitle */}
      <p className="mt-4 font-primary-light text-center text-lg" style={{ color: "#6b7280" }}>
        Discover residential and commercial properties tailored to your needs
      </p>

      {/* Property Type Tabs — centered, modest gap */}
      <div className="mt-10 flex w-full items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => setActiveTab("commercial")}
          className={cx(
            "border-b-2 pb-1 text-sm transition-colors duration-200",
            activeTab === "commercial"
              ? "font-primary-black"
              : "border-b-transparent font-primary hover:text-font-subtle"
          )}
          style={
            activeTab === "commercial"
              ? { color: "#000000", borderBottomColor: "#000000" }
              : { color: "#9ca3af" }
          }
          aria-pressed={activeTab === "commercial"}
        >
          Commercial
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("residential")}
          className={cx(
            "border-b-2 pb-1 text-sm transition-colors duration-200",
            activeTab === "residential"
              ? "font-primary-black"
              : "border-b-transparent font-primary hover:text-font-subtle"
          )}
          style={
            activeTab === "residential"
              ? { color: "#000000", borderBottomColor: "#000000" }
              : { color: "#9ca3af" }
          }
          aria-pressed={activeTab === "residential"}
        >
          Residential
        </button>
      </div>
    </section>
  );
};
