import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectSummary } from "@domain/project";
import { User } from "@domain/user";
import { getProjectsSummary } from "@infrastructure/db/project";
import { getUsers } from "@infrastructure/db/user";
import { getUserSession } from "@app/session-storage";
import { WelcomeView } from "@app/ui/main/welcome";

export const meta: V2_MetaFunction = () => {
  const title = "Jira Clone - Welcome";
  return [{ title }];
};

type LoaderData = {
  projectCount: number;
  inProgressCount: number;
  doneCount: number;
  recentProjects: Pick<ProjectSummary, "id" | "name" | "description" | "image">[];
  teamMembers: Pick<User, "id" | "name" | "image" | "color">[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (!userId) {
    return redirect("/login");
  }

  const [projectsSummary, users] = await Promise.all([
    getProjectsSummary(userId),
    getUsers(),
  ]);

  // Hard-coded for demo — full per-project issue loading happens on the board page
  const inProgressCount = 2;
  const doneCount = 3;

  return json<LoaderData>({
    projectCount: projectsSummary.length,
    inProgressCount,
    doneCount,
    recentProjects: projectsSummary.slice(0, 3),
    teamMembers: users,
  });
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="h-full w-full text-center">
      <h1 className="mb-6 mt-[200px] text-lg">/welcome ERROR</h1>
      <a href="/" className="text-primary-main hover:underline">
        Navigate to home
      </a>
    </div>
  );
}

export default function WelcomeRoute() {
  const data = useLoaderData<LoaderData>();
  return <WelcomeView {...data} />;
}
