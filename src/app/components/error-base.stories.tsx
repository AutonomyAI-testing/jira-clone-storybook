import type { Meta, StoryObj } from "@storybook/react";

import { ErrorBase } from "./error-base";

const meta: Meta<typeof ErrorBase> = {
  title: "Components/ErrorBase",
  component: ErrorBase,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["404", "500"],
      },
    },
    message: {
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
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBase>;

export const Error404Variant: Story = {
  args: {
    variant: "404",
    message:
      "It seems that you have lost! The page you're looking for doesn't exist.",
    buttonText: "Go to Projects",
    href: "/",
  },
};

export const Error500Variant: Story = {
  args: {
    variant: "500",
    message: "Error 500: Server error",
    buttonText: "Try again",
    href: "/",
  },
};

export const WithoutButton: Story = {
  args: {
    variant: "404",
    message: "Page not found - no button displayed",
  },
};
