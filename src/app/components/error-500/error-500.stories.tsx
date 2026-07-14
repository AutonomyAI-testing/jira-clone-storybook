import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Error500>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message:
      "The server encountered an unexpected error. Our team has been notified.",
    href: "/projects",
  },
};
