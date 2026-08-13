import type { V2_MetaFunction } from "@remix-run/node";
import { HeyFeiView } from "@app/ui/hey-fei";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Hey Fei" }];
};

export default function HeyFeiRoute() {
  return <HeyFeiView />;
}
