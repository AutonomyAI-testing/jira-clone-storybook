import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-screen items-center justify-center bg-elevation-surface py-12">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    message: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    href: {
      control: { type: "text" },
    },
    linkText: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {
    message: "Page not found",
    description:
      "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
    href: "/",
    linkText: "Go to Homepage",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "Oops! Lost in space",
    description: "We couldn't find what you were looking for. Try going back or heading home.",
    href: "/",
    linkText: "Back to Home",
  },
};

export const NoLink: Story = {
  args: {
    message: "Page not found",
    description:
      "The page you're looking for doesn't exist or has been moved.",
  },
};
