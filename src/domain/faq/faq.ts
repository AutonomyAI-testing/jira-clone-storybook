export type FaqCategoryId = string;
export type FaqItemId = string;

export type FaqAnswerBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface FaqItem {
  id: FaqItemId;
  question: string;
  answer: FaqAnswerBlock[];
}

export interface FaqCategory {
  id: FaqCategoryId;
  title: string;
  description?: string;
  items: FaqItem[];
}
