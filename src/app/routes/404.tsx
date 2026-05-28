import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <div className="flex h-screen items-center justify-center bg-elevation-surface">
      <Error404
        message="Go back to the home page"
        href="/"
        tagline="The wizard wandered off..."
      />
    </div>
  );
}
