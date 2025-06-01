import { prisma } from "@/lib/prisma";

export const getRooms = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 5000)); // Delay 2 detik
  try {
    const res = await prisma.room.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        image: true,
        name: true,
        price: true,
        createdAt: true,
      },
    });
    return {
      success: true,
      message: "Success fetch",
      data: res,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error",
      data: [],
    };
  }
};
