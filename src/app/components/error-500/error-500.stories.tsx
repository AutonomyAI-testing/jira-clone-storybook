import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    buttonText: {
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

export const Default: Story = {
  args: {
    href: "/",
  },
};

export const WithButton: Story = {
  args: {
    message: "Something went wrong on our end. Please try again.",
    buttonText: "Try again",
    href: "/",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This is a custom server error message for testing purposes.",
    buttonText: "Go Home",
    href: "/",
  },
};

export const WithoutButton: Story = {
  args: {
    message: "Server error - no button displayed",
  },
};
