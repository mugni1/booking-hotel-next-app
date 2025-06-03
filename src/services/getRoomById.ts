import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const getRoomById = async (roomId: string) => {
  try {
    const res = await prisma.room.findUnique({
      include: {
        roomAmenities: {
          select: { amenitiesId: true, amenities: { select: { name: true } } },
        },
      },
      where: { id: roomId },
    });
    if (!res) {
      redirect("/admin/room/");
    }
    return {
      success: true,
      data: res,
    };
  } catch {
    redirect("/admin/room/");
  }
};
