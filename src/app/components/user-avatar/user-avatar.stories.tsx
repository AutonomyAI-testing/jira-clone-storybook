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
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

// Default showcase — all variants side by side
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6 p-4">
      <div className="flex flex-col items-center gap-1">
        <UserAvatar name={userName} image={userImage} size={36} />
        <span className="text-xs text-font-subtle">With image</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <UserAvatar name="Daniel Serrano" color="#dae3f9" size={36} />
        <span className="text-xs text-font-subtle">Initials (sm)</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <UserAvatar name="Daniel Serrano" color="#dae3f9" size={64} />
        <span className="text-xs text-font-subtle">Initials (lg)</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <UserAvatar name="Alice Brown" color="#fde8d8" size={64} />
        <span className="text-xs text-font-subtle">Initials (AB)</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <UserAvatar name={userName} image={userImage} tooltip size={36} />
        <span className="text-xs text-font-subtle">With tooltip</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <UserAvatar name={userName} image={userImage} size={82} />
        <span className="text-xs text-font-subtle">Large (82px)</span>
      </div>
    </div>
  ),
};

// With a real avatar image
export const WithImage: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 36,
  },
};

// Fallback with initials (no image) — red text clearly visible
export const WithFallbackInitials: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8 p-4">
      <div className="flex flex-col items-center gap-2">
        <UserAvatar name="Daniel Serrano" color="#dae3f9" size={64} />
        <span className="text-xs text-font-subtle">DS — 64px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <UserAvatar name="Alice Brown" color="#fde8d8" size={64} />
        <span className="text-xs text-font-subtle">AB — 64px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <UserAvatar name="Carlos Rivera" color="#d5f5e3" size={64} />
        <span className="text-xs text-font-subtle">CR — 64px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <UserAvatar name="Daniel Serrano" color="#dae3f9" size={36} />
        <span className="text-xs text-font-subtle">DS — 36px</span>
      </div>
    </div>
  ),
};

// Tooltip enabled
export const WithTooltip: Story = {
  args: {
    name: userName,
    image: userImage,
    tooltip: true,
    size: 36,
  },
};

// Medium size (48px)
export const MediumSize: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 48,
  },
};

// Large size (82px)
export const LargeSize: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};
