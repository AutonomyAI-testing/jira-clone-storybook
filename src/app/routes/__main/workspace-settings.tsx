import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getUserSession } from "@app/session-storage";
import { WorkspaceSettingsView } from "@app/ui/main/workspace-settings";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Jira clone - Workspace Settings" }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (!userId) {
    return redirect("/login");
  }

  return json({});
};

export default function WorkspaceSettingsRoute() {
  return <WorkspaceSettingsView />;
}
