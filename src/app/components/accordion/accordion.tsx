import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import cx from "classix";
import { twix } from "tailwindcss-radix-ui";

export const Root = AccordionPrimitive.Root;
export const Item = twix(
  AccordionPrimitive.Item,
  "border-b border-border last:border-b-0"
);

export const Header = twix(AccordionPrimitive.Header, "flex");

export const Trigger = twix(
  AccordionPrimitive.Trigger,
  cx(
    "flex w-full items-center justify-between px-5 py-4",
    "text-left font-primary-bold text-font",
    "transition-all duration-200",
    "hover:bg-background-subtlest",
    "radix-state-open:bg-background-subtlest",
    "focus-visible:outline focus-visible:outline-2",
    "focus-visible:outline-border-brand"
  )
);

export const Content = twix(
  AccordionPrimitive.Content,
  cx(
    "overflow-hidden",
    "radix-state-open:animate-slide-down",
    "radix-state-closed:animate-slide-up",
    "duration-300"
  )
);

export const ContentInner = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cx("px-5 pb-4 pt-0 text-font-subtle", className)}
    >
      {children}
    </div>
  )
);
ContentInner.displayName = "ContentInner";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
