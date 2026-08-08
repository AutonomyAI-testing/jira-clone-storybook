import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
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
    primaryHref: {
      control: {
        type: "text",
      },
    },
    secondaryHref: {
      control: {
        type: "text",
      },
    },
    primaryLabel: {
      control: {
        type: "text",
      },
    },
    secondaryLabel: {
      control: {
        type: "text",
      },
    },
    heading: {
      control: {
        type: "text",
      },
    },
    subheading: {
      control: {
        type: "text",
      },
    },
    layout: {
      control: {
        type: "select",
        options: ["page", "embedded"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const FullPage: Story = {
  args: {
    primaryHref: "/",
    secondaryHref: "/projects",
    primaryLabel: "Take me home",
    secondaryLabel: "Go to Projects",
    layout: "page",
  },
};

export const Embedded: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    heading: "Project Not Found",
    subheading:
      "The project you're looking for doesn't exist or has been removed.",
    primaryHref: "/projects",
    primaryLabel: "Go to Projects",
    layout: "embedded",
  },
};

export const LegacyProps: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};

export const CustomHeadingAndMessage: Story = {
  args: {
    heading: "Oops! We couldn't find that page",
    subheading:
      "It may have been moved or deleted. Don't worry, we're here to help!",
    primaryHref: "/projects",
    primaryLabel: "View Projects",
    secondaryHref: "/",
    secondaryLabel: "Go Home",
    layout: "page",
  },
};

export const BothButtons: Story = {
  args: {
    primaryHref: "/",
    primaryLabel: "Return to Home",
    secondaryHref: "/projects",
    secondaryLabel: "Browse Projects",
    layout: "page",
  },
};
