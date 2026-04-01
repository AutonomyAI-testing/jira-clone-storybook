import { forwardRef } from "react";
import cx from "classix";

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      color = "primary",
      variant = "contained",
      size = "md",
      className,
      loading = false,
      disabled = false,
      ...rest
    },
    forwardedRef
  ) => {
    const primaryStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-brand-subtlest text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed";
      }

      if (variant === "text") {
        return "text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed";
      }

      return "";
    };

    const neutralStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-neutral-bold text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-neutral hover:bg-background-neutral-hovered active:bg-background-neutral-pressed";
      }

      if (variant === "text") {
        return "text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed";
      }

      return "";
    };

    const successStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-success-bold text-font-inverse hover:bg-background-success-bold-hovered active:bg-background-success-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-success text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed";
      }

      if (variant === "text") {
        return "text-font-success hover:bg-background-success-hovered active:bg-background-success-pressed";
      }

      return "";
    };

    const dangerStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-danger-bold text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-danger text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed";
      }

      if (variant === "text") {
        return "text-font-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed";
      }

      return "";
    };

    const warningStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-warning-bold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-warning text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed";
      }

      if (variant === "text") {
        return "text-font-warning hover:bg-background-warning-hovered active:bg-background-warning-pressed";
      }

      return "";
    };

    const infoStyle = (): string => {
      if (variant === "contained") {
        return "bg-background-info-bold text-font-inverse hover:bg-background-info-bold-hovered active:bg-background-info-bold-pressed";
      }

      if (variant === "subtlest") {
        return "bg-background-info text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed";
      }

      if (variant === "text") {
        return "text-font-info hover:bg-background-info-hovered active:bg-background-info-pressed";
      }

      return "";
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={forwardedRef}
        className={cx(
          "flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60",
          color === "primary" && primaryStyle(),
          color === "neutral" && neutralStyle(),
          color === "success" && successStyle(),
          color === "danger" && dangerStyle(),
          color === "warning" && warningStyle(),
          color === "info" && infoStyle(),
          size === "lg" && "gap-3 px-8 py-2 text-lg",
          loading && "opacity-60 cursor-not-allowed",
          className
        )}
        disabled={isDisabled}
        {...rest}
      >
        {loading && (
          <svg
            aria-hidden="true"
            className="mr-2 inline-block h-5 w-5 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
              opacity="0.2"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "success" | "danger" | "warning" | "info";
  variant?: "contained" | "subtlest" | "text";
  size?: "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
}
