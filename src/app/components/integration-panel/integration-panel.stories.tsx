import type { Meta, StoryObj } from "@storybook/react";
import { IntegrationPanel } from "./integration-panel";
import { Integration } from "@domain/integration";

const meta: Meta<typeof IntegrationPanel> = {
  title: "Components/IntegrationPanel",
  component: IntegrationPanel,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof IntegrationPanel>;

// All integrations in disconnected state
const allDisconnected: Integration[] = [
  {
    id: "figma",
    name: "Figma",
    description: "Let agents access your Figma files and projects",
    icon: "figma",
    connected: false,
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

// Mix of connected and disconnected
const mixed: Integration[] = [
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
    connected: true,
    account: "workspace.linear.app",
    connectedAt: new Date("2024-02-20"),
  },
  {
    id: "jira",
    name: "Jira",
    description: "Let agents access your Jira issues and projects",
    icon: "jira",
    connected: false,
  },
];

// All integrations in connected state
const allConnected: Integration[] = [
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
    connected: true,
    account: "workspace.slack.com",
    connectedAt: new Date("2024-01-20"),
  },
  {
    id: "linear",
    name: "Linear",
    description: "Let agents access your Linear issues and projects",
    icon: "linear",
    connected: true,
    account: "workspace.linear.app",
    connectedAt: new Date("2024-02-20"),
  },
  {
    id: "jira",
    name: "Jira",
    description: "Let agents access your Jira issues and projects",
    icon: "jira",
    connected: true,
    account: "jira.atlassian.net",
    connectedAt: new Date("2024-02-25"),
  },
];

export const AllDisconnected: Story = {
  args: {
    integrations: allDisconnected,
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};

export const MixedConnectedAndDisconnected: Story = {
  args: {
    integrations: mixed,
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};

export const AllConnected: Story = {
  args: {
    integrations: allConnected,
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};
