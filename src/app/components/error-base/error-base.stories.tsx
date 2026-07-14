import type { Meta, StoryObj } from "@storybook/react";

import { ErrorBase } from "./error-base";

const meta: Meta<typeof ErrorBase> = {
  title: "Components/ErrorBase",
  component: ErrorBase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBase>;

export const Error404: Story = {
  name: "404 Not Found",
  args: {
    errorCode: "404",
    title: "Page not found",
    description:
      "The page you're looking for doesn't exist or may have been moved.",
    primaryAction: { label: "Go to Homepage", href: "/" },
    secondaryAction: { label: "Go back", href: "#" },
  },
};

export const Error500: Story = {
  name: "500 Server Error",
  args: {
    errorCode: "500",
    title: "Something went wrong",
    description:
      "We're experiencing an issue on our end. Please try again in a moment.",
    suggestions: [
      "Check your internet connection",
      "Clear your browser cache",
      "Try again in a few minutes",
    ],
    primaryAction: { label: "Try again", href: "/" },
    secondaryAction: { label: "Go to Homepage", href: "/" },
  },
};

export const Error403: Story = {
  name: "403 Access Denied",
  args: {
    errorCode: "403",
    title: "Access denied",
    description: "You don't have permission to view this page.",
    suggestions: [
      "Make sure you're logged in",
      "Contact your administrator",
    ],
    primaryAction: { label: "Sign In", href: "/login" },
  },
};

export const WithImage: Story = {
  name: "404 With Illustration",
  args: {
    errorCode: "404",
    title: "Page not found",
    description:
      "The page you're looking for doesn't exist or may have been moved.",
    primaryAction: { label: "Go to Homepage", href: "/" },
    secondaryAction: { label: "Go back", href: "#" },
    imageUrl: "/images/error-404.svg",
  },
};
