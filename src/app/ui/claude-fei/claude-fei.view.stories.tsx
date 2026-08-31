import type { Meta, StoryObj } from "@storybook/react";
import { ClaudeFeiView } from "./claude-fei.view";

const meta: Meta<typeof ClaudeFeiView> = {
  title: "Pages/ClaudeFei",
  component: ClaudeFeiView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ClaudeFeiView>;

export const Default: Story = {};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    themes: { themeOverride: "theme-dark" },
  },
};

export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: "light" },
    themes: { themeOverride: "theme-light" },
  },
};
