import type { Meta, StoryObj } from "@storybook/react-vite";
import { usersMock } from "@domain/user";
import { withMainContext } from "@app/stories/utils";
import { UserAvatar } from "./user-avatar";

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "centered",
  },
  decorators: [withMainContext],
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

const userImage = usersMock[1].image;
const userName = usersMock[1].name;

export const Default: Story = {
  render: (_) => (
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
    name: userName,
  },
};

export const Fallback: Story = {
  args: {
    name: userName,
    image: undefined,
    color: "#dae3f9",
  },
};

export const Tooltip: Story = {
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

export const GradientRing: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div style={{ display: "flex", justifyContent: "center", padding: "24px" }}>
      <UserAvatar
        name="Custom Avatar"
        customSrc="/avatars/custom-avatar.png"
        size={96}
        gradientRing={true}
      />
    </div>
  ),
};
