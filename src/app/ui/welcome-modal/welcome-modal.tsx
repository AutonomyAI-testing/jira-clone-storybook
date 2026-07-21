import { useEffect, useState } from "react";
import cx from "classix";
import { IoCloseOutline } from "react-icons/io5";
import * as Dialog from "@app/components/dialog";
import { Button } from "@app/components/button";
import { User } from "@domain/user";

const WELCOME_COPY =
  "You've just taken the first step. Let's create something new, exciting, and uniquely yours. Ready to dive in?";

export const getFirstName = (name: string): string => {
  const trimmed = name.trim();
  if (!trimmed) return "there";
  return trimmed.split(/\s+/)[0];
};

export const welcomeShownStorageKey = (userId: string): string =>
  `user_${userId}_welcome_shown`;

export type WelcomeModalProps = {
  user: User;
  /**
   * Force the modal open regardless of localStorage.
   * Useful for Storybook / demos.
   */
  forceOpen?: boolean;
  /**
   * Controlled open state. When provided, localStorage auto-show is skipped
   * and the parent owns open/close (via onOpenChange).
   */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const WelcomeModal = ({
  user,
  forceOpen = false,
  open: openProp,
  onOpenChange,
}: WelcomeModalProps): JSX.Element | null => {
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(forceOpen);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (isControlled || forceOpen) return;

    try {
      const shown = window.localStorage.getItem(
        welcomeShownStorageKey(user.id)
      );
      if (!shown) {
        setUncontrolledOpen(true);
      }
    } catch {
      // localStorage unavailable — still show welcome once this session
      setUncontrolledOpen(true);
    }
  }, [user.id, isControlled, forceOpen]);

  const open = isControlled ? Boolean(openProp) : uncontrolledOpen;

  const dismiss = (): void => {
    if (!isControlled && !forceOpen) {
      try {
        window.localStorage.setItem(welcomeShownStorageKey(user.id), "1");
      } catch {
        // ignore write failures
      }
    }

    if (isControlled) {
      onOpenChange?.(false);
    } else {
      setUncontrolledOpen(false);
      onOpenChange?.(false);
    }
  };

  const handleOpenChange = (next: boolean): void => {
    if (!next) {
      dismiss();
      return;
    }
    if (isControlled) {
      onOpenChange?.(true);
    } else {
      setUncontrolledOpen(true);
    }
  };

  // Avoid SSR flash + hydration mismatch for the uncontrolled path
  if (!hydrated && !isControlled && !forceOpen) {
    return null;
  }

  const firstName = getFirstName(user.name);

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        {/*
          Override default absolute/grid overlay:
          single centered group so the card + help FAB stay together.
        */}
        <Dialog.Overlay
          className={cx(
            "!fixed inset-0 z-50 !grid !h-full !w-full !place-items-center !overflow-y-auto",
            "!px-6 !py-12",
            "bg-[#ece9e0] ![background-image:radial-gradient(rgba(130,120,100,0.32)_1.15px,transparent_1.15px)]",
            "![background-size:15px_15px] backdrop-blur-0"
          )}
        >
          {/* Extra padding reserves space so the corner help FAB isn't clipped */}
          <div className="relative w-full max-w-[820px] pb-5 pr-5">
            <Dialog.Content
              className={cx(
                "!m-0 flex w-full max-w-none flex-col overflow-visible",
                "rounded-[40px] border border-[#e5dccb] bg-[#f4ebe0] p-0",
                "shadow-[0_28px_56px_-24px_rgba(55,45,25,0.32)]",
                "md:min-h-[400px] md:flex-row md:items-center"
              )}
              aria-describedby="welcome-modal-description"
              onOpenAutoFocus={(event) => {
                // Keep focus on the primary CTA instead of the close control.
                event.preventDefault();
                const cta = document.getElementById("welcome-modal-cta");
                cta?.focus();
              }}
            >
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close welcome"
                  className={cx(
                    "absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center",
                    "rounded-full border-2 border-[#bdb5a6] bg-transparent text-[#6a6357]",
                    "transition-colors hover:bg-[#ebe3d4] hover:text-[#3f3a32]",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-brand"
                  )}
                >
                  <IoCloseOutline size={22} />
                </button>
              </Dialog.Close>

              <div className="flex shrink-0 items-center justify-center px-6 pb-2 pt-10 md:w-[44%] md:self-center md:px-8 md:py-10">
                <img
                  src="/images/wizard-mascot.png"
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full max-w-[210px] select-none object-contain md:max-w-[250px]"
                  draggable={false}
                />
              </div>

              <div
                className={cx(
                  "relative flex flex-1 flex-col items-center px-8 pb-14 pt-2 text-center",
                  "md:items-start md:px-4 md:py-12 md:pr-14 md:text-left"
                )}
              >
                <div className="relative inline-block text-left">
                  <Sparkle
                    className="absolute -left-5 top-[2.65rem] text-[#e0b020] md:top-[3.1rem]"
                    size={13}
                  />
                  <Sparkle
                    className="absolute -right-6 top-3 text-[#e0b020]"
                    size={14}
                  />
                  <Sparkle
                    className="absolute -right-2 top-[2.9rem] text-[#e0b020] opacity-80 md:top-[3.35rem]"
                    size={10}
                  />
                  <Dialog.Title className="!mb-0 text-[#1c1915]">
                    <span className="block font-primary text-[1.85rem] font-medium leading-none tracking-tight md:text-[2.1rem]">
                      Welcome,
                    </span>
                    <span
                      className="mt-1 block font-primary-black text-[2.55rem] leading-[1.05] tracking-tight md:text-[3rem]"
                      style={{ color: "#dc2626" }}
                    >
                      {firstName}
                    </span>
                  </Dialog.Title>
                </div>

                <Dialog.Description
                  id="welcome-modal-description"
                  className={cx(
                    "mt-6 max-w-[26ch] font-primary-light text-[1.05rem] leading-[1.7] text-[#7c7568]",
                    "md:mt-7 md:text-[1.125rem] md:leading-[1.75]"
                  )}
                >
                  {WELCOME_COPY}
                </Dialog.Description>

                <div className="mt-9">
                  <Dialog.Close asChild>
                    <Button
                      id="welcome-modal-cta"
                      color="primary"
                      variant="contained"
                      size="lg"
                      className="min-w-[132px] rounded-md bg-[#3371f3] px-8 py-2.5 font-primary-bold hover:bg-[#2a62d9] active:bg-[#2456c2]"
                      aria-label="Let's go"
                    >
                      Let&apos;s go
                    </Button>
                  </Dialog.Close>
                </div>
              </div>
            </Dialog.Content>

            {/* Help FAB — bottom-right corner of the card per design */}
            <button
              type="button"
              aria-label="Help"
              className={cx(
                "absolute bottom-0 right-0 z-20 flex h-[52px] w-[52px] items-center justify-center",
                "rounded-full bg-[#3371f3] text-white shadow-[0_10px_24px_-8px_rgba(30,80,200,0.55)]",
                "transition-transform hover:scale-105",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-brand"
              )}
            >
              <span className="translate-y-px font-primary-bold text-[1.65rem] leading-none">
                ?
              </span>
            </button>
          </div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Sparkle = ({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M8 0c.4 2.6 1.4 4.6 4 5-2.6.4-3.6 2.4-4 5-.4-2.6-1.4-4.6-4-5 2.6-.4 3.6-2.4 4-5z" />
  </svg>
);
