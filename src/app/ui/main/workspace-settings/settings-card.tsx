import cx from "classix";

export const SettingsCard = ({
  icon,
  title,
  subtitle,
  variant = "default",
  onClick,
}: SettingsCardProps): JSX.Element => {
  const isDanger = variant === "danger";

  return (
    <button
      onClick={onClick}
      className={cx(
        "flex w-full cursor-pointer items-start gap-4 rounded-lg border p-6 text-left transition duration-200",
        isDanger
          ? "border-border-danger bg-background-danger hover:bg-background-danger-hovered active:bg-background-danger-pressed"
          : "border-border bg-elevation-surface-raised hover:bg-background-brand-subtlest-hovered hover:shadow-md active:bg-background-brand-subtlest-pressed"
      )}
    >
      <div
        className={cx(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          isDanger
            ? "bg-background-danger-bold text-font-inverse"
            : "bg-background-brand-subtlest text-icon-brand"
        )}
      >
        {icon}
      </div>
      <div>
        <h3
          className={cx(
            "font-primary-bold text-lg",
            isDanger ? "text-font-danger" : "text-font"
          )}
        >
          {title}
        </h3>
        <p className="mt-1 font-primary-light text-sm text-font-subtle">
          {subtitle}
        </p>
      </div>
    </button>
  );
};

interface SettingsCardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  variant?: "default" | "danger";
  onClick: () => void;
}
