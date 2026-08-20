import type { V2_MetaFunction } from "@remix-run/node";
import { PlanView } from "@app/ui/plan";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Plan Fei" }];
};

export default function PlanRoute() {
  return <PlanView />;
}
