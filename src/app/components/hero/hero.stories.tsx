import type { StoryObj } from "@storybook/react";
import { Hero } from "./hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero section with heading, subtitle, and property type tabs.
 * Users can toggle between Commercial and Residential tabs to switch property types.
 */
export const Default: Story = {};

/**
 * Hero section with custom styling via className prop.
 */
export const WithCustomStyling: Story = {
  args: {
    className: "bg-elevation-surface rounded-lg p-8",
  },
};
