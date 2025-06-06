import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHotel } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full bg-base-content text-white">
      <footer className="px-5 container mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-5 pt-5 md:pt-10 ">
          <div className="columns-1">
            <div className="my-5 md:pb-5 md:my-0">
              <Link
                href={"/"}
                className="flex items-center gap-4 font-extrabold text-2xl"
              >
                <FaHotel size={38} />
                Lorem Hotel
              </Link>
            </div>
            <p className="text-xs md:text-sm text-white/70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              inventore perferendis quam est magnam totam deserunt, commodi, a
              impedit, et corrupti earum tempora odit aperiam maxime eaque
            </p>
          </div>

          {/* link  */}
          <div className="columns-1 grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold md:mb-3 ">Link</h1>
              <ul className="text-xs md:text-sm flex flex-col gap-2 text-white/70">
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/">
                  <li>About</li>
                </Link>
                <Link href="/">
                  <li>Contact</li>
                </Link>
                <Link href="/">
                  <li>My Resercvation</li>
                </Link>
                <Link href="/">
                  <li>Manage Rooms</li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold md:mb-3 ">Legal</h1>
              <ul className="text-xs md:text-sm flex flex-col gap-2 text-white/70">
                <Link href="/">
                  <li>Legal</li>
                </Link>
                <Link href="/">
                  <li>Term & Condition</li>
                </Link>
                <Link href="/">
                  <li>Payment Methode</li>
                </Link>
                <Link href="/">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
          </div>
          {/* edn link  */}

          <div className="columns-1 flex flex-col gap-3">
            <h1 className="font-bold ">Newsletter</h1>
            <p className="text-xs md:text-sm text-white/70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              sed.
            </p>
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="input input-md input-warning text-base-content w-full"
            />
            <button className="btn btn-warning font-bold">Subscribe</button>
          </div>
        </div>
        <div className="py-5 w-full text-center items-center text-xs  md:text-sm text-white/80 border-t border-white/80">
          Copyright &copy;2025 | All Right Reserved
        </div>
      </footer>
    </section>
  );
}
