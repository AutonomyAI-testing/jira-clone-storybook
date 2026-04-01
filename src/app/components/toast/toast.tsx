import { ToastContainer } from "react-toastify";
import { Theme } from "@app/store/theme.store";
import "./toast.css";

export const Toast = ({ theme }: Props) => {
  const toastTheme = theme === "light" ? "light" : "dark";

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={toastTheme}
      className="toast-container"
      toastClassName={({ type }) => `
        relative flex items-center gap-3 rounded-lg px-4 py-3 shadow-md
        font-primary text-sm text-font
        bg-elevation-surface-overlay border border-solid
        ${getToastClasses(type)}
      `}
      bodyClassName={() => "flex items-center justify-between w-full"}
      progressClassName="toast-progress"
    />
  );
};

const getToastClasses = (type?: string) => {
  switch (type) {
    case "success":
      return "border-border-success";
    case "error":
      return "border-border-danger";
    case "warning":
      return "border-border-warning";
    case "info":
      return "border-border-info";
    default:
      return "border-border";
  }
};

interface Props {
  theme: Theme;
}
