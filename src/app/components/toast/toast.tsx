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

// Custom toast wrapper functions with pre-configured styling
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

export const customToast = {
  success: (message: string) => createCustomToast(message, "success"),
  error: (message: string) => createCustomToast(message, "error"),
  warning: (message: string) => createCustomToast(message, "warning"),
  info: (message: string) => createCustomToast(message, "info"),
};

interface Props {
  theme: Theme;
}
