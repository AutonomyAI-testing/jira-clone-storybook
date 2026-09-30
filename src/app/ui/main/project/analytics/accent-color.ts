import { AccentColorToken } from "@domain/analytics";

/**
 * Resolves a semantic accent token to the repo's existing CSS variables.
 * SVG `fill`/`stroke` attributes can't consume Tailwind classes, so charts
 * read the same variables Tailwind's `icon`/`background` accent utilities
 * point to — never a raw hex value — to stay correct across every theme.
 */
export const accentColorVar = (token: AccentColorToken): string => {
  switch (token) {
    case "blue":
      return "var(--color-icon-brand)";
    case "green":
      return "var(--color-icon-accent-green)";
    case "yellow":
      return "var(--color-icon-accent-yellow)";
    case "red":
      return "var(--color-icon-accent-red)";
    case "grey":
      return "var(--color-border-bold)";
  }
};
