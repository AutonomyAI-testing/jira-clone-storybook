import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    initTitle: {
      defaultValue: "Title",
      control: {
        type: "text",
      },
    },
    readOnly: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    maxLength: {
      defaultValue: 80,
      control: {
        type: "number",
      },
    },
    error: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
    subtitle: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

// Variant args must be declared before `Default` uses them (no const hoisting)
const defaultTitleArgs = {};
const readOnlyArgs = { initTitle: "Read only title", readOnly: true };
const errorArgs = { placeholder: "Error title", error: "Title is required" };
const customMaxLengthArgs = { placeholder: "Custom max length", maxLength: 10 };
const withSubtitleArgs = { initTitle: "My Issue", subtitle: "Short subtitle" };
const withLongSubtitleArgs = {
  initTitle: "Epic: Redesign Dashboard",
  subtitle:
    "This epic covers the full redesign of the main dashboard, including new charts, layout improvements, and accessibility updates.",
};

export const Default: Story = {
  parameters: { layout: "padded" },
  render: (_) => (
    <div className="grid grid-cols-1 gap-6" style={{ width: 480 }}>
      {[
        defaultTitleArgs,
        readOnlyArgs,
        errorArgs,
        customMaxLengthArgs,
        withSubtitleArgs,
        withLongSubtitleArgs,
      ].map((args, index) => (
        <Title {...args} key={index} />
      ))}
    </div>
  ),
};

export const DefaultTitle: Story = {};

export const InitTitle: Story = {
  args: {
    initTitle: "Default title",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read only title",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Error title",
    error: "Title is required",
  },
};

export const CustomMaxLength: Story = {
  args: {
    placeholder: "Custom max length",
    maxLength: 10,
  },
};

export const WithSubtitle: Story = {
  args: {
    initTitle: "My Issue",
    subtitle: "Short subtitle",
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Epic: Redesign Dashboard",
    subtitle:
      "This epic covers the full redesign of the main dashboard, including new charts, layout improvements, and accessibility updates.",
  },
};
