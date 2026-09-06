import { useEffect, useRef, useCallback } from "react";
import { create } from "zustand";
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

type ThemeStore = {
  theme: Theme | null;
  preference: Preference | null;
  setTheme: (theme: Theme, preference?: Preference) => void;
};

// Inspired from Kent C. Dodds repo https://github.com/kentcdodds/kentcdodds.com/blob/main/app/utils/theme-provider.tsx
const prefersLightMQ = "(prefers-color-scheme: light)";
export const getSystemTheme = (): Theme =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;

const resolveInitialTheme = (
  specifiedTheme: Theme | undefined
): Theme | null => {
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

const resolveInitialPreference = (
  specifiedPreference: Preference | undefined
): Preference | null => {
  if (isValidPreference(specifiedPreference)) return specifiedPreference;

  return DEFAULT_PREFERENCE;
};

const useThemeZustandStore = create<ThemeStore>()((set) => ({
  theme: null,
  preference: null,
  setTheme: (newTheme: Theme, newPreference: Preference = Preference.SYSTEM) =>
    set({ theme: newTheme, preference: newPreference }),
}));

/**
 * Hydrates the theme store from loader data and installs the client-only
 * side effects (system-preference media listener). Call once, during render,
 * from the root component — safe with Remix's synchronous SSR render.
 */
export const useThemeStoreInit = (
  specifiedTheme: Theme | undefined,
  specifiedPreference: Preference | undefined
): void => {
  useThemeZustandStore.setState({
    theme: resolveInitialTheme(specifiedTheme),
    preference: resolveInitialPreference(specifiedPreference),
  });

  const preference = useThemeZustandStore((s) => s.preference);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);

    const handleChange = () => {
      if (preference !== Preference.SYSTEM) return;

      const newTheme = mediaQuery.matches ? Theme.LIGHT : Theme.DARK;
      useThemeZustandStore.setState({ theme: newTheme });
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [preference]);
};

/**
 * Wraps the store's setTheme with session persistence via the set-theme
 * action route. Must be called inside a Remix data-router context.
 */
export const usePersistingSetTheme = (): ThemeStore["setTheme"] => {
  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const setTheme = useThemeZustandStore((s) => s.setTheme);

  return useCallback(
    (newTheme: Theme, newPreference: Preference = Preference.SYSTEM) => {
      persistThemeRef.current.submit(
        { theme: newTheme, preference: newPreference },
        { action: "action/set-theme", method: "post" }
      );
      setTheme(newTheme, newPreference);
    },
    [setTheme]
  );
};

export const useTheme = (): ThemeStore => {
  const theme = useThemeZustandStore((s) => s.theme);
  const preference = useThemeZustandStore((s) => s.preference);
  const setTheme = usePersistingSetTheme();
  return { theme, preference, setTheme };
};

export const isValidTheme = (theme: unknown): theme is Theme => {
  return themes.includes(theme as Theme);
};

export const isValidPreference = (
  preference: unknown
): preference is Preference => {
  return preferences.includes(preference as Preference);
};
