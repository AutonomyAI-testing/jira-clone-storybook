import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeView } from "./welcome.view";

const meta: Meta<typeof WelcomeView> = {
  title: "Pages/Welcome",
  component: WelcomeView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};
