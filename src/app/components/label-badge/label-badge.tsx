import { forwardRef } from "react";
import cx from "classix";

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: "primary" | "neutral" | "success" | "danger" | "warning" | "info";
  size?: "sm" | "md" | "lg";
  onClose?: () => void;
}

// Color style mappings for badge variants
const COLOR_STYLES: Record<NonNullable<Props["color"]>, string> = {
  primary: [
    "bg-background-brand-subtlest text-font-brand",
    "hover:bg-background-brand-subtlest-hovered",
  ].join(" "),
  neutral: [
    "bg-background-neutral text-font-subtle",
    "hover:bg-background-neutral-hovered",
  ].join(" "),
  success: [
    "bg-background-success text-font-success",
    "hover:bg-background-success-hovered",
  ].join(" "),
  danger: [
    "bg-background-danger text-font-danger",
    "hover:bg-background-danger-hovered",
  ].join(" "),
  warning: [
    "bg-background-warning text-font-warning",
    "hover:bg-background-warning-hovered",
  ].join(" "),
  info: [
    "bg-background-info text-font-info",
    "hover:bg-background-info-hovered",
  ].join(" "),
};

// Size style mappings for badge sizes
const SIZE_STYLES: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

export const LabelBadge = forwardRef<HTMLSpanElement, Props>(
  (
    { children, color = "primary", size = "md", onClose, className, ...rest },
    forwardedRef
  ) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(
          "inline-flex items-center gap-1.5 rounded-md font-medium",
          COLOR_STYLES[color],
          SIZE_STYLES[size],
          className
        )}
        {...rest}
      >
        {children}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className={[
              "focus-visible:outline-current flex items-center",
              "justify-center transition-opacity duration-150",
              "hover:opacity-80 focus:outline-none focus-visible:outline-2",
              "focus-visible:outline-offset-1",
            ].join(" ")}
            aria-label="Remove badge"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L13 1M1 1L13 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

LabelBadge.displayName = "LabelBadge";

