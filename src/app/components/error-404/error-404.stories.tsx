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
  args: {},
};

export const WithCustomMessage: Story = {
  args: {
    message: "The project you're looking for has been archived or deleted.",
  },
};

export const WithCustomHref: Story = {
  args: {
    href: "/projects",
  },
};

export const WithBothProps: Story = {
  args: {
    message: "This page has moved. Return to the dashboard.",
    href: "/dashboard",
  },
};
