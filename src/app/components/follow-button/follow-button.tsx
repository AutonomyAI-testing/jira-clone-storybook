import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Button } from "@app/components/button";

export const FollowButton = forwardRef<
  HTMLButtonElement,
  Props
>(
  (
    {
      isFollowing = false,
      onClick,
      disabled = false,
      label,
      ...rest
    },
    forwardedRef
  ) => {
    const buttonText = label || (isFollowing ? "Following" : "Follow");

    return (
      <Button
        ref={forwardedRef}
        onClick={onClick}
        disabled={disabled}
        color={isFollowing ? "neutral" : "primary"}
        variant={isFollowing ? "subtlest" : "contained"}
        {...rest}
      >
        {buttonText}
      </Button>
    );
  }
);

FollowButton.displayName = "FollowButton";

export interface Props
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "color" | "variant"
  > {
  /**
   * Whether the user is currently following the entity.
   * When true, button shows "Following" text and neutral styling.
   * When false, button shows "Follow" text and primary styling.
   * @default false
   */
  isFollowing?: boolean;

  /**
   * Callback fired when the button is clicked.
   * Parent component is responsible for toggling the isFollowing state.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Whether the button is disabled (e.g., during async operations).
   * Prevents clicks and shows disabled styling.
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional custom label to override the default "Follow" / "Following" text.
   */
  label?: string;
}
