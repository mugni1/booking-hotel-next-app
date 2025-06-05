import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const getReservation = async () => {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/login");
  }
  try {
    const res = await prisma.reservation.findMany({
      where: { userId: session.user.id },

      include: {
        room: { select: { name: true, image: true, price: true } },
        payment: { select: { status: true, amount: true } },
      },
    });
    return {
      success: true,
      data: res,
    };
  } catch {
    return {
      success: false,
      data: [],
    };
  }
};
