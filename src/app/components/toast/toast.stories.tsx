import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
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

const text = "This is the alert text";

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 p-4">
      {[SuccessAlert, WarningAlert, DangerAlert, InfoAlert].map(
        (ComponentAlert, index) => (
          <ComponentAlert key={index} />
        )
      )}
    </div>
  ),
};

const SuccessAlert = () => (
  <Button
    color="success"
    variant="subtlest"
    onClick={() => toast.success(text)}
  >
    Success
  </Button>
);
export const Success: Story = {
  render: () => <SuccessAlert />,
};

const WarningAlert = () => (
  <Button
    color="warning"
    variant="subtlest"
    onClick={() => toast.warning(text)}
  >
    Warning
  </Button>
);
export const Warning: Story = {
  render: () => <WarningAlert />,
};

const DangerAlert = () => (
  <Button color="danger" variant="subtlest" onClick={() => toast.error(text)}>
    Danger
  </Button>
);
export const Danger: Story = {
  render: () => <DangerAlert />,
};

const InfoAlert = () => (
  <Button color="info" variant="subtlest" onClick={() => toast.info(text)}>
    Info
  </Button>
);
export const Info: Story = {
  render: () => <InfoAlert />,
};

// AllVariants: shows all 4 toasts pre-triggered with autoClose=false
const AllVariantsInner = () => {
  useEffect(() => {
    toast.dismiss();
    toast.success("Success: Your changes have been saved!", { toastId: "success", autoClose: false });
    toast.warning("Warning: This action cannot be undone!", { toastId: "warning", autoClose: false });
    toast.error("Danger: An error occurred. Please try again.", { toastId: "danger", autoClose: false });
    toast.info("Info: New updates are available.", { toastId: "info", autoClose: false });
  }, []);
  return (
    <div style={{ padding: "20px", minHeight: "300px" }}>
      <p style={{ fontSize: "14px", color: "var(--color-font-subtle)", marginBottom: "8px" }}>All 4 toast variants (top-right corner):</p>
      <ul style={{ fontSize: "13px", color: "var(--color-font-subtle)", paddingLeft: "20px", lineHeight: "2" }}>
        <li>✅ Success — green background + green border</li>
        <li>⚠️ Warning — yellow background + yellow border</li>
        <li>🔴 Danger — red background + red border</li>
        <li>ℹ️ Info — blue background + blue border</li>
      </ul>
    </div>
  );
};

export const AllVariants: Story = {
  decorators: [
    (Story) => (
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Toast theme={Theme.LIGHT} />
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  render: () => <AllVariantsInner />,
};
