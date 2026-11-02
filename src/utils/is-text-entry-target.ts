const TEXT_INPUT_TYPES = ["text", "search", "email", "url", "tel", "password"];

/**
 * Whether the keystroke that produced a keyboard event is typed as text into
 * the event's target.
 *
 * A keyboard shortcut must never fire on one of these: pressing a chord inside
 * a field the field owns the letter, so the shortcut either types nothing or
 * takes the person somewhere else mid-sentence.
 */
export const isTextEntryTarget = (target: EventTarget | null): boolean => {
  if (target instanceof HTMLTextAreaElement) return true;

  if (target instanceof HTMLInputElement) {
    return TEXT_INPUT_TYPES.includes(target.type);
  }

  return target instanceof HTMLElement && target.isContentEditable;
};
