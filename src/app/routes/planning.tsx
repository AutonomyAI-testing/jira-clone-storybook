import type { V2_MetaFunction } from "@remix-run/node";
import { PlanningView } from "@app/ui/planning";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Planning Fei" }];
};

export default function PlanningRoute() {
  return <PlanningView />;
}
