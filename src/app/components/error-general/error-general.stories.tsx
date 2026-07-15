import type { Meta, StoryObj } from "@storybook/react";

import { ErrorGeneral } from "./error-general";

const meta: Meta<typeof ErrorGeneral> = {
  title: "Components/ErrorGeneral",
  component: ErrorGeneral,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "surface",
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
    },
    message: {
      control: { type: "text" },
    },
    href: {
      control: { type: "text" },
    },
    linkLabel: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorGeneral>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: "Error 404: Not Found",
    message: "The page you're looking for doesn't exist or has been moved.",
    href: "/",
    linkLabel: "Back to projects",
  },
};

export const ServerError: Story = {
  args: {
    title: "Error 500: Server Error",
    message: "Something went wrong on our end. Our team has been notified.",
    href: "/",
    linkLabel: "Try again",
  },
};

export const NoLink: Story = {
  args: {
    title: "Something went wrong",
    message: "Please contact support if this issue persists.",
    href: "",
  },
};
