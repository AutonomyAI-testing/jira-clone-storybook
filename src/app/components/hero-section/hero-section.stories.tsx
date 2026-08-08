import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Components/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
