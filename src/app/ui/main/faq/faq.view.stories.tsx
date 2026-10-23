import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, within } from "@storybook/testing-library";

import { FaqView } from "./faq.view";

const meta: Meta<typeof FaqView> = {
  title: "Main/FAQ",
  component: FaqView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen w-full flex-col">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FaqView>;

const filterQuestions = (canvasElement: HTMLElement, term: string): void => {
  const canvas = within(canvasElement);
  fireEvent.change(canvas.getByLabelText("Filter questions"), {
    target: { value: term },
  });
};

export const Default: Story = {};

export const Filtered: Story = {
  play: async ({ canvasElement }) => filterQuestions(canvasElement, "theme"),
};

export const NoMatches: Story = {
  play: async ({ canvasElement }) => filterQuestions(canvasElement, "zzzz"),
};
