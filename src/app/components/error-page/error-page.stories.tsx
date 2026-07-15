import type { Meta, StoryObj } from "@storybook/react";

import { ErrorPage } from "./error-page";

const meta: Meta<typeof ErrorPage> = {
  title: "Components/ErrorPage",
  component: ErrorPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#121211" }],
    },
  },
  argTypes: {
    errorCode: {
      control: { type: "text" },
      description: 'Error code displayed prominently — "404", "500", etc.',
    },
    title: {
      control: { type: "text" },
      description: "Bold headline below the error code.",
    },
    description: {
      control: { type: "text" },
      description: "Descriptive body copy.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const NotFound: Story = {
  name: "404 — Not Found",
  args: {
    errorCode: "404",
  },
};

export const ServerError: Story = {
  name: "500 — Server Error",
  args: {
    errorCode: "500",
  },
};

export const GenericError: Story = {
  name: "Generic error",
  args: {
    errorCode: undefined,
    title: "Something went wrong.",
    description:
      "An unexpected error occurred. Our team has been notified — please try refreshing the page.",
    primaryAction: { label: "Refresh page", href: "#" },
    secondaryAction: { label: "Go to home", href: "/" },
  },
};

export const CustomContent: Story = {
  name: "Custom content",
  args: {
    errorCode: "403",
    title: "Access denied.",
    description: "You don't have permission to view this page.",
    primaryAction: { label: "Go back", href: "/" },
    secondaryAction: { label: "Request access", href: "#" },
  },
};

export const MinimalNoCode: Story = {
  name: "Minimal — no error code",
  args: {
    errorCode: undefined,
    title: "We couldn't load this page.",
    description: "Check your connection and try again.",
    primaryAction: { label: "Retry", href: "#" },
  },
};
