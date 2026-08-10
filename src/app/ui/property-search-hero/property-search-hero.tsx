import { useState } from "react";

type PropertyTab = "commercial" | "residential";

export const PropertySearchHero = () => {
  const [activeTab, setActiveTab] = useState<PropertyTab>("commercial");

  return (
    <>
      {/* Montserrat font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
        .property-hero-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 64px;
          font-weight: 700;
          color: #ff0000;
          text-align: center;
          line-height: 1.15;
          margin: 0;
        }
        .property-hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 26px;
          font-weight: 400;
          color: #000000;
          text-align: center;
          line-height: 40px;
          margin: 0;
        }
        .property-tab-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 16px;
          position: relative;
          color: #000000;
          transition: color 0.2s;
        }
        .property-tab-btn.active {
          color: #000000;
        }
        .property-tab-btn.inactive {
          color: #8590a2;
        }
        .property-tab-btn::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: #000000;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .property-tab-btn.active::after {
          opacity: 1;
        }
      `}</style>

      <div
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px 40px 0 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <h1 className="property-hero-title">Let&#8217;s Find Your Ideal Space</h1>

        {/* Subtitle */}
        <p
          className="property-hero-subtitle"
          style={{ marginTop: "24px" }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>

        {/* Tab switcher */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            borderBottom: "1px solid #dcdfe4",
            gap: "0",
          }}
        >
          <button
            className={`property-tab-btn ${activeTab === "commercial" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("commercial")}
            type="button"
          >
            Commercial
          </button>
          <button
            className={`property-tab-btn ${activeTab === "residential" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("residential")}
            type="button"
          >
            Residential
          </button>
        </div>
      </div>
    </>
  );
};
