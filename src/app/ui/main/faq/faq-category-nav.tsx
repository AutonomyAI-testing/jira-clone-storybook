import cx from "classix";
import { FaqCategoryId, faqCategoryDict, faqCategoryIds } from "@domain/faq";

export const FaqCategoryNav = ({ visibleCategories }: Props): JSX.Element => {
  const handleClick = (categoryId: FaqCategoryId) => (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById(`faq-${categoryId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="FAQ categories"
      className="flex flex-wrap gap-2 md:sticky md:top-6 md:flex-col md:gap-1"
    >
      {faqCategoryIds.map((categoryId) => {
        const isVisible = visibleCategories.includes(categoryId);

        return (
          <a
            key={categoryId}
            href={`#faq-${categoryId}`}
            onClick={handleClick(categoryId)}
            aria-disabled={!isVisible}
            className={cx(
              "rounded px-3 py-2 font-primary text-sm text-font-subtle hover:bg-background-neutral-hovered",
              !isVisible && "pointer-events-none opacity-40"
            )}
          >
            {faqCategoryDict[categoryId]}
          </a>
        );
      })}
    </nav>
  );
};

interface Props {
  visibleCategories: FaqCategoryId[];
}
