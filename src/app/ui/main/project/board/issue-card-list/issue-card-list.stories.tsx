import type { Meta, StoryObj } from "@storybook/react";
import { categoriesMock1 } from "@domain/category";
import { priorityLow, priorityMedium, priorityHigh } from "@domain/priority";
import { userMock1, userMock2, usersMock } from "@domain/user";
import { withRemixStub } from "@app/stories/utils";
import { IssueCardList } from "./issue-card-list";

const meta: Meta<typeof IssueCardList> = {
  title: "Pages/Project/IssueCardList",
  component: IssueCardList,
  parameters: {
    layout: "padded",
  },
  decorators: [(Story) => withRemixStub(Story())],
};

export default meta;
type Story = StoryObj<typeof IssueCardList>;

export const Default: Story = {
  args: {
    categories: categoriesMock1,
  },
};

export const WithAllPriorities: Story = {
  args: {
    categories: [
      {
        id: "1e8877a7-91dc-46de-bce0-f077ad922fc8",
        type: "TODO" as const,
        name: "To do",
        issues: [
          {
            id: "low-priority-issue",
            name: "Low priority task",
            description: "This task has low priority",
            reporter: userMock1,
            asignee: userMock1,
            comments: [],
            priority: priorityLow,
            categoryType: "TODO",
            createdAt: new Date("2022-01-18 11:00").valueOf(),
            updatedAt: new Date("2022-01-23 15:28").valueOf(),
          },
          {
            id: "medium-priority-issue",
            name: "Medium priority task",
            description: "This task has medium priority",
            reporter: userMock1,
            asignee: userMock2,
            comments: [],
            priority: priorityMedium,
            categoryType: "TODO",
            createdAt: new Date("2022-01-18 11:00").valueOf(),
            updatedAt: new Date("2022-01-23 15:28").valueOf(),
          },
          {
            id: "high-priority-issue",
            name: "High priority task",
            description: "This task has high priority",
            reporter: userMock1,
            asignee: usersMock[2],
            comments: [],
            priority: priorityHigh,
            categoryType: "TODO",
            createdAt: new Date("2022-01-18 11:00").valueOf(),
            updatedAt: new Date("2022-01-23 15:28").valueOf(),
          },
        ],
        order: 0,
        createdAt: new Date("2022-01-01").valueOf(),
        updatedAt: new Date("2022-01-01").valueOf(),
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    categories: [
      {
        id: "1e8877a7-91dc-46de-bce0-f077ad922fc8",
        type: "TODO" as const,
        name: "To do",
        issues: [],
        order: 0,
        createdAt: new Date("2022-01-01").valueOf(),
        updatedAt: new Date("2022-01-01").valueOf(),
      },
      {
        id: "46964edd-62e0-4c2f-90bf-e275ee087433",
        type: "IN_PROGRESS" as const,
        name: "In progress",
        issues: [],
        order: 1,
        createdAt: new Date("2022-01-01").valueOf(),
        updatedAt: new Date("2022-01-01").valueOf(),
      },
      {
        id: "c1278ad3-29b3-422c-8219-54bb66b26ff4",
        type: "DONE" as const,
        name: "Done",
        issues: [],
        order: 2,
        createdAt: new Date("2022-01-01").valueOf(),
        updatedAt: new Date("2022-01-01").valueOf(),
      },
    ],
  },
};
