import type { Meta, StoryObj } from "@storybook/react-vite";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
      },
      description: "Custom error message displayed below the error heading",
    },
    href: {
      control: {
        type: "text",
      },
      description: "URL to navigate to when the user clicks the 'Go Back Home' button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

// Standard 404 error page with default message and home redirect
export const Default: Story = {
  args: {
    href: "/",
    message: "The page you're looking for doesn't exist or has been moved.",
  },
};

// Demonstrates customization of the error message while maintaining default home link
export const WithCustomMessage: Story = {
  args: {
    href: "/",
    message:
      "It looks like you took a wrong turn. Let's get you back on track.",
  },
};

// Demonstrates customization of the navigation link while maintaining default message
export const WithCustomLink: Story = {
  args: {
    href: "/projects",
    message: "The page you're looking for doesn't exist or has been moved.",
  },
};

// Full customization example with both custom message and navigation link
export const CustomMessageAndLink: Story = {
  args: {
    href: "/projects",
    message:
      "This page went on an adventure and never came back. Head back to your projects.",
  },
};
