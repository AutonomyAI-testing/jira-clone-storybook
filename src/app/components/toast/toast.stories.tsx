import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "react-toastify";
import { Theme } from "@app/store/theme.store";
import { Button } from "../button";
import { Toast } from "./toast";
import "react-toastify/dist/ReactToastify.css";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Toast theme={Theme.LIGHT} />
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

const successMessage = "✨ Success! Operation completed successfully.";
const errorMessage = "❌ Error! Something went wrong. Please try again.";
const warningMessage = "⚠️ Warning! Please review before proceeding.";
const infoMessage = "ℹ️ Info! Here's something you should know.";

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 p-4">
      <Button
        color="success"
        variant="contained"
        onClick={() => toast.success(successMessage)}
      >
        Show Success Toast
      </Button>
      <Button
        color="danger"
        variant="contained"
        onClick={() => toast.error(errorMessage)}
      >
        Show Error Toast
      </Button>
      <Button
        color="warning"
        variant="contained"
        onClick={() => toast.warning(warningMessage)}
      >
        Show Warning Toast
      </Button>
      <Button
        color="info"
        variant="contained"
        onClick={() => toast.info(infoMessage)}
      >
        Show Info Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <Button
      color="success"
      variant="contained"
      onClick={() => toast.success(successMessage)}
    >
      Show Success Toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      color="danger"
      variant="contained"
      onClick={() => toast.error(errorMessage)}
    >
      Show Error Toast
    </Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button
      color="warning"
      variant="contained"
      onClick={() => toast.warning(warningMessage)}
    >
      Show Warning Toast
    </Button>
  ),
};

export const Info: Story = {
  render: () => (
    <Button
      color="info"
      variant="contained"
      onClick={() => toast.info(infoMessage)}
    >
      Show Info Toast
    </Button>
  ),
};
