import React from "react";
import CardProduct from "../CardProduct";
import { getRooms } from "@/services/getRooms";

export default async function RoomList() {
  const { data: rooms } = await getRooms();
  return (
    <section className="w-full container mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-5 py-8">
      {rooms.map((room) => (
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
  );
}
