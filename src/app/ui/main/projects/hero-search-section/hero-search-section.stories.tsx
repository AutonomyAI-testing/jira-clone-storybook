import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useRef } from "react";
import { HeroSearchSection } from "./hero-search-section";

const meta: Meta<typeof HeroSearchSection> = {
  title: "Pages/Projects/HeroSearchSection",
  component: HeroSearchSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSearchSection>;

/**
 * Default story: Commercial tab is active (the component's default state).
 */
export const Default: Story = {};

/**
 * ResidentialActive story: Renders the component with the Residential tab active.
 * After mount, clicks the Residential button to set the internal useState.
 */
const ResidentialWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const btn = containerRef.current?.querySelector<HTMLButtonElement>(
      "button[type='button']"
    );
    // Find the Residential button specifically
    const buttons = containerRef.current?.querySelectorAll<HTMLButtonElement>(
      "button[type='button']"
    );
    buttons?.forEach((b) => {
      if (b.textContent?.trim() === "Residential") b.click();
    });
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSearchSection />
    </div>
  );
};

export const ResidentialActive: Story = {
  render: () => <ResidentialWrapper />,
};
