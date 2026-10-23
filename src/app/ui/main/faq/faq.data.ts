export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  keys?: string[];
}

export interface FaqSection {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqSections: FaqSection[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        id: "what-is-this",
        question: "What is this app?",
        answer:
          "A small project-management workspace modelled on Jira and Trello: you create projects, add members, break the work into issues on a board, move them between columns and comment on them. It is a personal project built to practise clean architecture, server rendering and a token-driven design system, so features are trimmed on purpose.",
      },
      {
        id: "how-to-sign-in",
        question: "How do I sign in?",
        answer:
          "Pick any user on the login screen. There is no password, no signup and no account: signing in as someone else is how you see the app through another team member's eyes.",
      },
      {
        id: "create-first-project",
        question: "How do I create my first project?",
        answer:
          "Open the Projects page and choose Add project. Give it a name and a description, tick the members who should see it, then accept. It shows up in your projects list straight away.",
      },
    ],
  },
  {
    id: "projects-and-members",
    title: "Projects and members",
    items: [
      {
        id: "who-sees-a-project",
        question: "Who can see a project?",
        answer:
          "Only its members. The projects list shows the projects the signed-in user belongs to, so signing in as a different person gives you a different list.",
      },
      {
        id: "open-a-project",
        question: "How do I open a project?",
        answer:
          "Choose its card on the Projects page. You land on the project's board, with the project's own sidebar on the left.",
      },
      {
        id: "project-members",
        question: "Where do I see who is on the project?",
        answer:
          "The board's toolbar lists the members' avatars, up to four of them, with anyone else behind the button showing the rest.",
      },
      {
        id: "delete-a-project",
        question: "Can I delete a project?",
        answer:
          "Yes, with Delete project underneath the project card. It asks for confirmation first, and the seeded demo projects cannot be deleted.",
      },
    ],
  },
  {
    id: "issues-and-the-board",
    title: "Issues and the board",
    items: [
      {
        id: "board-columns",
        question: "What are the columns on the board?",
        answer:
          "To do, In progress and Done. Every issue lives in exactly one of them, so the column a card sits in is that issue's status.",
      },
      {
        id: "create-an-issue",
        question: "How do I create an issue?",
        answer:
          "Choose the + in the column you want, or press Shift + N on the board. Give the issue a title, a description, a priority and an assignee, then accept.",
      },
      {
        id: "move-an-issue",
        question: "How do I move an issue to another column?",
        answer:
          "Drag its card into the column you want. The new status is saved straight away, and every tab with the board open re-syncs on its own.",
      },
      {
        id: "priority-levels",
        question: "What do the priority flags mean?",
        answer:
          "Low, Medium and High, shown as a coloured flag on the card. You set the priority in the issue panel.",
      },
      {
        id: "edit-or-delete-an-issue",
        question: "How do I edit or delete an issue?",
        answer:
          "Open a card to edit it in the issue panel. Deleting an issue lives there too, behind a confirmation.",
      },
      {
        id: "comments",
        question: "Can I comment on an issue?",
        answer:
          "Yes. Comments sit at the bottom of the issue panel, each one showing who wrote it, and the comments you wrote can be edited or deleted.",
      },
    ],
  },
  {
    id: "finding-issues",
    title: "Finding issues",
    items: [
      {
        id: "filter-the-board",
        question: "How do I filter the board?",
        answer:
          "Type in the Filter issues box above the board. It matches issue titles as you type and hides the cards that do not match.",
      },
      {
        id: "sort-the-board",
        question: "Can I sort the board?",
        answer:
          "Yes. The sort control next to the filter switches the issues between Date and Priority.",
      },
      {
        id: "other-tabs",
        question: "Do other people see my changes?",
        answer:
          "Yes. The board is kept in sync over server-sent events, so an issue you create, move or delete appears in other open tabs without a reload.",
      },
    ],
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard shortcuts",
    items: [
      {
        id: "shortcut-new-issue",
        question: "Is there a shortcut for a new issue?",
        keys: ["Shift", "N"],
        answer:
          "On a project board, this opens the new-issue panel, so you can create an issue without reaching for the mouse.",
      },
      {
        id: "shortcut-accept",
        question: "Is there a shortcut to save a panel?",
        keys: ["Shift", "S"],
        answer:
          "Accepts the form in the issue panel and in the create-project panel, saving your changes.",
      },
      {
        id: "shortcut-close",
        question: "Is there a shortcut to close a panel?",
        keys: ["Esc"],
        answer: "Closes the issue panel or the create-project panel.",
      },
      {
        id: "where-are-shortcuts-shown",
        question: "Where are the shortcuts shown?",
        answer:
          "Next to the controls that listen for them: the board and the panels print the keys they accept, so you do not have to remember them.",
      },
    ],
  },
  {
    id: "themes",
    title: "Themes",
    items: [
      {
        id: "change-the-theme",
        question: "Can I change the theme?",
        answer:
          "Yes. The sun and moon button in the header opens the theme menu: Light, Dark, Lava, Lime, Barbie and System.",
      },
      {
        id: "theme-persistence",
        question: "Does my theme choice stick?",
        answer:
          "It is stored in your session, so it survives a reload. Choosing System follows your operating system's light or dark setting instead.",
      },
    ],
  },
  {
    id: "about-this-demo",
    title: "About this demo",
    items: [
      {
        id: "is-it-jira",
        question: "Is this a real Jira replacement?",
        answer:
          "No. It is a personal project built to practise architecture and design-system work, so features are trimmed on purpose and it is not meant to run a real team.",
      },
      {
        id: "why-is-analytics-empty",
        question: "Why does Analytics say it is not available?",
        answer:
          "Because it is not implemented. Analytics tells you the section is not available yet, and Backlog is disabled in the sidebar with a Not implemented tag, so nothing here pretends to work.",
      },
      {
        id: "phone-support",
        question: "Does it work on a phone?",
        answer:
          "No. It is a desktop workbench: the board columns and the sidebar are fixed-width, so give it a wide window.",
      },
      {
        id: "is-my-work-saved",
        question: "Is my work saved?",
        answer:
          "Yes. Projects, issues and comments are stored in the app's own database, so they are still there when you come back. A project or issue you create is real data in this demo.",
      },
    ],
  },
];

export const faqQuestionsCount: number = faqSections.reduce(
  (count, section) => count + section.items.length,
  0
);

const normalize = (value: string): string => value.trim().toLowerCase();

export const filterFaqSections = (search: string): FaqSection[] => {
  const term = normalize(search);

  if (term === "") return faqSections;

  return faqSections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          normalize(item.question).includes(term) ||
          normalize(item.answer).includes(term) ||
          (item.keys || []).some((key) => normalize(key).includes(term))
      ),
    }))
    .filter((section) => section.items.length > 0);
};
