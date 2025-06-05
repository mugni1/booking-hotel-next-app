import { getReservationById } from "@/services/getReservationById";
import clsx from "clsx";
import { differenceInCalendarDays } from "date-fns";
import Image from "next/image";
import React from "react";

export default async function Checkout({
  reservationId,
}: {
  reservationId: string;
}) {
  const { data } = await getReservationById(reservationId);
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className=" border-3 border-gray-200 border-dashed rounded-md p-5 text-xs md:text-sm">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Reservation ID</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {data.id.substring(0, 12) + "..."}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Name</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {data.user.name}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Email</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {data.user.email}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Phone Number</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {data.user.phone}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Arrival</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {data.startDate.toLocaleDateString()}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Departure</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {data.endDate.toLocaleDateString()}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Duration</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {differenceInCalendarDays(data.endDate, data.startDate)} Night
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Ammount in IDR</td>
              <td className="w-1/2 py-2 ">
                <span>: </span>
                {data.payment?.amount.toLocaleString("id-ID")}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 py-2 font-semibold">Status</td>
              <td
                className={clsx(
                  "w-1/2 py-2 ",
                  data.payment?.status == "paid"
                    ? "text-emerald-500"
                    : "text-red-500"
                )}
              >
                <span>: </span>
                {data.payment?.status}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 rounded-md overflow-hidden border border-gray-200 h-fit">
        <div className="aspect-video w-full bg-red-400">
          <Image
            className="w-full h-full object-cover object-center"
            height={200}
            width={200}
            src={data.room.image}
            alt={data.room.name}
          />
        </div>
        <div className="p-5 flex flex-col">
          <span className="text-xl font-bold">{data.room.name}</span>
          <span className="text-lg font-semibold">
            Rp{data.room.price.toLocaleString("id-ID")}/night
          </span>
        </div>
      </div>
    </section>
  );
}
