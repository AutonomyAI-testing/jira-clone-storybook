import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Error500>;

/** Default usage with placeholder message and no link */
export const Default: Story = {
  args: {
    message: "Error 500: Server error",
    href: "",
  },
};

/** Analytics ErrorBoundary — message with a link back to the board page */
export const AnalyticsError: Story = {
  args: {
    message: "The analytics page failed. Navigate to the board page",
    href: "board",
  },
};

/** Server Error page ErrorBoundary — longer message with a link back to the board page
 * (in production this also shows a toast notification via react-toastify) */
export const ServerErrorPage: Story = {
  args: {
    message:
      "The Server error page failed. This is an example of a server error page (check network tab). Navigate to the board page",
    href: "board",
  },
};
