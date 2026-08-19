import type { V2_MetaFunction } from "@remix-run/node";
import { WorkspaceSettingsView } from "@app/ui/main/workspace-settings";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Workspace Settings";
  const description = "Manage your workspace profile, notifications, and settings.";

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "noindex" },
  ];
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="h-full w-full text-center">
      <h1 className="mb-6 mt-[200px] text-lg">/workspace-settings ERROR</h1>
      <a href="/" className="text-primary-main hover:underline">
        Navigate to home
      </a>
    </div>
  );
}

export default function WorkspaceSettingsRoute() {
  return <WorkspaceSettingsView />;
}
