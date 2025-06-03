import Link from "next/link";
import React from "react";
import { FaHotel } from "react-icons/fa";

export default function NavStart() {
  return (
    <div className=" text-warning navbar-start w-auto md:w-2/12">
      <Link href={"/"} className="flex gap-2 font-extrabold">
        <FaHotel size={24} />
        Lorem Hotel
      </Link>
    </div>
  );
}
