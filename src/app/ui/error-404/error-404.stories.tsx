import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { Error404View } from "./error-404.view";

const RemixStubDecorator = (Story: React.ComponentType) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
    },
  ]);
  return <RemixStub />;
};

const meta: Meta<typeof Error404View> = {
  title: "Pages/Error404",
  component: Error404View,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [RemixStubDecorator],
};

export default meta;
type Story = StoryObj<typeof Error404View>;

/**
 * Main 404 Error Page
 *
 * Displays a friendly error page with:
 * - Anime avatar image with gradient border
 * - Large 404 heading with gradient text effect
 * - Friendly error message explaining the situation
 * - Primary button to navigate home
 * - Secondary button to go back to previous page
 */
export const Default: Story = {};

/**
 * Alternative story showing the page in a smaller viewport
 * to verify responsive behavior
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Alternative story showing the page on a tablet viewport
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
