import type { Meta, StoryObj } from "@storybook/react";
import {
  SuddenlySpacesLogo,
  SuddenlySpacesIcon,
} from "./suddenly-spaces-logo";

const meta: Meta<typeof SuddenlySpacesLogo> = {
  title: "Components/SuddenlySpacesLogo",
  component: SuddenlySpacesLogo,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SuddenlySpacesLogo>;

export const Default: Story = {
  args: {
    size: 64,
  },
};

export const Large: Story = {
  args: {
    size: 72,
  },
};

export const Small: Story = {
  args: {
    size: 32,
  },
};

export const IconOnly: StoryObj<typeof SuddenlySpacesIcon> = {
  render: (args) => <SuddenlySpacesIcon {...args} />,
  args: {
    size: 48,
  },
};
