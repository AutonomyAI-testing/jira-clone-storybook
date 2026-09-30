import {
  HiOutlineLightningBolt,
  HiOutlineClock,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import { BiBug } from "react-icons/bi";
import { usersMock } from "@domain/user";
import { analyticsMock } from "@domain/analytics";
import { SectionCard } from "./section-card";
import { Legend } from "./legend";
import { KpiCard } from "./kpi-card";
import { SprintProgressCard } from "./sprint-progress-card";
import { AnalyticsHeader } from "./analytics-header";
import { InsightsCard } from "./insights-card";
import { WorkloadList } from "./workload-list";
import { IssueTable } from "./issue-table";
import {
  BurndownChart,
  VelocityChart,
  CumulativeFlowChart,
  DonutChart,
  CycleScatterChart,
  CreatedResolvedChart,
  AgingBarsChart,
} from "./charts";

export const AnalyticsView = (): JSX.Element => {
  const data = analyticsMock;

  return (
    <div className="flex flex-col gap-4">
      <AnalyticsHeader sprint={data.sprint} />

      {/* KPI strip */}
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-2">
          <SprintProgressCard sprint={data.sprint} />
        </div>
        <KpiCard
          label="Velocity"
          kpi={data.kpis.velocity}
          icon={<HiOutlineLightningBolt size={16} />}
        />
        <KpiCard
          label="Cycle time"
          kpi={data.kpis.cycleTime}
          icon={<HiOutlineClock size={16} />}
        />
        <KpiCard
          label="Throughput"
          kpi={data.kpis.throughput}
          icon={<HiOutlineTrendingUp size={16} />}
        />
        <KpiCard
          label="Bug ratio"
          kpi={data.kpis.bugRatio}
          icon={<BiBug size={16} />}
        />
      </div>

      {/* Burndown + insights */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <SectionCard
            title="Sprint burndown"
            subtitle="Story points remaining vs. ideal trajectory"
            action={
              <Legend
                items={[
                  { label: "Actual", colorToken: "blue" },
                  { label: "Ideal", colorToken: "grey" },
                ]}
              />
            }
          >
            <BurndownChart burndown={data.burndown} />
          </SectionCard>
        </div>
        <InsightsCard insights={data.insights} />
      </div>

      {/* Velocity + issue types */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <SectionCard
            title="Velocity"
            subtitle="Committed vs. completed story points by sprint"
            action={
              <Legend
                items={[
                  { label: "Committed", colorToken: "grey" },
                  { label: "Completed", colorToken: "blue" },
                ]}
              />
            }
          >
            <VelocityChart velocity={data.velocity} />
          </SectionCard>
        </div>
        <SectionCard
          title="Issue types"
          subtitle={`${data.issueTypes.reduce((sum, t) => sum + t.count, 0)} issues this sprint`}
        >
          <div className="flex items-center gap-4">
            <DonutChart data={data.issueTypes} />
            <div className="flex flex-1 flex-col gap-2">
              {data.issueTypes.map((t) => (
                <div
                  key={t.type}
                  className="flex items-center justify-between gap-2"
                >
                  <Legend items={[{ label: t.type, colorToken: t.colorToken }]} />
                  <span className="font-primary-bold text-xs text-font">
                    {t.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Cumulative flow + priorities */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <SectionCard
            title="Cumulative flow"
            subtitle="Issues by status across sprint days"
            action={
              <Legend
                items={[
                  { label: "Done", colorToken: "green" },
                  { label: "In review", colorToken: "blue" },
                  { label: "In progress", colorToken: "yellow" },
                  { label: "To do", colorToken: "grey" },
                ]}
              />
            }
          >
            <CumulativeFlowChart data={data.cumulativeFlow} />
          </SectionCard>
        </div>
        <SectionCard title="Priority distribution" subtitle="All open issues">
          <div className="flex items-center gap-4">
            <DonutChart data={data.priorities} thickness={18} centerLabel="open" />
            <div className="flex flex-1 flex-col gap-2">
              {data.priorities.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between gap-2"
                >
                  <Legend items={[{ label: p.label, colorToken: p.colorToken }]} />
                  <span className="font-primary-bold text-xs text-font">
                    {p.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Workload + cycle time */}
      <div className="grid grid-cols-2 gap-4">
        <SectionCard
          title="Workload by assignee"
          subtitle="Issues assigned vs. capacity"
          action={
            <Legend
              items={[
                { label: "Done", colorToken: "green" },
                { label: "Review", colorToken: "blue" },
                { label: "In progress", colorToken: "yellow" },
                { label: "To do", colorToken: "grey" },
              ]}
            />
          }
        >
          <WorkloadList workload={data.workload} users={usersMock} />
        </SectionCard>
        <SectionCard
          title="Cycle time"
          subtitle="Days from In Progress → Done · last 30 issues"
          action={
            <Legend
              items={[
                { label: "Issue", colorToken: "blue" },
                { label: "Outlier (>6d)", colorToken: "red" },
              ]}
            />
          }
        >
          <CycleScatterChart data={data.cycleTime} />
        </SectionCard>
      </div>

      {/* Created vs resolved + aging */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <SectionCard
            title="Created vs. resolved"
            subtitle="Last 8 weeks"
            action={
              <Legend
                items={[
                  { label: "Created", colorToken: "blue" },
                  { label: "Resolved", colorToken: "green" },
                ]}
              />
            }
          >
            <CreatedResolvedChart data={data.createdResolved} />
          </SectionCard>
        </div>
        <SectionCard title="Backlog aging" subtitle="Open issues by age">
          <AgingBarsChart data={data.aging} />
        </SectionCard>
      </div>

      {/* Recent activity */}
      <SectionCard
        title="Recent activity"
        subtitle="Latest changes across the sprint"
      >
        <IssueTable rows={data.recentIssues} users={usersMock} />
      </SectionCard>
    </div>
  );
};
