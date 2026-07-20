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
      control: { type: "text" },
      description: "Custom description text shown below the heading",
    },
    href: {
      control: { type: "text" },
      description: "URL the 'Go to homepage' button links to",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

/** Default light-theme 404 page */
export const Default: Story = {};

/** Custom message override */
export const WithCustomMessage: Story = {
  args: {
    message: "Looks like this page went missing during our last deployment.",
  },
};

/** Custom redirect link (e.g. back to a specific project) */
export const WithCustomHref: Story = {
  args: {
    href: "/projects",
    message: "Head back to your projects to find what you need.",
  },
};

/** Dark-mode variant — wraps in a div with the `dark` class so design tokens resolve correctly */
export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

/** Dark mode with custom message */
export const DarkModeWithMessage: Story = {
  args: {
    message: "That URL doesn't exist in this dimension. Try heading home.",
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { default: "dark" },
  },
};
