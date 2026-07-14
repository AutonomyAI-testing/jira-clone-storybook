import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = ({ user }: Props) => {
  return (
    <UserContextProvider user={user}>
      <div className="flex h-full flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContextProvider>
  );
};

interface Props {
  user: User;
}
