import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

// Stories for the Error404 component used in error boundary and CatchBoundary
const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    showBackButton: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const WithCustomMessage: Story = {
  args: {
    message: "The page you're looking for has vanished into the digital ether.",
  },
};

export const WithCustomHref: Story = {
  args: {
    href: "/dashboard",
  },
};

export const WithoutBackButton: Story = {
  args: {
    showBackButton: false,
  },
};

export const FullCustomization: Story = {
  args: {
    message: "Sorry, this page took a different path.",
    href: "/projects",
    showBackButton: true,
  },
};
