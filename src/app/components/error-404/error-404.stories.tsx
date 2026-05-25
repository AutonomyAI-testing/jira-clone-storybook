import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
      },
      description: "Error message text displayed below the wizard character",
    },
    href: {
      control: {
        type: "text",
      },
      description: "Navigation URL for the button or link",
    },
    buttonText: {
      control: {
        type: "text",
      },
      description: "Text displayed on the button (when useButton=true)",
    },
    useButton: {
      control: {
        type: "boolean",
      },
      description: "Use prominent button CTA instead of subtle link",
    },
    buttonColor: {
      control: {
        type: "select",
        options: ["primary", "neutral"],
      },
      description: "Color variant for the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {
    message: "Page not found",
    href: "/",
    buttonText: "Back to Home",
    useButton: true,
    buttonColor: "primary",
  },
};

export const ButtonVariant: Story = {
  args: {
    message: "Page not found",
    buttonText: "Back to Projects",
    useButton: true,
    buttonColor: "primary",
    href: "/projects",
  },
};

export const ButtonNeutralVariant: Story = {
  args: {
    message: "The page you're looking for doesn't exist",
    buttonText: "Go Home",
    useButton: true,
    buttonColor: "neutral",
    href: "/",
  },
};

export const CustomMessage: Story = {
  args: {
    message:
      "The page you're looking for doesn't exist. Try navigating back or heading to the home page.",
    buttonText: "Back to Projects",
    useButton: true,
    buttonColor: "primary",
    href: "/projects",
  },
};

export const LegacyLinkVariant: Story = {
  args: {
    message: "Page not found",
    useButton: false,
    href: "/",
  },
};
