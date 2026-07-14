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
 * Default 404 page with a friendly message and link back home.
 * Shows the wizard robot mascot.
 */
export const Default: Story = {
  args: {
    message: "Oops! We can't find this page.",
    href: "/",
  },
};

/**
 * 404 page showing the standard "Go back to the main page" link in red.
 */
export const PageNotFound: Story = {
  args: {
    message: "Go back to the main page",
    href: "/",
  },
};

/**
 * 404 page with a message only — no link/button shown.
 */
export const MessageOnly: Story = {
  args: {
    message: "Error 404: This page does not exist.",
    href: "",
  },
};

/**
 * Fully configured 404 page with custom message and home link.
 * Shows all interactive elements: mascot, heading, custom message, and CTA link.
 */
export const Full: Story = {
  args: {
    message:
      "We searched far and wide across the digital landscape, but this page is nowhere to be found.",
    href: "/",
  },
};
