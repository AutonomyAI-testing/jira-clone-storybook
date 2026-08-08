import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./hero";

/** Storybook meta configuration for the Hero component */
const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

/** Default story showing the hero component with full content visible */
export const Default: Story = {};

/** Loading state story showing the skeleton loader animation */
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

/** Disabled state story showing the reduced opacity effect */
export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
