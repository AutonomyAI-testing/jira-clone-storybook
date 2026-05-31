import { Error404 } from "@app/components/error-404";

/**
 * 404 Not Found route handler.
 *
 * This route is rendered when a user navigates to a URL that does not match
 * any defined route in the application. The Error404 component displays a
 * friendly error message with navigation back to the home page.
 */
export default function NotFound404Route(): JSX.Element {
  return <Error404 href="/" />;
}
