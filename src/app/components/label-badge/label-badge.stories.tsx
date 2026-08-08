import type { Meta, StoryObj } from "@storybook/react";
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
        options: ["primary", "success", "danger", "warning", "info", "neutral"],
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
    children: "Label",
    color: "primary",
    size: "md",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-sm font-primary-bold text-font">
          Color Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <LabelBadge color="primary">Primary</LabelBadge>
          <LabelBadge color="success">Success</LabelBadge>
          <LabelBadge color="danger">Danger</LabelBadge>
          <LabelBadge color="warning">Warning</LabelBadge>
          <LabelBadge color="info">Info</LabelBadge>
          <LabelBadge color="neutral">Neutral</LabelBadge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-primary-bold text-font">
          Size Variants
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <LabelBadge size="sm">Small</LabelBadge>
          <LabelBadge size="md">Medium</LabelBadge>
          <LabelBadge size="lg">Large</LabelBadge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-primary-bold text-font">
          With Close Button
        </h3>
        <div className="flex flex-wrap gap-3">
          <LabelBadge color="primary" onClose={() => alert("Closed!")}>
            Removable
          </LabelBadge>
          <LabelBadge color="success" onClose={() => alert("Closed!")}>
            Success Badge
          </LabelBadge>
          <LabelBadge color="danger" size="sm" onClose={() => alert("Closed!")}>
            Danger
          </LabelBadge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-primary-bold text-font">
          Badge Groups
        </h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary">React</LabelBadge>
          <LabelBadge color="success">TypeScript</LabelBadge>
          <LabelBadge color="info">Remix</LabelBadge>
          <LabelBadge color="warning">Tailwind</LabelBadge>
        </div>
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary Badge",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Success Badge",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Danger Badge",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning Badge",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    children: "Info Badge",
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    children: "Neutral Badge",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const WithCloseButton: Story = {
  args: {
    children: "Removable Badge",
    color: "primary",
    onClose: () => alert("Close button clicked!"),
  },
};

export const BadgeGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <LabelBadge color="primary">React</LabelBadge>
      <LabelBadge color="success">TypeScript</LabelBadge>
      <LabelBadge color="info">Remix</LabelBadge>
      <LabelBadge color="warning">Tailwind</LabelBadge>
      <LabelBadge color="danger">Performance</LabelBadge>
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    children: "Custom Styled",
    className: "!bg-background-neutral-bold !text-font-inverse",
  },
};
