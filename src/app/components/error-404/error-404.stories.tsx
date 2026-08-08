import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "Main heading text (typically the error code)",
    },
    subtitle: {
      control: {
        type: "text",
      },
      description: "Subheading text (e.g., 'Page Not Found')",
    },
    description: {
      control: {
        type: "text",
      },
      description: "Detailed description or error message",
    },
    buttonLabel: {
      control: {
        type: "text",
      },
      description: "Label text for the CTA button",
    },
    href: {
      control: {
        type: "text",
      },
      description: "Navigation target for the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    title: "404",
    subtitle: "Oops! Page Not Found",
    description:
      "Sorry, the page you are looking for has moved or no longer exists. Please check the URL or return to the home page.",
  },
};

export const CustomButton: Story = {
  args: {
    title: "404",
    subtitle: "Page Not Found",
    description: "The requested page could not be found.",
    buttonLabel: "Return Home",
    href: "/",
  },
};

export const ProjectSpecific: Story = {
  args: {
    title: "404",
    subtitle: "Issue Not Found",
    description: "This issue does not exist. Go to the board page.",
    buttonLabel: "Go to Board",
    href: "/projects/1/board",
  },
};
