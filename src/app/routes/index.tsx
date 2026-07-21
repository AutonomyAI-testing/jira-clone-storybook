import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUserSession } from "@app/session-storage";
import { WelcomeView } from "@app/ui/welcome";
import { Error404 } from "@app/components/error-404";

export const meta: V2_MetaFunction = () => {
  const title = "Jira Clone — Project Management Magic";
  const description =
    "A full-featured Jira-inspired project management tool built with Remix, React, TypeScript, and Tailwind CSS.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = "https://jira-clone.fly.dev";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

type LoaderData = {
  isLoggedIn: boolean;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();
  return json<LoaderData>({ isLoggedIn: Boolean(userId) });
};

export default function IndexRoute() {
  const { isLoggedIn } = useLoaderData<LoaderData>();
  return <WelcomeView isLoggedIn={isLoggedIn} />;
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
