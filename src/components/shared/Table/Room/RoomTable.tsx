import { getRooms } from "@/services/getRooms";
import React from "react";
import TableBody from "./TableBody";

export default async function RoomTable() {
  const { data } = await getRooms();
  return (
    <div className="overflow-x-auto shadow-md border border-gray-200 rounded-md">
      <table className="table table-zebra">
        <thead className="bg-warning w-full">
          <tr className="w-full">
            <th className="w-1/12">No</th>
            <th className="w-2/12">Image</th>
            <th className="w-3/12">Name</th>
            <th className="w-3/12">Price</th>
            <th className="w-2/12">CreatedAt</th>
            <th className="w-1/12 text-center">Action</th>
          </tr>
        </thead>
        <TableBody data={data} />
      </table>
    </div>
  );
}
