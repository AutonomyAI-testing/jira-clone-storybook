import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "neutral", "success", "danger", "warning", "info"],
    },
    variant: {
      control: "select",
      options: ["contained", "subtlest", "text"],
    },
    size: {
      control: "select",
      options: ["md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "contained",
    size: "md",
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h3 style={{ margin: 0, color: "var(--color-font)" }}>Contained</h3>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="neutral" variant="contained">
          Neutral
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="danger" variant="contained">
          Danger
        </Button>
        <Button color="warning" variant="contained">
          Warning
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
      </div>

      <h3 style={{ margin: 0, color: "var(--color-font)" }}>Subtlest</h3>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button color="primary" variant="subtlest">
          Primary
        </Button>
        <Button color="neutral" variant="subtlest">
          Neutral
        </Button>
        <Button color="success" variant="subtlest">
          Success
        </Button>
        <Button color="danger" variant="subtlest">
          Danger
        </Button>
        <Button color="warning" variant="subtlest">
          Warning
        </Button>
        <Button color="info" variant="subtlest">
          Info
        </Button>
      </div>

      <h3 style={{ margin: 0, color: "var(--color-font)" }}>Text</h3>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button color="primary" variant="text">
          Primary
        </Button>
        <Button color="neutral" variant="text">
          Neutral
        </Button>
        <Button color="success" variant="text">
          Success
        </Button>
        <Button color="danger" variant="text">
          Danger
        </Button>
        <Button color="warning" variant="text">
          Warning
        </Button>
        <Button color="info" variant="text">
          Info
        </Button>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button size="md" color="primary" variant="contained">
        Medium
      </Button>
      <Button size="lg" color="primary" variant="contained">
        Large
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button color="primary" variant="contained" disabled>
        Primary
      </Button>
      <Button color="neutral" variant="contained" disabled>
        Neutral
      </Button>
      <Button color="success" variant="contained" disabled>
        Success
      </Button>
      <Button color="danger" variant="contained" disabled>
        Danger
      </Button>
      <Button color="warning" variant="contained" disabled>
        Warning
      </Button>
      <Button color="info" variant="contained" disabled>
        Info
      </Button>
    </div>
  ),
};

export const PrimaryContained: Story = {
  args: {
    children: "Primary Contained",
    color: "primary",
    variant: "contained",
  },
};

export const NeutralSubtlest: Story = {
  args: {
    children: "Neutral Subtlest",
    color: "neutral",
    variant: "subtlest",
  },
};

export const DangerText: Story = {
  args: {
    children: "Danger Text",
    color: "danger",
    variant: "text",
  },
};
