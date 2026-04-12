import * as Accordion from "@app/components/accordion";

export const FaqView = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <header className="mb-12">
        <h1 className="font-primary-black text-5xl text-font">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-font-subtle">
          Find answers to common questions about using the Jira clone project
          management application.
        </p>
      </header>

      <div className="space-y-2">
        <Accordion.Root type="single" collapsible>
          {/* Projects Section */}
          <Accordion.Item value="projects-1">
            <Accordion.Header>
              <Accordion.Trigger>
                How do I create a new project?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                To create a new project, navigate to the Projects page and click
                the &quot;Create Project&quot; button. You can then enter a project name,
                description, and assign team members to the project.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="projects-2">
            <Accordion.Header>
              <Accordion.Trigger>
                Can I manage project members?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Yes, project members can be added or removed from the project
                settings. Each member can have different roles and permissions
                within the project.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="projects-3">
            <Accordion.Header>
              <Accordion.Trigger>
                How do I archive a project?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                You can archive a project from the project settings. Archived
                projects are hidden from the main view but can be accessed from
                the archives section if needed.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          {/* Board Section */}
          <Accordion.Item value="board-1">
            <Accordion.Header>
              <Accordion.Trigger>
                What is a board?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                A board is a visual representation of your project&apos;s workflow.
                It displays issues organized into categories (columns) that
                represent different stages of work, such as To Do, &quot;In Progress&quot;,
                and Done.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="board-2">
            <Accordion.Header>
              <Accordion.Trigger>
                How do I create categories on a board?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Categories are created in the board settings. You can add new
                categories, rename existing ones, or delete them. Each category
                represents a workflow stage.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="board-3">
            <Accordion.Header>
              <Accordion.Trigger>
                Can I drag and drop issues between categories?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Yes! You can drag and drop issues between categories to move them
                through your workflow. This instantly updates the issue status
                and is reflected across the application.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          {/* Issues Section */}
          <Accordion.Item value="issues-1">
            <Accordion.Header>
              <Accordion.Trigger>
                How do I create an issue?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                You can create an issue by clicking the &quot;Create Issue&quot; button on
                your board. Enter a title, description, and assign it to a team
                member. You can also set the priority and add it to a category.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="issues-2">
            <Accordion.Header>
              <Accordion.Trigger>
                What are issue priorities?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Issues can be assigned different priority levels: Lowest, Low,
                Medium, High, and Highest. Priority helps teams focus on the
                most important work first.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="issues-3">
            <Accordion.Header>
              <Accordion.Trigger>
                Can I assign multiple people to an issue?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Issues have a primary assignee. You can also add multiple team
                members as reporters or participants in comments to keep
                everyone informed about progress.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          {/* Comments & Collaboration */}
          <Accordion.Item value="collab-1">
            <Accordion.Header>
              <Accordion.Trigger>
                How do I add comments to issues?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Open an issue and scroll to the comments section. Type your
                comment and click send. All team members can see and respond to
                comments on shared issues.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="collab-2">
            <Accordion.Header>
              <Accordion.Trigger>
                Can I edit or delete comments?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Yes, you can edit or delete your own comments. Click the menu
                icon next to your comment to see available options. Other team
                members cannot edit or delete your comments.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          {/* Workflow & Status */}
          <Accordion.Item value="workflow-1">
            <Accordion.Header>
              <Accordion.Trigger>
                What is an issue status?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                An issue status represents where the issue is in your workflow.
                The status is determined by which category the issue is in on the
                board (To Do, In Progress, Done, etc.).
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="workflow-2">
            <Accordion.Header>
              <Accordion.Trigger>
                How do I change an issue&apos;s status?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                You can change an issue&apos;s status by dragging and dropping it to a
                different category on the board, or by using the status selector
                in the issue details panel.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          {/* General */}
          <Accordion.Item value="general-1">
            <Accordion.Header>
              <Accordion.Trigger>
                Is there a way to filter or search issues?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Yes, you can filter issues by various criteria such as assignee,
                priority, status, and more. Use the filter panel to narrow down
                the issues displayed on your board.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="general-2">
            <Accordion.Header>
              <Accordion.Trigger>
                How do I switch between projects?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Use the project selector in the sidebar to switch between
                projects. You can only access projects you are a member of.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="general-3">
            <Accordion.Header>
              <Accordion.Trigger>
                Can I customize the theme?
                <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Accordion.ContentInner>
                Yes, you can change the application theme to light, dark, or a
                special theme. Click on your avatar and select theme preferences.
              </Accordion.ContentInner>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};
