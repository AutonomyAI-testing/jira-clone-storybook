import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const userWithImage = usersMock[1]; // Woody
const userWithImage2 = usersMock[2]; // Buzz Lightyear
const userWithoutImage = usersMock[0]; // Daniel Serrano (no image, has color)
const userWithoutImage2 = usersMock[8]; // T-Rex (no image, no color)

// Gradient ring matching the reference image: blue-to-teal gradient border
const gradientRing = {
  padding: "4px",
  borderRadius: "9999px",
  background: "linear-gradient(135deg, #6ec6f5 0%, #4dd4c8 35%, #a0c4f8 70%, #b8b8f0 100%)",
  display: "inline-flex",
} as const;

const innerWhiteBg = {
  background: "white",
  borderRadius: "9999px",
  padding: "2px",
  display: "inline-flex",
} as const;

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

// Primary story — all sizes and states at once
export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* With gradient border ring */}
      <div>
        <p style={{ marginBottom: "16px", fontFamily: "sans-serif", fontSize: "14px", color: "#666" }}>
          With Profile Image — Various Sizes
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <div style={gradientRing}><div style={innerWhiteBg}>
            <UserAvatar name={userWithImage.name} image={userWithImage.image} size={28} />
          </div></div>
          <div style={gradientRing}><div style={innerWhiteBg}>
            <UserAvatar name={userWithImage.name} image={userWithImage.image} size={36} />
          </div></div>
          <div style={gradientRing}><div style={innerWhiteBg}>
            <UserAvatar name={userWithImage.name} image={userWithImage.image} size={48} />
          </div></div>
          <div style={gradientRing}><div style={innerWhiteBg}>
            <UserAvatar name={userWithImage.name} image={userWithImage.image} size={82} />
          </div></div>
        </div>
      </div>

      {/* Fallback initials */}
      <div>
        <p style={{ marginBottom: "16px", fontFamily: "sans-serif", fontSize: "14px", color: "#666" }}>
          Fallback Initials (no image)
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <div style={gradientRing}><div style={innerWhiteBg}>
            <UserAvatar name={userWithoutImage.name} color={userWithoutImage.color} size={36} />
          </div></div>
          <div style={gradientRing}><div style={innerWhiteBg}>
            <UserAvatar name={userWithoutImage.name} color={userWithoutImage.color} size={48} />
          </div></div>
          <div style={gradientRing}><div style={innerWhiteBg}>
            <UserAvatar name={userWithoutImage2.name} size={48} />
          </div></div>
        </div>
      </div>

      {/* Multiple users */}
      <div>
        <p style={{ marginBottom: "16px", fontFamily: "sans-serif", fontSize: "14px", color: "#666" }}>
          Multiple Users
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          {usersMock.slice(0, 6).map((user) => (
            <div key={user.id} style={gradientRing}>
              <div style={innerWhiteBg}>
                <UserAvatar name={user.name} image={user.image} color={user.color} size={36} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    name: userWithImage.name,
    image: userWithImage.image,
    size: 120,
  },
  render: (args) => (
    <div style={{ padding: "32px" }}>
      <div style={gradientRing}>
        <div style={innerWhiteBg}>
          <UserAvatar {...args} />
        </div>
      </div>
    </div>
  ),
};

export const WithInitials: Story = {
  args: {
    name: userWithoutImage.name,
    color: userWithoutImage.color,
    size: 120,
  },
  render: (args) => (
    <div style={{ padding: "32px" }}>
      <div style={gradientRing}>
        <div style={innerWhiteBg}>
          <UserAvatar {...args} />
        </div>
      </div>
    </div>
  ),
};

export const SmallSize: Story = {
  args: {
    name: userWithImage2.name,
    image: userWithImage2.image,
    size: 28,
  },
};

export const MediumSize: Story = {
  args: {
    name: userWithImage2.name,
    image: userWithImage2.image,
    size: 48,
  },
};

export const LargeSize: Story = {
  args: {
    name: userWithImage2.name,
    image: userWithImage2.image,
    size: 82,
  },
};
