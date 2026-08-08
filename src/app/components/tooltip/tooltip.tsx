import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { twix } from "tailwindcss-radix-ui";
import cx from "classix";
import { twMerge } from "tailwind-merge";

// Base styles for tooltip content — shared between styled component and className prop
const TOOLTIP_STYLES = cx(
  "z-50 w-fit whitespace-nowrap break-words rounded border-2 border-border-danger bg-font px-2 py-1 text-2xs text-font-inverse shadow-md",
  "duration-200 radix-state-open:animate-slide-up-fade"
);

const StyledContent = twix(TooltipPrimitive.Content, TOOLTIP_STYLES);

const StyledArrow = twix(
  TooltipPrimitive.Arrow,
  "fill-font"
);

export const Tooltip = ({
  title,
  show = true,
  className = "",
  children,
}: TooltipProps): JSX.Element => {
  // Allow consumers to conditionally hide the tooltip by returning unwrapped children
  if (!show) return <>{children}</>;

  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <StyledContent
          className={twMerge(TOOLTIP_STYLES, className)}
          sideOffset={8}
        >
          {title}
          <StyledArrow width={10} height={5} />
        </StyledContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

interface TooltipProps {
  title: string;
  show?: boolean;
  className?: string;
  children: React.ReactNode;
}
