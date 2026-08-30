import type { V2_MetaFunction } from "@remix-run/node";
import { ClaudeDesignView } from "@app/ui/claude-design";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Claude Design" }];
};

export default function ClaudeDesignRoute() {
  return <ClaudeDesignView />;
}
