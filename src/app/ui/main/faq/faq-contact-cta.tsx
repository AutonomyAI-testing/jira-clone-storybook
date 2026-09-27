import { HiOutlineChatAlt2 } from "react-icons/hi";
import { Button } from "@app/components/button";

export const FaqContactCta = (): JSX.Element => {
  return (
    <section className="mt-4 flex flex-col items-center gap-3 rounded bg-background-accent-blue-subtlest px-6 py-8 text-center">
      <span className="flex items-center justify-center text-icon-brand">
        <HiOutlineChatAlt2 size={28} />
      </span>
      <h2 className="font-primary-black text-lg text-font">Still need help?</h2>
      <p className="max-w-[420px] font-primary-light text-sm text-font-subtle">
        Can&apos;t find what you&apos;re looking for? Our support team is happy to
        help.
      </p>
      <a href="mailto:support@jira-clone.example" className="mt-1">
        <Button color="primary" aria-label="Contact support">
          Contact support
        </Button>
      </a>
    </section>
  );
};
