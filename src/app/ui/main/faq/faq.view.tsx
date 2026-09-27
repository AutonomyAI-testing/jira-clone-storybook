import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaqCategory as FaqCategoryType, filterFaq } from "@domain/faq";
import { FaqSearch } from "./faq-search";
import { FaqCategory } from "./faq-category";
import { FaqContactCta } from "./faq-contact-cta";

export const FaqView = ({ categories }: FaqViewProps): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<string[]>([]);

  const { categories: filteredCategories, matchCount } = filterFaq(categories, query);
  const isSearching = query.trim().length > 0;
  const hasResults = filteredCategories.length > 0;

  const toggleItem = (id: string): void => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  const clearSearch = () => setQuery("");

  useEffect(() => {
    if (!isSearching) return;

    const matchingIds = filteredCategories.flatMap((category) =>
      category.items.map((item) => item.id)
    );
    setOpenIds(matchingIds);
    // Only re-run when the search query changes, not when openIds itself changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="mx-auto w-full max-w-[760px] px-5 py-8">
      <h1 className="font-primary-black text-2xl text-font">
        Frequently asked questions
      </h1>
      <p className="mt-2 font-primary-light text-sm text-font-subtlest">
        Answers to the most common questions about using this workspace.
      </p>

      <div className="mt-6">
        <FaqSearch query={query} setQuery={setQuery} matchCount={matchCount} />
      </div>

      <div className="mt-8">
        {hasResults ? (
          filteredCategories.map((category: FaqCategoryType) => (
            <FaqCategory
              key={category.id}
              category={category}
              openIds={openIds}
              toggleItem={toggleItem}
            />
          ))
        ) : (
          <EmptyState query={query} clearSearch={clearSearch} />
        )}
      </div>

      <FaqContactCta />
    </div>
  );
};

const EmptyState = ({ query, clearSearch }: EmptyStateProps): JSX.Element => (
  <div className="flex flex-col items-center gap-3 py-10 text-center text-font-subtlest">
    <HiOutlineSearch size={32} />
    <p className="font-primary-light text-sm">
      No questions match &quot;{query}&quot;.
    </p>
    <button
      onClick={clearSearch}
      className="font-primary-light text-sm text-font-brand hover:underline"
      aria-label="Clear search"
    >
      Clear search
    </button>
  </div>
);

interface EmptyStateProps {
  query: string;
  clearSearch: () => void;
}

interface FaqViewProps {
  categories: FaqCategoryType[];
}
