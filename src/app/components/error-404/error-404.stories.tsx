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
    headline: "We lost that page",
    description:
      "It seems like the page you were looking for has vanished into the void.",
  },
};

export const WithBackLink: Story = {
  args: {
    secondaryHref: "/",
    secondaryLabel: "Go to dashboard",
  },
};

export const MinimalDescription: Story = {
  args: {
    description: "Page unavailable.",
  },
};

export const FullCustom: Story = {
  args: {
    headline: "Oops! Nothing here.",
    description:
      "The route you navigated to doesn't exist. Double-check the URL or head back home.",
    primaryLabel: "Go home",
    primaryHref: "/",
    secondaryHref: "/projects",
    secondaryLabel: "View projects",
  },
};
