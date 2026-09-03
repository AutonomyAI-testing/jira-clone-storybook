import { createContext, useContext, useRef } from "react";
import { createStore, useStore, StoreApi } from "zustand";
import { User } from "@domain/user";

interface UserStore {
  user: User;
}

type UserStoreApi = StoreApi<UserStore>;

// The store lives behind a context (created per provider instance) so
// server-side rendering never shares user state between requests.
const UserStoreContext = createContext<UserStoreApi | undefined>(undefined);

export const UserContextProvider = ({
  user,
  children,
}: {
  user: User;
  children: JSX.Element;
}): JSX.Element => {
  const storeRef = useRef<UserStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createStore<UserStore>(() => ({ user }));
  }
  // Keep the store in sync if the loader supplies a different user
  // (e.g. after login/logout without a full remount).
  if (storeRef.current.getState().user !== user) {
    storeRef.current.setState({ user });
  }
  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = (): UserStore => {
  const store = useContext(UserStoreContext);
  if (!store) {
    throw new Error("User context not found");
  }
  return useStore(store);
};
