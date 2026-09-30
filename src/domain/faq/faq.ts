export type FaqCategoryId = typeof faqCategoryIds[number];
export const faqCategoryIds = [
  "general",
  "account",
  "billing",
  "features",
  "support",
] as const;

export const faqCategoryDict: Record<FaqCategoryId, string> = {
  general: "General",
  account: "Account",
  billing: "Billing & Pricing",
  features: "Features",
  support: "Support",
};

export type FaqQuestionId = string;
export interface FaqQuestion {
  id: FaqQuestionId;
  category: FaqCategoryId;
  question: string;
  answer: string;
}
