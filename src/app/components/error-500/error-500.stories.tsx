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
    message: "Oops! Something went wrong on our end.",
    href: "/",
  },
};

export const ServerError: Story = {
  args: {
    message: "Go back to the main page",
    href: "/",
  },
};

export const MessageOnly: Story = {
  args: {
    message: "Error 500: The server had a hiccup.",
    href: "",
  },
};

export const MessageLink: Story = {
  args: {
    message: "This is the error message",
    href: "/link-to-safe-place",
  },
};
