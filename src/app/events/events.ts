import { EventEmitter } from "events";

export const EVENTS = {
  ISSUE_CHANGED: "issue-changed",
  ISSUE_CREATED: "issue-created",
  ISSUE_DELETED: "issue-deleted",
};

declare global {
  // eslint-disable-next-line no-var
  var __emitter: EventEmitter | undefined;
}

// The server reloads this module on every rebuild in development, so a plain
// instance would be re-created underneath the subscribers: an event sent by one
// load of the module would never reach a client subscribed through another.
// Keeping it on globalThis gives every load the same emitter, like db.server.ts
// does with the prisma client.
export const emitter = globalThis.__emitter ?? new EventEmitter();
globalThis.__emitter = emitter;
