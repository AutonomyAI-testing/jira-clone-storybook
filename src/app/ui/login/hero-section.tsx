import { useState } from "react";

type PropertyTab = "commercial" | "residential";

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<PropertyTab>("commercial");

  return (
    <section
      style={{
        width: "100%",
        paddingTop: "72px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 80px",
        }}
      >
        {/* Heading */}
        <h1
          className="font-primary-black text-font"
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "1.15",
            margin: "0 0 24px 0",
          }}
        >
          Let&apos;s Find Your Ideal Space
        </h1>

        {/* Subtitle */}
        <p
          className="font-primary-light text-font"
          style={{
            fontSize: "26px",
            fontWeight: 400,
            lineHeight: "40px",
            margin: "0 0 56px 0",
          }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Property Type Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab("commercial")}
            style={{
              fontSize: "15px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 6px 0",
              borderBottom:
                activeTab === "commercial"
                  ? "1px solid var(--color-font)"
                  : "1px solid transparent",
              color:
                activeTab === "commercial"
                  ? "var(--color-font)"
                  : "var(--color-font-subtle)",
              fontFamily:
                activeTab === "commercial"
                  ? "CircularStdBlack, sans-serif"
                  : "CircularStdLight, sans-serif",
              transition: "color 0.15s ease, border-color 0.15s ease",
            }}
          >
            Commercial
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("residential")}
            style={{
              fontSize: "15px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 6px 0",
              borderBottom:
                activeTab === "residential"
                  ? "1px solid var(--color-font)"
                  : "1px solid transparent",
              color:
                activeTab === "residential"
                  ? "var(--color-font)"
                  : "var(--color-font-subtle)",
              fontFamily:
                activeTab === "residential"
                  ? "CircularStdBlack, sans-serif"
                  : "CircularStdLight, sans-serif",
              transition: "color 0.15s ease, border-color 0.15s ease",
            }}
          >
            Residential
          </button>
        </div>
      </div>
    </section>
  );
};
