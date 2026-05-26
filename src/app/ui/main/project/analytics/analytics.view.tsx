import { useLoaderData } from "@remix-run/react";
import type { Project } from "@domain/project";
import { AnalyticsStatCards } from "./analytics-stat-cards";
import { StatusDonutChart } from "./analytics-status-donut";
import { PriorityBarChart } from "./analytics-priority-chart";
import { AssigneeWorkloadChart } from "./analytics-assignee-workload";
import { AnalyticsEmptyState } from "./analytics-empty-state";

interface LoaderData {
  project: Project;
}

interface AssigneeDataItem {
  name: string;
  todo: number;
  inProgress: number;
  done: number;
}

export const AnalyticsView = (): JSX.Element => {
  const { project } = useLoaderData<LoaderData>();

  // Flatten all issues across categories
  const allIssues = project.categories.flatMap((cat) => cat.issues);
  const total = allIssues.length;

  // If no issues, show empty state
  if (total === 0) {
    return (
      <div className="h-full w-full p-6">
        <AnalyticsEmptyState />
      </div>
    );
  }

  // Status counts
  const todoCount =
    project.categories.find((c) => c.type === "TODO")?.issues.length ?? 0;
  const inProgressCount =
    project.categories.find((c) => c.type === "IN_PROGRESS")?.issues.length ?? 0;
  const doneCount =
    project.categories.find((c) => c.type === "DONE")?.issues.length ?? 0;

  // Priority counts
  const lowCount = allIssues.filter((i) => i.priority.id === "low").length;
  const mediumCount = allIssues.filter((i) => i.priority.id === "medium").length;
  const highCount = allIssues.filter((i) => i.priority.id === "high").length;

  // Assignee workload - group by assignee name
  const assigneeMap: Record<
    string,
    { todo: number; inProgress: number; done: number; userId: string }
  > = {};

  for (const cat of project.categories) {
    for (const issue of cat.issues) {
      const name = issue.asignee.name;
      if (!assigneeMap[name]) {
        assigneeMap[name] = { todo: 0, inProgress: 0, done: 0, userId: issue.asignee.id };
      }
      if (cat.type === "TODO") assigneeMap[name].todo++;
      else if (cat.type === "IN_PROGRESS") assigneeMap[name].inProgress++;
      else if (cat.type === "DONE") assigneeMap[name].done++;
    }
  }

  const assigneeData: AssigneeDataItem[] = Object.entries(assigneeMap).map(
    ([name, counts]) => ({
      name,
      todo: counts.todo,
      inProgress: counts.inProgress,
      done: counts.done,
    })
  );

  return (
    <div className="h-full w-full overflow-y-auto p-6">
      <div className="flex flex-col gap-6">
        {/* Row 1: Stat Cards */}
        <AnalyticsStatCards
          total={total}
          todoCount={todoCount}
          inProgressCount={inProgressCount}
          doneCount={doneCount}
        />

        {/* Row 2: Charts in 2-column grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StatusDonutChart
            todoCount={todoCount}
            inProgressCount={inProgressCount}
            doneCount={doneCount}
            total={total}
          />
          <PriorityBarChart lowCount={lowCount} mediumCount={mediumCount} highCount={highCount} />
        </div>

        {/* Row 3: Full-width workload chart */}
        <AssigneeWorkloadChart data={assigneeData} />
      </div>
    </div>
  );
};
