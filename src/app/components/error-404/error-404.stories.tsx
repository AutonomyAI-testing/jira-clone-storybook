import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ComponentType) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
        },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: "Oops! Wrong turn.",
    subtitle: "The page you're looking for has vanished into the anime dimension.",
  },
};

export const LegacyMessage: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};
