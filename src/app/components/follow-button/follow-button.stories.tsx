import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { FollowButton } from "./follow-button";

const meta: Meta<typeof FollowButton> = {
  title: "Components/FollowButton",
  component: FollowButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isFollowing: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FollowButton>;

export const Default: Story = {
  args: {
    isFollowing: false,
  },
};

export const Following: Story = {
  args: {
    isFollowing: true,
  },
};

export const Disabled: Story = {
  args: {
    isFollowing: false,
    disabled: true,
  },
};

export const DisabledFollowing: Story = {
  args: {
    isFollowing: true,
    disabled: true,
  },
};

export const CustomLabel: Story = {
  args: {
    isFollowing: false,
    label: "Subscribe",
  },
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsFollowing(!isFollowing);
      setIsLoading(false);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-font-subtle mb-2">
            {isFollowing ? "You are following" : "Not following"}
          </p>
          <FollowButton
            isFollowing={isFollowing}
            onClick={handleClick}
            disabled={isLoading}
          />
        </div>
        <p className="text-font-subtlest text-sm">
          Click to toggle follow state
        </p>
      </div>
    );
  },
};

export const All: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-2 text-font">Not Following State</h3>
        <div className="flex gap-2">
          <FollowButton isFollowing={false} />
          <FollowButton isFollowing={false} disabled />
          <FollowButton isFollowing={false} label="Subscribe" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-font">Following State</h3>
        <div className="flex gap-2">
          <FollowButton isFollowing={true} />
          <FollowButton isFollowing={true} disabled />
          <FollowButton isFollowing={true} label="Unsubscribe" />
        </div>
      </div>
    </div>
  ),
};
