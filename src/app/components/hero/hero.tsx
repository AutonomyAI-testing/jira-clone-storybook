import { useState } from "react";
import cx from "classix";

export interface HeroProps {
  className?: string;
}

// Supported property types for filtering — reflects the domain of the property search
const PROPERTY_TYPES = ["commercial", "residential"] as const;
type PropertyType = (typeof PROPERTY_TYPES)[number];

/**
 * Computes tab button styles based on active state.
 * Active tabs show full text color and border; inactive tabs use subtle color with transparent border,
 * with hover effect to indicate interactivity.
 */
const getTabButtonClasses = (isActive: boolean): string =>
  cx(
    "text-sm font-medium pb-2 transition-colors border-b-2",
    isActive
      ? "text-font border-b-font"
      : "text-font-subtle border-b-transparent hover:text-font"
  );

export const Hero = ({ className }: HeroProps) => {
  // Tracks the currently selected property type tab
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
        className="text-center font-primary-bold text-6xl font-bold text-icon-accent-red outline outline-[3px] outline-border-success [outline-offset:6px]"
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
