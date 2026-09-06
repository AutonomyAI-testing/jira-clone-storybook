import { create } from "zustand";
import { Project } from "@domain/project";

interface RecentIssue {
  id: string;
  title: string;
}

interface ProjectStore {
  project: Project;
  search: string;
  setSearch: (search: string) => void;
  /** Titles of the most recently viewed issues, newest first (max 3). */
  recentIssues: RecentIssue[];
  addRecentIssue: (issue: RecentIssue) => void;
}

const MAX_RECENT_ISSUES = 3;

const useProjectZustandStore = create<ProjectStore>()((set) => ({
  // Hydrated during render via `initProjectStore` (see board.view.tsx)
  project: null as unknown as Project,
  search: "",
  setSearch: (search: string) => set({ search }),
  recentIssues: [],
  addRecentIssue: (issue: RecentIssue) =>
    set((state) => ({
      recentIssues: [
        issue,
        ...state.recentIssues.filter((recent) => recent.id !== issue.id),
      ].slice(0, MAX_RECENT_ISSUES),
    })),
}));

export const initProjectStore = (project: Project): void => {
  useProjectZustandStore.setState({ project, search: "", recentIssues: [] });
};

export const useProjectStore = (): ProjectStore => useProjectZustandStore();
