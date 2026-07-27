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
    message: "We couldn't find the page you're looking for.",
  },
};

export const WithLink: Story = {
  args: {
    message: "We couldn't find the page you're looking for.",
    href: "/projects",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This page has been moved or doesn't exist anymore.",
    href: "/projects",
  },
};
