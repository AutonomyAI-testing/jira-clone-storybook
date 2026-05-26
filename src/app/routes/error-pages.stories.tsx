import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { CatchBoundary as IndexCatchBoundary } from "./index";
import NotFound404Route from "./404";
import { CatchBoundary as ProjectCatchBoundary } from "./__main/projects.$projectId/$";

const meta: Meta = {
  title: "Routes/ErrorPages",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

/**
 * CatchBoundary from src/app/routes/index.tsx
 * Shown when the user navigates to an unknown route at the root level.
 */
export const IndexRouteCatchBoundary: Story = {
  render: () => (
    <div className="flex min-h-screen items-center justify-center bg-elevation-surface p-8">
      <IndexCatchBoundary />
    </div>
  ),
};

/**
 * CatchBoundary from src/app/routes/__main/projects.$projectId/$.tsx
 * Shown when the user navigates to an unknown section within a project.
 * Note: useParams returns empty values outside a real router, so the message
 * uses undefined-resolved strings — the Error404 layout still renders correctly.
 */
export const ProjectRouteCatchBoundary: Story = {
  render: () => (
    <div className="flex min-h-screen bg-elevation-surface p-8" style={{ height: "100vh" }}>
      <ProjectCatchBoundary />
    </div>
  ),
};

/**
 * NotFound404Route from src/app/routes/404.tsx
 */
export const NotFound404RoutePlaceholder: Story = {
  render: () => (
    <div className="flex min-h-screen items-center justify-center bg-elevation-surface p-8">
      <NotFound404Route />
    </div>
  ),
};
