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
    message:
      "The page you're looking for has wandered off. Click below to go back.",
    href: "/",
  },
};

export const WithCustomMessage: Story = {
  args: {
    message: "This adventure has come to an end. Let's find you a new one!",
    href: "/",
  },
};

export const WithoutLink: Story = {
  args: {
    message: "The page you are looking for is currently unavailable.",
  },
};
