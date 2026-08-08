import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    message: "500 Internal Server Error",
    href: "/",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error500>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: "Something went wrong on our end. Please try again later.",
    href: "/dashboard",
  },
};
