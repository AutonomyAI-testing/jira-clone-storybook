import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
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
type Story = StoryObj<typeof Error500>;

/** Default 500 with illustration, code, title, message, and home CTA */
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

/** Copy matching app error boundaries */
export const ServerError: Story = {
  args: {
    message: "There's been an unexpected error. Please reload or try again later",
    href: "/",
    linkText: "Go to main page",
  },
};
