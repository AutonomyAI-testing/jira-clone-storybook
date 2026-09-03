import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useBoardSearchStore } from "./board-search.store";
import { Search } from "./search";

/**
 * The board issue filter now lives in a Zustand store
 * (board-search.store.ts) instead of React Context, so Search renders
 * standalone with NO provider wrapper.
 */
const meta: Meta<typeof Search> = {
  title: "Pages/Project/Board/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      // Reset the store so each story starts from a clean state.
      useBoardSearchStore.setState({ search: "" });
      return (
        <div className="p-4">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Search>;

/** Default state: empty field with the search icon, no provider required. */
export const Default: Story = {};

/**
 * Interactive demo: typing into the field swaps the search icon for the
 * clear (X) icon; clicking it clears the field and restores the icon.
 */
export const TypingAndClear: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Filter issues");

    await userEvent.type(input, "bug", { delay: 150 });

    const clearButton = await canvas.findByRole("button", {
      name: "Clear search",
    });
    await userEvent.click(clearButton);
  },
};

/** Static state with text already in the store — shows the clear (X) icon. */
export const WithText: Story = {
  decorators: [
    (Story) => {
      useBoardSearchStore.setState({ search: "bug" });
      return <Story />;
    },
  ],
};
