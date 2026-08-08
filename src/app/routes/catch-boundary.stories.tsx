import type { Meta, StoryObj } from "@storybook/react-vite";
import { Error404 } from "@app/components/error-404";

// CatchBoundary from routes/index.tsx cannot be imported directly because the module
// also imports @remix-run/node (server-only), which crashes in a Vite browser context.
// CatchBoundary's entire render is: <div><Error404 message="..." href="/" /></div>
// — so we import Error404 directly with the same props, rendering identical UI.
const meta: Meta<typeof Error404> = {
  title: "Routes/CatchBoundary",
  component: Error404,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};
