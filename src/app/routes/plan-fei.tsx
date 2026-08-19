import type { V2_MetaFunction } from "@remix-run/node";
import { PlanFeiView } from "@app/ui/plan-fei";

export const meta: V2_MetaFunction = () => {
  return [{ title: "plan fei" }];
};

export default function PlanFeiRoute() {
  return <PlanFeiView />;
}
