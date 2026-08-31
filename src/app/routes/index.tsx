import { LoaderFunction } from "@remix-run/node";
import { Error404 } from "@app/components/error-404";
import { SuddenlySpacesLanding } from "@app/ui/landing/SuddenlySpacesLanding";

export const links = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
  },
];

export const loader: LoaderFunction = async () => {
  return null;
};

export default function IndexRoute() {
  return <SuddenlySpacesLanding />;
}

export function CatchBoundary() {
  return (
    <div>
      <Error404
        message="It seems that you have lost! Go to the main page"
        href="/"
      />
    </div>
  );
}
