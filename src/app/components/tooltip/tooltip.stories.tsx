import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef } from "react";
import { Tooltip } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip title="Tooltip message">
      <div className="rounded bg-background-neutral p-1 text-font">
        Hover over me!
      </div>
    </Tooltip>
  ),
};

/**
 * Displays the tooltip in a visible state by simulating a mouseenter event on mount.
 * Used to showcase the component when it's actively displaying a tooltip.
 */
const TooltipWithVisibleState = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The Tooltip component wraps children with event handlers on a div.
    // We find that wrapper and dispatch a mouseenter event to make the tooltip visible.
    const wrapper = wrapperRef.current?.querySelector("[onmouseenter]") ??
      wrapperRef.current?.firstElementChild;
    if (wrapper instanceof HTMLElement) {
      wrapper.dispatchEvent(new MouseEvent("mouseenter", { bubbles: false }));
    }
  }, []);

  return (
    <div ref={wrapperRef} style={{ paddingBottom: "60px", display: "inline-block" }}>
      <Tooltip title="Tooltip message">
        <div className="rounded bg-background-neutral p-2 text-font text-sm">
          Hover over me (tooltip shown)
        </div>
      </Tooltip>
    </div>
  );
};

export const VisibleWithRedOutline: Story = {
  render: () => <TooltipWithVisibleState />,
};

export const WithLongText: Story = {
  render: () => (
    <Tooltip title="This is a longer tooltip message with more content">
      <div className="rounded bg-background-neutral p-1 text-font">
        Hover to see long tooltip
      </div>
    </Tooltip>
  ),
};

export const Hidden: Story = {
  render: () => (
    <Tooltip title="This tooltip is hidden" show={false}>
      <div className="rounded bg-background-neutral p-1 text-font">
        No tooltip here (show=false)
      </div>
    </Tooltip>
  ),
};
