import type { Meta, StoryObj } from "@storybook/react";

import { Error404Wizard } from "./error-404-wizard";

const meta: Meta<typeof Error404Wizard> = {
  title: "Components/Error404Wizard",
  component: Error404Wizard,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    subMessage: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    buttonText: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404Wizard>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: "This page doesn't exist!",
    subMessage: "We couldn't find what you're looking for.",
  },
};

export const CustomButton: Story = {
  args: {
    buttonText: "Go Back Home",
    href: "/",
  },
};
