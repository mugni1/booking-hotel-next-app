"use client";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();
  const router = useRouter();
  return (
    <section className="w-full shadow-sm min-h-15 fixed top-0 z-50 bg-black/20 backdrop-blur-lg">
      {/* navbar start  */}
      <nav className="container mx-auto px-5 h-full py-4 justify-between items-center flex flex-wrap">
        <div className=" text-warning navbar-start w-auto md:w-2/12">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="logo"
              height={50}
              width={100}
              className="h-7 w-auto"
            />
          </Link>
        </div>
        {/* end navbar start  */}
        {/* burger menu  */}
        <div className="navbar-end md:hidden">
          {isOpen ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-soft btn-warning btn-sm"
            >
              <IoClose size={24} />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-soft btn-warning btn-sm"
            >
              <IoMenu size={24} />
            </button>
          )}
        </div>
        {/* end burger menu  */}

        {/* navbar center  */}
        <div
          className={clsx(
            "w-full mt-4 md:w-fit md:mt-0 md:block navbar-center",
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col md:flex-row md:items-center text-sm gap-1 text-white">
            <Link href={"/"}>
              <li className="w-full btn btn-active btn-sm font-bold">
                <span className="w-full">Home</span>
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="w-full btn btn-ghost btn-sm font-bold">
                <span className="w-full">About</span>
              </li>
            </Link>
            <Link href={"/"}>
              <li className="w-full btn btn-ghost btn-sm font-bold">
                <span className="w-full">Contact</span>
              </li>
            </Link>
            {data ? (
              <>
                <Link href={"/"}>
                  <li className="w-full btn btn-ghost btn-sm font-bold">
                    <span className="w-full">My Reservation</span>
                  </li>
                </Link>
                {data?.user.role == "admin" ? (
                  <>
                    <Link href={"/"}>
                      <li className="w-full btn btn-ghost btn-sm font-bold">
                        <span className="w-full">Dashboard</span>
                      </li>
                    </Link>
                    <Link href={"/"}>
                      <li className="w-full btn btn-ghost btn-sm font-bold">
                        <span className="w-full">Manage Rooms</span>
                      </li>
                    </Link>
                  </>
                ) : null}
              </>
            ) : null}
          </ul>
        </div>
        {/* end navbar center  */}

        {/* navbar end  */}
        <div
          className={clsx(
            "navbar-end md:block md:w-2/12 w-full pt-2 md:pt-0 md:border-none border-t border-black/40",
            isOpen ? "block" : "hidden"
          )}
        >
          {data ? (
            <div className="flex items-center justify-between md:justify-end md:gap-2">
              <div className="flex items-center gap-2">
                <Image
                  height={50}
                  width={50}
                  src={data?.user?.image || "/images/avatar.svg"}
                  alt="image.png"
                  className="h-10 w-auto aspect-square rounded-full border object-cover object-center bg-white text-black"
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
            <div className="flex items-center justify-start md:justify-end md:gap-2">
              <button
                className="btn btn-warning btn-sm font-bold"
                onClick={() => router.push("/login")}
              >
                Login
              </button>
            </div>
          )}
        </div>
        {/* end navbar end  */}
      </nav>
    </section>
  );
}
