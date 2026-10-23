import type {
  LoaderFunction,
  ActionFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { User, getRandomPastelColor, isValidEmail } from "@domain/user";
import { categoryTypeDict, categoryTypes } from "@domain/category";
import { createUser, getUserByEmail, getUsers } from "@infrastructure/db/user";
import { createProject } from "@infrastructure/db/project";
import { getUserSession } from "@app/session-storage";
import { RegisterView } from "@app/ui/register";
import { getRandomProjectImage } from "@utils/random-project-image";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Create your account";
  const description =
    "Create your profile and your first workspace in four short steps. No password needed, this demo has no authentication.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/register";

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
    "twitter:image:width": "1297",
    "twitter:image:height": "635",
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
  users: User[];
};

export const loader: LoaderFunction = async () => {
  const users = await getUsers();

  return json<LoaderData>({ users });
};

export type RegisterErrors = {
  name?: string;
  email?: string;
  projectName?: string;
};

export type ActionData = {
  errors: RegisterErrors;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action !== "register") {
    console.error("Unknown action", _action);
    return json<ActionData>({ errors: {} }, { status: 400 });
  }

  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const color = readField(formData, "color");
  const projectName = readField(formData, "projectName");
  const projectDescription = readField(formData, "projectDescription");
  const projectImage = readField(formData, "projectImage");
  const teamIds = formData.getAll("userIds").map(String);

  const errors: RegisterErrors = {};

  if (!name) {
    errors.name = "Write your name";
  }

  if (!email) {
    errors.email = "Write your email";
  } else if (!isValidEmail(email)) {
    errors.email = "Write a valid email address";
  } else if (await getUserByEmail(email)) {
    errors.email = "That email already has a profile";
  }

  if (!projectName) {
    errors.projectName = "Write a workspace name";
  }

  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 });
  }

  const user = await createUser({
    name,
    email,
    color: color || getRandomPastelColor(),
  });

  await createProject({
    name: projectName,
    description: projectDescription,
    image: projectImage || getRandomProjectImage(),
    userIds: [user.id, ...teamIds],
    categories: categoryTypes.map((type, order) => ({
      type,
      name: categoryTypeDict[type],
      order,
      issues: [],
    })),
  });

  const userSession = await getUserSession(request);
  userSession.setUser(user.id);

  return redirect("/projects", {
    headers: { "Set-Cookie": await userSession.commit() },
  });
};

const readField = (formData: FormData, field: string): string => {
  return ((formData.get(field) as string) || "").trim();
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="h-full w-full text-center">
      <h1 className="mb-6 mt-[200px] text-lg">/register ERROR</h1>
      <a href="/" className="text-link hover:underline">
        Navigate to home
      </a>
    </div>
  );
}

export default function RegisterRoute() {
  const { users } = useLoaderData() as LoaderData;
  return <RegisterView users={users} />;
}
