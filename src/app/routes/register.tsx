import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Topic, TopicId } from "@domain/topic";
import {
  MIN_INTERESTS,
  RegisterErrors,
  getPasswordIssues,
  getRandomPastelColor,
  isValidEmail,
} from "@domain/user";
import { getTopics } from "@infrastructure/db/topic";
import { createUser, getUserByEmail } from "@infrastructure/db/user";
import { getUserSession } from "@app/session-storage";
import { RegisterView } from "@app/ui/register";
import { hashPassword } from "@utils/password.server";

export const meta: V2_MetaFunction = () => [
  { title: "Jira clone - Create your account" },
];

type LoaderData = {
  topics: Topic[];
};

// No "already signed in" guard here on purpose: the action below returns its
// result instead of redirecting, so Remix re-runs this loader straight after a
// successful sign up, and a redirect would cut off the welcome screen.
export const loader: LoaderFunction = async () => {
  const topics = await getTopics();
  return json<LoaderData>({ topics });
};

export type ActionData =
  | { status: "created"; user: { name: string; email: string } }
  | { status: "error"; errors: RegisterErrors };

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;

  if (_action !== "createAccount") {
    console.error("Unknown action", _action);
    return json<ActionData>(
      {
        status: "error",
        errors: { name: "Something went wrong. Please try again." },
      },
      { status: 400 }
    );
  }

  const name = readText(formData, "name");
  const email = readText(formData, "email").toLowerCase();
  const password = readText(formData, "password");
  const jobTitle = readText(formData, "jobTitle");
  const color = readText(formData, "color");
  const interests = formData.getAll("interests") as TopicId[];
  const acceptedTerms = formData.get("terms") === "on";

  const errors: RegisterErrors = {};

  if (!name) errors.name = "Enter your full name";

  if (!email) errors.email = "Enter your email address";
  else if (!isValidEmail(email))
    errors.email = "That doesn't look like an email address";
  else if (await getUserByEmail(email))
    errors.email = "That email is already registered";

  if (!password) errors.password = "Choose a password";
  else {
    const issues = getPasswordIssues(password);
    if (issues.length > 0)
      errors.password = `Your password still needs ${issues.join(", ")}`;
  }

  if (interests.length < MIN_INTERESTS)
    errors.interests = `Pick at least ${MIN_INTERESTS} focus areas`;

  if (!acceptedTerms)
    errors.terms = "Please accept the terms to create your account";

  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ status: "error", errors }, { status: 400 });
  }

  const user = await createUser({
    name,
    email,
    passwordHash: hashPassword(password),
    color: color || getRandomPastelColor(),
    jobTitle: jobTitle || undefined,
    interests,
    notifyIssueActivity: formData.get("notifyIssueActivity") === "on",
    notifyMentions: formData.get("notifyMentions") === "on",
    notifyWeeklyDigest: formData.get("notifyWeeklyDigest") === "on",
  });

  const userSession = await getUserSession(request);
  userSession.setUser(user.id);

  return json<ActionData>(
    { status: "created", user: { name: user.name, email } },
    { headers: { "Set-Cookie": await userSession.commit() } }
  );
};

const readText = (formData: FormData, field: string): string =>
  ((formData.get(field) as string) || "").trim();

export default function RegisterRoute() {
  const { topics } = useLoaderData<LoaderData>();
  return <RegisterView topics={topics} />;
}
