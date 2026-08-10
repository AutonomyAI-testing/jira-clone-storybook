import type { V2_MetaFunction } from "@remix-run/node";
import { WelcomeView } from "@app/ui/welcome";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Welcome" }];
};

export default function WelcomeRoute() {
  return <WelcomeView />;
}
