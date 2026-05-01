import type { Meta, StoryObj } from "@storybook/react";

import { FAQView } from "./faq.view";

const meta: Meta<typeof FAQView> = {
  title: "UI/FAQView",
  component: FAQView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FAQView>;

export const Default: Story = {};

/**
 * Story showing the FAQ view in its initial state.
 * Note: User interaction required to expand items - Storybook stories cannot
 * initialize with pre-expanded state without converting to a controlled component.
 */
export const WithOneExpanded: Story = {};
