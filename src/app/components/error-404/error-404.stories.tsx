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
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    buttonLabel: {
      control: {
        type: "text",
      },
    },
    buttonHref: {
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

export const Default: Story = {
  args: {
    heading: "404",
    title: "Oops! Page not found",
    description:
      "The page you're looking for has vanished into thin air. Even our wizard robot couldn't find it.",
    buttonLabel: "Go to Dashboard",
    buttonHref: "/",
  },
};

export const CustomMessage: Story = {
  args: {
    heading: "404",
    title: "Page Lost in the Abyss",
    description:
      "We searched everywhere, but this page is nowhere to be found.",
    buttonLabel: "Return Home",
    buttonHref: "/",
  },
};

export const LegacyMode: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};

export const WithCustomButton: Story = {
  args: {
    heading: "404",
    title: "Something went wrong",
    description: "The page you're looking for doesn't exist.",
    buttonLabel: "Go to Projects",
    buttonHref: "/projects",
  },
};
