import { getRoomById } from "@/services/getRoomById";
import Image from "next/image";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import CreateReserveForm from "../shared/Form/CreateReserveForm";

export default async function RoomDetail({ id }: { id: string }) {
  const { data } = await getRoomById(id);
  return (
    <section className="pt-20 pb-8 container mx-auto px-5 grid grid-cols-6 gap-5 min-h-screen">
      <div className="md:col-span-4 col-span-6 space-y-5">
        <div className="w-full aspect-video rounded-md bg-amber-300 overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            height={400}
            width={500}
            className="object-cover object-center h-full w-full"
          />
        </div>
        <h1 className="font-extrabold text-2xl md:text-4xl">{data.name}</h1>
        <p>{data.description}</p>
        <div className="w-full flex flex-col gap-2">
          <b>Amenities</b>
          <div className="grid grid-cols-3">
            {data.roomAmenities.map((item) => (
              <span
                className="flex gap-2 items-center text-sm"
                key={item.amenitiesId}
              >
                <IoCheckmark size={20} />
                {item.amenities.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-2 h-fit col-span-6 rounded-md border-3 border-dashed bg-slate-100 border-gray-300 text-gray-500 p-5 space-y-5">
        <div className="w-full flex justify-between items-center">
          <span className="flex gap-2  font-semibold items-center">
            <FaUsers size={20} />
            {data.capacity} people
          </span>
          <span>
            <h3 className="font-semibold">
              <span className="text-2xl">
                Rp{data.price.toLocaleString("id-ID")}
              </span>
              /night
            </h3>
          </span>
        </div>
        <CreateReserveForm />
      </div>
    </section>
  );
}
