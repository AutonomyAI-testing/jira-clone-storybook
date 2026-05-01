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

export const WithOneExpanded: Story = {
  render: () => (
    <div>
      <FAQView />
    </div>
  ),
};
