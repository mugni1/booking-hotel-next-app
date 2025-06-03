import Image from "next/image";
import React from "react";
import { FaUsers } from "react-icons/fa";

export default function CardProduct({
  capacity = 0,
  image = "/images/about-image.jpg",
  name = "Card Title",
  price = 2000000,
}: {
  image?: string;
  name?: string;
  price?: number;
  capacity?: number;
}) {
  return (
    <div className=" rounded-md overflow-hidden bg-base-100 border border-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
      <figure className="h-30 md:h-50 bg-slate-200">
        <Image
          src={image}
          alt="products"
          height={400}
          width={400}
          className="w-full h-full object-cover object-center justify-center duration-300 transition-all skeleton rounded-none"
        />
      </figure>
      <div className="p-2 pb-3 md:p-4 md:pb-6">
        <div>
          <h2 className="font-bold text-base md:text-lg line-clamp-1">
            {name}
          </h2>
          <p className="font-semibold mb-5 flex items-center text-ellipsis overflow-hidden">
            <span className="text-sm md:text-lg">
              Rp {price.toLocaleString("id-ID")}/
            </span>
            <span className="text-xs md:text-sm">night</span>
          </p>
        </div>
        <div className="card-actions grid grid-cols-1 md:grid-cols-2 md:items-center">
          <span className=" flex gap-1 items-center text-xs md:text-sm font-semibold">
            <FaUsers className="size-3 md:size-5" /> {capacity} People
          </span>
          <button className="btn btn-sm md:btn-md btn-warning w-full text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
