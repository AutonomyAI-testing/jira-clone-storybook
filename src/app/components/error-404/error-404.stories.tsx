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
    message: "The page you're looking for has vanished into thin air.",
    href: "/",
  },
};

export const WithoutLink: Story = {
  args: {
    message: "The page you're looking for has vanished into thin air.",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This feature is still under construction. Try again later!",
    href: "/",
  },
};
