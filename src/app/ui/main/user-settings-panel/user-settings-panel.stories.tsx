import { Meta, StoryObj } from "@storybook/react";
import { UserSettingsPanel } from "./user-settings-panel";

const meta: Meta<typeof UserSettingsPanel> = {
  component: UserSettingsPanel,
  title: "User Settings Panel",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
};
