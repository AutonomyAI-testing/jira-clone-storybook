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
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

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

export const Error: Story = {
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

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-1 gap-6">
      {[DefaultTitle, ReadOnly, Error, CustomMaxLength].map(
        (TitleStory, index) => (
          <Title {...TitleStory.args} key={index} />
        )
      )}
    </div>
  ),
};

export const WithShortSubtitle: Story = {
  args: {
    initTitle: "Project kickoff",
    subtitle: "Q3 initiative",
    readOnly: true,
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Redesign the onboarding flow",
    subtitle:
      "This initiative covers the end-to-end onboarding experience for new users signing up via mobile, with a focus on reducing drop-off at the verification step.",
    readOnly: true,
  },
};
