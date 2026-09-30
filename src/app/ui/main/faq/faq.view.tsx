import { useMemo, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaqCategoryId, FaqQuestion, faqCategoryIds, faqQuestionsMock } from "@domain/faq";
import { FaqSearchBar } from "./faq-search-bar";
import { FaqCategoryNav } from "./faq-category-nav";
import { FaqSection } from "./faq-section";
import { FaqEmptyState } from "./faq-empty-state";

export const FaqView = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const filteredQuestions = useMemo((): FaqQuestion[] => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) return faqQuestionsMock;

    return faqQuestionsMock.filter(
      (faq) =>
        faq.question.toLowerCase().includes(normalizedSearch) ||
        faq.answer.toLowerCase().includes(normalizedSearch)
    );
  }, [search]);

  const visibleCategories = useMemo(
    (): FaqCategoryId[] => [
      ...new Set(filteredQuestions.map((faq) => faq.category)),
    ],
    [filteredQuestions]
  );

  const hasResults = filteredQuestions.length > 0;

  return (
    <div className="mx-auto w-full max-w-[900px] px-5 py-8 md:px-0">
      <header className="mb-8">
        <h1 className="font-primary-black text-2xl text-font">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 font-primary-light text-sm text-font-subtle">
          Answers to the most common questions about using Jira Clone. Can&apos;t
          find what you&apos;re looking for? Search below or reach out.
        </p>
        <div className="mt-5">
          <FaqSearchBar
            search={search}
            setSearch={setSearch}
            resultsCount={filteredQuestions.length}
          />
        </div>
      </header>

      <div className="flex flex-col gap-8 md:flex-row md:gap-10">
        <div className="md:w-[200px] md:shrink-0">
          <FaqCategoryNav visibleCategories={visibleCategories} />
        </div>

        <div className="flex-grow">
          {hasResults ? (
            faqCategoryIds
              .filter((categoryId) => visibleCategories.includes(categoryId))
              .map((categoryId) => (
                <FaqSection
                  key={categoryId}
                  categoryId={categoryId}
                  questions={filteredQuestions.filter(
                    (faq) => faq.category === categoryId
                  )}
                />
              ))
          ) : (
            <FaqEmptyState search={search} onClear={() => setSearch("")} />
          )}
        </div>
      </div>

      <footer className="mt-12 flex flex-col items-center gap-3 border-t-1 border-t-border py-8 text-center">
        <p className="font-primary text-sm text-font">Still need help?</p>
        <a
          href="https://github.com/daniserrano7/jira-clone"
          className="flex items-center gap-2 rounded bg-background-brand-subtlest px-4 py-2 font-primary text-sm text-font-brand hover:bg-background-brand-subtlest-hovered"
          aria-label="Contact us on GitHub"
        >
          <AiFillGithub size={18} />
          Contact us
        </a>
      </footer>
    </div>
  );
};
