import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const userImage = usersMock[1].image;
const userName = usersMock[1].name;

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "padded",
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

export const Default: Story = {
  render: (_) => (
    <div className="flex flex-row gap-4 p-4 items-end">
      <UserAvatar name={userName} image={userImage} />
      <UserAvatar name={userName} image={undefined} color="#dae3f9" />
      <UserAvatar name={userName} image={userImage} tooltip={true} />
      <UserAvatar name={userName} image={userImage} size={48} />
      <UserAvatar name={userName} image={userImage} size={82} />
    </div>
  ),
};

export const WithImage: Story = {
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

export const WithTooltip: Story = {
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
