import { useState } from "react";
import cx from "classix";

type Tab = "Commercial" | "Residential";

const TABS: Tab[] = ["Commercial", "Residential"];

export const HeroSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<Tab>("Commercial");

  return (
    <section
      className="w-full text-center"
      style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1200px", padding: "0 48px" }}
      >
        {/* Heading */}
        <h1
          className="font-primary-black"
          style={{
            fontSize: "72px",
            lineHeight: "1.1",
            marginBottom: "20px",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#ff0000" }}>Let&apos;s</span> Find Your Ideal Space
        </h1>

        {/* Subtitle */}
        <p
          className="font-primary"
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            marginBottom: "48px",
            color: "#333333",
          }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Tabs */}
        <div
          className="flex items-center justify-center"
          style={{ gap: "32px" }}
          role="tablist"
          aria-label="Property type"
        >
          {TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={cx(
                  "cursor-pointer border-none bg-transparent pb-2",
                  isActive ? "font-primary-bold" : "font-primary"
                )}
                style={{
                  borderBottom: isActive ? "2px solid #000000" : "2px solid transparent",
                  fontSize: "15px",
                  letterSpacing: "0.01em",
                  color: isActive ? "#000000" : "#8590a2",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
