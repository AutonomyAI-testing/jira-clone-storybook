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
    message: "Oops! Page Not Found",
    href: "/",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This page has been moved",
    href: "/",
  },
};

export const CustomHref: Story = {
  args: {
    message: "Oops! Page Not Found",
    href: "/projects",
  },
};
