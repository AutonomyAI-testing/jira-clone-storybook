import { createContext, useContext, useEffect, useRef } from "react";
import { createStore, useStore, StoreApi } from "zustand";
import { useFetcher } from "@remix-run/react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  LAVA = "lava",
  LIME = "lime",
  BARBIE = "barbie",
}
export const themes: Array<Theme> = Object.values(Theme);
export enum Preference {
  SELECTED = "selected",
  SYSTEM = "system",
}
const preferences: Array<Preference> = Object.values(Preference);

export const DEFAULT_THEME: Theme = Theme.LIGHT;
const DEFAULT_PREFERENCE: Preference = Preference.SYSTEM;

interface ThemeState {
  theme: Theme | null;
  preference: Preference | null;
  setTheme: (theme: Theme, preference?: Preference) => void;
}

type ThemeStoreApi = StoreApi<ThemeState>;

// The store lives behind a context (created per provider instance) so
// server-side rendering never shares theme state between requests.
const ThemeStoreContext = createContext<ThemeStoreApi | null>(null);

// Inspired from Kent C. Dodds repo https://github.com/kentcdodds/kentcdodds.com/blob/main/app/utils/theme-provider.tsx
const prefersLightMQ = "(prefers-color-scheme: light)";
export const getSystemTheme = (): Theme =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;

const getInitialTheme = (specifiedTheme: Theme | undefined): Theme | null => {
  // On the server, if we don't have a specified theme then we should
  // return null and the clientThemeCode will set the theme for us
  // before hydration. Then (during hydration), this code will get the same
  // value that clientThemeCode got so hydration is happy.
  if (specifiedTheme) {
    if (themes.includes(specifiedTheme)) return specifiedTheme;
    else return null;
  }

  // there's no way for us to know what the theme should be in this context
  // the client will have to figure it out before hydration.
  if (typeof window !== "object") return null;

  return getSystemTheme();
};

const getInitialPreference = (
  specifiedPreference: Preference | undefined
): Preference => {
  if (isValidPreference(specifiedPreference)) return specifiedPreference;

  return DEFAULT_PREFERENCE;
};

export const ThemeProvider = ({
  children,
  specifiedTheme,
  specifiedPreference,
}: ThemeProviderProps) => {
  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const storeRef = useRef<ThemeStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createStore<ThemeState>((set) => ({
      theme: getInitialTheme(specifiedTheme),
      preference: getInitialPreference(specifiedPreference),
      setTheme: (
        newTheme: Theme,
        newPreference: Preference = Preference.SYSTEM
      ) => {
        persistThemeRef.current.submit(
          { theme: newTheme, preference: newPreference },
          { action: "action/set-theme", method: "post" }
        );
        set({ theme: newTheme, preference: newPreference });
      },
    }));
  }
  const store = storeRef.current;

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);

    const handleChange = () => {
      if (store.getState().preference !== Preference.SYSTEM) return;

      const newTheme = mediaQuery.matches ? Theme.LIGHT : Theme.DARK;
      store.setState({ theme: newTheme });
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [store]);

  return (
    <ThemeStoreContext.Provider value={store}>
      {children}
    </ThemeStoreContext.Provider>
  );
};

interface ThemeProviderProps {
  children: JSX.Element;
  specifiedTheme: Theme | undefined;
  specifiedPreference: Preference | undefined;
}

export const useTheme = () => {
  const store = useContext(ThemeStoreContext);
  if (store === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return useStore(store);
};

export const isValidTheme = (theme: unknown): theme is Theme => {
  return themes.includes(theme as Theme);
};

export const isValidPreference = (
  preference: unknown
): preference is Preference => {
  return preferences.includes(preference as Preference);
};
