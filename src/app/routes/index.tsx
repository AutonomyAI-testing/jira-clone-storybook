import { Error404 } from "@app/components/error-404";
import { SuddenlySpacesView } from "@app/ui/suddenly-spaces";

// SuddenlySpaces landing page
export default function IndexRoute() {
  return <SuddenlySpacesView />;
}

export function CatchBoundary() {
  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}
