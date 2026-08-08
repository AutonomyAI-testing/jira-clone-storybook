import { ToastContainer, toast } from "react-toastify";
import { Theme } from "@app/store/theme.store";
import { ToastContent } from "./toast-content";
import "react-toastify/dist/ReactToastify.css";

export const Toast = ({ theme }: Props) => {
  const toastTheme = theme === "light" ? "light" : "dark";

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={toastTheme}
      className="toast-container"
      toastClassName="toast-class"
      bodyClassName="toast-body"
    />
  );
};

/**
 * Creates a custom toast notification with pre-configured styling and icons.
 * Uses ToastContent component to maintain consistent visual appearance across all toast types.
 * closeButton is disabled in favor of a custom close button within ToastContent.
 */
export const createCustomToast = (
  message: string,
  type: "success" | "error" | "warning" | "info"
) => {
  toast(
    ({ closeToast }) => (
      <ToastContent
        message={message}
        type={type}
        closeToast={() => closeToast?.()}
      />
    ),
    {
      type,
      closeButton: false,
      hideProgressBar: false,
    }
  );
};

/**
 * Convenience object for showing toast notifications with type-specific methods.
 * Each method automatically handles styling and icons based on the notification type.
 */
export const customToast = {
  success: (message: string) => createCustomToast(message, "success"),
  error: (message: string) => createCustomToast(message, "error"),
  warning: (message: string) => createCustomToast(message, "warning"),
  info: (message: string) => createCustomToast(message, "info"),
};

interface Props {
  theme: Theme;
}
