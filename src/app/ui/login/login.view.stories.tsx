import type { Meta, StoryObj } from "@storybook/react-vite";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
    // The redesigned login is a dark, full-viewport split-panel layout.
    // (addon-styling reads the theme override under the "theming" param key)
    theming: { themeOverride: "dark" },
    backgrounds: { default: "overlay" },
  },
  argTypes: {
    users: {
      control: {
        type: "object",
      },
    },
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => {
            return { status: 200 };
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/**
 * Full desktop two-panel dark layout: brand panel on the left
 * (wordmark, hero copy, pipeline motif) + auth form on the right
 * (SSO buttons, user select, orange CTA).
 */
export const Default: Story = {
  args: {
    users: usersMock,
  },
};

/**
 * Narrow (375px) viewport. The brand panel collapses and only the
 * single-column auth form is shown.
 */
export const Mobile: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      // Top-align the auth section so the form starts at the top of the
      // narrow preview instead of being vertically centered (which leaves
      // a large empty area above it in the mobile viewport).
      <div id="login-mobile-root">
        <style>{`#login-mobile-root section { align-items: flex-start !important; }`}</style>
        <Story />
      </div>
    ),
  ],
};
