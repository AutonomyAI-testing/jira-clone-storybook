import type { MetaFunction } from "@remix-run/node";
import { ClaudeFeiView } from "@app/ui/claude-fei";

export const meta: MetaFunction = () => {
  return [{ title: "Claude Fei" }];
};

export default function ClaudeFeiRoute() {
  return <ClaudeFeiView />;
}
