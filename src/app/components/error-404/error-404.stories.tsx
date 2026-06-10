import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    heading: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    primaryHref: {
      control: {
        type: "text",
      },
    },
    primaryLabel: {
      control: {
        type: "text",
      },
    },
    secondaryHref: {
      control: {
        type: "text",
      },
    },
    secondaryLabel: {
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

export const CustomHeading: Story = {
  args: {
    heading: "Where did this page go?",
    description:
      "Our wizard robot searched every corner of the internet but couldn't find this page.",
  },
};

export const LegacyMode: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};

export const WithoutSecondaryButton: Story = {
  args: {
    secondaryHref: "",
  },
};
