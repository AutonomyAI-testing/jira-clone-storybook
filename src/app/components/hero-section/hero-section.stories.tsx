import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Components/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    heading: { control: "text" },
    description: { control: "text" },
    onTabChange: { action: "tab changed" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Let's Find Your Ideal Space",
    description:
      "Discover residential and commercial properties tailored to your needs",
    tabs: [
      { id: "commercial", label: "Commercial" },
      { id: "residential", label: "Residential" },
    ],
  },
};

export const WithoutTabs: Story = {
  args: {
    heading: "Welcome to Our Platform",
    description: "Find the perfect solution for your needs",
  },
};
