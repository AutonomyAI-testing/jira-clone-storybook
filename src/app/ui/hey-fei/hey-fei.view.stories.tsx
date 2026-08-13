import type { Meta, StoryObj } from "@storybook/react";
import { HeyFeiView } from "./hey-fei.view";

const meta: Meta<typeof HeyFeiView> = {
  title: "Pages/HeyFei",
  component: HeyFeiView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeyFeiView>;

export const Default: Story = {};
