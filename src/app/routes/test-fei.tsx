import type { V2_MetaFunction } from "@remix-run/node";
import { TestFeiView } from "@app/ui/test-fei";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Test Fei" }];
};

export default function TestFeiRoute() {
  return <TestFeiView />;
}
