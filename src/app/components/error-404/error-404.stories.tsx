import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
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
    href: "/",
  },
};

export const WithoutButton: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "The page you are looking for doesn't exist or has been moved.",
    href: "/",
  },
};
