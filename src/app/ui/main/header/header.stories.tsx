import type { Meta, StoryObj } from "@storybook/react";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Pages/Main/Header",
  component: Header,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <div className="w-full">{withRemixStub(withMainContext(Story))}</div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    isLoading: false,
    isDisabled: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    isLoading: false,
    isDisabled: true,
  },
};
