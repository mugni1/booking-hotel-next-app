import Checkout from "@/components/layouts/Checkout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ reservationId: string }>;
}) {
  const { reservationId } = await searchParams;
  return (
    <section className="container pt-20 min-h-screen mx-auto px-5 pb-8">
      <h1 className=" text-2xl font-extrabold mb-3">Reservation Summary</h1>
      <Checkout reservationId={reservationId} />
    </section>
  );
}
