import { ToastIcon, CloseIcon } from "./toast-icons";
import cx from "classix";

export interface ToastContentProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  closeToast: () => void;
}

const getToastStyles = (type: "success" | "error" | "warning" | "info") => {
  const baseClasses =
    "rounded-[4px] px-4 py-3 shadow-md min-w-64 flex items-center gap-3";

  switch (type) {
    case "success":
      return cx(
        baseClasses,
        "bg-background-success-bold text-font-inverse"
      );
    case "error":
      return cx(baseClasses, "bg-background-danger-bold text-font-inverse");
    case "warning":
      return cx(baseClasses, "bg-background-warning-bold text-font-inverse");
    case "info":
      return cx(baseClasses, "bg-background-info-bold text-font-inverse");
    default:
      return baseClasses;
  }
};

export const ToastContent = ({
  message,
  type,
  closeToast,
}: ToastContentProps): JSX.Element => {
  return (
    <div className={getToastStyles(type)}>
      <ToastIcon type={type} className="h-5 w-5 flex-shrink-0" />
      <span className="flex-1 text-sm font-primary">{message}</span>
      <button
        onClick={closeToast}
        className="flex-shrink-0 text-font-inverse opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none"
        aria-label="Close notification"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
