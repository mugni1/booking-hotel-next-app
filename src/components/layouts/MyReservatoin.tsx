import { auth } from "@/auth";
import React from "react";
import ReservationList from "../shared/ReservationList";

export default async function MyReservatoin() {
  const session = await auth();
  return (
    <section className="pt-20 pb-5 mx-auto container px-5 space-y-5">
      <div>
        <h1 className="text-lg md:text-xl">
          Hi, <span className="font-semibold  ">{session?.user.name}</span>
        </h1>
        <h2>Here You`r book history</h2>
      </div>
      <ReservationList />
    </section>
  );
}
