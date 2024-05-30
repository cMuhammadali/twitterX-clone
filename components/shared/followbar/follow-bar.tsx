"use client";

import Button from "@/components/ui/button/button";
import { Loader2 } from "lucide-react";
import useUsers from "@/hooks/UseUsers/useUsers";
import { IUser } from "@/types";
import Link from "next/link";
import User from "../user/user";

function FollowBar() {
  const { isLoading, users } = useUsers(5);

  return (
    <div className="py-4 hidden lg:block w-[266px]">
      <div className="bg-neutral-800 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-xl font-semibold">Who to follow</h2>
          <Button
            secondary
            classNames="h-[30px] p-0 w-fit px-3 text-sm"
            label={"See all"}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-24">
            <Loader2 className="animate-spin text-sky-500" />
          </div>
        ) : (
          <div className="flex flex-col gap-6 mt-4">
            {users?.map((item: IUser, index: number) => {
              return (
                <Link key={index} href={`/profile/${item._id}`}>
                  <User user={item} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default FollowBar;
