import * as Accordion from "@radix-ui/react-accordion";
import { FaqCategoryId, FaqQuestion, faqCategoryDict } from "@domain/faq";
import { FaqAccordionItem } from "./faq-accordion-item";

export const FaqSection = ({ categoryId, questions }: Props): JSX.Element => {
  return (
    <section id={`faq-${categoryId}`} className="mb-8">
      <h2 className="mb-3 font-primary-bold text-lg text-font">
        {faqCategoryDict[categoryId]}
      </h2>
      <Accordion.Root type="multiple" className="flex flex-col gap-2">
        {questions.map((faq) => (
          <FaqAccordionItem key={faq.id} faq={faq} />
        ))}
      </Accordion.Root>
    </section>
  );
};

interface Props {
  categoryId: FaqCategoryId;
  questions: FaqQuestion[];
}
