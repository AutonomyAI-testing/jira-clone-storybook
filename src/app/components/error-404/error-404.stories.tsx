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
    buttonText: {
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

// Default story - uses all default values (modern layout)
export const Default: Story = {};

// Custom title variant - demonstrates title and description customization
export const CustomTitle: Story = {
  args: {
    title: "Lost in the void",
    description: "Even our wizard bot can't find what you're looking for.",
  },
};

// Custom button variant - shows button text and href customization
export const WithCustomButton: Story = {
  args: {
    href: "/",
    buttonText: "Take me home",
  },
};

// Fully customized modern layout - all title-based props configured
export const CustomMessage: Story = {
  args: {
    title: "Project not found",
    description: "The project you're looking for doesn't exist.",
    buttonText: "Back to projects",
    href: "/projects",
  },
};

// Legacy layout - backward compatibility test using message prop instead of title
export const LegacyMessage: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};
