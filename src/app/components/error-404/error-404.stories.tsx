import type { Meta, StoryObj } from "@storybook/react";
import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    message: {
      control: { type: "text" },
    },
    href: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: "This page has wandered too far off the path.",
  },
};

export const WithLink: Story = {
  args: {
    href: "/dashboard",
    message: "The page you're looking for doesn't exist.",
  },
};

export const NoLink: Story = {
  args: {
    href: undefined,
    message: "You seem to be lost in another dimension.",
  },
};
