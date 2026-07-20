import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: "This page wandered off into the void.",
    href: "/",
  },
};

export const CustomLink: Story = {
  args: {
    message: "Nothing here — let's head back.",
    href: "/dashboard",
  },
};
