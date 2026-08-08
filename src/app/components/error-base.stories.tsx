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
        type: "radio",
        options: ["404", "500"],
      },
    },
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
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBase>;

// 404 Not Found error example
export const Error404: Story = {
  args: {
    variant: "404",
    message: "Go back to homepage",
    href: "/",
  },
};

// 500 Internal Server Error example
export const Error500: Story = {
  args: {
    variant: "500",
    message: "Something went wrong",
    href: "/",
  },
};
