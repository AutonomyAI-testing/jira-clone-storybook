import type { Meta, StoryObj } from "@storybook/react";
import { LoginPageView } from "./login-page.view";

const meta: Meta<typeof LoginPageView> = {
  title: "Pages/LoginPage",
  component: LoginPageView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginPageView>;

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
