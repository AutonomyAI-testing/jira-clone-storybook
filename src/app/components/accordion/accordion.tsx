import * as AccordionPrimitive from "@radix-ui/react-accordion";
import cx from "classix";
import { RiArrowDownSLine } from "react-icons/ri";

export const Accordion = ({
  children,
  className,
}: AccordionProps): JSX.Element => {
  return (
    <AccordionPrimitive.Root
      type="multiple"
      className={cx("flex flex-col gap-3", className)}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

export const AccordionItem = ({
  value,
  question,
  children,
}: AccordionItemProps): JSX.Element => {
  return (
    <AccordionPrimitive.Item
      value={value}
      className="overflow-hidden rounded-md bg-elevation-surface-raised shadow-xs"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={cx(
            "flex w-full cursor-pointer items-center justify-between gap-4 border-none p-4 text-left text-font",
            "duration-200 ease-in-out hover:bg-background-neutral-hovered radix-state-open:bg-background-neutral"
          )}
        >
          <span className="font-primary-bold text-lg">{question}</span>
          <RiArrowDownSLine
            size={24}
            aria-hidden="true"
            className="shrink-0 text-icon-subtle duration-200 ease-in-out radix-state-open:rotate-180"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        className={cx(
          "overflow-hidden duration-300 ease-in-out",
          "radix-state-closed:animate-slide-up radix-state-open:animate-slide-down"
        )}
      >
        <div className="flex flex-col gap-2 border-t border-border p-4 font-primary-light text-font-subtle">
          {children}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

interface AccordionProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

interface AccordionItemProps {
  value: string;
  question: string;
  children: JSX.Element | JSX.Element[];
}
