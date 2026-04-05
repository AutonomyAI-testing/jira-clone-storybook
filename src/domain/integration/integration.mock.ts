import { Integration } from "./integration";

export const integrationsMock: Integration[] = [
  {
    id: "figma",
    name: "Figma",
    description: "Let agents access your Figma files and projects",
    icon: "figma",
    connected: true,
    account: "user@example.com",
    connectedAt: new Date("2024-01-15"),
  },
  {
    id: "slack",
    name: "Slack",
    description: "Connect to Slack for notifications and updates",
    icon: "slack",
    connected: false,
  },
  {
    id: "linear",
    name: "Linear",
    description: "Let agents access your Linear issues and projects",
    icon: "linear",
    connected: false,
  },
  {
    id: "jira",
    name: "Jira",
    description: "Let agents access your Jira issues and projects",
    icon: "jira",
    connected: false,
  },
];
