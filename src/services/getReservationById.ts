import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const getReservationById = async (reservationId: string) => {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/login");
  }

  try {
    const res = await prisma.reservation.findUnique({
      where: { id: reservationId },
      include: {
        room: { select: { name: true, image: true, price: true } },
        user: { select: { name: true, email: true, phone: true } },
        payment: true,
      },
    });
    if (!res) {
      return redirect("/room/");
    }
    return {
      success: true,
      data: res,
    };
  } catch {
    return redirect("/room/");
  }
};
