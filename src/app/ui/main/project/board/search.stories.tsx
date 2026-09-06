import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useProjectStore } from "@app/ui/main/project";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { Search } from "./search";

const meta: Meta<typeof Search> = {
  title: "Pages/Project/Board/Search",
  component: Search,
  parameters: {
    layout: "padded",
  },
  decorators: [(Story) => withMainContext(() => withRemixStub(<Story />) as JSX.Element)],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};

const RecentIssuesHydrator = ({ children }: { children: JSX.Element }) => {
  const { addRecentIssue } = useProjectStore();

  useEffect(() => {
    addRecentIssue({ id: "r1", title: "Fix login redirect loop" });
    addRecentIssue({ id: "r2", title: "Board drag and drop polish" });
    addRecentIssue({ id: "r3", title: "Update avatar images" });
  }, [addRecentIssue]);

  return children;
};

export const WithRecentIssueSuggestions: Story = {
  decorators: [
    (Story) => (
      <RecentIssuesHydrator>
        <Story />
      </RecentIssuesHydrator>
    ),
  ],
  play: async () => {
    // Focus the input so the suggestion dropdown appears
    const input = document.querySelector<HTMLInputElement>(
      'input[name="search"]'
    );
    input?.focus();
  },
};
