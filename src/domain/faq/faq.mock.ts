import { FaqCategory } from "./faq";

export const faqCategoriesMock: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "The basics of setting up your workspace and inviting your team.",
    items: [
      {
        id: "how-do-i-sign-up",
        question: "How do I sign up?",
        answer: [
          {
            type: "paragraph",
            text: "There is no real authentication in this demo. From the login screen, just pick any user card and you're in — no password required.",
          },
        ],
      },
      {
        id: "how-do-i-create-a-project",
        question: "How do I create a new project?",
        answer: [
          {
            type: "paragraph",
            text: "Head to the projects list and click \"Add Project\". Give it a name and a short description, choose which teammates should have access, and you're ready to go.",
          },
        ],
      },
      {
        id: "how-do-i-invite-teammates",
        question: "How do I invite teammates to a project?",
        answer: [
          {
            type: "paragraph",
            text: "Teammates are added when a project is created or edited. In the project form you'll see a checklist of available users — select everyone who should have access.",
          },
          {
            type: "list",
            items: [
              "Anyone selected can view and edit issues in the project",
              "You can update who has access at any time from the project settings",
            ],
          },
        ],
      },
      {
        id: "which-browsers-are-supported",
        question: "Which browsers are supported?",
        answer: [
          {
            type: "paragraph",
            text: "The app is tested on the latest versions of Chrome, Firefox, Edge and Safari. For the smoothest experience, keep your browser up to date.",
          },
        ],
      },
    ],
  },
  {
    id: "billing-and-plans",
    title: "Billing & Plans",
    description: "How plans, invoices and cancellations work.",
    items: [
      {
        id: "what-plans-are-available",
        question: "What plans are available?",
        answer: [
          {
            type: "paragraph",
            text: "There are three plans to choose from, each suited to a different team size:",
          },
          {
            type: "list",
            items: [
              "Free — for individuals and small side projects",
              "Team — for growing teams that need more boards and history",
              "Enterprise — for larger organizations with advanced permissions",
            ],
          },
        ],
      },
      {
        id: "how-do-i-change-my-plan",
        question: "How do I change my plan?",
        answer: [
          {
            type: "paragraph",
            text: "You can upgrade or downgrade at any time from your account settings. Changes take effect immediately, and we prorate the difference on your next invoice.",
          },
        ],
      },
      {
        id: "where-can-i-find-my-invoices",
        question: "Where can I find my invoices?",
        answer: [
          {
            type: "paragraph",
            text: "All past invoices are listed under Billing in your account settings. You can download any of them as a PDF for your records.",
          },
        ],
      },
      {
        id: "how-do-i-cancel",
        question: "How do I cancel my subscription?",
        answer: [
          {
            type: "paragraph",
            text: "You can cancel at any time from your account settings — there's no lock-in contract. Your workspace stays active until the end of the current billing period.",
          },
          {
            type: "paragraph",
            text: "If you're leaving because something didn't work for you, we'd love to hear about it — reach out via our contact page.",
          },
        ],
      },
    ],
  },
  {
    id: "account-and-security",
    title: "Account & Security",
    description: "Managing your login, your data, and your account.",
    items: [
      {
        id: "how-do-i-reset-my-password",
        question: "How do I reset my password?",
        answer: [
          {
            type: "paragraph",
            text: "Since this demo doesn't use real passwords, there's nothing to reset here — just pick a different user from the login screen whenever you like.",
          },
        ],
      },
      {
        id: "how-do-i-enable-two-factor-authentication",
        question: "How do I enable two-factor authentication?",
        answer: [
          {
            type: "paragraph",
            text: "Two-factor authentication can be turned on from the security section of your account settings. You'll need an authenticator app on your phone to scan the setup code.",
          },
        ],
      },
      {
        id: "how-is-my-data-handled",
        question: "How is my data handled?",
        answer: [
          {
            type: "paragraph",
            text: "Your project data is stored securely and is never shared with third parties. You can read the full details in our privacy policy.",
          },
        ],
      },
      {
        id: "how-do-i-delete-my-account",
        question: "How do I delete my account?",
        answer: [
          {
            type: "paragraph",
            text: "Deleting your account removes all of your projects and issues permanently — this action can't be undone. You can start the process from the danger zone in account settings.",
          },
        ],
      },
    ],
  },
];
