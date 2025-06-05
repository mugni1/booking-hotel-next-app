import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function ReservationCard({
  id,
  status,
  name,
  price,
  image,
  arrival,
  departure,
  duration,
  subTotal,
}: {
  id: string;
  status: string;
  name: string;
  image: string;
  price: number;
  arrival: Date;
  departure: Date;
  duration: number;
  subTotal: number;
}) {
  return (
    <section className="w-full flex flex-col rounded-md border overflow-hidden border-gray-200">
      <div className="w-full flex items-center justify-between bg-gray-200 py-2 px-5 font-semibold text-xs md:text-base">
        <span>Reservation ID : {id}</span>
        <span
          className={clsx(
            "font-bold",
            status == "unpaid" ? "text-red-500" : "text-green-500"
          )}
        >
          {status.toUpperCase()}
        </span>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-6 md:col-span-2 w-full h-full bg-gray-300 skeleton overflow-hidden rounded-none">
          <Image
            alt={name}
            src={image}
            height={200}
            width={200}
            className="w-full h-full object-center object-cover rounded-none"
          />
        </div>
        <div className="col-span-6 md:col-span-4 p-5 space-y-3">
          <h1 className="font-extrabold text-xl md:text-2xl">{name}</h1>
          <div className="font-semibold text-xs md:text-base">
            <div className="w-full flex items-center justify-between">
              <span>Price</span>
              <span>Rp{price.toLocaleString("id-ID")}</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Expected Arricval</span>
              <span>{arrival.toLocaleDateString()}</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Expected Departure </span>
              <span>{departure.toLocaleDateString()}</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Duration</span>
              <span>{duration} Days</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>SubTotal</span>
              <span>Rp{subTotal.toLocaleString("id-ID")}</span>
            </div>
          </div>
          <div className="w-full flex justify-end ">
            <button className="btn btn-sm md:btn-md btn-warning">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
