import { Outlet } from "@remix-run/react";
import { User } from "@domain/user";
import { setUser } from "@app/store/user.store";
import { Header } from "./header";

export const MainLayout = ({ user }: Props) => {
  setUser(user);
  return (
    <div className="flex h-full flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

interface Props {
  user: User;
}
