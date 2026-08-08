import { Error404 } from "@app/components/error-404";

export default function NotFound404Route(): JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-elevation-surface">
      <Error404 />
    </main>
  );
}
