import type { ActionFunction, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Category, categoryTypes, categoryTypeDict } from "@domain/category";
import { teamSizes } from "@domain/project";
import { getRandomPastelColor, userRoles } from "@domain/user";
import { createProject } from "@infrastructure/db/project";
import { createUser, isEmailTaken } from "@infrastructure/db/user";
import { getUserSession } from "@app/session-storage";
import {
  initialRegisterValues,
  RegisterErrors,
  RegisterView,
  RegisterValues,
  validateRegisterForm,
} from "@app/ui/register";
import { formatTags, formatProperties } from "@utils/meta";
import { hashPassword } from "@utils/password.server";
import { getRandomProjectImage } from "@utils/random-project-image";

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Create account";
  const description =
    "Create your account and your first workspace in four steps.";
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

export type ActionData = {
  errors?: RegisterErrors;
  projectId?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action");

  if (_action !== "register") {
    throw new Error(`Invalid action: '${_action}'. Values must be 'register'`);
  }

  const values: RegisterValues = {
    ...initialRegisterValues,
    email: readField(formData, "email").toLowerCase(),
    password: readField(formData, "password"),
    confirmPassword: readField(formData, "confirmPassword"),
    firstName: readField(formData, "firstName"),
    lastName: readField(formData, "lastName"),
    role: readField(formData, "role"),
    company: readField(formData, "company"),
    workspace: readField(formData, "workspace"),
    teamSize: readField(formData, "teamSize"),
    terms: formData.get("terms") === "accepted",
  };

  const errors = validateRegisterForm(values);

  // The choices are checked against the domain lists, not just for presence, so
  // a hand-made post cannot store a role or a team size the app never offers.
  if (!errors.role && !userRoles.some((role) => role === values.role)) {
    errors.role = "Select a role";
  }

  if (!errors.teamSize && !teamSizes.some((size) => size === values.teamSize)) {
    errors.teamSize = "Pick a team size";
  }

  if (!errors.email && (await isEmailTaken(values.email))) {
    errors.email = "That email is already registered";
  }

  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 });
  }

  const userId = await createUser({
    name: `${values.firstName} ${values.lastName}`.replace(/\s+/g, " ").trim(),
    email: values.email,
    passwordHash: hashPassword(values.password),
    role: values.role,
    company: values.company || undefined,
    color: getRandomPastelColor(),
  });

  const categories: Omit<Category, "id">[] = categoryTypes.map(
    (type, index) => ({
      type,
      name: categoryTypeDict[type],
      order: index,
      issues: [],
    })
  );

  const projectId = await createProject({
    name: values.workspace,
    description: "",
    teamSize: values.teamSize,
    userIds: [userId],
    image: getRandomProjectImage(),
    categories,
  });

  const userSession = await getUserSession(request);
  userSession.setUser(userId);

  return json<ActionData>(
    { projectId },
    { headers: { "Set-Cookie": await userSession.commit() } }
  );
};

const readField = (formData: FormData, field: string): string => {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
};

export default function RegisterRoute() {
  return <RegisterView />;
}
