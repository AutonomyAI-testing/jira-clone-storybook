import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserAvatar } from "./user-avatar";

const meta: Meta<typeof UserAvatar> = {
  title: "Components/UserAvatar",
  component: UserAvatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: { type: "text" },
    },
    image: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "number" },
    },
    tooltip: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAvatar>;

// Users with no image — show initials fallback
const daniel = usersMock[0]; // Daniel Serrano — has color
const trex = usersMock[8];   // T-Rex — no color (uses random pastel)

const userWithImage = usersMock[1]; // Woody — has image

// ─── InitialsFallback ──────────────────────────────────────────────────────────
// Primary story: prominently showcases the initials (acronym) fallback
// with the text-red-500 colour and various sizes.
export const InitialsFallback: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-8">
      {/* Section header */}
      <div>
        <h2
          className="mb-1 text-lg font-semibold"
          style={{ color: "var(--font-color, #1a1a1a)" }}
        >
          Initials Fallback — text colour&nbsp;
          <code
            className="rounded px-1 py-0.5 text-sm font-mono"
            style={{ backgroundColor: "var(--Red100, #fee2e2)", color: "var(--Red600, #dc2626)" }}
          >
            text-red-500
          </code>
        </h2>
        <p className="text-sm" style={{ color: "var(--font-subtle, #6b7280)" }}>
          When no image is provided, an acronym is rendered with a pastel
          background and red initials text.
        </p>
      </div>

      {/* Sizes – with explicit colour */}
      <div>
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--font-subtle, #9ca3af)" }}
        >
          Sizes (with colour prop)
        </p>
        <div className="flex items-end gap-6">
          {[20, 28, 36, 48, 64, 96].map((sz) => (
            <div key={sz} className="flex flex-col items-center gap-2">
              <UserAvatar name={daniel.name} color={daniel.color} size={sz} />
              <span className="text-xs" style={{ color: "var(--font-subtle, #9ca3af)" }}>
                {sz}px
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes – no colour (random pastel) */}
      <div>
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--font-subtle, #9ca3af)" }}
        >
          Sizes (random pastel background)
        </p>
        <div className="flex items-end gap-6">
          {[20, 28, 36, 48, 64, 96].map((sz) => (
            <div key={sz} className="flex flex-col items-center gap-2">
              <UserAvatar name={trex.name} size={sz} />
              <span className="text-xs" style={{ color: "var(--font-subtle, #9ca3af)" }}>
                {sz}px
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Multiple users without images */}
      <div>
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--font-subtle, #9ca3af)" }}
        >
          Team — users without images
        </p>
        <div className="flex items-center gap-3">
          {[daniel, trex, ...usersMock.slice(8)].map((user) => (
            <UserAvatar
              key={user.id}
              name={user.name}
              color={user.color}
              size={40}
              tooltip
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── WithImage ─────────────────────────────────────────────────────────────────
export const WithImage: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-8">
      <div>
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--font-subtle, #9ca3af)" }}
        >
          With image — various sizes
        </p>
        <div className="flex items-end gap-6">
          {[20, 28, 36, 48, 64, 96].map((sz) => (
            <div key={sz} className="flex flex-col items-center gap-2">
              <UserAvatar name={userWithImage.name} image={userWithImage.image} size={sz} />
              <span className="text-xs" style={{ color: "var(--font-subtle, #9ca3af)" }}>
                {sz}px
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mixed team */}
      <div>
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--font-subtle, #9ca3af)" }}
        >
          Full team (image + fallback mix)
        </p>
        <div className="flex items-center gap-2">
          {usersMock.map((user) => (
            <UserAvatar
              key={user.id}
              name={user.name}
              image={user.image}
              color={user.color}
              size={36}
              tooltip
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Playground (controls) ─────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    name: daniel.name,
    color: daniel.color,
    size: 48,
    tooltip: false,
  },
};
