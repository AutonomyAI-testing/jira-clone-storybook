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

export const Default: Story = {
  args: {},
};

export const WithCustomTitle: Story = {
  args: {
    title: "Oops! Page Missing",
    subtitle:
      "We couldn't find what you were looking for. It may have been moved or deleted.",
    primaryButtonText: "Back to Home",
    primaryButtonHref: "/",
  },
};

export const WithBothButtons: Story = {
  args: {
    title: "404 - Page Not Found",
    subtitle:
      "The page you're looking for has disappeared into the digital void. Let's get you back on track!",
    primaryButtonText: "Go Home",
    primaryButtonHref: "/projects",
    secondaryButtonText: "Go Back",
  },
};

export const WithoutSecondaryButton: Story = {
  args: {
    title: "Page Not Found",
    subtitle: "This page does not exist.",
    primaryButtonText: "Go Home",
    primaryButtonHref: "/projects",
    secondaryButtonText: undefined,
  },
};

export const LegacyMessagePattern: Story = {
  args: {
    message: "Error 404: Not Found",
    href: "/projects",
  },
};
