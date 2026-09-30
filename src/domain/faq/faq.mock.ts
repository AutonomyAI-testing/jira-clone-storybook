import { FaqQuestion } from "./faq";

export const faqQuestionsMock: FaqQuestion[] = [
  // General
  {
    id: "general-1",
    category: "general",
    question: "What is Jira Clone?",
    answer:
      "Jira Clone is a task management app inspired by Jira. You can create projects, organize issues into boards, and collaborate with your team.",
  },
  {
    id: "general-2",
    category: "general",
    question: "Do I need to create an account?",
    answer:
      "There is no real authentication involved. You can log in with any of the sample users and start using the app right away.",
  },
  {
    id: "general-3",
    category: "general",
    question: "Can I use this on mobile?",
    answer:
      "The app is responsive and works on smaller screens, though the board experience is best on a desktop or tablet.",
  },
  {
    id: "general-4",
    category: "general",
    question: "Is my data saved?",
    answer:
      "Changes you make are stored in the app's database, so projects, issues and comments persist between visits.",
  },
  {
    id: "general-5",
    category: "general",
    question: "Where can I see the source code?",
    answer:
      "This project is open source. You can find a link to the GitHub repository in the header of the app.",
  },
  // Account
  {
    id: "account-1",
    category: "account",
    question: "How do I switch users?",
    answer:
      "Open the avatar menu in the top-right corner of the header and choose Logout, then pick a different user from the login screen.",
  },
  {
    id: "account-2",
    category: "account",
    question: "Can I only see my own projects?",
    answer:
      "You can only access projects where the currently selected user is a member. Try creating a project and adding different users to see how access changes.",
  },
  {
    id: "account-3",
    category: "account",
    question: "How do I change my theme?",
    answer:
      "Use the theme switcher in the header (the sun/moon icon) to pick between Light, Dark, and a few extra color themes.",
  },
  {
    id: "account-4",
    category: "account",
    question: "Can I have more than one profile?",
    answer:
      "Yes — the login screen lists several sample users. Log in as any of them to see the app from that user's perspective.",
  },
  {
    id: "account-5",
    category: "account",
    question: "How do I remove a project?",
    answer:
      "Open a project card's delete option from the Projects page. Default sample projects can't be deleted, but any project you create can be.",
  },
  // Billing
  {
    id: "billing-1",
    category: "billing",
    question: "Is this app free to use?",
    answer:
      "Yes, this is a free demo/portfolio project — there is no billing or paid plan involved.",
  },
  {
    id: "billing-2",
    category: "billing",
    question: "Will there be paid plans in the future?",
    answer:
      "Not currently planned. This project is meant to demonstrate a Jira-like workflow rather than run as a commercial product.",
  },
  {
    id: "billing-3",
    category: "billing",
    question: "Do you store payment information?",
    answer:
      "No payment information is collected or stored anywhere in this app.",
  },
  {
    id: "billing-4",
    category: "billing",
    question: "Can I request a refund?",
    answer:
      "There is nothing to refund since no purchases or subscriptions exist in this app.",
  },
  {
    id: "billing-5",
    category: "billing",
    question: "Are there usage limits?",
    answer:
      "There are no enforced usage limits, though this is a demo app running on modest infrastructure.",
  },
  // Features
  {
    id: "features-1",
    category: "features",
    question: "Can I drag and drop issues between columns?",
    answer:
      "Yes, the board supports drag and drop to move issues between To Do, In Progress and Done.",
  },
  {
    id: "features-2",
    category: "features",
    question: "Can multiple people work on the same project at once?",
    answer:
      "Yes — changes made by one user are reflected in real time for anyone else viewing the same project.",
  },
  {
    id: "features-3",
    category: "features",
    question: "Can I comment on issues?",
    answer:
      "Yes, open any issue's panel to add comments and collaborate with other assigned users.",
  },
  {
    id: "features-4",
    category: "features",
    question: "Can I sort or filter issues?",
    answer:
      "Yes, the board page includes search and sort controls to help you find and order issues quickly.",
  },
  {
    id: "features-5",
    category: "features",
    question: "Are there keyboard shortcuts?",
    answer:
      "Yes — for example Shift + N creates a new issue on the board, and Shift + S saves changes in some forms. Shortcuts are shown inline where available.",
  },
  // Support
  {
    id: "support-1",
    category: "support",
    question: "I found a bug, how do I report it?",
    answer:
      "You can open an issue directly on the project's GitHub repository, linked from the header.",
  },
  {
    id: "support-2",
    category: "support",
    question: "Something looks broken — what should I check first?",
    answer:
      "Try refreshing the page and checking the browser's network tab. Some pages intentionally simulate 404/500 errors for demo purposes.",
  },
  {
    id: "support-3",
    category: "support",
    question: "Can I contact the developer?",
    answer:
      "Yes, contact details are available in the project's GitHub README for direct questions or feedback.",
  },
  {
    id: "support-4",
    category: "support",
    question: "Is there a status page for outages?",
    answer:
      "There isn't a dedicated status page for this demo app. If something seems down, please check back shortly after.",
  },
  {
    id: "support-5",
    category: "support",
    question: "Still need help?",
    answer:
      "If your question isn't answered here, reach out through the GitHub repository linked in the header and we'll get back to you.",
  },
];
