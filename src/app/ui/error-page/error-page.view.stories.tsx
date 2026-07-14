import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPageView } from "./error-page.view";

const meta: Meta<typeof ErrorPageView> = {
  title: "Pages/ErrorPage",
  component: ErrorPageView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    errorCode: {
      control: { type: "select" },
      options: [400, 401, 403, 404, 500, 502, 503],
    },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorPageView>;

export const NotFound404: Story = {
  name: "404 — Not Found",
  args: {
    errorCode: 404,
  },
};

export const ServerError500: Story = {
  name: "500 — Internal Server Error",
  args: {
    errorCode: 500,
  },
};

export const Unauthorized401: Story = {
  name: "401 — Unauthorized",
  args: {
    errorCode: 401,
  },
};

export const Forbidden403: Story = {
  name: "403 — Forbidden",
  args: {
    errorCode: 403,
  },
};

export const ServiceUnavailable503: Story = {
  name: "503 — Service Unavailable",
  args: {
    errorCode: 503,
  },
};

export const BadGateway502: Story = {
  name: "502 — Bad Gateway",
  args: {
    errorCode: 502,
  },
};

export const BadRequest400: Story = {
  name: "400 — Bad Request",
  args: {
    errorCode: 400,
  },
};

export const CustomError: Story = {
  name: "Custom Error Message",
  args: {
    errorCode: 404,
    title: "This project no longer exists",
    description:
      "The project you're looking for may have been archived or removed by an admin. Check your other projects or create a new one.",
    actions: [
      {
        label: "View all projects",
        href: "/projects",
        color: "primary" as const,
        variant: "contained" as const,
      },
    ],
  },
};
