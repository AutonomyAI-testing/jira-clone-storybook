import type { Meta, StoryObj } from "@storybook/react-vite";
import { LandingView } from "./landing.view";

// Uses fullscreen layout to display the landing page hero section in its intended full-screen context
const meta: Meta<typeof LandingView> = {
  title: "Pages/Landing/LandingView",
  component: LandingView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LandingView>;

export const Default: Story = {};
