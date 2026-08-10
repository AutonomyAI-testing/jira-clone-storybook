import type { Meta, StoryObj } from "@storybook/react-vite";

import { WelcomeView } from "./welcome.view";

const meta: Meta<typeof WelcomeView> = {
  title: "UI/Welcome/WelcomeView",
  component: WelcomeView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};
