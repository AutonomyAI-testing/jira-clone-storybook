import { HiHome, HiArrowLeft, HiRefresh, HiLockClosed, HiShieldExclamation, HiExclamationCircle, HiServer, HiBan } from "react-icons/hi";
import { Button } from "@app/components/button";

export type ErrorCode = 400 | 401 | 403 | 404 | 500 | 502 | 503;

export interface ErrorAction {
  label: string;
  href: string;
  color?: "primary" | "neutral" | "danger" | "warning" | "info" | "success";
  variant?: "contained" | "subtlest" | "text";
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface ErrorPageViewProps {
  errorCode?: ErrorCode | number;
  title?: string;
  description?: string;
  actions?: ErrorAction[];
}

const ERROR_CONFIG: Record<
  number,
  { title: string; description: string; icon: React.ReactNode; actions: ErrorAction[] }
> = {
  400: {
    title: "Bad request",
    description:
      "The request couldn't be understood. Check the URL or go back and try again.",
    icon: <HiExclamationCircle className="h-12 w-12 text-icon-subtle" />,
    actions: [
      { label: "Go back", href: "#", icon: <HiArrowLeft />, color: "neutral", variant: "subtlest" },
      { label: "Go home", href: "/", icon: <HiHome />, color: "primary" },
    ],
  },
  401: {
    title: "Authentication required",
    description:
      "You need to sign in to access this page. Please log in with your credentials to continue.",
    icon: <HiLockClosed className="h-12 w-12 text-icon-subtle" />,
    actions: [
      { label: "Go back", href: "#", icon: <HiArrowLeft />, color: "neutral", variant: "subtlest" },
      { label: "Sign in", href: "/login", icon: <HiLockClosed />, color: "primary" },
    ],
  },
  403: {
    title: "Access denied",
    description:
      "You don't have permission to view this page. If you think this is a mistake, contact your workspace admin.",
    icon: <HiShieldExclamation className="h-12 w-12 text-icon-subtle" />,
    actions: [
      { label: "Go back", href: "#", icon: <HiArrowLeft />, color: "neutral", variant: "subtlest" },
      { label: "Go home", href: "/", icon: <HiHome />, color: "primary" },
    ],
  },
  404: {
    title: "Page not found",
    description:
      "Looks like this page has gone missing. It may have been moved, deleted, or never existed in the first place.",
    icon: <HiBan className="h-12 w-12 text-icon-subtle" />,
    actions: [
      { label: "Go back", href: "#", icon: <HiArrowLeft />, color: "neutral", variant: "subtlest" },
      { label: "Go home", href: "/", icon: <HiHome />, color: "primary" },
    ],
  },
  500: {
    title: "Something went wrong",
    description:
      "We're having trouble processing your request right now. Our team has been notified and is working on a fix.",
    icon: <HiServer className="h-12 w-12 text-icon-subtle" />,
    actions: [
      { label: "Try again", href: "#", icon: <HiRefresh />, color: "neutral", variant: "subtlest" },
      { label: "Go home", href: "/", icon: <HiHome />, color: "primary" },
    ],
  },
  502: {
    title: "Bad gateway",
    description:
      "The server received an invalid response. This is usually temporary — try refreshing the page.",
    icon: <HiServer className="h-12 w-12 text-icon-subtle" />,
    actions: [
      { label: "Refresh", href: "#", icon: <HiRefresh />, color: "neutral", variant: "subtlest" },
      { label: "Go home", href: "/", icon: <HiHome />, color: "primary" },
    ],
  },
  503: {
    title: "Service unavailable",
    description:
      "We're temporarily down for maintenance or experiencing high load. Please check back soon — we'll be up shortly.",
    icon: <HiExclamationCircle className="h-12 w-12 text-icon-subtle" />,
    actions: [
      { label: "Try again", href: "#", icon: <HiRefresh />, color: "neutral", variant: "subtlest" },
      { label: "Go home", href: "/", icon: <HiHome />, color: "primary" },
    ],
  },
};

const DEFAULT_CONFIG = {
  title: "Unexpected error",
  description:
    "Something unexpected happened. Please try again or contact support if the issue persists.",
  icon: <HiExclamationCircle className="h-12 w-12 text-icon-subtle" />,
  actions: [
    { label: "Go home", href: "/", icon: <HiHome />, color: "primary" as const },
  ],
};

export const ErrorPageView = ({
  errorCode = 404,
  title,
  description,
  actions,
}: ErrorPageViewProps) => {
  const config = ERROR_CONFIG[errorCode] ?? DEFAULT_CONFIG;
  const resolvedTitle = title ?? config.title;
  const resolvedDescription = description ?? config.description;
  const resolvedActions = actions ?? config.actions;

  return (
    <div className="flex min-h-screen items-center justify-center bg-elevation-surface px-6">
      <div className="w-full max-w-[480px] text-center">
        {/* Large error code — visual background element */}
        <div
          className="select-none font-primary-black text-[10rem] leading-none text-font-subtlest opacity-10"
          aria-hidden="true"
        >
          {errorCode}
        </div>

        {/* Icon */}
        <div className="-mt-8 mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background-neutral">
            {config.icon}
          </div>
        </div>

        {/* Title */}
        <h1 className={`mb-3 font-primary-black text-3xl ${errorCode === 404 ? "text-font-danger" : "text-font"}`}>
          {resolvedTitle}
        </h1>

        {/* Description */}
        <p className="mb-8 font-primary-light text-base leading-relaxed text-font-subtle">
          {resolvedDescription}
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {resolvedActions.map((action, index) =>
            action.onClick ? (
              <Button
                key={index}
                color={action.color ?? "primary"}
                variant={action.variant ?? "contained"}
                size="lg"
                className="w-full gap-2 sm:w-auto"
                onClick={action.onClick}
              >
                {action.icon}
                {action.label}
              </Button>
            ) : action.href === "#" ? (
              <Button
                key={index}
                color={action.color ?? "neutral"}
                variant={action.variant ?? "subtlest"}
                size="lg"
                className="w-full gap-2 sm:w-auto"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.history.back();
                  }
                }}
              >
                {action.icon}
                {action.label}
              </Button>
            ) : (
              <a key={index} href={action.href} className="w-full sm:w-auto">
                <Button
                  color={action.color ?? "primary"}
                  variant={action.variant ?? "contained"}
                  size="lg"
                  className="w-full gap-2"
                >
                  {action.icon}
                  {action.label}
                </Button>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};
