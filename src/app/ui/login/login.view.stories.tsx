import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    users: {
      defaultValue: usersMock,
      control: { type: "object" },
    },
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => ({ status: 200 }),
        },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Two-panel desktop layout — brand hero on the left, login form on the right */
export const Default: Story = {
  args: { users: usersMock },
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

/** Single-panel mobile layout — brand panel hidden, compact wordmark shown */
export const Mobile: Story = {
  args: { users: usersMock },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  decorators: [
    (Story) => (
      <div id="login-mobile-root">
        <style>{`#login-mobile-root section { align-items: flex-start !important; }`}</style>
        <Story />
      </div>
    ),
  ],
};
