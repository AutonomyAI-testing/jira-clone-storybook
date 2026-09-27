import cx from "classix";
import { HiChevronDown } from "react-icons/hi";
import { FaqItem } from "@domain/faq";
import { FaqAnswer } from "./faq-answer";

export const FaqAccordionItem = ({
  item,
  isOpen,
  toggle,
}: FaqAccordionItemProps): JSX.Element => {
  const panelId = `faq-answer-${item.id}`;
  const buttonId = `faq-question-${item.id}`;

  return (
    <div className="border-b border-border">
      <button
        id={buttonId}
        type="button"
        onClick={() => toggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={cx(
          "flex w-full items-center justify-between gap-4 rounded py-4 text-left",
          "hover:bg-background-neutral-hovered",
          isOpen ? "text-font-brand" : "text-font"
        )}
      >
        <span className={cx("text-sm", isOpen && "font-primary-bold")}>
          {item.question}
        </span>
        <span
          className={cx(
            "flex flex-shrink-0 items-center text-icon-subtle duration-200 ease-in-out motion-reduce:duration-0",
            isOpen && "rotate-180 text-icon-brand"
          )}
        >
          <HiChevronDown size={20} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cx(
          "grid overflow-hidden duration-200 ease-in-out motion-reduce:duration-0",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 pb-4">
          <FaqAnswer blocks={item.answer} />
        </div>
      </div>
    </div>
  );
};

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  toggle: (id: string) => void;
}
