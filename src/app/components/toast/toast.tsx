import { ToastContainer, type TypeOptions } from "react-toastify";
import { Theme } from "@app/store/theme.store";

const BASE_TOAST_CLASSES =
  "relative flex items-start gap-3 px-4 py-3 mb-3 rounded-md shadow-lg border backdrop-blur-sm text-sm font-primary";

const TOAST_VARIANT_CLASSES: Record<TypeOptions | "default", string> = {
  success: `${BASE_TOAST_CLASSES} bg-background-success text-font-success border-border-success`,
  error: `${BASE_TOAST_CLASSES} bg-background-danger text-font-danger border-border-danger`,
  warning: `${BASE_TOAST_CLASSES} bg-background-warning text-font-warning border-border-warning`,
  info: `${BASE_TOAST_CLASSES} bg-background-info text-font-info border-border-info`,
  default: `${BASE_TOAST_CLASSES} bg-elevation-surface-raised text-font border-border`,
};

// Determine toast styling based on notification type
const getToastClassName = (type: TypeOptions | undefined): string => {
  if (!type || type === "default") {
    return TOAST_VARIANT_CLASSES.default;
  }
  return TOAST_VARIANT_CLASSES[type];
};

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
      toastClassName={(context) => getToastClassName(context?.type)}
      bodyClassName={() => "flex-1 text-sm font-primary"}
      progressClassName="bg-gradient-to-r from-brand to-brand h-1 rounded-full"
    />
  );
};

interface Props {
  theme: Theme;
}
