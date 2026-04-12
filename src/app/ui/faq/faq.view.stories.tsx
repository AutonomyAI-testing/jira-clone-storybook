import type { Meta, StoryObj } from "@storybook/react";
import { FaqView } from "./faq.view";

const meta: Meta<typeof FaqView> = {
  title: "Pages/FAQ",
  component: FaqView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FaqView>;

export const Default: Story = {
  render: () => <FaqView />,
};
