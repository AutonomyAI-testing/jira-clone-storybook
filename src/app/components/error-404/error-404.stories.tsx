import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
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
    href: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomHeadline: Story = {
  args: {
    headline: "The page you seek has disappeared",
  },
};

export const CustomMessage: Story = {
  args: {
    message:
      "Our magic couldn't locate this mystical page. Return home and try again!",
  },
};

export const CustomLink: Story = {
  args: {
    href: "/projects",
  },
};

export const AllCustom: Story = {
  args: {
    headline: "Something went wrong in the magical realm",
    message:
      "The wizard's spell failed to find this page. Let's take you back to safety.",
    href: "/projects",
  },
};
