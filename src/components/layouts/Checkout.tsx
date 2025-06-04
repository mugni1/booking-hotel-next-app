import { getReservationById } from "@/services/getReservationById";
import React from "react";

export default async function Checkout({
  reservationId,
}: {
  reservationId: string;
}) {
  const { data } = await getReservationById(reservationId);
  console.log(data);
  return <div className="pt-20 pb-8">page {reservationId}</div>;
}
