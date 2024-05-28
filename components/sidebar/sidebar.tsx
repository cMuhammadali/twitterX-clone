"use client";

import { Bell, Home, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import SidebarPostButton from "./sidebar-post-button";
import SidebarAccount from "./sidebar-account";
import { IUser } from "@/types";

function Sidebar({ user }: { user: IUser }) {
  const { data: session, status }: any = useSession();

  const sidebarItems = [
    {
      label: "Home",
      path: "/",
      icon: Home,
    },
    {
      label: "Notification",
      path: `/notification/${user?._id}`,
      icon: Bell,
    },
    {
      label: "Profile",
      path: `/profile/${user?._id}`,
      icon: User,
    },
  ];

  return (
    <section className="sticky left-0 top-0 h-screen lg:w-[226px] w-fit flex flex-col justify-between py-4 pl-2">
      <div className="flex flex-col space-y-2">
        {/* Mobile */}
        <div className="rounded-full w-14 h-14 p-4 flex items-center justify-center hover:bg-sky-300 hover:bg-opacity-10 cursor-pointer transition">
          <Image width={56} height={56} src={"/images/X_icon.svg"} alt="logo" />
        </div>

        {sidebarItems?.map((item, index) => {
          return (
            <Link key={index} href={item?.path}>
              <SidebarItem {...item} />
            </Link>
          );
        })}

        <SidebarPostButton />
      </div>
      <SidebarAccount user={user} />
    </section>
  );
}

export default Sidebar;
