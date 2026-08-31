import type { V2_MetaFunction } from "@remix-run/node";
import { PlanFeiView } from "@app/ui/plan-fei";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Plan Fei" }];
};

export default function PlanFeiRoute() {
  return <PlanFeiView />;
}
