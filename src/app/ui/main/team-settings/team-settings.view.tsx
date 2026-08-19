import { useState } from "react";
import { MdClose, MdPeople, MdExtension, MdCreditCard } from "react-icons/md";
import * as RadixDialog from "@radix-ui/react-dialog";

type CardKey = "members" | "integrations" | "billing" | null;

interface SettingsCard {
  key: CardKey;
  icon: React.ReactNode;
  title: string;
  description: string;
  modalBody: string;
}

const cards: SettingsCard[] = [
  {
    key: "members",
    icon: <MdPeople size={36} />,
    title: "Members",
    description: "Invite new people and manage roles and permissions for your team.",
    modalBody:
      "Invite teammates by email, assign roles such as Admin, Member, or Viewer, and remove people who no longer need access. Changes take effect immediately.",
  },
  {
    key: "integrations",
    icon: <MdExtension size={36} />,
    title: "Integrations",
    description: "Connect Slack for notifications and GitHub to link commits to issues.",
    modalBody:
      "Connect your Slack workspace to receive real-time issue updates in any channel. Link your GitHub repositories to automatically reference commits, pull requests, and branches from issues.",
  },
  {
    key: "billing",
    icon: <MdCreditCard size={36} />,
    title: "Billing",
    description: "Review your current plan, upgrade, and download past invoices.",
    modalBody:
      "You are currently on the Free plan. Upgrade to Pro to unlock unlimited projects, priority support, and advanced analytics. All past invoices are available to download as PDFs.",
  },
];

export const TeamSettingsView = (): JSX.Element => {
  const [openCard, setOpenCard] = useState<CardKey>(null);

  const activeCard = cards.find((c) => c.key === openCard) ?? null;

  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">TEAM SETTINGS</h1>
      <p className="mt-2 text-font-subtle">
        Manage your team members, integrations, and billing from one place.
      </p>

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,_320px)] gap-6">
        {cards.map((card) => (
          <button
            key={card.key}
            onClick={() => setOpenCard(card.key)}
            className="group flex flex-col items-start gap-4 rounded-lg bg-elevation-surface-raised p-6 text-left shadow-sm outline outline-2 outline-transparent duration-100 ease-linear hover:-translate-y-0.5 hover:bg-background-brand-subtlest-hovered hover:text-font-brand hover:shadow-md hover:outline-border-brand focus-visible:outline-border-brand"
          >
            <span className="text-icon-brand">{card.icon}</span>
            <div>
              <h2 className="font-primary-bold text-lg">{card.title}</h2>
              <p className="mt-1 text-sm text-font-subtle group-hover:text-font-brand">
                {card.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <RadixDialog.Root
        open={openCard !== null}
        onOpenChange={(open) => {
          if (!open) setOpenCard(null);
        }}
      >
        <RadixDialog.Portal>
          <RadixDialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm radix-state-open:animate-fade-in duration-300" />
          <RadixDialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-elevation-surface p-8 shadow-lg text-font radix-state-open:animate-slide-up duration-300">
            <button
              onClick={() => setOpenCard(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded text-icon hover:bg-background-neutral-hovered hover:text-font"
            >
              <MdClose size={20} />
            </button>
            <RadixDialog.Title className="mb-4 font-primary-black text-2xl">
              {activeCard?.title ?? ""}
            </RadixDialog.Title>
            <p className="text-font-subtle leading-relaxed">{activeCard?.modalBody ?? ""}</p>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </div>
  );
};
