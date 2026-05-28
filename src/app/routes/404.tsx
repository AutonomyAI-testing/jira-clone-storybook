import { Error404 } from "@app/components/error-404";

export default function NotFound404Route(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center bg-elevation-surface">
      <Error404 message="Oops! Page Not Found" href="/" />
    </div>
  );
}
