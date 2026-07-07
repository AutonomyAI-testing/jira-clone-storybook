import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { Error404LoginView } from "./error-404-login.view";

const meta: Meta<typeof Error404LoginView> = {
  title: "Pages/Error404Login",
  component: Error404LoginView,
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
type Story = StoryObj<typeof Error404LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};

export const SingleUser: Story = {
  args: {
    users: [usersMock[0]],
  },
};
