import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Error500>;

export const Default: Story = {};

export const WithLink: Story = {
  args: {
    href: "/projects",
    linkText: "Back to projects",
  },
};
