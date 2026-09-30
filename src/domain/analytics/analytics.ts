export interface SprintInfo {
  name: string;
  range: string;
  day: number;
  length: number;
  goalPoints: number;
  completedPoints: number;
}

export interface VelocityPoint {
  sprint: string;
  committed: number;
  completed: number;
}

export interface BurndownSeries {
  ideal: number[];
  actual: (number | null)[];
  days: number;
}

export interface CumulativeFlowPoint {
  day: number;
  todo: number;
  inProgress: number;
  review: number;
  done: number;
}

export interface IssueTypeBreakdown {
  type: string;
  count: number;
  colorToken: AccentColorToken;
}

export interface PriorityBreakdown {
  label: string;
  count: number;
  colorToken: AccentColorToken;
}

export interface WorkloadRow {
  userId: string;
  todo: number;
  inProgress: number;
  review: number;
  done: number;
  capacity: number;
}

export interface CycleTimePoint {
  issueIndex: number;
  days: number;
}

export interface CreatedResolvedPoint {
  week: string;
  created: number;
  resolved: number;
}

export interface AgingBucket {
  bucket: string;
  count: number;
  colorToken: AccentColorToken;
}

export interface RecentIssueRow {
  key: string;
  title: string;
  type: string;
  priorityId: "low" | "medium" | "high";
  status: "TODO" | "IN_PROGRESS" | "DONE";
  assigneeId: string;
  points: number;
  age: string;
}

export interface KpiSummary {
  velocity: KpiValue;
  cycleTime: KpiValue;
  throughput: KpiValue;
  bugRatio: KpiValue;
}

export interface KpiValue {
  value: number;
  unit: string;
  delta: number | null;
  deltaLabel: string;
  /** When true, a negative delta is the good direction (e.g. cycle time, bug ratio) */
  invertDelta?: boolean;
}

export type InsightTone = "warning" | "info" | "alert";

export interface SprintInsight {
  tone: InsightTone;
  title: string;
  body: string;
  actionLabel: string;
}

/** Semantic accent colors reused across charts/legends — maps to existing Tailwind accent tokens */
export type AccentColorToken = "blue" | "green" | "grey" | "yellow" | "red";

export interface AnalyticsData {
  sprint: SprintInfo;
  velocity: VelocityPoint[];
  burndown: BurndownSeries;
  cumulativeFlow: CumulativeFlowPoint[];
  issueTypes: IssueTypeBreakdown[];
  priorities: PriorityBreakdown[];
  workload: WorkloadRow[];
  cycleTime: CycleTimePoint[];
  createdResolved: CreatedResolvedPoint[];
  aging: AgingBucket[];
  recentIssues: RecentIssueRow[];
  kpis: KpiSummary;
  insights: SprintInsight[];
}
