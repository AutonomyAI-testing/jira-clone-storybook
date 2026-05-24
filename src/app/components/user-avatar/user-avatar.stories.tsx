import type { Meta, StoryObj } from "@storybook/react";

import { UserAvatar } from "./user-avatar";

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

export const WithImage: Story = {
  args: {
    name: "Woody",
    image: "woody.webp",
    size: 36,
  },
};

export const WithFallback: Story = {
  args: {
    name: "Daniel Serrano",
    color: "#dae3f9",
    size: 36,
  },
};

export const Large: Story = {
  args: {
    name: "Buzz Lightyear",
    image: "buzz-lightyear.webp",
    size: 96,
  },
};

export const LargeFallback: Story = {
  args: {
    name: "T-Rex",
    color: "#c8f5c2",
    size: 96,
  },
};

export const WithTooltip: Story = {
  args: {
    name: "Jessie",
    image: "jessie.webp",
    size: 48,
    tooltip: true,
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <UserAvatar name="Woody" image="woody.webp" size={36} />
      <UserAvatar name="Buzz Lightyear" image="buzz-lightyear.webp" size={36} />
      <UserAvatar name="Jessie" image="jessie.webp" size={36} />
      <UserAvatar name="Emperor Zurg" image="emperor-zurg.webp" size={36} />
      <UserAvatar name="Daniel Serrano" color="#dae3f9" size={36} />
      <UserAvatar name="T-Rex" size={36} />
    </div>
  ),
};
