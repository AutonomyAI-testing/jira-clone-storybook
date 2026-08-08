import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./page-title";

const meta: Meta<typeof PageTitle> = {
  title: "Components/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "The heading content",
      control: {
        type: "text",
      },
    },
    level: {
      description: "Semantic heading level (h1-h6)",
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
    className: {
      description: "Additional CSS classes for customization",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

// Display all heading levels in sequence to show semantic variety
// while maintaining consistent typography
export const Default: Story = {
  render: () => (
    <div className="space-y-8">
      {[
        { args: H1.args || { children: "" }, id: "h1" },
        { args: H2.args || { children: "" }, id: "h2" },
        { args: H3.args || { children: "" }, id: "h3" },
        { args: H4.args || { children: "" }, id: "h4" },
        { args: H5.args || { children: "" }, id: "h5" },
        { args: H6.args || { children: "" }, id: "h6" },
      ].map(({ args, id }) => (
        <PageTitle
          {...(args as React.ComponentProps<typeof PageTitle>)}
          key={id}
        />
      ))}
    </div>
  ),
};

export const H1: Story = {
  args: {
    children: "This is a H1 Title",
    level: "h1",
  },
};

export const H2: Story = {
  args: {
    children: "This is a H2 Title",
    level: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "This is a H3 Title",
    level: "h3",
  },
};

export const H4: Story = {
  args: {
    children: "This is a H4 Title",
    level: "h4",
  },
};

export const H5: Story = {
  args: {
    children: "This is a H5 Title",
    level: "h5",
  },
};

export const H6: Story = {
  args: {
    children: "This is a H6 Title",
    level: "h6",
  },
};

// Demonstrates how className prop extends base styling
export const WithCustomStyling: Story = {
  args: {
    children: "Title with custom color",
    level: "h1",
    className: "text-font-brand",
  },
};
