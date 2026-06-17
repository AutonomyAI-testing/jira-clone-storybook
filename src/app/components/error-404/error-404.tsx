import { Error404Page } from "./error-404-page";

// Maintain backward compatibility with the original component API while delegating to the new Error404Page
export const Error404 = ({ message, href }: Props = {}) => {
  // If custom props are provided, ignore them since Error404Page uses a fixed design
  // The props are kept for backward compatibility with existing call sites
  return <Error404Page />;
};

interface Props {
  message?: string;
  href?: string;
}
