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
      control: "text",
      description: "Custom error message displayed below the heading",
    },
    href: {
      control: "text",
      description: "Link for the primary 'Take me home' button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

/**
 * Default 404 page with no custom message or link provided.
 * Shows the wizard robot mascot and default friendly message.
 */
export const Default: Story = {};

/**
 * 404 page with a custom error message.
 * The mascot and heading remain the same, but the message is customized.
 */
export const WithCustomMessage: Story = {
  args: {
    message:
      "The page you're looking for has disappeared into the digital void. Our wizard robot is puzzled!",
  },
};

/**
 * 404 page with a link to navigate home.
 * The primary CTA button will be visible and clickable.
 */
export const WithHomeLink: Story = {
  args: {
    href: "/",
  },
};

/**
 * Fully configured 404 page with custom message and home link.
 * Shows all interactive elements: mascot, heading, custom message, CTA button, and secondary links.
 */
export const Full: Story = {
  args: {
    message:
      "We searched far and wide across the digital landscape, but this page is nowhere to be found.",
    href: "/",
  },
};
