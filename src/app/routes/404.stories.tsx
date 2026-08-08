import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import NotFound404Route from "./404";

const meta: Meta<typeof NotFound404Route> = {
  title: "Routes/NotFound404",
  component: NotFound404Route,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    ((Story: StoryFn) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
        },
      ]);
      return (
        <div
          style={{
            transform: "scale(0.55)",
            transformOrigin: "top center",
            height: "477px", // ~867 * 0.55
          }}
        >
          <RemixStub initialEntries={["/"]} />
        </div>
      );
    }) as unknown as StoryFn,
  ],
};

export default meta;
type Story = StoryObj<typeof NotFound404Route>;

export const Default: Story = {};
