import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { WelcomeModal } from "@app/ui/welcome-modal";
import { Header } from "./header";

export const MainLayout = ({ user }: Props) => {
  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        <Header />
        <Outlet />
        <WelcomeModal user={user} />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}
