import { ToastContainer } from "react-toastify";
import { Theme } from "@app/store/theme.store";

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
      toastClassName={({ type }) => {
        const baseClasses =
          "relative flex items-start gap-3 px-4 py-3 mb-3 rounded-md shadow-lg border backdrop-blur-sm text-sm font-primary";

        switch (type) {
          case "success":
            return `${baseClasses} bg-background-success text-font-success border-border-success`;
          case "error":
            return `${baseClasses} bg-background-danger text-font-danger border-border-danger`;
          case "warning":
            return `${baseClasses} bg-background-warning text-font-warning border-border-warning`;
          case "info":
            return `${baseClasses} bg-background-info text-font-info border-border-info`;
          default:
            return `${baseClasses} bg-elevation-surface-raised text-font border-border`;
        }
      }}
      bodyClassName={() => "flex-1 text-sm font-primary"}
      progressClassName="bg-gradient-to-r from-brand to-brand h-1 rounded-full"
    />
  );
};

interface Props {
  theme: Theme;
}
