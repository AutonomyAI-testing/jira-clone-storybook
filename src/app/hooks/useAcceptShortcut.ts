import { useCallback, useEffect } from "react";
import { isTextEntryTarget } from "@utils/is-text-entry-target";

// The text fields the Accept shortcut saves. Any other field in the panel (an
// issue's comment box) owns the letters typed into it.
const ACCEPT_SHORTCUT_FIELDS = ["title", "description"];

const isAcceptShortcutField = (target: EventTarget | null): boolean =>
  target instanceof HTMLTextAreaElement && ACCEPT_SHORTCUT_FIELDS.includes(target.name);

/**
 * Accepts the open panel when its "Press Shift + S to accept" chord is
 * pressed, everywhere except inside a text field the chord does not save.
 */
export const useAcceptShortcut = (onAccept: () => void): void => {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!e.shiftKey || e.key.toLowerCase() !== "s") return;

      if (isTextEntryTarget(e.target) && !isAcceptShortcutField(e.target)) {
        return;
      }

      e.preventDefault();
      onAccept();
    },
    [onAccept]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
};
