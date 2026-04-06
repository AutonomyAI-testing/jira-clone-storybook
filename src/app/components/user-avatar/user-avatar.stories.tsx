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

export const Image: Story = {
  args: {
    name: userName,
    image: userImage,
  },
};

export const Fallback: Story = {
  args: {
    name: userName,
    image: undefined,
    color: "#dae3f9",
  },
};

export const Tooltip: Story = {
  args: {
    name: userName,
    image: userImage,
    tooltip: true,
  },
};

export const MediumSize: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 48,
  },
};

export const LargeSize: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};

export const WithGradientBorder: Story = {
  render: () => (
    <div
      style={{
        padding: "6px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #4dd9e0, #5c9cf5, #b9a6f5)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 24px rgba(92, 156, 245, 0.35)",
      }}
    >
      <UserAvatar name={userName} image={userImage} size={280} />
    </div>
  ),
};
