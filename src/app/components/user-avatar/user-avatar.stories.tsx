import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const userName = usersMock[1].name; // Woody
const userImage = usersMock[1].image; // woody.webp
const userNameFallback = usersMock[0].name; // Daniel Serrano (no image)
const userColor = usersMock[0].color; // #dae3f9

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    name: {
      control: { type: "text" },
    },
    image: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "number" },
    },
    tooltip: {
      control: { type: "boolean" },
    },
    gradientBorder: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <p className="mb-2 text-sm font-medium text-font-subtle">
          With Profile Image
        </p>
        <div className="flex items-center gap-4">
          <UserAvatar name={userName} image={userImage} size={36} />
          <UserAvatar name={userName} image={userImage} size={48} />
          <UserAvatar name={userName} image={userImage} size={82} />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-font-subtle">
          Initials Fallback (No Image)
        </p>
        <div className="flex items-center gap-4">
          <UserAvatar name={userNameFallback} color={userColor} size={36} />
          <UserAvatar name={userNameFallback} color={userColor} size={48} />
          <UserAvatar name={userNameFallback} color={userColor} size={82} />
        </div>
      </div>
    </div>
  ),
};

export const WithProfileImage: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};

export const InitialsFallback: Story = {
  args: {
    name: userNameFallback,
    image: undefined,
    color: userColor,
    size: 82,
  },
};

export const SmallSize: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 36,
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

export const WithTooltip: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 48,
    tooltip: true,
  },
};

export const WithGradientBorder: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <p className="mb-3 text-sm font-medium text-font-subtle">
          Gradient Border — With Image
        </p>
        <div className="flex items-center gap-6">
          <UserAvatar
            name={userName}
            image={userImage}
            size={36}
            gradientBorder
          />
          <UserAvatar
            name={userName}
            image={userImage}
            size={48}
            gradientBorder
          />
          <UserAvatar
            name={userName}
            image={userImage}
            size={82}
            gradientBorder
          />
          <UserAvatar
            name={userName}
            image={userImage}
            size={120}
            gradientBorder
          />
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-medium text-font-subtle">
          Gradient Border — Initials Fallback
        </p>
        <div className="flex items-center gap-6">
          <UserAvatar
            name={userNameFallback}
            color={userColor}
            size={36}
            gradientBorder
          />
          <UserAvatar
            name={userNameFallback}
            color={userColor}
            size={48}
            gradientBorder
          />
          <UserAvatar
            name={userNameFallback}
            color={userColor}
            size={82}
            gradientBorder
          />
          <UserAvatar
            name={userNameFallback}
            color={userColor}
            size={120}
            gradientBorder
          />
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-medium text-font-subtle">
          Without Gradient Border (comparison)
        </p>
        <div className="flex items-center gap-6">
          <UserAvatar name={userName} image={userImage} size={36} />
          <UserAvatar name={userName} image={userImage} size={48} />
          <UserAvatar name={userName} image={userImage} size={82} />
          <UserAvatar name={userName} image={userImage} size={120} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
