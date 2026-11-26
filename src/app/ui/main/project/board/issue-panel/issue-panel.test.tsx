import { renderToStaticMarkup } from "react-dom/server";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { describe, expect, test, vi } from "vitest";
import type { ReactNode } from "react";
import { Issue, todoIssuesMock1 } from "@domain/issue";
import { User, userMock1, userMock2 } from "@domain/user";
import { projectMock1 } from "@domain/project";
import { formatDateTime } from "@utils/formatDateTime";
import { UserContextProvider } from "@app/store/user.store";
import { ProjectContextProvider } from "@app/ui/main/project";
import { IssuePanel } from "./issue-panel.view";
import { PanelHeaderIssue } from "./panel-header-issue";

// The panel lives inside a Radix dialog portal, and `Dialog.Portal` mounts nothing
// until it runs on the client (the panel passes it the container it measures on
// mount). Rendering the portal's children in place is what lets the panel's own
// markup be asserted here, without a DOM.
vi.mock("@radix-ui/react-dialog", async () => {
  const actual = (await vi.importActual("@radix-ui/react-dialog")) as Record<
    string,
    unknown
  >;
  return {
    ...actual,
    Portal: ({ children }: { children?: ReactNode }) => <>{children}</>,
  };
});

const renderPanel = (issue?: Issue, user: User = userMock1): string => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: (
        <ProjectContextProvider project={projectMock1}>
          <UserContextProvider user={user}>
            <IssuePanel issue={issue} />
          </UserContextProvider>
        </ProjectContextProvider>
      ),
    },
  ]);

  return renderToStaticMarkup(<RemixStub />);
};

/** The header's trash control: whether it is disabled and what it promises. */
const deleteControl = (html: string): { disabled: boolean; title: string } => {
  const trigger = html.match(
    /<button[^>]*aria-label="Open delete issue dialog"[^>]*>/
  )?.[0];

  if (!trigger) throw new Error("The panel rendered no delete control");

  return {
    disabled: trigger.includes('disabled=""'),
    title: trigger.match(/title="([^"]*)"/)?.[1] ?? "",
  };
};

/** The panel's right-hand column, the one the created/updated block sits in. */
const rightColumn = (html: string): string =>
  html.match(/<section class="col-span-2[^"]*">([\s\S]*?)<\/section>/)?.[1] ??
  "";

const textOf = (markup: string): string =>
  markup
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** An issue whose id is not one of the seeded defaults, reported by `reporter`. */
const ownIssue = (reporter: User): Issue => ({
  ...todoIssuesMock1[0],
  id: "1a1b8e5c-6c2e-4b8f-9c0d-2f4b6a8c0d1e",
  reporter,
});

describe("IssuePanel", () => {
  test("the create panel shows no created/updated block and cannot delete", () => {
    const html = renderPanel();
    const column = textOf(rightColumn(html));

    // The right-hand column ends at the Reporter row: nothing describes an issue
    // that has not been created yet, not even the "Just now" placeholder.
    expect(column).toContain(`Reporter ${userMock1.name}`);
    expect(column.endsWith(`Reporter ${userMock1.name}`)).toBe(true);
    expect(column).not.toContain("Created at");
    expect(column).not.toContain("Updated at");
    expect(html).not.toContain("Just now");

    expect(deleteControl(html)).toEqual({
      disabled: true,
      title: "Cannot delete an issue that has not been created yet",
    });
  });

  test("a real issue panel still ends with both formatted timestamps", () => {
    const issue = todoIssuesMock1[0];
    const html = renderPanel(issue);
    const column = textOf(rightColumn(html));

    expect(column).toContain(`Created at: ${formatDateTime(issue.createdAt)}`);
    expect(column).toContain(`Updated at: ${formatDateTime(issue.updatedAt)}`);
    expect(column.endsWith(formatDateTime(issue.updatedAt))).toBe(true);

    expect(deleteControl(html)).toEqual({
      disabled: true,
      title: "Cannot delete a default issue",
    });
  });

  test("an issue the reporter may delete keeps an enabled delete control", () => {
    const html = renderPanel(ownIssue(userMock1), userMock1);

    expect(deleteControl(html)).toEqual({
      disabled: false,
      title: "Delete issue",
    });
  });

  test("an issue reported by someone else cannot be deleted", () => {
    const html = renderPanel(ownIssue(userMock2), userMock1);

    expect(deleteControl(html)).toEqual({
      disabled: true,
      title: "This user cannot delete the issue",
    });
  });

  test("the delete control falls back to the shared reason when given none", () => {
    // The panel always names a reason; this pins the control's own default for a
    // caller that only disables it.
    const RemixStub = createRemixStub([
      { path: "/", element: <PanelHeaderIssue id="issue-1" deleteDisabled /> },
    ]);

    expect(deleteControl(renderToStaticMarkup(<RemixStub />))).toEqual({
      disabled: true,
      title: "This user cannot delete the issue",
    });
  });

  test("both panels keep the rest of their fields", () => {
    const markers = [
      'placeholder="Write the title"',
      'placeholder="Add a description"',
      'placeholder="Add your comment..."',
      'name="title"',
      'name="description"',
      'name="status"',
      'name="priority"',
      'name="asignee"',
      'name="reporter"',
      'aria-label="Open status select"',
      'aria-label="Open priority select"',
      'aria-label="Open asignee select"',
      'aria-label="Accept changes"',
    ];

    for (const html of [renderPanel(), renderPanel(todoIssuesMock1[0])]) {
      const text = textOf(html);

      expect(text).toContain("Comments");
      expect(text).toContain("Status");
      expect(text).toContain("Priority");
      expect(text).toContain("Asignee");
      expect(text).toContain("Reporter");
      expect(text).toContain("Press Shift + S to accept");
      expect(text).toContain("Press Esc to close");
      expect(text).toContain("Accept");

      for (const marker of markers) {
        expect(html).toContain(marker);
      }
    }
  });
});
