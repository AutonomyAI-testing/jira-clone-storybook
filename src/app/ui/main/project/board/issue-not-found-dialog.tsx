import * as Dialog from "@radix-ui/react-dialog";
import cx from "classix";
import { Error404 } from "@app/components/error-404";

/**
 * Modal shown by the issue route's boundary when an issue can't be loaded, so
 * the board stays visible behind it.
 */
export const IssueNotFoundDialog = ({
  message,
  href,
  onDismiss,
}: Props): JSX.Element => (
  <Dialog.Root open={true}>
    <Dialog.Portal>
      <Dialog.Overlay
        className={cx(
          "absolute left-0 top-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto bg-black bg-opacity-50 px-[40px] py-[40px]",
          "radix-state-open:animate-fade-in duration-300"
        )}
      >
        <Dialog.Content
          onPointerDownOutside={onDismiss}
          className={cx(
            "bg-elevation-surface relative z-50 flex rounded-md px-20 py-12 shadow-lg flex-center",
            "duration-300 radix-state-open:animate-slide-up"
          )}
        >
          <Error404 message={message} href={href} />
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
);

interface Props {
  message: string;
  href: string;
  onDismiss: () => void;
}
