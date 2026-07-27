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

export const WithFallbackColor: Story = {
  args: {
    name: "Daniel Serrano",
    color: "#dae3f9",
    size: 36,
  },
};

export const WithTooltip: Story = {
  args: {
    name: "Buzz Lightyear",
    image: "buzz-lightyear.webp",
    size: 36,
    tooltip: true,
  },
};

export const WithOutline: Story = {
  args: {
    name: "Jessie",
    image: "jessie.webp",
    size: 36,
    outline: true,
  },
};

export const Large: Story = {
  args: {
    name: "Emperor Zurg",
    image: "emperor-zurg.webp",
    size: 96,
  },
};

export const Small: Story = {
  args: {
    name: "Mr Potato",
    image: "mr-potato.webp",
    size: 24,
  },
};

export const NoImage: Story = {
  args: {
    name: "T-Rex",
    color: "#f9dad7",
    size: 36,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <UserAvatar name="Woody" image="woody.webp" size={24} />
      <UserAvatar name="Buzz Lightyear" image="buzz-lightyear.webp" size={36} />
      <UserAvatar name="Jessie" image="jessie.webp" size={48} />
      <UserAvatar name="Emperor Zurg" image="emperor-zurg.webp" size={64} />
      <UserAvatar name="Andy Davis" image="andy-davis.webp" size={96} />
      <UserAvatar name="Daniel Serrano" color="#dae3f9" size={36} />
      <UserAvatar name="T-Rex" color="#f9dad7" size={36} />
      <UserAvatar name="Woody" image="woody.webp" size={36} outline={true} />
    </div>
  ),
};
