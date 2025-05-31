"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavEnd() {
  const { data } = useSession();
  const router = useRouter();
  return (
    <>
      {data ? (
        <div className="flex items-center justify-between md:justify-end md:gap-2">
          <div className="flex items-center gap-2">
            <Image
              height={50}
              width={50}
              src={data?.user?.image || "/images/avatar.svg"}
              alt="image.png"
              className="h-8 w-auto aspect-square rounded-full border object-cover object-center bg-white text-black"
            />
            <b className="text-xs line-clamp-2 text-white">
              {data.user.name || "anonnymouse"}
            </b>
          </div>
          <button
            className="btn btn-sm btn-warning font-bold"
            onClick={() => signOut({ redirectTo: "/login" })}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex md:justify-end md:gap-2">
          <button
            className="btn btn-warning btn-sm font-bold"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
