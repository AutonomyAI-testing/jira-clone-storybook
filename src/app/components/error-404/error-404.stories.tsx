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

export const WithMessage: Story = {
  args: {
    message: "This issue does not exist. Go to the board page",
    href: "/board",
  },
};

export const NoLink: Story = {
  args: {
    message: "The page you are looking for does not exist.",
  },
};

export const Minimal: Story = {
  args: {},
};
