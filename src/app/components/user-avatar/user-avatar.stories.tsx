import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const userImage = usersMock[1].image;
const userName = usersMock[1].name;

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "centered",
  },
  args: {
    name: userName,
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
    gradientRing: {
      control: {
        type: "boolean",
      },
    },
    outline: {
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
    image: userImage,
  },
};

export const Fallback: Story = {
  args: {
    image: undefined,
    color: "#dae3f9",
  },
};

export const Tooltip: Story = {
  args: {
    image: userImage,
    tooltip: true,
  },
};

export const MediumSize: Story = {
  args: {
    image: userImage,
    size: 48,
  },
};

export const LargeSize: Story = {
  args: {
    image: userImage,
    size: 82,
  },
};

export const RedOutline: Story = {
  args: {
    image: userImage,
    outline: true,
    size: 120,
  },
};

export const RedOutlineFallback: Story = {
  args: {
    image: undefined,
    color: "#dae3f9",
    outline: true,
    size: 120,
  },
};

export const RedOutlineShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h3 className="mb-4 text-sm font-bold">With Image</h3>
        <div className="flex items-end gap-4">
          {[32, 40, 48, 64, 80].map((size) => (
            <UserAvatar
              key={size}
              name={usersMock[1].name}
              image={usersMock[1].image}
              color={usersMock[1].color}
              size={size}
              outline={true}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-bold">With Fallback (Initials)</h3>
        <div className="flex items-end gap-4">
          {[usersMock[0], usersMock[8]].map((user, index) => (
            <UserAvatar
              key={index}
              name={user.name}
              image={user.image}
              color={user.color}
              size={48}
              outline={true}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const GradientRingImage: Story = {
  args: {
    image: userImage,
    gradientRing: true,
    size: 120,
  },
};

export const GradientRingFallback: Story = {
  args: {
    image: undefined,
    color: "#dae3f9",
    gradientRing: true,
    size: 120,
  },
};

export const GradientRingMedium: Story = {
  args: {
    image: userImage,
    size: 48,
    gradientRing: true,
  },
};

export const GradientRingLarge: Story = {
  args: {
    image: userImage,
    size: 82,
    gradientRing: true,
  },
};

export const GradientRingShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h3 className="mb-4 text-sm font-bold">With Image</h3>
        <div className="flex gap-4">
          {[usersMock[1], usersMock[2], usersMock[3]].map((user, index) => (
            <UserAvatar
              key={index}
              name={user.name}
              image={user.image}
              color={user.color}
              size={36}
              gradientRing={true}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-bold">With Fallback (Initials)</h3>
        <div className="flex gap-4">
          {[usersMock[0], usersMock[8]].map((user, index) => (
            <UserAvatar
              key={index}
              name={user.name}
              image={user.image}
              color={user.color}
              size={36}
              gradientRing={true}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-bold">Various Sizes</h3>
        <div className="flex items-end gap-4">
          {[32, 40, 48, 64, 80].map((size) => (
            <UserAvatar
              key={size}
              name={usersMock[1].name}
              image={usersMock[1].image}
              color={usersMock[1].color}
              size={size}
              gradientRing={true}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};
