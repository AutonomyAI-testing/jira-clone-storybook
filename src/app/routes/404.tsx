import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-elevation-surface">
      <Error404
        message="Page not found"
        description="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
        href="/"
        linkText="Go to Homepage"
      />
    </div>
  );
}
