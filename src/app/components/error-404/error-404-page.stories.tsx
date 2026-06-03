import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import { Error404Page } from "./error-404-page";

/**
 * Decorator: Wraps stories with RemixStub to provide routing context.
 * Required because Error404Page uses useNavigate() from @remix-run/react.
 */
const withRemixStub = (Story: React.ComponentType) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
    },
  ]);
  return <RemixStub />;
};

const meta: Meta<typeof Error404Page> = {
  title: "Components/Error404Page",
  component: Error404Page,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRemixStub],
};

export default meta;
type Story = StoryObj<typeof Error404Page>;

/** Default 404 page with wizard mascot, headline, subheading, body copy, and CTA buttons */
export const Default: Story = {};

/** Custom headline variant — e.g. for a specific missing resource */
export const CustomHeadline: Story = {
  args: {
    headline: "Looks Like You're Lost",
    subheading: "Error 404",
    message:
      "The page you were looking for doesn't exist. Head back to safety!",
    ctaText: "Go to Home",
    ctaHref: "/",
  },
};

/** Custom message variant — shows alternate body copy */
export const CustomMessage: Story = {
  args: {
    message:
      "This URL may have been mistyped or the page you're looking for has been moved or deleted.",
    ctaText: "Back to Dashboard",
  },
};
