import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    href: {
      control: {
        type: "text",
      },
      description: "URL to navigate to when the Go Home button is clicked",
    },
    message: {
      control: {
        type: "text",
      },
      description: "Custom error message to display (optional)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

/**
 * The default 404 error page with the robot wizard illustration,
 * the themed error message, and a "Go Home" button that links to the home page.
 * This variant uses the default message and is the most common 404 experience.
 */
export const Default: Story = {
  args: {
    href: "/",
  },
};

/**
 * Full page view of the 404 error page as it would appear when a user
 * navigates to a non-existent route. This story is identical to Default but
 * explicitly documents the fullscreen layout behavior.
 */
export const FullPage: Story = {
  args: {
    href: "/",
  },
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Demonstrates the Error404 component with a custom redirect URL.
 * This story shows how the component can be configured to navigate
 * to different routes (e.g., /dashboard) instead of the default home page.
 */
export const CustomHref: Story = {
  args: {
    href: "/dashboard",
  },
};
