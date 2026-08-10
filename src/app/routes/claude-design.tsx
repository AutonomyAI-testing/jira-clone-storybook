import type { V2_MetaFunction } from "@remix-run/node";
import { ClaudeDesignView } from "@app/ui/claude-design";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Claude Design · AutonomyAI On-Call Agent" },
    {
      name: "description",
      content: "Claude Design — AutonomyAI On-Call Agent sign-in page.",
    },
  ];
};

export default function ClaudeDesignRoute() {
  return <ClaudeDesignView />;
}
