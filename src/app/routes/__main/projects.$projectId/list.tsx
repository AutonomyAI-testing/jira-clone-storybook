import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Project, ProjectId } from "@domain/project";
import { isValidSort, DEFAULT_SORT } from "@domain/filter";
import { getProject } from "@infrastructure/db/project";
import { Error500 } from "@app/components/error-500";
import { ListView } from "@app/ui/main/project/list";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { project } = data as LoaderData;
  const title = "Jira clone - List";
  const description =
    "Manage your project in list view. View all issues in a flat, scrollable list with drag-and-drop reordering.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${project.id}/list`;

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG",
  };

  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

type LoaderData = {
  project: Project;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const sortByParam = url.searchParams.get("sortBy") as string;
  const sortBy = isValidSort(sortByParam) ? sortByParam : DEFAULT_SORT;
  const projectId = params.projectId as ProjectId;

  invariant(params.projectId, `params.projectId is required`);

  const project: Project | null = await getProject(projectId, {
    sortIssuesBy: sortBy,
  });

  if (!project) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json<LoaderData>({ project });
};

export default function ListRoute(): JSX.Element {
  const { project } = useLoaderData<LoaderData>();
  return <ListView project={project} />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Error500
      message="The list page failed. Navigate to the board page"
      href="../board"
    />
  );
}
