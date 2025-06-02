import Image from "next/image";
import React from "react";
import { FaUsers } from "react-icons/fa";

export default function CardProduct() {
  return (
    <div className="card bg-base-100 column-1 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
      <figure className="h-30 md:h-50">
        <Image
          src="/images/about-image.jpg"
          alt="products"
          height={400}
          width={400}
          className="w-full h-full object-cover object-center justify-center duration-300 transition-all"
        />
      </figure>
      <div className="p-2 pb-3 md:p-4 md:pb-6">
        <div>
          <h2 className="font-bold text-base md:text-xl">Card Title</h2>
          <p className="font-semibold mb-5 flex items-center text-ellipsis overflow-hidden">
            <span className="text-sm md:text-xl">Rp 200.000/</span>
            <span className="text-xs md:text-base">night</span>
          </p>
        </div>
        <div className="card-actions grid grid-cols-1 md:grid-cols-2 md:items-center">
          <span className=" flex gap-1 items-center text-xs md:text-sm font-semibold">
            <FaUsers className="size-3 md:size-5" /> 2 People
          </span>
          <button className="btn btn-xs md:btn-md btn-warning w-full text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
