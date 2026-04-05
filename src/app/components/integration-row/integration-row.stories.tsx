import type { Meta, StoryObj } from "@storybook/react";
import { IntegrationRow } from "./integration-row";

const meta: Meta<typeof IntegrationRow> = {
  title: "Components/IntegrationRow",
  component: IntegrationRow,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof IntegrationRow>;

export const Disconnected: Story = {
  args: {
    integration: {
      id: "figma",
      name: "Figma",
      description: "Let agents access your Figma files and projects",
      icon: "figma",
      connected: false,
    },
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};

export const Connected: Story = {
  args: {
    integration: {
      id: "figma",
      name: "Figma",
      description: "Let agents access your Figma files and projects",
      icon: "figma",
      connected: true,
      account: "user@example.com",
      connectedAt: new Date("2024-01-15"),
    },
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};

export const ConnectedSlack: Story = {
  args: {
    integration: {
      id: "slack",
      name: "Slack",
      description: "Connect to Slack for notifications and updates",
      icon: "slack",
      connected: true,
      account: "workspace.slack.com",
      connectedAt: new Date("2024-01-20"),
    },
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};

export const ConnectedLinear: Story = {
  args: {
    integration: {
      id: "linear",
      name: "Linear",
      description: "Let agents access your Linear issues and projects",
      icon: "linear",
      connected: true,
      account: "workspace.linear.app",
      connectedAt: new Date("2024-02-20"),
    },
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};

export const ConnectedJira: Story = {
  args: {
    integration: {
      id: "jira",
      name: "Jira",
      description: "Let agents access your Jira issues and projects",
      icon: "jira",
      connected: true,
      account: "jira.atlassian.net",
      connectedAt: new Date("2024-02-25"),
    },
    onConnect: (integrationId) => console.log(`Connect: ${integrationId}`),
    onRevoke: (integrationId) => console.log(`Revoke: ${integrationId}`),
  },
};
