import { useState } from "react";
import cx from "classix";
import { twMerge } from "tailwind-merge";

/**
 * Tooltip component that displays helpful text on hover (desktop) or tap (touch).
 * Features smooth entrance/exit animations and bottom-only positioning.
 *
 * @example
 * ```tsx
 * <Tooltip title="Save your changes">
 *   <button onClick={handleSave}>Save</button>
 * </Tooltip>
 * ```
 */
export const Tooltip = ({
  title,
  show = true,
  className = "",
  children,
}: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouching, setIsTouching] = useState<boolean>(false);

  // Desktop mouse events
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    // Don't hide if we're on a touch device
    if (!isTouching) {
      setIsVisible(false);
    }
  };

  // Touch device events
  const handleTouchStart = () => {
    setIsTouching(true);
    setIsVisible(true);
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    // Hide immediately on touch end
    setIsVisible(false);
  };

  if (!show) return children;

  return (
    // Don't know why h-fit (and other h-*) doesn't work here
    <div className="relative w-fit" style={{ height: "fit-content" }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
      <div
        className={cx(
          "absolute left-1/2 top-full z-50 mt-1.5 -translate-x-1/2",
          "flex justify-center break-words",
          isVisible
            ? "animate-slide-up-fade duration-300"
            : "hidden duration-300"
        )}
      >
        <div
          className={twMerge(
            "w-fit whitespace-nowrap rounded bg-font px-1.5 py-0.5 text-2xs"
              + " text-font-inverse border border-red-500",
            className
          )}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

/**
 * Props for the Tooltip component.
 */
interface TooltipProps {
  /**
   * The text content displayed in the tooltip when visible.
   * Keep brief for optimal UX (ideally under 50 characters).
   */
  title: string;

  /**
   * Controls whether tooltip is active and functional.
   * Useful for conditionally disabling tooltips.
   * @default true
   */
  show?: boolean;

  /**
   * Additional Tailwind CSS classes merged with default tooltip styling.
   * Use for custom colors, padding, or text styling.
   * @default ""
   */
  className?: string;

  /**
   * The element that triggers the tooltip on hover (desktop) or tap (touch).
   * Should be a single JSX element, typically a button or icon.
   */
  children: JSX.Element;
}
