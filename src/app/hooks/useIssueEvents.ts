import { useEffect, useState } from "react";
import { EVENTS } from "@app/events";

const ISSUE_EVENTS = [EVENTS.ISSUE_CREATED, EVENTS.ISSUE_CHANGED, EVENTS.ISSUE_DELETED];

/**
 * Subscribe to every issue event of a project over a single event source.
 *
 * Returns how many events have arrived, so the caller can revalidate in an
 * effect. One connection carries all three events on purpose: a browser allows
 * only a handful of connections per host, and the board is meant to be kept
 * open in more than one tab at a time.
 */
export const useIssueEvents = (url: string): number => {
  const [eventsReceived, setEventsReceived] = useState<number>(0);

  useEffect(() => {
    const eventSource = new EventSource(url);
    const onIssueEvent = () => setEventsReceived((count) => count + 1);

    ISSUE_EVENTS.forEach((event) => eventSource.addEventListener(event, onIssueEvent));

    return () => {
      ISSUE_EVENTS.forEach((event) => eventSource.removeEventListener(event, onIssueEvent));
      eventSource.close();
    };
  }, [url]);

  return eventsReceived;
};
