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
            return {
              status: 200,
            };
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Full desktop split-panel layout (≥ 1024px) */
export const Default: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/** Mobile view — brand panel hidden, only the auth card */
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
      // Top-align the auth card so the narrow mobile preview isn't dominated
      // by the vertical-centering whitespace of the page's min-h-screen wrapper.
      // Scoped style targets the auth <section> which centers its content vertically.
      <div id="login-mobile-story">
        <style>{`#login-mobile-story section { align-items: flex-start !important; }`}</style>
        <Story />
      </div>
    ),
  ],
};
