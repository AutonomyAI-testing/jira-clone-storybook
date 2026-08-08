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
    ring: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

const userImage = usersMock[1].image;
const userName = usersMock[1].name;
const userColor = usersMock[0].color;
const userName2 = usersMock[0].name;

// Primary story: all variants in a clean showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: "var(--Neutral1000)" }}>With Profile Image</h3>
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName} image={userImage} size={36} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>36px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName} image={userImage} size={48} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>48px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName} image={userImage} size={64} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>64px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName} image={userImage} size={82} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>82px</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: "var(--Neutral1000)" }}>Initials Fallback</h3>
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName2} color={userColor} size={36} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>36px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName2} color={userColor} size={48} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>48px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName2} color={userColor} size={64} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>64px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserAvatar name={userName2} color={userColor} size={82} />
            <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>82px</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: "var(--Neutral1000)" }}>With Gradient Ring (reference design)</h3>
        <div className="flex items-end gap-6">
          {[36, 48, 64, 82].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <UserAvatar name={userName} image={userImage} size={size} ring />
              <span className="text-xs" style={{ color: "var(--Neutral1000)" }}>{size}px</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: "var(--Neutral1000)" }}>Multiple Users</h3>
        <div className="flex gap-2">
          {usersMock.filter(u => u.image).slice(0, 5).map((user) => (
            <UserAvatar key={user.id} name={user.name} image={user.image} size={36} tooltip />
          ))}
          {usersMock.filter(u => !u.image).slice(0, 2).map((user) => (
            <UserAvatar key={user.id} name={user.name} color={user.color} size={36} tooltip />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithProfileImage: Story = {
  parameters: { layout: "padded" },
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};

export const WithInitialsFallback: Story = {
  parameters: { layout: "padded" },
  args: {
    name: userName2,
    image: undefined,
    color: userColor,
    size: 82,
  },
};

export const WithGradientRing: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "40px",
      }}
    >
      <UserAvatar name={userName} image={userImage} size={200} ring />
    </div>
  ),
};

export const SmallSize: Story = {
  parameters: { layout: "padded" },
  args: {
    name: userName,
    image: userImage,
    size: 24,
  },
};

export const MediumSize: Story = {
  parameters: { layout: "padded" },
  args: {
    name: userName,
    image: userImage,
    size: 48,
  },
};

export const LargeSize: Story = {
  parameters: { layout: "padded" },
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};

export const WithTooltip: Story = {
  parameters: { layout: "padded" },
  args: {
    name: userName,
    image: userImage,
    size: 48,
    tooltip: true,
  },
};
