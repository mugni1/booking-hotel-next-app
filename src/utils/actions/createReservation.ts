"use server";

import { auth } from "@/auth";
import { createReservationSchema } from "../zod/createReservationSchema";
import { redirect } from "next/navigation";
import { differenceInCalendarDays } from "date-fns";
import { prisma } from "@/lib/prisma";

export const createReservation = async (
  roomId: string,
  price: number,
  startDate: Date,
  endDate: Date,
  prevState: any,
  formData: FormData
) => {
  // cek status login
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/login?redirect_url=room/" + roomId);
  }

  // ambil data dan validate
  const data = Object.fromEntries(formData.entries());
  const dataValidate = createReservationSchema.safeParse(data);
  if (!dataValidate.success) {
    return {
      success: false,
      error: dataValidate.error.flatten().fieldErrors,
      message: "Please fill out all forms correctly",
    };
  }

  // ambil name dan phone
  const { name, phone } = dataValidate.data;

  // hitung malam
  const sumNight = differenceInCalendarDays(endDate, startDate);
  // validasi jika malam tidak valid
  if (sumNight < 0) {
    return {
      success: false,
      message: "Date must be at least 1 night",
    };
  }

  // hitung total price
  const totalPrice = price * sumNight;

  try {
    let reservationId;
    await prisma.$transaction(async (tx) => {
      // update table user
      await tx.user.update({
        data: {
          name,
          phone,
        },
        where: { id: session.user.id },
      });
      // create reservation
      const reservation = await tx.reservation.create({
        data: {
          startDate: startDate,
          endDate: endDate,
          price: price,
          roomId: roomId,
          userId: session.user.id as string,
          payment: {
            create: {
              amount: totalPrice,
            },
          },
        },
      });
      reservationId = reservation.id;
    });
    return {
      success: true,
      reserveId: reservationId,
      message: "Successfully create reservation",
    };
  } catch {
    return {
      success: false,
      message: "Internal server error",
    };
  }
};
