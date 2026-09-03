import { create } from "zustand";

/**
 * Board filter (search) state.
 *
 * Zustand trial (see project/briefs/react-state-management): the board's
 * issue filter lives here instead of React Context so consumers subscribe
 * to the search term only, and this module has no provider requirement —
 * Storybook stories and tests can use it directly.
 */
interface BoardSearchStore {
  search: string;
  setSearch: (search: string) => void;
  clearSearch: () => void;
}

export const useBoardSearchStore = create<BoardSearchStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  clearSearch: () => set({ search: "" }),
}));
