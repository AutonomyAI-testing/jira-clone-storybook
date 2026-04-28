import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./page-title";

const meta: Meta<typeof PageTitle> = {
  title: "Components/PageTitle",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      defaultValue: "Page Title",
      control: {
        type: "text",
      },
    },
    level: {
      defaultValue: "h1",
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
  render: () => (
    <div className="space-y-8">
      {[H1, H2, H3, H4, H5, H6].map((story, index) => (
        <PageTitle {...story.args} key={index} />
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

export const WithCustomStyling: Story = {
  args: {
    children: "Title with custom color",
    level: "h1",
    className: "text-font-brand",
  },
};
