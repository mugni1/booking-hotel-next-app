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
  return <Checkout reservationId={reservationId} />;
}
