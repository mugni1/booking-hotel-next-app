import React from "react";
import ReservationCard from "./ReservationCard";
import { getReservation } from "@/services/getReservation";
import { differenceInCalendarDays } from "date-fns";

export default async function ReservationList() {
  const { data } = await getReservation();
  return (
    <section className="w-full flex flex-col gap-5">
      {data.map((reservation) => (
        <ReservationCard
          key={reservation.id}
          status={reservation.payment?.status || "No Status"}
          id={reservation.id}
          name={reservation.room.name}
          price={reservation.room.price}
          arrival={reservation.startDate}
          departure={reservation.endDate}
          duration={differenceInCalendarDays(
            reservation.endDate,
            reservation.startDate
          )}
          image={reservation.room.image}
          subTotal={reservation.payment?.amount || 0}
        />
      ))}
    </section>
  );
}
