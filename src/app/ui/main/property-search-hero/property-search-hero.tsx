import { useState } from "react";
import cx from "classix";

type PropertyType = "commercial" | "residential";

export const PropertySearchHero = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<PropertyType>("commercial");

  return (
    <section className="flex w-full flex-col items-center justify-center bg-elevation-surface px-8 py-32 text-center">
      <h1
        className="font-primary-black text-font"
        style={{
          fontSize: "clamp(3rem, 5vw, 5rem)",
          lineHeight: "1.05",
          letterSpacing: "-0.02em",
          color: "#111111",
        }}
      >
        <span style={{ color: "#e03131" }}>Let&apos;s</span> Find Your Ideal Space
      </h1>
      <p
        className="mt-4 max-w-3xl font-primary text-lg"
        style={{ color: "#888888" }}
      >
        Discover residential and commercial properties tailored to your needs
      </p>
      <div className="mt-8 flex items-center gap-8">
        <button
          onClick={() => setActiveTab("commercial")}
          className={cx(
            "text-sm duration-150 ease-in-out",
            activeTab === "commercial"
              ? "font-primary-bold"
              : "font-primary"
          )}
          style={{
            color: activeTab === "commercial" ? "#111111" : "#999999",
          }}
          aria-pressed={activeTab === "commercial"}
        >
          Commercial
        </button>
        <button
          onClick={() => setActiveTab("residential")}
          className={cx(
            "text-sm duration-150 ease-in-out",
            activeTab === "residential"
              ? "font-primary-bold"
              : "font-primary"
          )}
          style={{
            color: activeTab === "residential" ? "#111111" : "#999999",
          }}
          aria-pressed={activeTab === "residential"}
        >
          Residential
        </button>
      </div>
    </section>
  );
};
