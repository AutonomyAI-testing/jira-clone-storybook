import type { V2_MetaFunction } from "@remix-run/node";
import { SpaceView } from "@app/ui/space";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Space" }];
};

export default function SpaceRoute() {
  return <SpaceView />;
}
