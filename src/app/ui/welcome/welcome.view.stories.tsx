import type { Meta, StoryObj } from "@storybook/react-vite";
import { WelcomeView } from "./welcome.view";

const meta: Meta<typeof WelcomeView> = {
  title: "Pages/Welcome",
  component: WelcomeView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    heading: {
      control: { type: "text" },
      defaultValue: "Welcome",
    },
    subtitle: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {
  args: {},
};

export const WithSubtitle: Story = {
  args: {
    heading: "Welcome",
    subtitle:
      "Select your user profile to explore projects, manage issues, and collaborate with your team.",
  },
};

export const CustomHeading: Story = {
  args: {
    heading: "Hello, World",
    subtitle: "A Jira-inspired task manager built with Remix and TypeScript.",
  },
};
