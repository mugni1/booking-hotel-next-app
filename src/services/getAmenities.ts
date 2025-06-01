import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getAmeneities = async () => {
  const session = await auth();

  if (!session?.user || session.user.role != "admin") {
    return {
      success: false,
      message: "Forbiden",
      data: [],
    };
  }

  try {
    const res = await prisma.amenities.findMany();
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
