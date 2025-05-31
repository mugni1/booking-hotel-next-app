import React from "react";
import CardProduct from "../shared/CardProduct";

export default function RoomAndRates() {
  return (
    <section className="min-h-screen container mx-auto px-5 space-y-5 w-full py-8">
      <div>
        <h1 className="w-full text-center font-extrabold text-2xl md:text-3xl ">
          ROOM & RATES
        </h1>
        <p className="text-sm md:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
}
