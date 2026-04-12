import type { Meta, StoryObj } from "@storybook/react";
import * as Accordion from "./accordion";

const meta: Meta<typeof Accordion.Root> = {
  title: "Components/Accordion",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Accordion.Root>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>
              Is this accordion accessible?
              <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Accordion.ContentInner>
              Yes, this accordion is built with Radix UI which provides full
              keyboard navigation, screen reader support, and WAI-ARIA
              compliance.
            </Accordion.ContentInner>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger>
              Can it handle multiple items?
              <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Accordion.ContentInner>
              Yes, you can configure it to allow single or multiple items to be
              open at the same time using the &quot;type&quot; prop.
            </Accordion.ContentInner>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Header>
            <Accordion.Trigger>
              Is it fully customizable?
              <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Accordion.ContentInner>
              Absolutely! All components are exported so you can customize the
              styling, layout, and behavior to match your needs.
            </Accordion.ContentInner>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Accordion.Root type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>
              What is a Jira project?
              <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Accordion.ContentInner>
              A Jira project is a collection of issues used to organize and track
              work. You can create different types of projects for different
              teams or initiatives.
            </Accordion.ContentInner>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger>
              How do I create a board?
              <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Accordion.ContentInner>
              Boards are created automatically when you create a project. You
              can customize the board layout and workflow to match your team&apos;s
              process.
            </Accordion.ContentInner>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Header>
            <Accordion.Trigger>
              What are categories?
              <span className="ml-2 text-lg transition-transform duration-200 radix-state-open:rotate-180">
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Accordion.ContentInner>
              Categories are columns in your board that represent different
              stages of your workflow, such as To Do, In Progress, and Done.
            </Accordion.ContentInner>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  ),
};
