import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
  component: LabelBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "neutral",
          "success",
          "danger",
          "warning",
          "info",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

export const Default: Story = {
  args: {
    children: "Label Badge",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Neutral: Story = {
  args: {
    children: "Neutral",
    color: "neutral",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    color: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    color: "danger",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    color: "info",
  },
};

export const SmallSize: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
};

export const LargeSize: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {["primary", "neutral", "success", "danger", "warning", "info"].map(
        (color) => (
          <LabelBadge
            key={color}
            color={color as
              | "primary"
              | "neutral"
              | "success"
              | "danger"
              | "warning"
              | "info"}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </LabelBadge>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <LabelBadge size="sm">Small</LabelBadge>
      <LabelBadge size="md">Medium</LabelBadge>
      <LabelBadge size="lg">Large</LabelBadge>
    </div>
  ),
};

function DismissibleComponent() {
  const [badges, setBadges] = useState([
    "JavaScript",
    "React",
    "TypeScript",
  ]);

  const removeBadge = (index: number) => {
    setBadges((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge, index) => (
        <LabelBadge
          key={index}
          color="primary"
          onClose={() => removeBadge(index)}
        >
          {badge}
        </LabelBadge>
      ))}
    </div>
  );
}

export const Dismissible: Story = {
  render: () => <DismissibleComponent />,
};

export const DismissibleGroup: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium">
          Primary Dismissible Badges
        </p>
        <DismissibleComponent />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">
          Various Colors (Non-dismissible)
        </p>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary">JavaScript</LabelBadge>
          <LabelBadge color="success">Approved</LabelBadge>
          <LabelBadge color="warning">Pending</LabelBadge>
          <LabelBadge color="danger">Blocked</LabelBadge>
          <LabelBadge color="info">Info</LabelBadge>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">
          Size Variants
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <LabelBadge size="sm">Small Badge</LabelBadge>
          <LabelBadge size="md">Medium Badge</LabelBadge>
          <LabelBadge size="lg">Large Badge</LabelBadge>
        </div>
      </div>
    </div>
  ),
};

export const BadgeGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm font-medium">Tags</p>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary">React</LabelBadge>
          <LabelBadge color="primary">TypeScript</LabelBadge>
          <LabelBadge color="primary">Tailwind CSS</LabelBadge>
          <LabelBadge color="primary">Design System</LabelBadge>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Status Badges</p>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="success">Active</LabelBadge>
          <LabelBadge color="warning">In Progress</LabelBadge>
          <LabelBadge color="danger">Blocked</LabelBadge>
          <LabelBadge color="info">Draft</LabelBadge>
        </div>
      </div>
    </div>
  ),
};

