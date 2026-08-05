import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { WelcomeView } from "./welcome.view";

const meta: Meta<typeof WelcomeView> = {
  title: "Pages/Welcome",
  component: WelcomeView,
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
        {
          path: "/login",
          element: <div style={{ padding: 32, color: "#fff", background: "#121211", minHeight: "100vh" }}>Login page</div>,
        },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

/** Desktop: full two-panel layout */
export const Default: Story = {
  args: {
    initialLoading: false,
  },
};

/** Mobile: single-column, brand panel hidden, compact wordmark visible */
export const Mobile: Story = {
  args: {
    initialLoading: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/** Loading state — submit button is disabled with spinner */
export const Loading: Story = {
  name: "Loading",
  args: {
    initialLoading: true,
    disabled: false,
  },
};

/** Disabled state — entire auth panel is inert (opacity + grayscale overlay) */
export const Disabled: Story = {
  name: "Disabled",
  args: {
    initialLoading: false,
    disabled: true,
  },
};
