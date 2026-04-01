import type { Meta, StoryObj } from "@storybook/react";
import { toast, ToastContainer } from "react-toastify";
import { Theme } from "@app/store/theme.store";
import { Toast } from "./toast";

// Spinner component for loading toast
const Spinner = () => (
  <svg
    className="toast-spinner"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    style={{
      display: "inline-block",
      width: "1rem",
      height: "1rem",
      animation: "spin 1s linear infinite",
      marginRight: "0.5rem",
      flexShrink: 0,
    }}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="var(--color-border-info)"
      strokeWidth="3"
      strokeLinecap="round"
      style={{ opacity: 0.25 }}
    />
    <path
      fill="var(--color-border-info)"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      style={{ opacity: 0.75 }}
    />
  </svg>
);

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: Object.values(Theme),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastDemo = ({ theme }: { theme: Theme }) => {
  const showToasts = () => {
    toast.success("Issue created successfully!", {
      toastId: "success",
    });
    toast.error("Failed to update issue. Please try again.", {
      toastId: "error",
    });
    toast.warning("You are running low on storage space.", {
      toastId: "warning",
    });
    toast.info("New updates are available. Click to refresh.", {
      toastId: "info",
    });
    toast(
      () => (
        <span style={{ display: "flex", alignItems: "center" }}>
          <Spinner />
          Processing your request...
        </span>
      ),
      {
        type: "loading",
        toastId: "loading",
        autoClose: false,
      }
    );
    toast("This action is disabled.", {
      type: "disabled",
      toastId: "disabled",
      autoClose: false,
    });
    toast("This is a blue theme notification.", {
      type: "blue",
      toastId: "blue",
      autoClose: false,
    });
  };

  return (
    <div className="relative p-8" style={{ minHeight: "300px" }}>
      <Toast theme={theme} />
      <div className="flex flex-col gap-4 items-start">
        <button
          onClick={() => toast.success("Issue created successfully!")}
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Show Success Toast
        </button>
        <button
          onClick={() => toast.error("Failed to update issue.")}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Show Error Toast
        </button>
        <button
          onClick={() => toast.warning("You are running low on storage.")}
          className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
        >
          Show Warning Toast
        </button>
        <button
          onClick={() => toast.info("New updates are available.")}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Show Info Toast
        </button>
        <button
          onClick={() =>
            toast(
              () => (
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Spinner />
                  Processing your request...
                </span>
              ),
              {
                type: "loading",
                autoClose: false,
              }
            )
          }
          className="px-4 py-2 rounded bg-slate-500 text-white hover:bg-slate-600"
        >
          Show Loading Toast
        </button>
        <button
          onClick={() => toast("This action is disabled.", {
            type: "disabled",
            autoClose: false,
          })}
          className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
        >
          Show Disabled Toast
        </button>
        <button
          onClick={() => toast("This is a blue theme notification.", {
            type: "blue",
            autoClose: false,
          })}
          className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600"
        >
          Show Blue Toast
        </button>
        <button
          onClick={showToasts}
          className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
        >
          Show All Toasts
        </button>
      </div>
    </div>
  );
};

export const LightTheme: Story = {
  args: {
    theme: Theme.LIGHT,
  },
  render: (args) => <ToastDemo theme={args.theme} />,
};

export const DarkTheme: Story = {
  args: {
    theme: Theme.DARK,
  },
  render: (args) => <ToastDemo theme={args.theme} />,
};

// Static stories that render toast items inline (not positioned fixed) for visual verification
export const AllToastsLight: Story = {
  render: () => {
    const toastTheme = "light";
    const toastClassName = (type?: string) => `
      Toastify__toast--${type || "default"}
      relative flex items-center gap-3 rounded-lg px-4 py-3 shadow-md
      font-primary text-sm text-font
      bg-elevation-surface-overlay border border-solid
      ${getToastBorderClass(type)}
    `;

    return (
      <div
        className="light"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-elevation-surface)",
          minWidth: "360px",
          maxWidth: "480px",
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme={toastTheme}
          style={{ position: "static", width: "100%", padding: 0 }}
          toastClassName={({ type }) => toastClassName(type)}
          bodyClassName={() => "flex items-center justify-between w-full"}
          progressClassName="toast-progress"
        />
        {/* Show toasts via toast() calls in useEffect-like way */}
        <ToastDemoStaticLight />
      </div>
    );
  },
};

const getToastBorderClass = (type?: string) => {
  switch (type) {
    case "success": return "border-border-success";
    case "error": return "border-border-danger";
    case "warning": return "border-border-warning";
    case "info": return "border-border-info";
    case "loading": return "border-border-info";
    case "disabled": return "border-border-subtle";
    case "blue": return "border-border-accent-blue";
    default: return "border-border";
  }
};

const ToastDemoStaticLight = () => {
  // Use a ref to track if toasts were already fired
  const fired = (window as any).__toastLightFired;
  if (!fired) {
    (window as any).__toastLightFired = true;
    setTimeout(() => {
      toast.dismiss();
      toast.success("Issue created successfully!", { toastId: "sl1", autoClose: false });
      toast.error("Failed to update issue. Please try again.", { toastId: "sl2", autoClose: false });
      toast.warning("You are running low on storage space.", { toastId: "sl3", autoClose: false });
      toast.info("New updates are available. Click to refresh.", { toastId: "sl4", autoClose: false });
      toast(
        () => <span style={{ display: "flex", alignItems: "center" }}><Spinner />Processing your request...</span>,
        { type: "loading", toastId: "sl5", autoClose: false }
      );
      toast("This action is disabled.", { type: "disabled", toastId: "sl6", autoClose: false });
      toast("This is a blue theme notification.", { type: "blue", toastId: "sl7", autoClose: false });
    }, 50);
  }
  return null;
};

export const AllToastsDark: Story = {
  render: () => {
    const toastTheme = "dark";
    const toastClassName = (type?: string) => `
      Toastify__toast--${type || "default"}
      relative flex items-center gap-3 rounded-lg px-4 py-3 shadow-md
      font-primary text-sm text-font
      bg-elevation-surface-overlay border border-solid
      ${getToastBorderClass(type)}
    `;

    return (
      <div
        className="dark"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-elevation-surface)",
          minWidth: "360px",
          maxWidth: "480px",
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme={toastTheme}
          style={{ position: "static", width: "100%", padding: 0 }}
          toastClassName={({ type }) => toastClassName(type)}
          bodyClassName={() => "flex items-center justify-between w-full"}
          progressClassName="toast-progress"
        />
        <ToastDemoStaticDark />
      </div>
    );
  },
};

const ToastDemoStaticDark = () => {
  const fired = (window as any).__toastDarkFired;
  if (!fired) {
    (window as any).__toastDarkFired = true;
    setTimeout(() => {
      toast.dismiss();
      toast.success("Issue created successfully!", { toastId: "sd1", autoClose: false });
      toast.error("Failed to update issue. Please try again.", { toastId: "sd2", autoClose: false });
      toast.warning("You are running low on storage space.", { toastId: "sd3", autoClose: false });
      toast.info("New updates are available. Click to refresh.", { toastId: "sd4", autoClose: false });
      toast(
        () => <span style={{ display: "flex", alignItems: "center" }}><Spinner />Processing your request...</span>,
        { type: "loading", toastId: "sd5", autoClose: false }
      );
      toast("This action is disabled.", { type: "disabled", toastId: "sd6", autoClose: false });
      toast("This is a blue theme notification.", { type: "blue", toastId: "sd7", autoClose: false });
    }, 50);
  }
  return null;
};
