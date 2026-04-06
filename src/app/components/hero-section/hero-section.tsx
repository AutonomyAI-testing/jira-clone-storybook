import { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface HeroSectionProps {
  heading: string;
  description: string;
  tabs?: Tab[];
  onTabChange?: (tabId: string) => void;
}

export const HeroSection = ({
  heading,
  description,
  tabs = [],
  onTabChange,
}: HeroSectionProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="w-full bg-white px-6 py-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h1 className="mb-4 font-primary-black text-6xl text-red-600">
            {heading}
          </h1>
          <p className="mb-12 font-primary text-2xl text-red-600">
            {description}
          </p>

          {tabs.length > 0 && (
            <div className="flex justify-center gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`pb-2 font-primary text-base font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-red-600 text-red-600"
                      : "border-b-2 border-transparent text-red-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
