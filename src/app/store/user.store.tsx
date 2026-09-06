import { create } from "zustand";
import { User } from "@domain/user";

interface UserStore {
  user: User;
}

const useUserZustandStore = create<UserStore>()(() => ({
  // Hydrated during render via `setUser` from loader data (see main.layout.tsx)
  user: null as unknown as User,
}));

export const setUser = (user: User): void => {
  useUserZustandStore.setState({ user });
};

export const useUserStore = (): UserStore => useUserZustandStore();
