import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
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
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};

export const MessageOnly: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
  },
};

export const LinkOnly: Story = {
  args: {
    href: "/",
  },
};

export const Minimal: Story = {};
