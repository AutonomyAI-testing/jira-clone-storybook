import { usersMock } from "@domain/user";
import { AnalyticsData, CumulativeFlowPoint, CycleTimePoint } from "./analytics";

const [danielSerrano, woody, buzzLightyear, jessie, emperorZurg, mrPotato] = usersMock;

const cumulativeFlow: CumulativeFlowPoint[] = Array.from({ length: 15 }, (_, day) => {
  const t = day / 14;
  const todo = Math.max(0, Math.round(28 - 28 * t * 0.9 - Math.sin(day) * 1.5));
  const inProgress = Math.round(4 + Math.sin(day / 2) * 2 + t * 4);
  const review = Math.round(2 + t * 6 + Math.cos(day / 3) * 1.5);
  const done = Math.round(28 * t * 0.85);

  return { day, todo, inProgress, review, done };
});

const cycleTime: CycleTimePoint[] = (() => {
  const points: CycleTimePoint[] = [];
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let i = 0; i < 30; i++) {
    const days = 0.6 + rand() * 7.5 + (rand() < 0.1 ? rand() * 6 : 0);
    points.push({ issueIndex: i, days: parseFloat(days.toFixed(1)) });
  }

  return points;
})();

export const analyticsMock: AnalyticsData = {
  sprint: {
    name: "Sprint 24",
    range: "Apr 22 – May 6",
    day: 11,
    length: 14,
    goalPoints: 56,
    completedPoints: 38,
  },
  velocity: [
    { sprint: "S18", committed: 42, completed: 36 },
    { sprint: "S19", committed: 44, completed: 40 },
    { sprint: "S20", committed: 48, completed: 41 },
    { sprint: "S21", committed: 46, completed: 47 },
    { sprint: "S22", committed: 52, completed: 49 },
    { sprint: "S23", committed: 50, completed: 52 },
    { sprint: "S24", committed: 56, completed: 38 },
  ],
  burndown: {
    ideal: Array.from({ length: 15 }, (_, i) => 56 - (56 / 14) * i),
    actual: [56, 56, 54, 52, 49, 47, 44, 41, 38, null, null, null, null, null, null],
    days: 14,
  },
  cumulativeFlow,
  issueTypes: [
    { type: "Story", count: 34, colorToken: "blue" },
    { type: "Task", count: 22, colorToken: "green" },
    { type: "Bug", count: 14, colorToken: "red" },
    { type: "Sub-task", count: 9, colorToken: "grey" },
    { type: "Epic", count: 3, colorToken: "yellow" },
  ],
  priorities: [
    { label: "Highest", count: 6, colorToken: "red" },
    { label: "High", count: 18, colorToken: "red" },
    { label: "Medium", count: 38, colorToken: "yellow" },
    { label: "Low", count: 16, colorToken: "green" },
    { label: "Lowest", count: 4, colorToken: "grey" },
  ],
  workload: [
    { userId: danielSerrano.id, todo: 4, inProgress: 3, review: 1, done: 9, capacity: 18 },
    { userId: woody.id, todo: 6, inProgress: 2, review: 2, done: 7, capacity: 16 },
    { userId: buzzLightyear.id, todo: 3, inProgress: 2, review: 0, done: 11, capacity: 16 },
    { userId: jessie.id, todo: 5, inProgress: 4, review: 1, done: 4, capacity: 14 },
    { userId: emperorZurg.id, todo: 7, inProgress: 1, review: 1, done: 6, capacity: 16 },
    { userId: mrPotato.id, todo: 2, inProgress: 3, review: 2, done: 8, capacity: 16 },
  ],
  cycleTime,
  createdResolved: [
    { week: "W1", created: 18, resolved: 14 },
    { week: "W2", created: 22, resolved: 17 },
    { week: "W3", created: 16, resolved: 19 },
    { week: "W4", created: 24, resolved: 21 },
    { week: "W5", created: 19, resolved: 22 },
    { week: "W6", created: 21, resolved: 20 },
    { week: "W7", created: 26, resolved: 24 },
    { week: "W8", created: 17, resolved: 23 },
  ],
  aging: [
    { bucket: "< 1 wk", count: 28, colorToken: "green" },
    { bucket: "1–2 wk", count: 19, colorToken: "blue" },
    { bucket: "2–4 wk", count: 11, colorToken: "yellow" },
    { bucket: "1–2 mo", count: 6, colorToken: "red" },
    { bucket: "> 2 mo", count: 3, colorToken: "red" },
  ],
  recentIssues: [
    {
      key: "AUR-218",
      title: "Push notification permission flow lands in wrong tab",
      type: "Bug",
      priorityId: "high",
      status: "IN_PROGRESS",
      assigneeId: danielSerrano.id,
      points: 3,
      age: "2d",
    },
    {
      key: "AUR-214",
      title: "Onboarding step 3 — biometric prompt copy",
      type: "Task",
      priorityId: "medium",
      status: "IN_PROGRESS",
      assigneeId: buzzLightyear.id,
      points: 2,
      age: "3d",
    },
    {
      key: "AUR-210",
      title: "Search results empty state illustration",
      type: "Story",
      priorityId: "low",
      status: "DONE",
      assigneeId: emperorZurg.id,
      points: 5,
      age: "4d",
    },
    {
      key: "AUR-209",
      title: "Crash on cold-start when offline",
      type: "Bug",
      priorityId: "high",
      status: "IN_PROGRESS",
      assigneeId: jessie.id,
      points: 8,
      age: "5d",
    },
    {
      key: "AUR-205",
      title: "Profile avatar upload — 4MB limit error",
      type: "Bug",
      priorityId: "medium",
      status: "DONE",
      assigneeId: woody.id,
      points: 3,
      age: "6d",
    },
    {
      key: "AUR-201",
      title: "Saved filters appear in nav drawer",
      type: "Story",
      priorityId: "medium",
      status: "TODO",
      assigneeId: mrPotato.id,
      points: 5,
      age: "1w",
    },
  ],
  kpis: {
    velocity: { value: 49.2, unit: "pts/sprint", delta: 6.5, deltaLabel: "vs. last 6 sprints" },
    cycleTime: {
      value: 3.4,
      unit: "days median",
      delta: -0.8,
      deltaLabel: "vs. last sprint",
      invertDelta: true,
    },
    throughput: { value: 82, unit: "issues / 30d", delta: 12, deltaLabel: "vs. prev 30d" },
    bugRatio: {
      value: 14,
      unit: "% bugs",
      delta: -3,
      deltaLabel: "vs. last sprint",
      invertDelta: true,
    },
  },
  insights: [
    {
      tone: "warning",
      title: "Sprint goal is at risk",
      body: "At day 11 of 14, the team has completed 38 of 56 committed points. Burn rate suggests a finish around 47 pts — about 16% short of goal.",
      actionLabel: "View at-risk issues",
    },
    {
      tone: "info",
      title: "Cycle time is improving",
      body: "Median cycle time dropped from 4.2 → 3.4 days over the last 4 sprints.",
      actionLabel: "See cycle time chart",
    },
    {
      tone: "alert",
      title: "Bug ratio ticked up",
      body: "Bugs make up 14% of new tickets this sprint, up from an 11% baseline.",
      actionLabel: "Filter to bugs",
    },
  ],
};
