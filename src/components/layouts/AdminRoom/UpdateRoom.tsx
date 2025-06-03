import UpdateRoomForm from "@/components/shared/Form/UpdateRoomForm";
import { getAmeneities } from "@/services/getAmenities";
import { getRoomById } from "@/services/getRoomById";
import React from "react";

export default async function EditRoom({ id }: { id: string }) {
  const { data: amenities } = await getAmeneities();
  const { data: room } = await getRoomById(id);
  return (
    <section className="pt-20 pb-8 px-5 container mx-auto">
      <h1 className="md:ext-4xl text-2xl font-bold mb-2 capitalize">
        Edit room
      </h1>
      <UpdateRoomForm room={room} amenities={amenities} />
    </section>
  );
}
