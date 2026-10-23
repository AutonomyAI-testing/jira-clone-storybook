import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionItem } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (_) => (
    <Accordion className="max-w-[600px]">
      <AccordionItem value="sign-in" question="How do I sign in?">
        <p>
          Pick any user on the login screen. There is no password and no
          account.
        </p>
      </AccordionItem>
      <AccordionItem value="theme" question="Can I change the theme?">
        <p>Yes. The sun and moon button in the header opens the theme menu.</p>
      </AccordionItem>
      <AccordionItem
        value="shortcut"
        question="Is there a shortcut for a new issue?"
      >
        <p>Press Shift + N on a project board to open the new-issue panel.</p>
      </AccordionItem>
    </Accordion>
  ),
};
