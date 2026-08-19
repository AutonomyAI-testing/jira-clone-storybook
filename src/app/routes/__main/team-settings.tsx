import type { V2_MetaFunction } from "@remix-run/node";
import { TeamSettingsView } from "@app/ui/main/team-settings";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Jira Clone - Team Settings" }];
};

export default function TeamSettingsRoute() {
  return <TeamSettingsView />;
}
