import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cx } from "classix";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is this project management tool?",
    answer:
      "This is a Jira-inspired project management tool built with Remix, React, and TypeScript. It allows teams to collaborate on projects, track issues, and manage workflows using a kanban-style board.",
  },
  {
    question: "How do I create a new project?",
    answer:
      'Navigate to the Projects page and click the "Create Project" button. Fill in the project name, description, and select team members. Your new project will appear in the projects list immediately.',
  },
  {
    question: "How do I add issues to my project?",
    answer:
      'Open your project board and click the "+" button in any category column (TODO, IN PROGRESS, or DONE). Fill in the issue details including title, description, priority, and assignee.',
  },
  {
    question: "Can I drag and drop issues between categories?",
    answer:
      "Yes! The board supports drag-and-drop functionality. Simply click and hold an issue card, then drag it to a different category column to update its status.",
  },
  {
    question: "How do I comment on an issue?",
    answer:
      "Click on any issue card to open the issue panel. Scroll down to the comments section where you can add, edit, or delete comments. All team members can see and respond to comments.",
  },
  {
    question: "What priority levels are available?",
    answer:
      "Issues can be assigned three priority levels: Low (green), Medium (orange), and High (red). You can set or change the priority when creating or editing an issue.",
  },
  {
    question: "Can I search and filter issues?",
    answer:
      "Yes, use the search bar at the top of the board to find issues by title. You can also sort issues using the sort dropdown menu to organize by priority, creation date, or other criteria.",
  },
  {
    question: "How does authentication work?",
    answer:
      "This is a demo application with simplified authentication. On the login page, you can select any user to log in as. This allows you to experience the app from different user perspectives without creating accounts.",
  },
  {
    question: "Can I change the theme?",
    answer:
      "Yes! Click on the theme selector in the header to choose from multiple theme options including light, dark, and specialty themes like Barbie, Lava, and Lime.",
  },
  {
    question: "Is there a mobile version?",
    answer:
      "The application is responsive and works on mobile devices, though the best experience is on desktop or tablet screens where you have more space for the kanban board layout.",
  },
];

export const FAQView = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-[800px] px-4 py-8">
      <h1 className="mb-2 font-primary-black text-5xl text-font">
        Frequently Asked Questions
      </h1>
      <p className="mb-8 font-primary-light text-lg text-font-subtle">
        Find answers to common questions about using this project management
        tool.
      </p>

      <div className="flex flex-col gap-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md border border-border bg-background-elevation-surface"
          >
            <button
              onClick={() => toggleItem(index)}
              className={cx(
                "flex w-full items-center justify-between gap-4 p-4 text-left transition-colors",
                "hover:bg-background-neutral-subtle-hovered",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
              )}
              aria-expanded={openIndex === index}
            >
              <h3 className="font-primary-bold text-lg text-font">
                {item.question}
              </h3>
              <ChevronDownIcon
                className={cx(
                  "h-5 w-5 shrink-0 text-icon transition-transform duration-200",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-border p-4">
                <p className="font-primary-light text-font-subtle">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
