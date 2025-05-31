"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavStart from "./NavStart";
import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full shadow-sm min-h-15 fixed top-0 z-50 bg-black/20 backdrop-blur-lg">
      <nav className="container mx-auto px-5 h-full py-4 justify-between items-center flex flex-wrap">
        {/* navbar start  */}
        <NavStart />
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
            "w-full mt-4 mb-2 md:mb-0  md:w-fit md:mt-0 md:block navbar-center",
            isOpen ? "block" : "hidden"
          )}
        >
          <NavCenter />
        </div>
        {/* end navbar center  */}

        {/* navbar end  */}
        <div
          className={clsx(
            "navbar-end md:block md:w-2/12 w-full pt-3 md:pt-0 md:border-none border-t border-white/60",
            isOpen ? "block" : "hidden"
          )}
        >
          <NavEnd />
        </div>
        {/* end navbar end  */}
      </nav>
    </section>
  );
}
