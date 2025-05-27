"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full shadow-sm min-h-15 fixed top-0 z-50 bg-white/80 backdrop-blur-lg">
      <nav className="container mx-auto px-5 h-full py-4 justify-between items-center flex flex-wrap">
        <div className=" text-warning">
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
        <div className="navbar-end md:hidden">
          {isOpen ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-soft btn-sm"
            >
              <IoClose size={24} />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-soft btn-sm"
            >
              <IoMenu size={24} />
            </button>
          )}
        </div>
        <div
          className={clsx(
            "w-full mt-4 md:w-auto md:mt-0  md:block",
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col md:flex-row font-semibold text-base-content/70 md:items-center text-sm gap-1">
            <Link href={"/"}>
              <li className="w-full btn btn-active btn-sm text-left">
                <span className="w-full">Home</span>
              </li>
            </Link>
            <Link href={"/"}>
              <li className="w-full btn btn-ghost btn-sm text-left">
                <span className="w-full">About</span>
              </li>
            </Link>
            <Link href={"/"}>
              <li className="w-full btn btn-ghost btn-sm text-left">
                <span className="w-full">Contact</span>
              </li>
            </Link>
            <Link href={"/"}>
              <li className="w-full btn btn-ghost btn-sm text-left">
                <span className="w-full">My Reservation</span>
              </li>
            </Link>
            <Link href={"/"}>
              <li className="w-full btn btn-ghost btn-sm text-left">
                <span className="w-full">Manage Rooms</span>
              </li>
            </Link>
            <li>
              <button className="btn btn-warning btn-sm">Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
