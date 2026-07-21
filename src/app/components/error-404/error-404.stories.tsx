import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    errorCode: {
      control: {
        type: "text",
      },
    },
    title: {
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
    linkText: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

/** Default 404 with illustration, code, title, message, and home CTA */
export const Default: Story = {
  args: {
    href: "/",
  },
};

/** Message only — no navigation link */
export const MessageOnly: Story = {
  args: {
    message: "This is the error message",
  },
};

/** Custom destination link */
export const WithLink: Story = {
  args: {
    href: "/link-to-safe-place",
    linkText: "Take me somewhere safe",
  },
};

/** Full custom copy matching app catch boundaries */
export const LostMessage: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
    linkText: "Go to main page",
  },
};
