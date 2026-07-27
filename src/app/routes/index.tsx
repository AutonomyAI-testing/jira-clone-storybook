import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUserSession } from "@app/session-storage/user-storage.server";
import { WelcomeView } from "@app/ui/welcome";
import { Error404 } from "@app/components/error-404";

export const meta: V2_MetaFunction = () => {
  const title = "Jira Clone — Manage your projects";
  const description =
    "A Jira-inspired project management tool with kanban boards, issue tracking, real-time updates, and multiple themes.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev";

  return [
    { title },
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: image },
    { name: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
};

type LoaderData = {
  isLoggedIn: boolean;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (userId) {
    return redirect("/projects");
  }

  return json<LoaderData>({ isLoggedIn: false });
};

export default function IndexRoute() {
  const { isLoggedIn } = useLoaderData<LoaderData>();
  const ctaHref = isLoggedIn ? "/projects" : "/login";

  return <WelcomeView ctaHref={ctaHref} />;
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
