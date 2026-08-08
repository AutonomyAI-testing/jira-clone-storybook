import type { Meta, StoryObj } from "@storybook/react";

import { Error404Page } from "./error-404-page";

const meta: Meta<typeof Error404Page> = {
  title: "Components/Error404Page",
  component: Error404Page,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    homeUrl: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404Page>;

export const Default: Story = {
  args: {
    homeUrl: "/",
  },
};

export const CustomRedirect: Story = {
  args: {
    homeUrl: "/projects",
  },
};
