import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { userMock1 } from "@domain/user";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { UserContextProvider } from "@app/store/user.store";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";
import { Header } from "./header";
import { Sidebar } from "./project/sidebar/sidebar";

// The confetti CSS rule is `.party body { background-image: ... }` — the real app
// applies `.party` to <html> or <body>, making body a descendant. In Storybook the
// iframe body is the root, so we add/remove the `party` class on document.body
// directly to activate the same CSS rule.
const CONFETTI_BG =
  "radial-gradient(circle, rgba(168, 85, 247, 0.55) 2.5px, transparent 2.5px) 0 0 / 80px 80px, " +
  "radial-gradient(circle, rgba(236, 72, 153, 0.55) 2px, transparent 2px) 40px 40px / 120px 120px, " +
  "radial-gradient(circle, rgba(251, 191, 36, 0.6) 2px, transparent 2px) 20px 60px / 100px 100px, " +
  "radial-gradient(circle, rgba(74, 222, 128, 0.5) 2.5px, transparent 2.5px) 60px 20px / 110px 110px";

const usePartyBodyClass = () => {
  useEffect(() => {
    document.documentElement.classList.add("party");
    // Override Storybook's .sb-show-main {background:!important} shorthand
    // which would otherwise reset background-image to none.
    // We set the full background shorthand with !important on body directly.
    const prev = document.body.getAttribute("style") || "";
    document.body.style.cssText =
      prev +
      "; background: " +
      CONFETTI_BG +
      " !important; background-color: #fdf4ff !important;";
    return () => {
      document.documentElement.classList.remove("party");
      document.body.setAttribute("style", prev);
    };
  }, []);
};

const PartyLayout = () => {
  usePartyBodyClass();
  return (
    <div className="party" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <UserContextProvider user={userMock1}>
        <ThemeProvider specifiedTheme={Theme.PARTY} specifiedPreference={Preference.SELECTED}>
          <>
          <Header />
          <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            <Sidebar
              projectName={projectMock1.name}
              projectDescription={projectMock1.description || "Project description"}
              projectImage={projectMock1.image}
            />
            <main
              style={{
                flex: 1,
                padding: "2rem",
                backgroundColor: "transparent",
                color: "var(--color-font)",
              }}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
                🎉 Party Theme Preview
              </h2>
              <p style={{ color: "var(--color-font-subtle)", marginBottom: "0.5rem" }}>
                The party theme brings festive lavender/fuchsia vibes to the Jira Clone UI.
              </p>
              <p style={{ color: "var(--color-font-subtlest)", fontSize: "0.875rem" }}>
                Background: #fdf4ff • Brand: #7c3aed • Font: #3b0764
              </p>
            </main>
          </div>
          </>
        </ThemeProvider>
      </UserContextProvider>
    </div>
  );
};

const withRemixStubParty = (children: JSX.Element) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: children,
      action: async () => ({ status: 200 }),
    },
  ]);
  return <RemixStub />;
};

const meta: Meta = {
  title: "Pages/Main/PartyTheme",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const CombinedLayout: Story = {
  render: () => withRemixStubParty(<PartyLayout />),
};
