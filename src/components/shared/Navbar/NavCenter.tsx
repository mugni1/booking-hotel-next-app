"use client";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavCenter() {
  const pathname = usePathname();
  const { data } = useSession();
  return (
    <ul className="flex flex-col md:flex-row md:items-center text-sm gap-1 text-white">
      <Link href={"/"}>
        <li
          className={clsx(
            "w-full btn btn-sm font-bold",
            pathname == "/" ? "btn-active btn-warning text-white" : "btn-ghost"
          )}
        >
          <span className="w-full">Home</span>
        </li>
      </Link>
      <Link href={"/about"}>
        <li
          className={clsx(
            "w-full btn btn-sm font-bold",
            pathname == "/about"
              ? "btn-active btn-warning text-white"
              : "btn-ghost"
          )}
        >
          <span className="w-full">About</span>
        </li>
      </Link>
      <Link href={"/contact"}>
        <li
          className={clsx(
            "w-full btn btn-sm font-bold",
            pathname == "/contact"
              ? "btn-active btn-warning text-white"
              : "btn-ghost"
          )}
        >
          <span className="w-full">Contact</span>
        </li>
      </Link>
      {data ? (
        <>
          <Link href={"/myreservation"}>
            <li
              className={clsx(
                "w-full btn btn-sm font-bold",
                pathname == "/myreservation"
                  ? "btn-active btn-warning text-white"
                  : "btn-ghost"
              )}
            >
              <span className="w-full">My Reservation</span>
            </li>
          </Link>
          {data?.user.role == "admin" ? (
            <>
              <Link href={"/admin/dashboard"}>
                <li
                  className={clsx(
                    "w-full btn btn-sm font-bold",
                    pathname == "/admin/dashboard"
                      ? "btn-active btn-warning text-white"
                      : "btn-ghost"
                  )}
                >
                  <span className="w-full">Dashboard</span>
                </li>
              </Link>
              <Link href={"/admin/room"}>
                <li
                  className={clsx(
                    "w-full btn btn-sm font-bold",
                    pathname == "/admin/room"
                      ? "btn-active btn-warning text-white"
                      : "btn-ghost"
                  )}
                >
                  <span className="w-full">Manage Rooms</span>
                </li>
              </Link>
            </>
          ) : null}
        </>
      ) : null}
    </ul>
  );
}
