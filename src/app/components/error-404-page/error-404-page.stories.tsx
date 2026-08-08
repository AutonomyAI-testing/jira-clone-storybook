import type { Meta, StoryObj } from "@storybook/react";

import { Error404Page } from "./error-404-page";

const meta: Meta<typeof Error404Page> = {
  title: "Pages/Error404Page",
  component: Error404Page,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: 'responsive' },
  },
  decorators: [(Story) => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-background, #ffffff)' }}>
      <Story />
    </div>
  )],
  argTypes: {
    message: {
      control: {
        type: "text",
      },
      description: "The main message body (explanation of the error)",
    },
    subtitle: {
      control: {
        type: "text",
      },
      description: "Subtitle or additional context",
    },
    primaryButtonLabel: {
      control: {
        type: "text",
      },
      description: "Primary button text (link to projects)",
    },
    primaryButtonHref: {
      control: {
        type: "text",
      },
      description: "Primary button href",
    },
    secondaryButtonLabel: {
      control: {
        type: "text",
      },
      description: "Secondary button text (go back)",
    },
    showSecondaryButton: {
      control: {
        type: "boolean",
      },
      description: "Whether to show secondary button",
    },
    illustrationSrc: {
      control: {
        type: "text",
      },
      description: "Illustration SVG path",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404Page>;

export const Default: Story = {
  args: {
    message: "Oops! Page not found",
    subtitle: "We can't find the page you're looking for. It might have been moved, deleted, or never existed.",
    primaryButtonLabel: "Go to Projects",
    primaryButtonHref: "/projects",
    secondaryButtonLabel: "Go Back",
    showSecondaryButton: true,
    illustrationSrc: "/images/error-404.svg",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This issue doesn't exist",
    subtitle: "The issue you're looking for has been deleted or moved to a different project. Please check the project board for the latest issues.",
    primaryButtonLabel: "Back to Board",
    primaryButtonHref: "/projects",
    secondaryButtonLabel: "Go Back",
    showSecondaryButton: true,
  },
};

export const NoSecondaryButton: Story = {
  args: {
    message: "Oops! Page not found",
    subtitle: "We can't find the page you're looking for. It might have been moved, deleted, or never existed.",
    primaryButtonLabel: "Go to Projects",
    primaryButtonHref: "/projects",
    showSecondaryButton: false,
  },
};
