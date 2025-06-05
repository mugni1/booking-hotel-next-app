import React from "react";
import CardProduct from "../CardProduct";
import { getRooms } from "@/services/getRooms";

export default async function RoomList() {
  const { data: rooms, success, message } = await getRooms();

  return (
    <>
      {success ? (
        <section className="w-full h-full container mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-5 py-8">
          {rooms?.map((room) => (
            <CardProduct
              key={room.id}
              id={room.id}
              name={room.name}
              capacity={room.capacity}
              image={room.image}
              price={room.price}
            />
          ))}
        </section>
      ) : (
        <section className="w-full  items-center justify-center text-red-500 pt-20">
          <h1 className="font-extrabold text-4xl text-center">500</h1>
          <h1 className="font-extrabold text-2xl capitalize text-center">
            {message}
          </h1>
        </section>
      )}
    </>
  );
}
