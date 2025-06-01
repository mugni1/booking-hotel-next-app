import { getRooms } from "@/services/getRooms";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default async function RoomTable() {
  const { data } = await getRooms();
  return (
    <div className="overflow-x-auto shadow-md border border-gray-200 rounded-md">
      <table className="table table-zebra">
        {/* head */}
        <thead className="bg-gray-200">
          <tr className="w-full">
            <th className="w-1/12">No</th>
            <th className="w-2/12">Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>CreatedAt</th>
            <th className="w-1/12 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((room, index) => (
            <tr key={room.id} className="w-full">
              <th>{index + 1}</th>
              <td>
                <div className="w-full aspect-video">
                  <Image
                    src={room.image}
                    alt={room.image}
                    width={200}
                    height={200}
                    className="w-30 md:w-full h-full aspect-video object-cover object-center rounded-md skeleton"
                  />
                </div>
              </td>
              <td>{room.name}</td>
              <td>
                <span className="font-semibold">
                  Rp{room.price.toLocaleString("id-ID")}
                </span>
              </td>
              <td>{room.createdAt.toLocaleDateString()}</td>
              <td>
                <div className="w-full h-full flex items-center justify-center gap-3">
                  <button className="btn btn-sm btn-error btn-soft">
                    <FaTrash size={18} />
                  </button>
                  <button className="btn btn-sm btn-warning btn-soft">
                    <FaPencil size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
