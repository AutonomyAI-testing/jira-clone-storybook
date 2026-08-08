import { forwardRef } from "react";
import cx from "classix";
import { HiXMark } from "react-icons/hi2";

/**
 * LabelBadge component for displaying labeled, dismissible tags.
 * Supports multiple color variants for semantic meaning and size variants for layout flexibility.
 * When onClose is provided, displays a close button that stops event propagation to prevent parent handling.
 */
export const LabelBadge = forwardRef<HTMLSpanElement, Props>(
  (
    { children, color = "primary", size = "md", onClose, className, ...rest },
    forwardedRef
  ) => {
    // Color variants map to the design system's semantic color tokens
    // Each variant includes base, text, and hover states
    const colorStyles: Record<ColorVariant, string> = {
      primary:
        "bg-background-brand-subtlest text-font-brand hover:bg-background-brand-subtlest-hovered",
      success:
        "bg-background-success text-font-success hover:bg-background-success-hovered",
      danger:
        "bg-background-danger text-font-danger hover:bg-background-danger-hovered",
      warning:
        "bg-background-warning text-font-warning hover:bg-background-warning-hovered",
      info: "bg-background-info text-font-info hover:bg-background-info-hovered",
      neutral:
        "bg-background-neutral text-font-subtle hover:bg-background-neutral-hovered",
    };

    const sizeStyles: Record<SizeVariant, string> = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-2 text-base",
    };

    return (
      <span
        ref={forwardedRef}
        className={cx(
          "inline-flex items-center gap-1.5 rounded-full",
          colorStyles[color],
          sizeStyles[size],
          "transition-colors duration-150",
          className
        )}
        {...rest}
      >
        {children}
        {onClose && (
          // Close button is only rendered when onClose callback is provided
          // stopPropagation prevents parent click handlers from firing when dismissing
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-current ml-0.5 flex items-center justify-center rounded-full p-0.5 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
            aria-label="Remove badge"
          >
            <HiXMark size={14} />
          </button>
        )}
      </span>
    );
  }
);

LabelBadge.displayName = "LabelBadge";

export type ColorVariant =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "neutral";
export type SizeVariant = "sm" | "md" | "lg";

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: ColorVariant;
  size?: SizeVariant;
  onClose?: () => void;
}
