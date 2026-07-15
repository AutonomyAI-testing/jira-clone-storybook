import type { Meta, StoryObj } from "@storybook/react";

import { ErrorWizard } from "./error-wizard";

const meta: Meta<typeof ErrorWizard> = {
  title: "Components/ErrorWizard",
  component: ErrorWizard,
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
  },
};

export default meta;
type Story = StoryObj<typeof ErrorWizard>;

export const Default: Story = {};

export const WithMessage: Story = {
  args: {
    message: "Lost in the magic? Let's get you home.",
  },
};

export const WithLink: Story = {
  args: {
    href: "/",
    message: "Go back home",
  },
};

export const WizardError: Story = {
  args: {
    message: "The wizard encountered an unexpected spell!",
    href: "/",
  },
};
