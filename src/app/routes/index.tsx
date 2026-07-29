import { LoaderFunction, redirect } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { WelcomeView } from "@app/ui/welcome";
import { getUserSession } from "@app/session-storage";

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  // If a session already exists, skip the welcome screen and go straight to projects
  if (userId) {
    return redirect("/projects");
  }

  return null;
};

export default function IndexRoute() {
  return <WelcomeView />;
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
