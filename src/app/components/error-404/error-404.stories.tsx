import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
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
    headline: {
      control: {
        type: "text",
      },
    },
    subtext: {
      control: {
        type: "text",
      },
    },
    ctaLabel: {
      control: {
        type: "text",
      },
    },
    ctaHref: {
      control: {
        type: "text",
      },
    },
    showFullHeight: {
      control: {
        type: "boolean",
      },
    },
    showAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const LegacyMessage: Story = {
  args: {
    message: "This is the error message",
  },
};

export const LegacyLink: Story = {
  args: {
    href: "/link-to-safe-place",
  },
};

export const LegacyMessageLink: Story = {
  args: {
    message: "This is the error message",
    href: "/link-to-safe-place",
  },
};

export const RichContent: Story = {
  args: {
    headline: "Oops! Page Not Found",
    subtext:
      "Looks like this page went on a quest and never came back. Let's get you back to familiar territory.",
    ctaLabel: "Back to Home",
    ctaHref: "/",
    showAnimation: false,
  },
  parameters: {
    layout: "centered",
  },
};

export const RichContentFullHeight: Story = {
  args: {
    headline: "Oops! Page Not Found",
    subtext:
      "Looks like this page went on a quest and never came back. Let's get you back to familiar territory.",
    ctaLabel: "Back to Home",
    ctaHref: "/",
    showFullHeight: true,
    showAnimation: true,
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const RichContentNoAnimation: Story = {
  args: {
    headline: "Oops! Page Not Found",
    subtext:
      "Looks like this page went on a quest and never came back. Let's get you back to familiar territory.",
    ctaLabel: "Back to Home",
    ctaHref: "/",
    showAnimation: false,
  },
  parameters: {
    layout: "fullscreen",
  },
};
