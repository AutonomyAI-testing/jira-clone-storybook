import * as Accordion from "@radix-ui/react-accordion";
import { MdExpandMore } from "react-icons/md";
import cx from "classix";
import { FaqQuestion } from "@domain/faq";

export const FaqAccordionItem = ({ faq }: Props): JSX.Element => {
  return (
    <Accordion.Item
      value={faq.id}
      className="overflow-hidden rounded border-none bg-elevation-surface-raised shadow-xs"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={cx(
            "group flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent p-4 text-left",
            "text-font hover:bg-background-neutral-hovered focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
          )}
        >
          <span className="font-primary text-sm">{faq.question}</span>
          <MdExpandMore
            size={22}
            className="shrink-0 text-icon-subtle duration-200 ease-in-out group-radix-state-open:rotate-180"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden radix-state-closed:animate-slide-up radix-state-open:animate-slide-down">
        <p className="border-t-1 border-t-border px-4 pb-4 pt-3 font-primary-light text-sm leading-6 text-font-subtle">
          {faq.answer}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  );
};

interface Props {
  faq: FaqQuestion;
}
