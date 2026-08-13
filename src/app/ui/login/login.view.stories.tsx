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

/** Default view — first user is Daniel Serrano (initials avatar) */
export const Default: Story = {
  args: {
    users: usersMock,
  },
};

/** Demonstrates the page when the selected user has a photo avatar (Woody) */
export const WithImageAvatar: Story = {
  args: {
    // Reorder so Woody (image avatar) is first → becomes the default selected user
    users: [usersMock[1], ...usersMock.filter((_, i) => i !== 1)],
  },
};

/** Demonstrates the page when the selected user has an initials/fallback avatar */
export const WithInitialsAvatar: Story = {
  args: {
    // Daniel Serrano has no image, only a pastel color
    users: [usersMock[0], ...usersMock.filter((_, i) => i !== 0)],
  },
};
