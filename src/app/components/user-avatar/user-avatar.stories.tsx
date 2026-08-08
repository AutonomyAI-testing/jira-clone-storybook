import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

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

const userImage = usersMock[1].image;
const userName = usersMock[1].name;
const userNameFallback = usersMock[0].name;
const userColor = usersMock[0].color;

// Gradient border wrapper matching the reference design
const GradientAvatar = ({
  name,
  image,
  color,
  size = 120,
}: {
  name: string;
  image?: string;
  color?: string;
  size?: number;
}) => {
  const padding = Math.round(size * 0.04) + 3;
  const outerSize = size + padding * 2;
  return (
    <div
      style={{
        width: `${outerSize}px`,
        height: `${outerSize}px`,
        borderRadius: "9999px",
        background: "linear-gradient(135deg, #5fe0c8 0%, #7eb5f7 50%, #a78bfa 100%)",
        padding: `${padding}px`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <UserAvatar name={name} image={image} color={color} size={size} />
    </div>
  );
};

export const WithImage: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ padding: "40px 40px 20px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "var(--Neutral400)", marginBottom: "12px", fontFamily: "inherit" }}>With profile image</p>
        <GradientAvatar name={userName} image={userImage} size={120} />
      </div>
    </div>
  ),
};

export const WithFallback: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ padding: "40px 40px 20px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "var(--Neutral400)", marginBottom: "12px", fontFamily: "inherit" }}>Fallback initials (no image)</p>
        <GradientAvatar name={userNameFallback} color={userColor} size={120} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ padding: "40px 40px 20px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "var(--Neutral400)", marginBottom: "16px", fontFamily: "inherit" }}>Sizes: sm (24px), md (36px), lg (64px), xl (120px)</p>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <GradientAvatar name={userName} image={userImage} size={24} />
          <GradientAvatar name={userName} image={userImage} size={36} />
          <GradientAvatar name={userName} image={userImage} size={64} />
          <GradientAvatar name={userName} image={userImage} size={120} />
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div style={{ padding: "40px 40px 20px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "var(--Neutral400)", marginBottom: "12px", fontFamily: "inherit" }}>With profile image</p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {usersMock.filter(u => u.image).slice(0, 4).map((u) => (
            <GradientAvatar key={u.id} name={u.name} image={u.image} size={56} />
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "var(--Neutral400)", marginBottom: "12px", fontFamily: "inherit" }}>Fallback initials (no image)</p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {usersMock.filter(u => !u.image).slice(0, 3).map((u) => (
            <GradientAvatar key={u.id} name={u.name} color={u.color} size={56} />
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "var(--Neutral400)", marginBottom: "12px", fontFamily: "inherit" }}>Sizes</p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <GradientAvatar name={userName} image={userImage} size={24} />
          <GradientAvatar name={userName} image={userImage} size={36} />
          <GradientAvatar name={userName} image={userImage} size={56} />
          <GradientAvatar name={userName} image={userImage} size={82} />
          <GradientAvatar name={userName} image={userImage} size={120} />
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 36,
  },
};

export const WithImageLarge: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};

export const FallbackInitials: Story = {
  args: {
    name: userNameFallback,
    image: undefined,
    color: userColor,
    size: 82,
  },
};
