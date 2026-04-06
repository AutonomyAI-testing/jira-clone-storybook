import type { Meta, StoryObj } from "@storybook/react";
import { Avatar_ } from "./avatar";

const meta: Meta<typeof Avatar_> = {
  title: "Components/Avatar",
  component: Avatar_,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      defaultValue: "Andy Davis",
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
        type: "select",
        options: [48, 80],
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
type Story = StoryObj<typeof Avatar_>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-8" style={{ padding: "24px", background: "var(--color-elevation-surface, #fff)" }}>
      {/* Medium size (48px) - images */}
      <div>
        <p style={{ fontSize: "11px", color: "#888", marginBottom: "8px", fontFamily: "sans-serif" }}>Medium (48px) — with images</p>
        <div className="flex gap-4">
          <Avatar_ name="Andy Davis" image="andy-davis.webp" size={48} />
          <Avatar_ name="Buzz Lightyear" image="buzz-lightyear.webp" size={48} />
          <Avatar_ name="Emperor Zurg" image="emperor-zurg.webp" size={48} />
          <Avatar_ name="Jessie" image="jessie.webp" size={48} />
          <Avatar_ name="Little Green Men" image="little-green-men.webp" size={48} />
          <Avatar_ name="Mr Potato" image="mr-potato.webp" size={48} />
        </div>
      </div>
      {/* Medium size (48px) - fallback initials */}
      <div>
        <p style={{ fontSize: "11px", color: "#888", marginBottom: "8px", fontFamily: "sans-serif" }}>Medium (48px) — fallback with initials</p>
        <div className="flex gap-4">
          <Avatar_ name="John Doe" color="#dae3f9" size={48} />
          <Avatar_ name="Jane Smith" color="#f9e3da" size={48} />
          <Avatar_ name="Bob Martin" color="#d9f9da" size={48} />
          <Avatar_ name="Alice Chen" color="#f9f0da" size={48} />
          <Avatar_ name="Sam Wilson" color="#e8daff" size={48} />
          <Avatar_ name="Lily Park" color="#ffdaea" size={48} />
        </div>
      </div>
      {/* Large size (80px) - images */}
      <div>
        <p style={{ fontSize: "11px", color: "#888", marginBottom: "8px", fontFamily: "sans-serif" }}>Large (80px) — with images</p>
        <div className="flex gap-4">
          <Avatar_ name="Andy Davis" image="andy-davis.webp" size={80} />
          <Avatar_ name="Buzz Lightyear" image="buzz-lightyear.webp" size={80} />
          <Avatar_ name="Emperor Zurg" image="emperor-zurg.webp" size={80} />
          <Avatar_ name="Jessie" image="jessie.webp" size={80} />
        </div>
      </div>
      {/* Large size (80px) - fallback initials */}
      <div>
        <p style={{ fontSize: "11px", color: "#888", marginBottom: "8px", fontFamily: "sans-serif" }}>Large (80px) — fallback with initials</p>
        <div className="flex gap-4">
          <Avatar_ name="John Doe" color="#dae3f9" size={80} />
          <Avatar_ name="Jane Smith" color="#f9e3da" size={80} />
          <Avatar_ name="Bob Martin" color="#d9f9da" size={80} />
          <Avatar_ name="Alice Chen" color="#f9f0da" size={80} />
        </div>
      </div>
      {/* Tooltip (hover to see) */}
      <div>
        <p style={{ fontSize: "11px", color: "#888", marginBottom: "8px", fontFamily: "sans-serif" }}>With tooltip on hover</p>
        <div className="flex gap-4">
          <Avatar_ name="Andy Davis" image="andy-davis.webp" size={48} tooltip />
          <Avatar_ name="John Doe" color="#dae3f9" size={48} tooltip />
          <Avatar_ name="Buzz Lightyear" image="buzz-lightyear.webp" size={80} tooltip />
          <Avatar_ name="Jane Smith" color="#f9e3da" size={80} tooltip />
        </div>
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    name: "Andy Davis",
    image: "andy-davis.webp",
    size: 48,
  },
};

export const WithImageLarge: Story = {
  args: {
    name: "Andy Davis",
    image: "andy-davis.webp",
    size: 80,
  },
};

export const WithFallback: Story = {
  args: {
    name: "John Doe",
    color: "#dae3f9",
    size: 48,
  },
};

export const WithFallbackLarge: Story = {
  args: {
    name: "Jane Smith",
    color: "#f9e3da",
    size: 80,
  },
};

export const WithTooltip: Story = {
  args: {
    name: "Andy Davis",
    image: "andy-davis.webp",
    tooltip: true,
    size: 48,
  },
};

export const WithTooltipFallback: Story = {
  args: {
    name: "John Doe",
    tooltip: true,
    size: 48,
  },
};

export const MediumSize: Story = {
  args: {
    name: "Buzz Lightyear",
    image: "buzz-lightyear.webp",
    size: 48,
  },
};

export const LargeSize: Story = {
  args: {
    name: "Emperor Zurg",
    image: "emperor-zurg.webp",
    size: 80,
  },
};
