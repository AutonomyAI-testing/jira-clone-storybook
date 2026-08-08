import type { Meta, StoryObj } from "@storybook/react-vite";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import { Error404PageView } from "./error-404.view";

const meta: Meta<typeof Error404PageView> = {
  title: "Pages/Error404",
  component: Error404PageView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
        },
      ]);
      return <RemixStub initialEntries={["/"]} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Error404PageView>;

export const Default: Story = {};
