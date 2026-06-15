import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const userImage = usersMock[1].image;
const userName = usersMock[1].name;
const fallbackUser = usersMock[0]; // Daniel Serrano — no image, has color

// Shared styles for story layouts
const containerStyle = {
  padding: "32px",
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: "32px",
};
const sectionStyle = {
  marginBottom: "12px",
  fontSize: "13px",
  color: "#666",
  fontFamily: "sans-serif",
};
const flexRowStyle = {
  display: "flex" as const,
  alignItems: "center" as const,
};

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
  title: "Components/UserAvatar",
  parameters: {
    layout: "padded",
  },
  argTypes: {
    name: { control: { type: "text" } },
    image: { control: { type: "text" } },
    color: { control: { type: "color" } },
    size: { control: { type: "number" } },
    tooltip: { control: { type: "boolean" } },
    gradientBorder: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

// Overview: all main states in one grid
export const Default: Story = {
  render: () => (
    <div style={containerStyle}>
      <div>
        <p style={sectionStyle}>With profile image (sizes: 36, 48, 82px)</p>
        <div style={{ ...flexRowStyle, gap: "16px" }}>
          <UserAvatar name={userName} image={userImage} size={36} />
          <UserAvatar name={userName} image={userImage} size={48} />
          <UserAvatar name={userName} image={userImage} size={82} />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>Initials fallback (no image)</p>
        <div style={{ ...flexRowStyle, gap: "16px" }}>
          <UserAvatar
            name={fallbackUser.name}
            color={fallbackUser.color}
            size={36}
          />
          <UserAvatar
            name={fallbackUser.name}
            color={fallbackUser.color}
            size={48}
          />
          <UserAvatar
            name={fallbackUser.name}
            color={fallbackUser.color}
            size={82}
          />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>Multiple users</p>
        <div style={{ ...flexRowStyle, gap: "8px" }}>
          {usersMock.slice(0, 6).map((user) => (
            <UserAvatar
              key={user.id}
              name={user.name}
              image={user.image}
              color={user.color}
              size={36}
            />
          ))}
        </div>
      </div>
      <div>
        <p style={sectionStyle}>With gradient border</p>
        <div style={{ ...flexRowStyle, gap: "16px" }}>
          <UserAvatar
            name={userName}
            image={userImage}
            size={82}
            gradientBorder={false}
          />
          <UserAvatar
            name={userName}
            image={userImage}
            size={82}
            gradientBorder={true}
          />
        </div>
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 82,
  },
};

export const Fallback: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div
      style={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <p style={{ margin: 0, ...sectionStyle }}>
        Initials fallback — no image, initials text is red
      </p>
      <div style={{ ...flexRowStyle, gap: "16px" }}>
        <UserAvatar
          name={fallbackUser.name}
          color={fallbackUser.color}
          size={36}
        />
        <UserAvatar
          name={fallbackUser.name}
          color={fallbackUser.color}
          size={48}
        />
        <UserAvatar
          name={fallbackUser.name}
          color={fallbackUser.color}
          size={82}
        />
      </div>
    </div>
  ),
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

export const WithGradientBorder: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div style={{ ...flexRowStyle, gap: "24px" }}>
      <UserAvatar
        name={userName}
        image={userImage}
        size={36}
        gradientBorder={true}
      />
      <UserAvatar
        name={userName}
        image={userImage}
        size={48}
        gradientBorder={true}
      />
      <UserAvatar
        name={userName}
        image={userImage}
        size={82}
        gradientBorder={true}
      />
      <UserAvatar
        name={fallbackUser.name}
        color={fallbackUser.color}
        size={82}
        gradientBorder={true}
      />
    </div>
  ),
};
