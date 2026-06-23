import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { LoginPage } from "./login-page";

const meta: Meta<typeof LoginPage> = {
  title: "Pages/Login",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
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
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};

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
      defaultViewport: "iphone12",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};
