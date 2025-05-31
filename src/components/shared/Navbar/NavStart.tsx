import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavStart() {
  return (
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
  );
}
