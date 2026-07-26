import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: { type: "select" },
      options: ["brand", "neutral", "danger", "success", "warning", "info", "inverse"],
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    size: "md",
    color: "brand",
  },
};

export const WithLabel: Story = {
  args: {
    size: "md",
    color: "brand",
    label: "Loading...",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    color: "brand",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    color: "brand",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    color: "brand",
  },
};

export const Neutral: Story = {
  args: {
    size: "md",
    color: "neutral",
  },
};

export const Danger: Story = {
  args: {
    size: "md",
    color: "danger",
  },
};

export const Success: Story = {
  args: {
    size: "md",
    color: "success",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Loader size="sm" color="brand" />
          <span className="text-xs text-font-subtle">sm</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader size="md" color="brand" />
          <span className="text-xs text-font-subtle">md</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader size="lg" color="brand" />
          <span className="text-xs text-font-subtle">lg</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader size="xl" color="brand" />
          <span className="text-xs text-font-subtle">xl</span>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-font">Size Variants</h3>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-font">Size Variants</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Loader size="sm" color="brand" />
            <span className="text-xs text-font-subtle">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="md" color="brand" />
            <span className="text-xs text-font-subtle">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="lg" color="brand" />
            <span className="text-xs text-font-subtle">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="xl" color="brand" />
            <span className="text-xs text-font-subtle">xl</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold text-font">Color Variants</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Loader size="lg" color="brand" />
            <span className="text-xs text-font-subtle">brand</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="lg" color="neutral" />
            <span className="text-xs text-font-subtle">neutral</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="lg" color="danger" />
            <span className="text-xs text-font-subtle">danger</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="lg" color="success" />
            <span className="text-xs text-font-subtle">success</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="lg" color="warning" />
            <span className="text-xs text-font-subtle">warning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loader size="lg" color="info" />
            <span className="text-xs text-font-subtle">info</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FullPageOverlay: Story = {
  render: () => (
    <div className="relative flex h-64 w-96 items-center justify-center rounded-lg bg-elevation-surface">
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-elevation-surface opacity-80" />
      <Loader size="xl" color="brand" label="Loading data..." />
    </div>
  ),
};
