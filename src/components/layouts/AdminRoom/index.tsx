import LoadingTable from "@/components/elements/LoadingTable";
import RoomTable from "@/components/shared/Table/Room/RoomTable";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function RoomPage() {
  return (
    <section className="pt-20 pb-8 px-5 container mx-auto">
      <div className="w-full flex items-center justify-between mb-3">
        <div className="w-full">
          <span className="md:ext-4xl text-2xl font-bold mb-2 capitalize inline text-warning">
            Room List
          </span>
        </div>
        <Link
          href={"/admin/room/create"}
          className="btn btn-success font-bold text-white"
        >
          <FaPlusCircle size={20} /> Create Room
        </Link>
      </div>
      <Suspense fallback={<LoadingTable />}>
        <RoomTable />
      </Suspense>
    </section>
  );
}
