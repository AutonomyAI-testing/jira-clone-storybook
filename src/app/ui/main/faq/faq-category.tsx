import { FaqCategory as FaqCategoryType } from "@domain/faq";
import { FaqAccordionItem } from "./faq-accordion-item";

export const FaqCategory = ({
  category,
  openIds,
  toggleItem,
}: FaqCategoryProps): JSX.Element | null => {
  if (category.items.length === 0) return null;

  return (
    <section aria-labelledby={`faq-category-${category.id}`} className="mb-8">
      <h2
        id={`faq-category-${category.id}`}
        className="font-primary-black text-lg text-font"
      >
        {category.title}
      </h2>
      {category.description && (
        <p className="mt-1 font-primary-light text-sm text-font-subtlest">
          {category.description}
        </p>
      )}
      <div className="mt-2">
        {category.items.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openIds.includes(item.id)}
            toggle={toggleItem}
          />
        ))}
      </div>
    </section>
  );
};

interface FaqCategoryProps {
  category: FaqCategoryType;
  openIds: string[];
  toggleItem: (id: string) => void;
}
