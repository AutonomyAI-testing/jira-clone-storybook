import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Pages/SuddenlySpaces/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

export const ResidentialTab: Story = {
  render: () => {
    // We can't control inner state from a story for this component, 
    // so we render the default (Commercial is preselected) 
    // and note the user can click Residential.
    return <HeroSection />;
  },
};
