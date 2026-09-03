import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlanFeiPage } from "./blan-fei";

const meta: Meta<typeof BlanFeiPage> = {
  title: "Pages/BlanFeiPage",
  component: BlanFeiPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BlanFeiPage>;

export const Default: Story = {};
