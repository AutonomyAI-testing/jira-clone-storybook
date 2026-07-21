import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeModal } from "./welcome-modal";

const meta: Meta<typeof WelcomeModal> = {
  title: "UI/WelcomeModal",
  component: WelcomeModal,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeModal>;

const aaronUser = {
  id: "demo",
  name: "Aaron Smith",
  image: "/avatars/woody.webp",
  color: "#a3c4f3",
};

const shortNameUser = {
  id: "demo2",
  name: "Buzz",
  image: "/avatars/buzz-lightyear.webp",
  color: "#b5e7a0",
};

/**
 * Primary welcome modal — shows on first visit.
 * forceOpen keeps it always open in Storybook regardless of localStorage state.
 */
export const Default: Story = {
  args: {
    user: aaronUser,
    forceOpen: true,
  },
};

/**
 * Same modal for a user with a single-word name.
 */
export const SingleName: Story = {
  args: {
    user: shortNameUser,
    forceOpen: true,
  },
};
