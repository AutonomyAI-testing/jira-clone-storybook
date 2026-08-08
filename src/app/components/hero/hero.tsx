import { useState } from "react";
import cx from "classix";

export interface HeroProps {
  className?: string;
}

const PROPERTY_TYPES = ["commercial", "residential"] as const;
type PropertyType = (typeof PROPERTY_TYPES)[number];

const getTabButtonClasses = (isActive: boolean): string =>
  cx(
    "text-sm font-medium pb-2 transition-colors border-b-2",
    isActive
      ? "text-font border-b-font"
      : "text-font-subtle border-b-transparent hover:text-font"
  );

export const Hero = ({ className }: HeroProps) => {
  const [activeTab, setActiveTab] = useState<PropertyType>("commercial");

  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center gap-8 py-16",
        className
      )}
    >
      {/* Heading */}
      <h1
        className="text-center font-primary-bold text-6xl font-bold"
        style={{ color: "#e34935" }}
      >
        Let's Find Your Ideal Space
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-center font-primary text-xl text-font">
        Discover residential and commercial properties tailored to your needs
      </p>

      {/* Tab Navigation */}
      <div className="mt-4 flex gap-8">
        {PROPERTY_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={getTabButtonClasses(activeTab === type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
