import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      defaultValue: "John Doe",
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    tooltip: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

const userImage = usersMock[1].image;
const userName = usersMock[1].name;

// Grid layout showcasing all avatar variants: with image, fallback text, tooltip, and different sizes
export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-6 gap-4 p-4">
      {[Image, Fallback, Tooltip, MediumSize, LargeSize].map(
        (UserAvatarStory, index) => (
          <UserAvatar name={userName} {...UserAvatarStory.args} key={index} />
        )
      )}
    </div>
  ),
};

// Avatar with user image displayed
export const Image: Story = {
  args: {
    name: userName,
    image: userImage,
  },
};

// Avatar showing initials fallback with custom background color
export const Fallback: Story = {
  args: {
    name: userName,
    image: undefined,
    color: "#dae3f9",
  },
};

// Avatar with hover tooltip showing the user's full name
export const Tooltip: Story = {
  args: {
    name: userName,
    image: userImage,
    tooltip: true,
  },
};

// Avatar at medium size (48px) with optimized image loading
export const MediumSize: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 48,
  },
};

// Avatar at large size (82px) with full-resolution image (no minification)
export const LargeSize: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};
