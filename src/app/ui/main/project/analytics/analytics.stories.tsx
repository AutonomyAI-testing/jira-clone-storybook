import type { Meta, StoryObj } from "@storybook/react";
import { AnalyticsStatCards } from "./analytics-stat-cards";
import { StatusDonutChart } from "./analytics-status-donut";
import { PriorityBarChart } from "./analytics-priority-chart";
import { AssigneeWorkloadChart } from "./analytics-assignee-workload";
import { AnalyticsEmptyState } from "./analytics-empty-state";

// Mock data derived from projectMock1 (5 total: 1 TODO, 2 IN_PROGRESS, 2 DONE)
const mockStatData = {
  total: 5,
  todoCount: 1,
  inProgressCount: 2,
  doneCount: 2,
};

const mockPriorityData = {
  lowCount: 1,
  mediumCount: 2,
  highCount: 2,
};

const mockAssigneeData = [
  { name: "Daniel Serrano", todo: 1, inProgress: 0, done: 2 },
  { name: "Woody", todo: 0, inProgress: 1, done: 0 },
  { name: "Buzz Lightyear", todo: 0, inProgress: 1, done: 0 },
];

// Combined Dashboard Story
const meta: Meta = {
  title: "Pages/Project/Analytics",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Dashboard: Story = {
  render: () => (
    <div className="h-screen w-full overflow-y-auto bg-elevation-surface-sunken p-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="flex flex-col gap-6">
          {/* Row 1: Stat Cards */}
          <AnalyticsStatCards {...mockStatData} />

          {/* Row 2: Charts in 2-column grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <StatusDonutChart {...mockStatData} />
            <PriorityBarChart {...mockPriorityData} />
          </div>

          {/* Row 3: Full-width workload chart */}
          <AssigneeWorkloadChart data={mockAssigneeData} />
        </div>
      </div>
    </div>
  ),
};

// Individual Component Stories using render functions

export const StatCards: Story = {
  render: () => (
    <div className="p-6">
      <AnalyticsStatCards {...mockStatData} />
    </div>
  ),
};

export const StatusDonut: Story = {
  render: () => (
    <div className="p-6" style={{ maxWidth: "400px" }}>
      <StatusDonutChart {...mockStatData} />
    </div>
  ),
};

export const PriorityBar: Story = {
  render: () => (
    <div className="p-6" style={{ maxWidth: "400px" }}>
      <PriorityBarChart {...mockPriorityData} />
    </div>
  ),
};

export const AssigneeWorkload: Story = {
  render: () => (
    <div className="p-6" style={{ maxWidth: "800px" }}>
      <AssigneeWorkloadChart data={mockAssigneeData} />
    </div>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <div className="flex h-96 items-center justify-center p-6">
      <AnalyticsEmptyState />
    </div>
  ),
};
