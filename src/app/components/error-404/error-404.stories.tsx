import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    heading: {
      control: "text",
      description: "Main heading text displayed on the error page",
    },
    message: {
      control: "text",
      description: "Description text explaining the error to the user",
    },
    homeHref: {
      control: "text",
      description: "URL for the primary 'Go Home' button",
    },
    projectsHref: {
      control: "text",
      description: "URL for the secondary 'Browse Projects' button",
    },
    showProjectsButton: {
      control: "boolean",
      description: "Whether to display the secondary 'Browse Projects' button",
    },
    imagePath: {
      control: "text",
      description: "Path to the error illustration SVG image",
    },
    href: {
      control: "text",
      description: "Legacy prop for backward compatibility (use homeHref instead)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomHeading: Story = {
  args: {
    heading: "Page Not Found!",
    message:
      "The page you're looking for seems to have disappeared. Don't worry, our robot wizard is on the case!",
  },
};

export const SingleButton: Story = {
  args: {
    showProjectsButton: false,
  },
};

export const LegacyHref: Story = {
  args: {
    href: "/legacy-link",
  },
};
