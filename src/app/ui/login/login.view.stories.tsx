import type { Meta, StoryObj, StoryFn } from "@storybook/react";
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
    (Story: StoryFn) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: (
            <div style={{ width: "1400px", height: "700px" }}>
              <Story />
            </div>
          ),
          action: async () => {
            return {
              status: 200,
            };
          },
        },
      ]);

      return <RemixStub />;
    }
  ],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};
