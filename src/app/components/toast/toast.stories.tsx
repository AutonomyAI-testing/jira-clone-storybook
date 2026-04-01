import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@app/store/theme.store";
import { Button } from "../button";
import { Toast, customToast } from "./toast";
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

const successText = "Operation completed successfully!";
const errorText = "An error occurred. Please try again.";
const warningText = "Please be careful with this action.";
const infoText = "This is informational message.";

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2">
        <Button
          color="success"
          variant="subtlest"
          onClick={() => customToast.success(successText)}
        >
          Show Success
        </Button>
        <Button
          color="danger"
          variant="subtlest"
          onClick={() => customToast.error(errorText)}
        >
          Show Error
        </Button>
        <Button
          color="warning"
          variant="subtlest"
          onClick={() => customToast.warning(warningText)}
        >
          Show Warning
        </Button>
        <Button
          color="info"
          variant="subtlest"
          onClick={() => customToast.info(infoText)}
        >
          Show Info
        </Button>
      </div>
      <p className="text-sm text-font-subtle">
        Click any button to display a toast notification
      </p>
    </div>
  ),
};

const SuccessAlert = () => (
  <Button
    color="success"
    variant="subtlest"
    onClick={() => customToast.success(successText)}
  >
    Success
  </Button>
);
export const Success: Story = {
  render: () => <SuccessAlert />,
};

const ErrorAlert = () => (
  <Button
    color="danger"
    variant="subtlest"
    onClick={() => customToast.error(errorText)}
  >
    Error
  </Button>
);
export const Error: Story = {
  render: () => <ErrorAlert />,
};

const WarningAlert = () => (
  <Button
    color="warning"
    variant="subtlest"
    onClick={() => customToast.warning(warningText)}
  >
    Warning
  </Button>
);
export const Warning: Story = {
  render: () => <WarningAlert />,
};

const InfoAlert = () => (
  <Button
    color="info"
    variant="subtlest"
    onClick={() => customToast.info(infoText)}
  >
    Info
  </Button>
);
export const Info: Story = {
  render: () => <InfoAlert />,
};

export const LongMessage: Story = {
  render: () => (
    <Button
      color="success"
      variant="subtlest"
      onClick={() =>
        customToast.success(
          "This is a much longer success message that demonstrates how the toast component handles extended text content and maintains proper alignment and spacing."
        )
      }
    >
      Show Long Message
    </Button>
  ),
};
