import type { V2_MetaFunction } from "@remix-run/node";
import { WorkspaceSettingsView } from "@app/ui/main/workspace-settings";

export const meta: V2_MetaFunction = () => [
  { title: "Jira clone - Workspace Settings" },
];

export default function WorkspaceSettingsRoute() {
  return <WorkspaceSettingsView />;
}
