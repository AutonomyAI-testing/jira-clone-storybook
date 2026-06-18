import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const userImage = usersMock[1].image; // Woody
const userName = usersMock[1].name;
const userWithInitials = usersMock[0]; // Daniel Serrano (no image)

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "centered",
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
    gradientRing: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

// Primary story: gradient ring border with profile image (matches reference image)
export const WithGradientRing: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 240,
    gradientRing: true,
  },
  parameters: {
    layout: "padded",
  },
};

// With profile image (default size)
export const WithProfileImage: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 36,
  },
};

// Initials fallback (no image)
export const InitialsFallback: Story = {
  args: {
    name: userWithInitials.name,
    image: undefined,
    color: userWithInitials.color,
    size: 36,
  },
};

// All size variants displayed together
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <UserAvatar name={userName} image={userImage} size={24} />
        <span style={{ fontSize: "11px", color: "#666" }}>24px</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <UserAvatar name={userName} image={userImage} size={36} />
        <span style={{ fontSize: "11px", color: "#666" }}>36px (default)</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <UserAvatar name={userName} image={userImage} size={48} />
        <span style={{ fontSize: "11px", color: "#666" }}>48px</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <UserAvatar name={userName} image={userImage} size={64} />
        <span style={{ fontSize: "11px", color: "#666" }}>64px</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <UserAvatar name={userName} image={userImage} size={82} />
        <span style={{ fontSize: "11px", color: "#666" }}>82px (large)</span>
      </div>
    </div>
  ),
};

// Multiple users showing initials fallback variety
export const MultipleUsers: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "20px", flexWrap: "wrap" }}>
      {usersMock.slice(0, 6).map((user) => (
        <UserAvatar
          key={user.id}
          name={user.name}
          image={user.image}
          color={user.color}
          size={40}
          tooltip
        />
      ))}
    </div>
  ),
};

// Large size with gradient ring (close to reference image)
export const LargeWithGradientRing: Story = {
  render: () => (
    <div style={{ padding: "40px", display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
      {usersMock.filter((u) => u.image).slice(0, 4).map((user) => (
        <UserAvatar key={user.id} name={user.name} image={user.image} size={82} gradientRing />
      ))}
    </div>
  ),
};
