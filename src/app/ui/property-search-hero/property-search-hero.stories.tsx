import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { PropertySearchHero } from "./property-search-hero";

const meta: Meta<typeof PropertySearchHero> = {
  title: "UI/PropertySearchHero",
  component: PropertySearchHero,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#ffffff" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PropertySearchHero>;

/**
 * Default state — the "Commercial" tab is active.
 */
export const Default: Story = {};

/**
 * The "Residential" tab active state — clicks the Residential tab so it
 * becomes the active (underlined, black) tab.
 */
export const ResidentialActive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const residentialTab = await canvas.findByRole("button", {
      name: "Residential",
    });
    await userEvent.click(residentialTab);
  },
};
