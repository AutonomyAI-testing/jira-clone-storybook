import type { Meta, StoryObj } from "@storybook/react";
import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {
    message: "Oops! This page got lost in the magic.",
    href: "/",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This page has been moved to another dimension.",
    href: "/",
  },
};

export const WithCustomHref: Story = {
  args: {
    message: "Oops! This page got lost in the magic.",
    href: "/projects",
  },
};

export const AllCustom: Story = {
  args: {
    message: "Something went wrong! The page you're looking for doesn't exist.",
    href: "/dashboard",
  },
};
