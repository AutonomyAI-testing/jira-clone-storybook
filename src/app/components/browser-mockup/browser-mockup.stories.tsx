import type { Meta, StoryObj } from "@storybook/react";
import { BrowserMockup } from "./browser-mockup";

const meta: Meta<typeof BrowserMockup> = {
  title: "Components/BrowserMockup",
  component: BrowserMockup,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof BrowserMockup>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    url: "suddenlycommit.com/welcome",
    tabTitle: "Welcome",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#111111", margin: 0 }}>
          Welcome to SuddenlyCommit
        </h1>
        <p style={{ fontSize: 15, color: "#575757", margin: 0, maxWidth: 520 }}>
          This is custom page content rendered inside the browser mockup via the
          <code> children</code> prop. Use it to preview any page layout inside a
          realistic Chrome-style window.
        </p>
      </div>
    ),
  },
};
