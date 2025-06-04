import React from "react";
import CardProduct from "../CardProduct";
import { getRooms } from "@/services/getRooms";

export default async function RoomList() {
  const { data: rooms, success, message } = await getRooms();

  return (
    <section className="w-full h-full container mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-5 py-8">
      {success ? (
        rooms?.map((room) => (
          <CardProduct
            key={room.id}
            id={room.id}
            name={room.name}
            capacity={room.capacity}
            image={room.image}
            price={room.price}
          />
        ))
      ) : (
        <div className="w-full col-span-4 rounded-md h-full text-red-600">
          <h1 className="text-center font-bold text-xl md:text-2xl capitalize">
            {message}
          </h1>
        </div>
      )}
    </section>
  );
}
