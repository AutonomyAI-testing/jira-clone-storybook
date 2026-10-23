import { useState } from "react";
import { Accordion, AccordionItem } from "@app/components/accordion";
import { Kbd } from "@app/components/kbd-placeholder";
import { FaqSearch } from "./faq-search";
import { faqQuestionsCount, filterFaqSections } from "./faq.data";
import type { FaqItem } from "./faq.data";

export const FaqView = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const sections = filterFaqSections(search);

  const clearSearch = (): void => setSearch("");

  return (
    <div className="min-h-0 w-full flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-[800px] flex-col px-5 py-6">
        <h1 className="font-primary-black text-2xl">FAQ</h1>
        <p className="mt-2 font-primary-light text-font-subtle">
          Answers to the questions this demo raises most often. Everything here
          describes what the app does, including what it deliberately does not
          do.
        </p>
        <div className="mt-6">
          <FaqSearch
            value={search}
            onChange={setSearch}
            onClear={clearSearch}
          />
        </div>
        {sections.length > 0 ? (
          <div className="mt-8 flex flex-col gap-8">
            {sections.map((section) => (
              <section key={section.id} className="flex flex-col gap-3">
                <h2 className="font-primary-bold text-xs uppercase text-font-subtlest">
                  {section.title}
                </h2>
                <Accordion>
                  {section.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      question={item.question}
                    >
                      <FaqAnswer item={item} />
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        ) : (
          <p className="mt-8 font-primary-light text-font-subtlest">
            No questions match “{search}”. Clear the filter to see all{" "}
            {faqQuestionsCount} questions.
          </p>
        )}
      </div>
    </div>
  );
};

const FaqAnswer = ({ item }: FaqAnswerProps): JSX.Element => (
  <>
    {item.keys && (
      <p className="flex items-center gap-2">
        {item.keys.map((key, index) => (
          <span key={key} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">+</span>}
            <Kbd>{key}</Kbd>
          </span>
        ))}
      </p>
    )}
    <p>{item.answer}</p>
  </>
);

interface FaqAnswerProps {
  item: FaqItem;
}
