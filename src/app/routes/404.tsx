import { ErrorGeneral } from "@app/components/error-general";

export default function NotFound404Route() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-elevation-surface">
      <ErrorGeneral
        title="Error 404: Page Not Found"
        message="It seems you have lost your way! Let the wizard guide you back to safety."
        href="/"
        linkLabel="Go back home"
      />
    </div>
  );
}
