import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <div className="flex h-full items-center justify-center">
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
        linkText="Go to main page"
      />
    </div>
  );
}
