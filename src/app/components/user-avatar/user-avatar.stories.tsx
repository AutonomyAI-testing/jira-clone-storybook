import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const userImage = usersMock[1].image;
const userName = usersMock[1].name;

// Avatar card component to eliminate repetitive markup in story renders
interface AvatarCardProps {
  label: string;
  children: React.ReactNode;
}

const AvatarCard = ({ label, children }: AvatarCardProps) => (
  <div className="flex flex-col items-center gap-2">
    {children}
    <span className="text-xs text-font-subtle">{label}</span>
  </div>
);

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    name: {
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
    gradientBorder: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-6 items-end">
      <AvatarCard label="With Image">
        <UserAvatar name={userName} image={userImage} size={36} />
      </AvatarCard>
      <AvatarCard label="Fallback">
        <UserAvatar name="Daniel Serrano" image={undefined} color="#dae3f9" size={36} />
      </AvatarCard>
      <AvatarCard label="Tooltip">
        <UserAvatar name={userName} image={userImage} size={36} tooltip={true} />
      </AvatarCard>
      <AvatarCard label="Medium (48px)">
        <UserAvatar name={userName} image={userImage} size={48} />
      </AvatarCard>
      <AvatarCard label="Large (82px)">
        <UserAvatar name={userName} image={userImage} size={82} />
      </AvatarCard>
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    name: userName,
    image: userImage,
    size: 36,
  },
};

export const WithFallback: Story = {
  args: {
    name: "Daniel Serrano",
    image: undefined,
    color: "#dae3f9",
    size: 36,
  },
};

// Demonstrates the built-in tooltip that shows on hover
export const WithTooltip: Story = {
  args: {
    name: userName,
    image: userImage,
    tooltip: true,
    size: 36,
  },
};

// Individual size stories for testing and development
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
    <div className="flex flex-wrap gap-12 p-6 items-center">
      <AvatarCard label="Small (36px)">
        <UserAvatar
          name={userName}
          image={userImage}
          size={36}
          gradientBorder={true}
        />
      </AvatarCard>
      <AvatarCard label="Medium (48px)">
        <UserAvatar
          name={userName}
          image={userImage}
          size={48}
          gradientBorder={true}
        />
      </AvatarCard>
      <AvatarCard label="Large (82px)">
        <UserAvatar
          name={userName}
          image={userImage}
          size={82}
          gradientBorder={true}
        />
      </AvatarCard>
    </div>
  ),
};
