import type { Meta, StoryObj } from "@storybook/react";
import { Error404 } from "@app/components/error-404";

/**
 * The 404 error page as it appears to users who navigate to a non-existent route.
 *
 * The actual route (src/app/routes/404.tsx) is a placeholder stub (renders plain text).
 * The styled 404 experience is delivered via the CatchBoundary in src/app/routes/index.tsx,
 * which renders <Error404> with the "It seems that you have lost!" message.
 */
const meta: Meta<typeof Error404> = {
  title: "Routes/NotFound404",
  component: Error404,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

/** The 404 page as shown by the CatchBoundary in src/app/routes/index.tsx */
export const CatchBoundary: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};

/** Default 404 with standard message (no link) */
export const DefaultMessage: Story = {
  args: {
    message: "Error 404: Not Found",
    href: "",
  },
};
