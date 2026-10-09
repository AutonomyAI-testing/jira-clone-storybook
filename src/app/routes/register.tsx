import type { ActionFunction, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createUser, getUserByEmail } from "@infrastructure/db/user";
import { getUserSession } from "@app/session-storage";
import { getRegistrationSession } from "@app/session-storage/registration-storage.server";
import { RegisterView } from "@app/ui/register";
import {
  CODE_LENGTH,
  TERMS_VALUE,
  isValidEmail,
  validateRegistration,
} from "@app/ui/register/register.validation";
import type {
  RegisterErrors,
  RegisterFields,
} from "@app/ui/register/register.validation";
import { formatTags, formatProperties } from "@utils/meta";

export type CreatedUser = {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
};

export type ActionData = {
  errors?: RegisterErrors;
  created?: CreatedUser;
};

export const meta: V2_MetaFunction = () => {
  const title = "Jira clone - Create your account";
  const description =
    "Create a user profile so you can report and comment on issues.";
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

const generateVerificationCode = (): string =>
  Array.from({ length: CODE_LENGTH }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

const getFormValue = (formData: FormData, key: string): string => {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
};

const readFields = (formData: FormData): RegisterFields => ({
  email: getFormValue(formData, "email"),
  password: getFormValue(formData, "password"),
  terms: formData.get("terms") === TERMS_VALUE,
  firstName: getFormValue(formData, "firstName"),
  lastName: getFormValue(formData, "lastName"),
  company: getFormValue(formData, "company"),
  role: getFormValue(formData, "role"),
  teamSize: getFormValue(formData, "teamSize"),
  code: getFormValue(formData, "code"),
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const _action = formData.get("_action") as string;
  const registrationSession = await getRegistrationSession(request);

  if (_action === "sendVerificationCode") {
    const email = getFormValue(formData, "email");

    if (!isValidEmail(email)) {
      return json<ActionData>(
        {
          errors: {
            email: "That doesn't look like an email — try name@company.com",
          },
        },
        { status: 400 }
      );
    }

    // This app has no email service, so the code is handed back to the page
    // to be shown. It is still generated and checked on the server.
    const verificationCode = generateVerificationCode();
    registrationSession.setVerificationCode(verificationCode);

    return json(
      { verificationCode },
      { headers: { "Set-Cookie": await registrationSession.commit() } }
    );
  }

  if (_action === "createUser") {
    const fields = readFields(formData);
    const errors = validateRegistration(fields);

    if (
      !errors.code &&
      fields.code !== registrationSession.getVerificationCode()
    ) {
      errors.code = "That code doesn't match the one we sent you";
    }

    if (!errors.email && (await getUserByEmail(fields.email))) {
      errors.email = "That email is already registered — try logging in";
    }

    if (Object.keys(errors).length > 0) {
      return json<ActionData>({ errors }, { status: 400 });
    }

    const user = await createUser({
      name: `${fields.firstName} ${fields.lastName}`,
      email: fields.email,
      company: fields.company,
      role: fields.role,
      teamSize: fields.teamSize,
    });

    const userSession = await getUserSession(request);
    userSession.setUser(user.id);
    registrationSession.clearVerificationCode();

    const headers = new Headers();
    headers.append("Set-Cookie", await userSession.commit());
    headers.append("Set-Cookie", await registrationSession.commit());

    return json<ActionData>(
      {
        created: {
          name: user.name,
          email: fields.email,
          company: fields.company,
          role: fields.role,
          teamSize: fields.teamSize,
        },
      },
      { headers }
    );
  }

  console.error("Unknown action", _action);

  return json<ActionData>({ errors: {} }, { status: 400 });
};

export default function RegisterRoute() {
  return <RegisterView />;
}
