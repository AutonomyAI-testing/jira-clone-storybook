import type { Meta, StoryObj } from "@storybook/react";

import { Error404Page } from "./error-404-page";

const meta: Meta<typeof Error404Page> = {
  title: "Components/Error404Page",
  component: Error404Page,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    headline: {
      control: {
        type: "text",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
    homeHref: {
      control: {
        type: "text",
      },
    },
    showBackLink: {
      control: {
        type: "boolean",
      },
    },
    animate: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404Page>;

export const Default: Story = {};

export const CustomHeadline: Story = {
  args: {
    headline: "Page Lost in the Enchanted Forest",
    message: "The wizard couldn't find this spell. Let's get you back on track!",
  },
};

export const NoBackLink: Story = {
  args: {
    showBackLink: false,
  },
};

export const NoAnimation: Story = {
  args: {
    animate: false,
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};
