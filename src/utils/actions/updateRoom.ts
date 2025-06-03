"use server";

import { prisma } from "@/lib/prisma";
import { createRoomSchema } from "../zod/createRoomSchema";
import { revalidatePath } from "next/cache";

export const updateRoom = async (
  id: string,
  image: string,
  prevState: any,
  formData: FormData
) => {
  const roomId = id;

  if (!image) {
    return {
      success: false,
      message: "Image is required",
    };
  }

  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: Number(formData.get("capacity")),
    price: Number(formData.get("price")),
    amenities: formData.getAll("amenities"),
  };

  const dataValidate = createRoomSchema.safeParse(data);

  if (!dataValidate.success) {
    return {
      success: false,
      error: dataValidate.error.flatten().fieldErrors,
      message: "Please fill in all forms correctly",
    };
  }

  const { name, description, price, capacity, amenities } = dataValidate.data;
  try {
    const res = await prisma.room.update({
      where: { id: roomId },
      data: {
        name,
        description,
        price,
        capacity,
        image,
        roomAmenities: {
          deleteMany: {},
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },
      },
    });
    revalidatePath("admin/room/edit");
    return {
      success: true,
      message: "Successfully Updated Room",
      data: res,
    };
  } catch {
    return {
      success: false,
      message: "Failed Update Room, Please try again later",
    };
  }
};
