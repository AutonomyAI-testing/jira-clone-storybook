import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const WithCustomTitle: Story = {
  args: {
    title: "Oops! That page flew away",
  },
};

export const WithCustomDescription: Story = {
  args: {
    description:
      "The page you're looking for doesn't exist or has been moved to a different location. Please check the URL and try again.",
  },
};

export const WithCustomHref: Story = {
  args: {
    href: "/projects",
    title: "Let's get back to your projects",
  },
};

export const LegacyMessageCompat: Story = {
  args: {
    message: "This is a legacy message using the old message prop",
    href: "/",
  },
};
