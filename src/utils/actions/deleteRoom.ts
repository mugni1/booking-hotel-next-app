"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteRoom = async (id: string) => {
  try {
    const res = await prisma.room.delete({
      where: { id },
    });
    revalidatePath("/admin/room");
    return {
      success: true,
      message: "Successfully delete, " + res.name,
      data: res,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Failed delete, Please try again later!",
    };
  }
};
