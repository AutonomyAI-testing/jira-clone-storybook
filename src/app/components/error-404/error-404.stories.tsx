import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "padded",
  },
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
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {
    message: "Error 404: Not Found",
    href: "/",
  },
};

export const WithCustomMessage: Story = {
  args: {
    message: "The page you're looking for doesn't exist or has been moved.",
    href: "/",
  },
};

export const WithoutLink: Story = {
  args: {
    message: "Error 404: Not Found",
    href: "",
  },
};

export const FullExample: Story = {
  args: {
    message: "Sorry, the wizard hat couldn't guide you to the right page.",
    href: "/projects",
  },
};
