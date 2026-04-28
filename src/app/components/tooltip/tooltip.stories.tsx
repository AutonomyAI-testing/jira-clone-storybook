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

// Shows the real Tooltip component in visible state by hovering on mount.
// Uses the real Tooltip component — the red outline on the bubble comes from
// the component's own `outline outline-2 outline-red-500` classes.
const TooltipHoveredOnMount = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The Tooltip component attaches onMouseEnter to a div wrapping children.
    // We find that wrapper div (firstElementChild of our ref) and dispatch mouseenter.
    const wrapper = wrapperRef.current?.querySelector("[onmouseenter]") ??
      wrapperRef.current?.firstElementChild;
    if (wrapper) {
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
  render: () => <TooltipHoveredOnMount />,
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
