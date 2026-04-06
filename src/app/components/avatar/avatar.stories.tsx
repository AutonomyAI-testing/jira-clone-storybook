import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageUrl: "/avatars/woody.webp",
    imageAlt: "Woody",
    size: 200,
  },
};

export const CyanBlueGradient: Story = {
  args: {
    imageUrl: "/avatars/buzz-lightyear.webp",
    imageAlt: "Buzz Lightyear",
    size: 280,
    borderGradient: "linear-gradient(135deg, #4dd9e0, #5c9cf5, #b9a6f5)",
    borderWidth: 8,
    shadowColor: "#5c9cf5",
    shadowBlur: 36,
    shadowOpacity: 0.5,
  },
};

export const NoImage: Story = {
  args: {
    size: 200,
  },
};

export const LargeWithGradient: Story = {
  args: {
    imageUrl: "/avatars/jessie.webp",
    imageAlt: "Jessie",
    size: 280,
    borderGradient: "linear-gradient(135deg, #4dd9e0, #5c9cf5, #b9a6f5)",
    borderWidth: 8,
    shadowColor: "#5c9cf5",
    shadowBlur: 32,
    shadowOpacity: 0.4,
  },
};

export const SmallAvatar: Story = {
  args: {
    imageUrl: "/avatars/mr-potato.webp",
    imageAlt: "Mr. Potato",
    size: 80,
    borderWidth: 3,
  },
};
