import { FaqCategory, FaqItem, FaqAnswerBlock } from "./faq";

export interface FilterFaqResult {
  categories: FaqCategory[];
  matchCount: number;
}

export const filterFaq = (categories: FaqCategory[], query: string): FilterFaqResult => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    const matchCount = categories.reduce(
      (total, category) => total + category.items.length,
      0
    );
    return { categories, matchCount };
  }

  let matchCount = 0;

  const filteredCategories = categories
    .map((category) => {
      const items = category.items.filter((item) => itemMatches(item, normalizedQuery));
      matchCount += items.length;
      return { ...category, items };
    })
    .filter((category) => category.items.length > 0);

  return { categories: filteredCategories, matchCount };
};

const itemMatches = (item: FaqItem, normalizedQuery: string): boolean => {
  if (item.question.toLowerCase().includes(normalizedQuery)) return true;

  return item.answer.some((block) => answerBlockMatches(block, normalizedQuery));
};

const answerBlockMatches = (block: FaqAnswerBlock, normalizedQuery: string): boolean => {
  if (block.type === "paragraph") {
    return block.text.toLowerCase().includes(normalizedQuery);
  }

  return block.items.some((line) => line.toLowerCase().includes(normalizedQuery));
};
